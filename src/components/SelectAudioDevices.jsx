import '../styles/SelectAudioDevices.css'
import { IoIosVideocam } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";

function SelectAudioDevices(){
    return(
        <div className="SelectAudioDevices" >
            <div className='AudioTitle'>
                <IoIosVideocam size={40}/>
                <p>Audio devices</p>
                <IoReloadOutline size={25}/>
            </div>
            <div className='AudioOptions'>
                <select name="" id="" className='Options'>
                    <option>Select device</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </select>
            </div>
        </div>
    )
}


export default SelectAudioDevices;