import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import { QuestionProps } from './interface';
import type { QuestionSet, Question } from '~/features/Patient/types';
const values = {
    '0': 'Có',
    '1': 'Thỉnh thoảng',
    '2': 'Không thường xuyên'
};

export interface FromQuestionProps {
    questions: QuestionSet[]
    currentPage: number
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (id: string, newAnswer: string) => void
    handlePageChange: (value: number) => void
}
const QuestionFrom: React.FC<QuestionProps> = ({ id, question, answer, handleChange }) => {
    return (
        <FormControl component="fieldset">
            <span className="text-lg font-semibold">
                {id}.{' '}
                {question}
            </span>
            <RadioGroup
                row
                name={`question-${id}`}
                value={answer}
                onChange={(e) => handleChange(e.target.value)}
            >
                {Object.keys(values).map((key) => (
                    <FormControlLabel
                        key={key}
                        value={key}
                        control={<Radio />}
                        label={values[key as keyof typeof values]}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
const FromQuestion: React.FC<FromQuestionProps> = ({ questions, currentPage, handleSubmit, handleChange, handlePageChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg ">
                <ul className="space-y-6">
                    <h1>
                        {questions[currentPage].name}
                    </h1>
                    {
                        questions[currentPage].qset.map((q: Question) => (
                            <li key={q.id_ques} className="flex items-center">
                                <QuestionFrom
                                    id={q.id_ques}
                                    question={q.question}
                                    answer={'1'}
                                    handleChange={(newAnswer: string) => handleChange(q.id_ques, newAnswer)}
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-4">
                    <Pagination
                        count={Math.ceil(questions.length)}
                        onChange={(_, value) => handlePageChange(value)}
                        page={currentPage + 1}
                    />
                </div>
                <button type="submit" className="mt-4">Submit</button>
            </form>
        </div>
    )
}

export default FromQuestion;
