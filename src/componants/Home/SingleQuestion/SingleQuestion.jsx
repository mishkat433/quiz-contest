import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';

const SingleQuestion = ({ QuestionCart }) => {
    const { question, correctAnswer, options, } = QuestionCart;
    return (
        <div>
            <div className="card card-side bg-white shadow-xl flex justify-between items-center p-2 text-lg text- ">
                <div className='w-2/5'>
                    <h3>{question}</h3>
                    <FontAwesomeIcon className='cursor-pointer mt-5 text-center w-full text-2xl text-orange-700' title='show answer' icon={faEye} />
                </div>
                <div className="card-body w-3/5">
                    {
                        options.map((option, unique) => <Option unique={option} key={unique} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;