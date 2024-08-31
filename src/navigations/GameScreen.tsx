import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import ChoiceContent from "components/common/ChoiceContent";
import { GameQuestionsMenu } from "const/GameMenu";
import { ScreenEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import {
  IGameQuestionTypes,
  IGameType,
  ISavedWordDataType,
  IScoreDataTypes
} from "types/HomepageTypes";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const GameScreen = ({ route }: { route: any }) => {
  const { type } = route.params;
  const { t } = useTranslation("translation");
  const navigation = useNavigation<any>();
  const [health, setHealth] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [question, setQuestion] = useState<IGameType>({
    questionContent: "-",
    answer: "-",
    options: [
      {
        key: "A",
        content: "-"
      },
      {
        key: "B",
        content: "-"
      },
      {
        key: "C",
        content: "-"
      },
      {
        key: "D",
        content: "-"
      }
    ]
  });
  const [questionActiveList, setActiveQuestionList] = useState<
    IGameType[] | []
  >([]);

  const [wrongAnswer, setWrongAnswer] = useState<string>("");

  const RandomQuestion = (questionList: IGameType[]) => {
    setQuestion(questionList[Math.floor(Math.random() * questionList.length)]);
  };
  useEffect(() => {
    setActiveQuestionList(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
    RandomQuestion(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
  }, [type]);

  const onSetLocalStorage = async (score: number) => {
    try {
      const newScoreValues: IScoreDataTypes = {
        score: score.toString(),
        date: "01.07.1995 17.25",
        gameType: type
      };

      const values = await AsyncStorage.getItem("scores");

      if (values !== null && values) {
        const jsonScoreList: IScoreDataTypes[] = JSON.parse(values);
        jsonScoreList.push(newScoreValues);
        await AsyncStorage.setItem("scores", JSON.stringify(jsonScoreList));
      } else {
        const array = [];
        array.push(newScoreValues);
        await AsyncStorage.setItem("scores", JSON.stringify(array));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickAnswer = async (answer: string) => {
    if (question?.answer) {
      if (answer === question.answer) {
        const newQuestionList = questionActiveList.filter(
          (item: IGameType) => item.questionContent !== question.questionContent
        );
        if (newQuestionList.length < 1) {
          onSetLocalStorage(score + 1);
          navigation.navigate(ScreenEnums.success, {
            score: score + 1
          });
        } else {
          setActiveQuestionList(newQuestionList);
          RandomQuestion(newQuestionList);
          setScore(score + 1);
          setWrongAnswer("");
        }
      } else {
        if (health - 1 === 0) {
          onSetLocalStorage(score);
          navigation.navigate(ScreenEnums.gameOver, {
            score
          });
        } else {
          setHealth(health - 1);
          setWrongAnswer(answer);
        }
      }
    }
  };

  const onAddWordHandler = async () => {
    const wordInformations: ISavedWordDataType = {
      word: question.questionContent,
      translationLangs: type,
      translationWord: question.answer
    };
    try {
      const values = await AsyncStorage.getItem("savedWords");

      if (values !== null && values) {
        const jsonSavedWordList: ISavedWordDataType[] = JSON.parse(values);
        jsonSavedWordList.push(wordInformations);
        await AsyncStorage.setItem(
          "savedWords",
          JSON.stringify(jsonSavedWordList)
        );
      } else {
        const array = [];
        array.push(wordInformations);
        await AsyncStorage.setItem("savedWords", JSON.stringify(array));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerInfo}>
          {t("score")}: {score}
        </Text>
        <Text style={styles.headerInfo}>
          {t("health")}: {health}
        </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}>{question.questionContent || ""}</Text>
      </View>

      <View>
        <FlatList
          data={question.options || []}
          renderItem={({ item }) => (
            <ChoiceContent
              data={item}
              clickFn={onClickAnswer}
              wrongAnswer={wrongAnswer}
            />
          )}
        />
      </View>
      <View style={styles.addMyWords}>
        <TouchableOpacity style={styles.addButton} onPress={onAddWordHandler}>
          <Text style={styles.addButtonText}>{t("buttons.add-my-words")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    height: "100%",
    marginHorizontal: "10%",
    gap: 30
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerInfo: {
    color: "#0045FD",
    fontSize: 25
  },
  questionContainer: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    // backgroundColor: "#0045FD",
    backgroundColor: "#9900f5",
    padding: 20,
    marginBottom: 20
  },
  textStyle: {
    color: "white"
  },
  addMyWords: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  addButton: {
    backgroundColor: "#9900f5",
    paddingVertical: 2,
    width: "15%",
    borderRadius: 10
  },
  addButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 11
  }
});

export default GameScreen;
