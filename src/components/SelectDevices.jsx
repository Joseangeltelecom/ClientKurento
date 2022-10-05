import '../styles/SelectDevices.css'
import SelectAudioDevices from './SelectAudioDevices';
import SelectVideoDevices from './SelectVideoDevices';
import Button from './Button'

function SelectDevices(){
    return(
        <div className="SelectDevices" >
            <SelectVideoDevices />
            <SelectAudioDevices />
            <Button input="Let's start"/>
        </div>
    )
}


export default SelectDevices;