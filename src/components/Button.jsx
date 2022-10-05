import '../styles/Button.css'
import { IoIosArrowForward } from "react-icons/io";

function Button(props){
    return(
        <div className="ButtonContainer" >
            <button className='Button'>{props.input}</button>
            <IoIosArrowForward size={40} />
        </div>
    )
}


export default Button;