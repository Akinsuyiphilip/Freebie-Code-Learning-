import codeImad from "../assets/languageicons/codeimageL.svg"
import cautionIcom from "../assets/languageicons/cauitonimg.svg"
import uniIcon from "../assets/languageicons/universityIcon.svg"
import showcaseIcon from "../assets/languageicons/showcaseIcon.svg"
import tutorIcon from "../assets/languageicons/Tutor.svg"

export default function Language() {
    return (

        <>
            <div className="mt-10 px-5 bg-white py-6 lg:pt-24">

                <div className="flex flex-col gap-5 lg:flex-row-reverse lg:items-center lg:gap-20">
                    <div className="flex flex-col gap-5 w-full lg:w-2/5 ">
                        <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold text-left w-4/5 lg:leading-12">The language for building web pages</h2>
                        <p className="text-[clamp(1rem,3vw,1.5rem)] font-thin w-4/5 lg:leading-8">Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!</p>
                        <button className="bg-[#000000] text-[#DDF247] px-6 py-2 w-full lg:w-2/5">Try it Yourself </button>
                    </div>

                    <div className="relative">
                        <img src={codeImad} alt="codeimg" className="w-[35em] h-auto lg:w-[45em]" />
                        <img src={cautionIcom} alt="cautionimg" className="w-[25%] h-auto absolute right-0 -bottom-5 lg:bottom-28 lg:-right-6" />
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-16 text-center lg:w-1/2 lg:justify-between lg:items-start lg:text-start">
                        <h2 className="text-[clamp(2rem,3vw,2rem)] font-bold lg:w-3/5">Get up and running fast together</h2>
                        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
                            <div className="flex flex-col items-center justify-center gap-6 text-center px-20 lg:px-5 lg:justify-start lg:items-start lg:text-start">
                                <img src={uniIcon} alt="universityIcon" className="w-[3em] h-[3em]" />
                                <h4 className="text-[clamp(2rem,3vw,2rem)] font-medium">University</h4>
                                <p className="text-[clamp(0.8rem,3vw,1rem)] font-normal lg:leading-7">
                                    Browse hundreds of in-depth videos, courses, and guides to get up and running fast
                                </p>
                            </div>
                            <span className="w-2/3 h-[2px] bg-[#E4E4E4] lg:hidden"></span>
                            <div className="flex flex-col items-center justify-center gap-6 text-center px-20 lg:px-5 lg:justify-start lg:items-start lg:text-start">
                                <img src={showcaseIcon} alt="showcaseIcon" className="w-[3em] h-[3em]" />
                                <h4 className="text-[clamp(2rem,3vw,2rem)] font-medium">Showcase</h4>
                                <p className="text-[clamp(0.8rem,3vw,1rem)] font-normal lg:leading-7">
                                    Get inspired by the incredible websites built by members of the community
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={tutorIcon} alt="tutorIcon" className="w-[35em] h-[35em]" />
                    </div>
                </div>

            </div >
        </>
    )
}