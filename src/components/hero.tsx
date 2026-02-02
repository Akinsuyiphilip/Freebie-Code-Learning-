import codeIcon from "../assets/codeIcon.svg"
import doodleIcon from "../assets/doodleicon.svg"
import startarrow from "../assets/startarrow.svg"

import heroimage from "../assets/heroimage.svg"
import heroLine from "../assets/hero-line.svg"
import heroCode from "../assets/hero-codeframe.svg"
import heroCaution from "../assets/caution-icon.svg"
import heroRadio from "../assets/Radio-button.svg"
import courseraicon from "../assets/courseraicon.svg"
import edXicon from "../assets/edXicon.svg"
import udemyicon from "../assets/udemyicon.svg"

export default function Hero() {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col pt-20 pl-4 mt-7 mb-4 w-3/4 gap-8 lg:w-1/2 lg:mb-0 lg:pt-5 lg:mt-24 lg:mr-10">
                    <h1 className="text-[clamp(3rem,3vw,10rem)] font-medium leading-15">Improve your
                        skills by  <img src={codeIcon} alt="codeIcon" className="w-[0.5em] h-[0.5em] inline" /> study
                        with coding </h1>

                    <div>
                        <img src={doodleIcon} alt="doodleIcon" className="w-auto h-16 inline" />

                        <p className="text-[clamp(1rem,3vw,1.5rem)] font-thin lg:w-2/3">
                            Create, launch, and iterate on new
                            marketing campaigns without distracting
                            your product team.
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        <button className="bg-black text-white px-6 py-2 ">Get Started <img src={startarrow} alt="startarrow" className="w-6 h-6 inline-block" /></button>
                    </div>
                </div>
                <div className="bg-black min-h-[500px] relative aspect-3/4 w-full lg:w-1/2">
                    <img src={heroLine} alt="heroLine" className="absolute bottom-[10em] w-[80%] right-0 z-10 lg:bottom-[15em]" />
                    <img src={heroimage} alt="heroimage" className="absolute bottom-0 right-2 w-[80%] h-auto z-30 object-cover " />
                    <img src={heroCode} alt="heroCode" className="absolute bottom-20 left-2 w-[80%] h-auto z-20 lg:bottom-[6em] lg:w-full lg:-left-56" />
                    <img src={heroCaution} alt="heroCaution" className="absolute -bottom-20 right-4 w-[40%] h-auto z-50" />

                    <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-4 w-2/5 z-40">
                        <img src={heroRadio} alt="heroRadio" className="w-[1em] h-[1em] inline-block" />
                        <p className="text-white text-[clamp(0.6rem,3vw,1rem)]">· Name (Skill)</p>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-8 py-16 lg:py-20 bg-white">
                <img src={edXicon} alt="edXicon" className="w-[6em] h-auto lg:w-[14em] inline-block" />
                <img src={courseraicon} alt="courseraicon" className="w-[6em] h-auto lg:w-[14em] inline-block" />
                <img src={udemyicon} alt="udemyicon" className="w-[6em] h-auto lg:w-[14em] inline-block" />

            </div>
        </>

    )
}