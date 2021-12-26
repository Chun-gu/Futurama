import { QuestionsType } from "../types/QuestionsType";
import React from 'react'

interface QuestionsProps {
    questionsData: QuestionsType;
}

export const QuestionsCard = ({ questionsData }: QuestionsProps) => {
    const { id, question, possibleAnswers, correctAnswer } = questionsData;
    return (
        <div>
            <p>{id}. {question}</p>
            {possibleAnswers.map((possibleAnswer: string, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <input
                            id={`q${id}a${index}`}
                            type="radio"
                            name={question}
                            value={possibleAnswer}
                        />
                        <label htmlFor={`q${id}a${index}`}>{possibleAnswer}</label>
                    </React.Fragment>
                );
            })}
        </div>
    );
};
