// Define a type for a single question
type QuestionType = {
  id: number
  text: string
  answer: string
}

// Update FromQuestionProps to accept an id
interface FromQuestionProps {
  id: number
  question: string
  answer: string
  handleChange: (id: number, newAnswer: string) => void
}

// Define the type for the array of questions
type QuestionListType = QuestionType[]
