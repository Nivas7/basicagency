import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import isTouchDevice from "../hooks/isTouchDevice";

const Layover = () => {
  if (isTouchDevice) {
    return null;
  }
  
  const { clientX, clientY } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
    return (  
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-[9]" style={{
            transition: "transform .2s ease-in-out",
            // TODO: extra check on clientX needed here 
            // because mouseleave event not always firing
            // when slowly exiting left side of browser
            top: isVisible && clientY < 155 ? "50%" : clientY,
            left: isVisible && clientY < 155 ? "50%" : clientX, 

            cursor: "none",
            
        }}>
            <div className="w-[8rem] h-[8rem] text-[1.4rem] text-center uppercase rounded-[50%] bg-[#fff]">
                <div className="relative flex w-[100%] h-[100%] items-center justify-center">
                    <div className="max-w-[8rem] relative top-[0.25rem] p-[.5rem_0]">
                        <span className="p-[.5rem_0] font-semibold">Watch Reel</span>
                    </div>
                </div>
            </div>
            <p className="text-sm text-white text-center mt-[1rem]">BASIC/DEPT&copy; 2010-&infin;</p>
        </div>
     );
}
 
export default Layover;