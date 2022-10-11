import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import Option from '../Option/Option';
import { useState } from 'react';

const SingleQuestion = ({ QuestionCart, correctAns, setCorrectAns, inCorrectAns, setInCorrectAns }) => {
    const { question, correctAnswer, options } = QuestionCart;
    const [disable, setdisable] = useState(false)

    const showAnswerHandle = () => {
        Swal.fire(
            'Correct Answer is : ',
            correctAnswer,
        );
    }

    const checkedHandle = (check) => {

        setdisable(true)

        if (correctAnswer === check) {
            Swal.fire(
                'Your Answer is correct',
            );
            setCorrectAns(correctAns + 1)
        }
        else {
            Swal.fire(
                'Your answer is not correct, currect answer is :',
                correctAnswer,
            );
            setInCorrectAns(inCorrectAns + 1)
        }
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
                        options.map((option, unique) => <Option selectedOption={option} key={unique} disable={disable} checkedHandle={checkedHandle} />)
                    }

                </div>
            </div>

        </div>
    );
};

export default SingleQuestion;