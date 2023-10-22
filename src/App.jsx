import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import VideoPlayer from './Components/VideoPlayer';
import Layover from './Components/layover';

function App() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])

  return (
    <div>
      <div className='relative w-full h-screen'>
        <Navbar />
        <VideoPlayer />
        <Layover />
      </div>
    </div>
  )
}

export default App
