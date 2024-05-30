import { useNavigation } from "@react-navigation/native";
import ChoiceContent from "components/common/ChoiceContent";
import { GameQuestionsMenu } from "const/GameMenu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { IGameQuestionTypes, IGameType } from "types/HomepageTypes";

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
    const [questionActiveList, setActiveQuestionList] = useState<IGameType[] | []>([]);
    const [notification, setNotification] = useState<boolean>(false);
    const [wrongAnswer, setWrongAnswer] = useState<string>("");

    const RandomQuestion = (questionList: IGameType[]) => {
        setQuestion(questionList[Math.floor((Math.random() * questionList.length))])
    }
    useEffect(() => {
        setActiveQuestionList(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
        RandomQuestion(GameQuestionsMenu[type as keyof IGameQuestionTypes]);
    }, []);

    const onClickAnswer = (answer: string) => {
        if (question?.answer) {
            if (answer === question.answer) {
                let newQuestionList = questionActiveList.filter((item: IGameType) => item.questionContent !== question.questionContent);
                if (newQuestionList.length < 1) {
                    setSuccess(true);
                }
                else {
                    setActiveQuestionList(newQuestionList);
                    setNotification(true);
                    RandomQuestion(newQuestionList);
                    setScore(score + 1);
                    setWrongAnswer("");
                }
            }
            else {
                if (health - 1 === 0) {
                    navigation.navigate("GameOverScreen")
                }
                else {
                    setHealth(health - 1);
                    setWrongAnswer(answer);
                }
            }
        }

    }
    if (success) {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Good Job
                </Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container} >
                <View style={styles.headerContainer} >
                    <Text style={styles.scoreStyle}>
                        {t("score")}: {score}
                    </Text>
                    <Text style={styles.scoreStyle} >
                        {t("health")}: {health}
                    </Text>
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.textStyle} >
                        {question.questionContent || ""}
                    </Text>
                </View>
                <View>
                    <FlatList data={question.options || []} renderItem={({ item }) => <ChoiceContent data={item} clickFn={onClickAnswer} wrongAnswer={wrongAnswer} />} />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        width: '80%',
        height: '100%',
        marginHorizontal: '10%',
        gap: 30
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    scoreStyle: {
        color: 'white',
        // width: '100%',
        // textAlign: 'right',
        fontSize: 25
    },
    questionContainer: {
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 50
    },
    textStyle: {
        // color: "white"
    }
});

export default GameScreen;