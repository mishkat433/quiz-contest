import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizQuestion = () => {
    const showQuestion = useLoaderData();
    const { name, questions, total, logo } = showQuestion.data;
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div className='flex justify-center items-center pt-10 gap-3'>
                    <h1 className='text-4xl font-bold text-center '>Quiz of {name} </h1>
                    <img className='w-10 bg-gray-700 rounded-lg ' src={logo} alt="" />
                </div>
                <p className='text-xl text-center mt-2'>Total Question : {total}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                {
                    questions.map(question => <SingleQuestion QuestionCart={question} key={question.id} />)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;