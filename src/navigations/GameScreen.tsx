import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ChoiceContent from "components/common/ChoiceContent";
import { GameQuestionsMenu } from "const/GameMenu";
import {
  IGameQuestionTypes,
  IGameType,
  IScoreDataTypes,
} from "types/HomepageTypes";

const GameScreen = ({ route }: { route: any }) => {
  const { type } = route.params;
  const { t } = useTranslation("translation");
  const navigation = useNavigation<any>();
  const [health, setHealth] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [question, setQuestion] = useState<IGameType>({
    questionContent: "-",
    answer: "-",
    options: [
      {
        key: "A",
        content: "-",
      },
      {
        key: "B",
        content: "-",
      },
      {
        key: "C",
        content: "-",
      },
      {
        key: "D",
        content: "-",
      },
    ],
  });
  const [questionActiveList, setActiveQuestionList] = useState<
    IGameType[] | []
  >([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<string>("");
  const [scoresDatas, setScoresDatas] = useState<IScoreDataTypes[] | []>([]);

  const RandomQuestion = (questionList: IGameType[]) => {
    setQuestion(questionList[Math.floor(Math.random() * questionList.length)]);
  };
  useEffect(() => {
    setActiveQuestionList(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
    RandomQuestion(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
  }, []);

  const onSetLocalStorage = async (score: number) => {
    try {
      const newScoreValues: IScoreDataTypes = {
        score: score.toString(),
        date: "01.07.1995 17.25",
        gameType: type,
      };

      let values = await AsyncStorage.getItem("scores");

      if (values !== null && values) {
        const jsonScoreList: IScoreDataTypes[] = JSON.parse(values);
        jsonScoreList.push(newScoreValues);
        await AsyncStorage.setItem(
          "scores",
          JSON.stringify(jsonScoreList)
        );
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
        let newQuestionList = questionActiveList.filter(
          (item: IGameType) => item.questionContent !== question.questionContent
        );
        if (newQuestionList.length < 1) {
          setSuccess(true);
          onSetLocalStorage(score + 1);
        } else {
          setActiveQuestionList(newQuestionList);
          setNotification(true);
          RandomQuestion(newQuestionList);
          setScore(score + 1);
          setWrongAnswer("");
        }
      } else {
        if (health - 1 === 0) {
          onSetLocalStorage(score);
          navigation.navigate("GameOverScreen", {
            score,
          });
        } else {
          setHealth(health - 1);
          setWrongAnswer(answer);
        }
      }
    }
  };
  if (success) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Good Job</Text>
      </View>
    );
  } else {
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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    width: "80%",
    height: "100%",
    marginHorizontal: "10%",
    gap: 30,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInfo: {
    color: "#0045FD",
    // width: '100%',
    // textAlign: 'right',
    fontSize: 25,
  },
  questionContainer: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0045FD",
    padding: 20,
    marginBottom: 50,
  },
  textStyle: {
    color: "white",
  },
});

export default GameScreen;
