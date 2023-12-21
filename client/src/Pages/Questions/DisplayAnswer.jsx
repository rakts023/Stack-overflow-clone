import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer } from '../../actions/question'
import './QuestionDetails.css'

const DisplayAnswer = ({question, handleShare}) => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }

  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className="diplay-ans" key={ans._id}>
              {/* <p>kljhgf</p> */}
                <p>{ans.answerBody}</p>
                <div className="question-actions-user">
                    <div>
                        <button type='button' onClick={handleShare}>Share</button>
                        {
                          User?.result?._id === ans?.userId && 
                          (
                          <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers )}>Delete</button>
                          )
                        }
                    </div>
                    <div>
                        <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userid}`} className='user-link' style={{color:'#0086d8'}}>
                            <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered} P </Avatar>  {/*.charAt(0).toUpperCase()*/}
                            <div>
                              {ans.userAnswered}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
