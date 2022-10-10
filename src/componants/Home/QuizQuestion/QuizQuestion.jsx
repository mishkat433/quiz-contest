import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestion = () => {
    const showQuestion = useLoaderData();
    console.log(showQuestion);
    return (
        <div>
            this is QuizQuestion
        </div>
    );
};

export default QuizQuestion;