import React, { useState } from 'react';
import DualLayout from '~/layouts/DualLayout';
import FromQuestion from '~/components/FromQuestion';
import QuestionnaireNav from '~/components/QuestionnaireNav';
const fakeQuestion = [
    { id: 1, text: "Bạn có thường xuyên sử dụng điện thoại không?", answer: "" },
    { id: 2, text: "Question 2 text here", answer: "" },
    { id: 3, text: "Question 3 text here", answer: "" },
    { id: 4, text: "Question 4 text here", answer: "" },
    { id: 5, text: "Question 5 text here", answer: "" },
    { id: 6, text: "Question 6 text here", answer: "" },
    { id: 7, text: "Question 7 text here", answer: "" },
    { id: 8, text: "Question 8 text here", answer: "" },
    { id: 9, text: "Question 9 text here", answer: "" },
    { id: 10, text: "Question 10 text here", answer: "" },
];

const questionsPerPage = 5;

const QuestionSection = () => {
    const [questions, setQuestions] = useState(fakeQuestion);
    const [currentPage, setCurrentPage] = useState(0);
    const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
    const handleChange = (id: number, newAnswer: string) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, answer: newAnswer } : q));
        setCompletedQuestions(prev => [...prev, id]);

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the submission, such as sending the data to a backend API
        console.log(questions);
    };

    const handlePageChange = (value: number) => {
        setCurrentPage(value - 1);
    };

    return (
        <>
            <DualLayout
                childrenA={< FromQuestion
                    questions={questions}
                    currentPage={currentPage}
                    questionsPerPage={questionsPerPage}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handlePageChange={handlePageChange}
                />}
                childrenB={< QuestionnaireNav
                    questions={questions}
                    completedQuestions={completedQuestions}
                    handlePageChange={handlePageChange}
                />}
            />
        </>
    )
}
export default QuestionSection;