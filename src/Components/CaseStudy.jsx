import img1 from "../assets/img-1.webp";
import img2 from "../assets/img-2.webp";
import vid from "../assets/case.mp4";

const CaseStudy = () => {
    return ( 
        <div className="relative block px-[8rem]">
            <ul className="flex list-none gap-[2rem] items-start" >
                <li className="case">
                    <div className="align-baseline">
                        <div className="relative overflow-hidden w-[100%]">
                        <picture>
                            <img className="w-[100%] img-h"  src={img1} alt="" loading="lazy" />
                        </picture>
                        </div>
                        <div className="pt-[2rem]">
                            <h5 className="uppercase text-lg tracking-[-0.02em] font-semibold leading-[1.1] hover:underline">Patagonia</h5>
                            <p className="case-txt leading-[1.25] uppercase text-sm mt-[1rem]" >A Ecommerce experience driven by patagonia's brand mission</p>
                        </div>
                    </div>
                </li>
                <li className="case">
                    <div className="align-baseline">
                        <div className="relative overflow-hidden w-[100%]">
                        <picture>
                            <img className="img-h" src={img2} alt="" loading="lazy" />
                        </picture>
                        </div>
                        <div className="pt-[2rem]">
                            <h5 className="uppercase text-lg tracking-[-0.02em] font-semibold leading-[1.1] hover:underline">Wilson</h5>
                            <p className="case-txt leading-[1.25] uppercase text-sm mt-[1rem]" >A century-old sports brand finding its place in culture</p>
                        </div>
                    </div>
                </li>
                <li className="case">
                    <div className="align-baseline">
                        <div className="relative overflow-hidden w-[100%]">
                        <video src={vid} autoPlay muted loop></video>
                        </div>
                        <div className="pt-[2rem]">
                            <h5 className="uppercase text-lg tracking-[-0.02em] font-semibold leading-[1.1] hover:underline">Google Store</h5>
                            <p className="case-txt leading-[1.25] uppercase text-sm mt-[1rem]" >A Ecommerce experience helping google bring its hardware to people across the globe</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default CaseStudy;