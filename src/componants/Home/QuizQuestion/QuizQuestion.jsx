import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizQuestion = () => {
    const showQuestion = useLoaderData();
    const { name, questions, total, logo } = showQuestion.data;
    const [correctAns, setCorrectAns] = useState(0);
    const [inCorrectAns, setInCorrectAns] = useState(0);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='mb-5'>
                <div className='flex justify-center items-center pt-10 gap-3'>
                    <h1 className='text-4xl font-bold text-center '>Quiz of {name} </h1>
                    <img className='w-10 bg-gray-700 rounded-lg ' src={logo} alt="" />
                </div>
                <p className='text-xl text-center mt-2'>Total Question : {total}</p>
            </div>

            <div className='flex flex-col-reverse lg:flex-row justify-between  gap-8 mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mt-10 mb-10 w-9/12'>
                    {
                        questions.map(question => <SingleQuestion QuestionCart={question} key={question.id}
                            correctAns={correctAns} setCorrectAns={setCorrectAns} inCorrectAns={inCorrectAns} setInCorrectAns={setInCorrectAns} />)
                    }
                </div>
                <div className='lg:w-3/12 bg-white  lg:sticky top-0 right-0 lg:h-[100vh] p-2'>
                    <h1 className='text-4xl mt-10 text-center text-orange-600 mb-3 font-semibold'>Results</h1>
                    <hr className=' border-orange-600 ' />
                    <h4 className='mt-5 text-center text-xl'>Correct Answer : {correctAns}</h4>
                    <h4 className='mt-5 text-center text-xl pb-4'>Wrong Answer : {inCorrectAns}</h4>

                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;