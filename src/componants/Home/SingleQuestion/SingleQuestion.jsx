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
                'Answer is correct',
            );
            setCorrectAns(correctAns + 1)
        }
        else {
            Swal.fire(
                'Your answer is not correct, correct answer is :',
                correctAnswer,
            );
            setInCorrectAns(inCorrectAns + 1)
        }
    }


    return (
        <div >
            <div className="card card-side bg-white shadow-xl p-2 md:px-4 flex flex-col md:flex-row justify-between items-center px-4 text-lg h-full">
                <div className='md:w-2/5'>
                    <h3 className='font-semibold text-2xl'>Question : </h3>
                    <h3>{question}</h3>
                    <FontAwesomeIcon className='cursor-pointer mt-5 text-center w-full text-2xl text-orange-700' title='see answer' icon={faEye} onClick={() => showAnswerHandle(correctAnswer)} />
                </div>
                <div className="card-body w-full md:w-3/5" >
                    {
                        options.map((option, unique) => <Option selectedOption={option} key={unique}
                            disable={disable} checkedHandle={checkedHandle} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;