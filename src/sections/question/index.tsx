import React, { useEffect, useState } from 'react';
import DualLayout from '~/layouts/DualLayout';
import FromQuestion from '~/components/FromQuestion';
import QuestionnaireNav from '~/components/QuestionnaireNav';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "~/store";
import { fetchQuestions } from "~/features/Patient/thunks";

const QuestionSection = () => {
    const params = useParams();
    console.log(params.id);
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);
    useEffect(() => {
        dispatch(fetchQuestions({ token: token as string, patient_id: params.id as string }));
    }, [dispatch]);
    const questions = useAppSelector(state => state.patient.questions);
    console.log(questions);

    // const [questions, setQuestions] = useState(fakeQuestion);

    const [currentPage, setCurrentPage] = useState(0);
    const [completedQuestions, setCompletedQuestions] = useState<string[]>([]);
    const handleChange = (id: string, newAnswer: string) => {
        // setQuestions(questions.map(q => q.id === id ? { ...q, answer: newAnswer } : q));
        // setCompletedQuestions(prev => [...prev, id]);

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the submission, such as sending the data to a backend API
        // console.log(questions);
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
            <div>hihihi</div>

        </>
    )
}
export default QuestionSection;