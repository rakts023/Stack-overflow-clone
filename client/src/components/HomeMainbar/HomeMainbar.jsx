import React from 'react'
import './HomeMainbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()


  const questionList = useSelector(state => state.questionsReducer)
  // console.log(questionList)

  // var questionsList = [{
  //     id: 1,
  //     upVotes: 3,
  //     downVote: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{
  //     id: 2,
  //     upVotes: 3,
  //     downVote: 2,
  //     noOfAnswers: 0, 
  //     questionBody: "It meant to be",
  //     questionTitle: "What is a function?",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: 'rakshith',
  //       answeredOn: "jan 20",
  //       userId: 2,
  //   }]
  //   },{
  //     id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1, 
  //     answer: [{
  //         answerBody: "Answer",
  //         userAnswered: 'kumar',
  //         answeredOn: "jan 2",
  //         userId: 2,
  //     }]  
  //   }]

  const checkAuth = () =>{
    if(user === null ){
      alert("login or signup to ask a question")
      navigate('./Auth')
    }
    else {
        navigate('./AskQuestions')
    }
  }

    return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
        }
        <button onClick={ checkAuth } className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionList.data === null ?
          <h1>Loading...</h1> :  
          <>
              <p>{ questionList.data.length} questions</p>
              <QuestionList questionList={questionList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
