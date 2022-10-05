import '../styles/CheckVideoAndAudio.css'

function CheckVideoAndAudio(){
    return(
        <div className='VideoContainer'>
            <video src=''  className='Video'/>
            <div className='ButtonsContainer'>
                <button className='VideoButton'>Video</button>
                <button className='AudioButton'>Audio</button>
            </div>
        </div>
        
    )
}


export default CheckVideoAndAudio;