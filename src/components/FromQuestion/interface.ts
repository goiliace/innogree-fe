// // Define a type for a single question
export type QuestionType = {
  id: number
  text: string
  answer: string
}
export interface QuestionProps {
  id: string
  question: string
  answer: string
  handleChange: (newAnswer: string) => void
}
export interface FromQuestionProps {
  questions: QuestionListType
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  currentPage: number
  questionsPerPage: number
  handleChange: (id: number, newAnswer: string) => void
  handlePageChange: (value: number) => void
}

// Define the type for the array of questions
export type QuestionListType = QuestionType[]
