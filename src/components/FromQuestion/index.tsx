import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

interface FromQuestionProps {
    id: number;
    question: string;
    answer: string;
    handleChange: (newAnswer: string) => void;
}

const values = {
    '0': 'Có',
    '1': 'Thỉnh thoảng',
    '2': 'Không thường xuyên'
};

const FromQuestion: React.FC<FromQuestionProps> = ({ id, question, answer, handleChange }) => {
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

export default FromQuestion;
