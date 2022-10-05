import '../styles/TestDevices.css'
import CheckVideoAndAudio from './CheckVideoAndAudio';

function TestDevices(){
    return(
        <div className='TestDevices'>
            <p>Check your audio  and video devices</p>
            <CheckVideoAndAudio />
        </div>
    )
}


export default TestDevices;