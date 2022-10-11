import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import Option from '../Option/Option';

const SingleQuestion = ({ QuestionCart, correctAns, setCorrectAns }) => {
    const { question, correctAnswer, options } = QuestionCart;


    const showAnswerHandle = () => {
        Swal.fire(
            'Correct Answer is : ',
            correctAnswer,
        );
    }

    const checkedHandle = (check) => {


        if (correctAnswer === check) {
            Swal.fire(
                'Your Answer is correct',
            );
            setCorrectAns([...correctAns, check])
        }
        else {
            Swal.fire(
                'Your answer is not correct, currect answer is :',
                correctAnswer,
            );
        }
        // console.log(correctAns);
    }


    return (
        <div >
            <div className="card card-side bg-white shadow-xl flex justify-between items-center px-4 text-lg h-full">
                <div className='w-2/5'>
                    <h3 className='font-semibold text-2xl'>Question : </h3>
                    <h3>{question}</h3>
                    {/* <h1> corr : {correctAns}</h1> */}
                    <FontAwesomeIcon className='cursor-pointer mt-5 text-center w-full text-2xl text-orange-700' title='show answer' icon={faEye} onClick={() => showAnswerHandle(correctAnswer)} />
                </div>
                <div className="card-body w-3/5" aria-readonly={true}>
                    {
                        options.map((option, unique) => <Option selectedOption={option} key={unique} checkedHandle={checkedHandle} />)
                    }

                </div>
            </div>

        </div>
    );
};

export default SingleQuestion;