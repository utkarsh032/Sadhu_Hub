import './Button.style.css';
import { FaArrowRight } from "react-icons/fa";

export default function Button({ text, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      <span>{text}</span>
      <FaArrowRight className='arrow' />
    </button>
  )
}
