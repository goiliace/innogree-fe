import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import { QuestionType, QuestionProps, FromQuestionProps } from './interface';

const values = {
    '0': 'Có',
    '1': 'Thỉnh thoảng',
    '2': 'Không thường xuyên'
};

const Question: React.FC<QuestionProps> = ({ id, question, answer, handleChange }) => {
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
const FromQuestion: React.FC<FromQuestionProps> = ({ questions, currentPage, questionsPerPage, handleSubmit, handleChange, handlePageChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg ">
                <ul className="space-y-6">
                    {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question: QuestionType) => (
                        <li key={question.id} className="flex items-center">
                            <Question
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
                        page={currentPage + 1}
                    />
                </div>
                <button type="submit" className="mt-4">Submit</button>
            </form>
        </div>
    )
}

export default FromQuestion;
