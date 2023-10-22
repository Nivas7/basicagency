

const VideoPlayer = () => {
    return ( 
        <div className="w-[100%] h-[100%]">
            <video src="../assets/intro.mp4" autoPlay muted loop className="w-[100%] h-[100%] object-cover"></video>
        </div>
     );
}
 
export default VideoPlayer;