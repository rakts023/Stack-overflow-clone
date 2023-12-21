import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle: { type: String , require: "Question must have title"},
    questionBody: { type: String , require: "Question must have body"},
    questionTags: { type: [String] , require: "Question must have tags"},
    noOfAnswers: { type: Number, default: 0},
    upVote: { type: [String], default: []},
    downVote: { type: [String], default: []},
    userPosted: { type: String, required: "Question must have author"},
    userId: { type: String },
    askedOn: { type: Date , default: Date.now},
    answer : [{
        answerBody: String,
        userAnswer: String,
        userId: String,
        answeredOn: { type: Date , default: Date.now},
    }]
})

export default mongoose.model("Question", QuestionSchema)