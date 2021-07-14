import './Faqs.css'

const Faqs = props => {
  const {eachFaq} = props
  const {answer, qno, question} = eachFaq
  return (
    <li className="each-question">
      <p className="faqs-question">{`${qno}.${question}`}</p>
      <p className="faqs-answer">{answer}</p>
    </li>
  )
}
export default Faqs
