import React, { useState } from 'react';
import FromQuestion from '../../components/FromQuestion';
import Pagination from '@mui/material/Pagination';


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

export default function QuestionSection() {
    const [questions, setQuestions] = useState(fakeQuestion);
    const [currentPage, setCurrentPage] = useState(0);

    const handleChange = (id: number, newAnswer: string) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, answer: newAnswer } : q));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the submission, such as sending the data to a backend API
        console.log(questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage));
    };

    const handlePageChange = (value: number) => {
        setCurrentPage(value - 1);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg ">
                <ul className="space-y-6">
                    {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question) => (
                        <li key={question.id} className="flex items-center">
                            <FromQuestion
                                id={question.id}
                                question={question.text}
                                answer={question.answer}
                                handleChange={(newAnswer: string) => handleChange(question.id, newAnswer)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <Pagination
                        count={Math.ceil(questions.length / questionsPerPage)}
                        onChange={(_, value) => handlePageChange(value)}
                    />
                </div>
                <button type="submit" className="mt-4">Submit</button>
            </form>
        </div>
    )
}
