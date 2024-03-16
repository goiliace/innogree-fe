import React, { useState } from 'react';
import { QuestionListType } from '../FromQuestion/interface';
interface QuestionnaireNavProps {
    questions: QuestionListType;
    completedQuestions: number[];
    handlePageChange: (value: number) => void;
}

const QuestionnaireNav: React.FC<QuestionnaireNavProps> = ({ questions, completedQuestions, handlePageChange }) => {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const handleQuestionClick = (questionIndex: number) => {
        // Calculate which page the question is on
        const page = Math.ceil((questionIndex) / 5);

        // Change to the correct page
        handlePageChange(page);

        // Set the selected question number
        setSelectedNumber(questionIndex);
    };

    return (
        <div className={`flex flex-wrap gap-4 p-4`}>
            {questions.map((question, index) => {
                const isCompleted = completedQuestions.includes(question.id);
                return (
                    <button
                        key={index + 1}
                        className={`
                            w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300
                            ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}
                            ${selectedNumber === index + 1 ? 'ring-2 ring-blue-300' : ''}
                        `}
                        onClick={() => handleQuestionClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
};

export default QuestionnaireNav;
