import VideoBg from "../assets/intro.mp4";

const VideoPlayer = () => {
    return ( 
        <div className="w-[100%] h-[100%]">
            <video src={VideoBg} autoPlay muted loop className="w-[100%] h-[100%] object-cover"></video>
        </div>
     );
}
 
export default VideoPlayer;