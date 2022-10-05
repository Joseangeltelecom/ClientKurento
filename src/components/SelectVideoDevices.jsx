import '../styles/SelectVideoDevices.css';
import { IoIosVideocam } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";


function SelectVideoDevices(){
    return(
        <div className="SelectVideoDevices" >
            <div className='VideoTitle'>
                <IoIosVideocam size={40}/>
                <p>Video devices</p>
                <IoReloadOutline size={25}/>
            </div>
            <div className='VideoOptions'>
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


export default SelectVideoDevices;