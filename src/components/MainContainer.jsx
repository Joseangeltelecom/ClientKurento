import '../styles/MainContainer.css'
import SelectDevices from './SelectDevices';
import TestDevices from './TestDevices';

function MainContainer(){
    return(
        <div className='MainContainer'>
            <TestDevices />
            <SelectDevices />
        </div>
    )
}

export default MainContainer;