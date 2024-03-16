import QuestionSection from "~/sections/question"
import DualLayout from "~/layouts/DualLayout"
export default function App() {
    return (
        <>
            <DualLayout
                childrenA={<QuestionSection />}
                childrenB={<div>Right</div>}
            />
        </>
    )
}