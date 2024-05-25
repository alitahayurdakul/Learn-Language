import { IGameQuestionTypes } from "types/HomepageTypes";


export const GameQuestionsMenu: IGameQuestionTypes = {
    enToTr: [
        {
            questionContent: "Questionn",
            answer: "A",
            options: [
                {
                    key: "A",
                    content: "Soru"
                },
                {
                    key: "B",
                    content: "Cevap"
                },
                {
                    key: "C",
                    content: "Ev"
                },
                {
                    key: "D",
                    content: "Bahçe"
                }
            ]
        },
        {
            questionContent: "Answer",
            answer: "B",
            options: [
                {
                    key: "A",
                    content: "Soru"
                },
                {
                    key: "B",
                    content: "Cevap"
                },
                {
                    key: "C",
                    content: "Ev"
                },
                {
                    key: "D",
                    content: "Bahçe"
                }
            ]
        }
    ],
    trToEn: [
        {
            questionContent: "Soru",
            answer: "B",
            options: [
                {
                    key: "A",
                    content: "Answer"
                },
                {
                    key: "B",
                    content: "Question"
                },
                {
                    key: "C",
                    content: "Home"
                },
                {
                    key: "D",
                    content: "Garden"
                }
            ]
        }
    ]
}