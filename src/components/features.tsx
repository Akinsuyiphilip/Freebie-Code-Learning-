import besttutorIcon from "../assets/featuresicon/besttutorIcon.svg"
import flexibleIcon from "../assets/featuresicon/flexibleIcon.svg"
import easyAccessicon from "../assets/featuresicon/easyAccessicon.svg"

import { useEffect, useRef } from "react"

export default function Features() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const speed = 1; // Adjust speed as needed

        const scrollStep = () => {
            if (scrollContainer && !isPaused.current) {
                scrollContainer.scrollLeft += speed;
                scrollAmount += speed;

                // Reset scroll if we reached the duplicate set
                // This assumes standard width. A more robust way checks scrollWidth
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            requestAnimationFrame(scrollStep);
        };

        const animationId = requestAnimationFrame(scrollStep);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const features = [
        {
            icon: besttutorIcon,
            title: "Best Tutors",
            description: "Bring your design vision to life in clean,semantic HTML5",
            bg: "ffffff",
        },
        {
            icon: flexibleIcon,
            title: "Flexible",
            description: "Connect your marketing tools with built-in integrations",
            bg: "DDF247"
        },
        {
            icon: easyAccessicon,
            title: "Easy Access",
            description: "Access your courses anytime, anywhere with our mobile app",
            bg: "ffffff"
        }
    ]
    return (
        <div className="relative bg-[#F4F4F4] px-4 py-10 flex flex-col gap-10 lg:pl-10 lg:pr-0 lg:flex-row w-full mb-8">
            <div className="flex flex-col lg:w-1/2">
                <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium w-2/3 ">Our Features Special For You</h2>
                <p className="text-[clamp(1rem,3vw,1.5rem)] font-thin w-3/5">We provide various special features for all of you</p>


                <div className="lg:flex hidden gap-2 mt-24">
                    <span className="w-16 h-4 bg-[#DDF247] rounded-sm"></span>
                    <span className="w-16 h-4 bg-[#ffffff] rounded-sm"></span>
                    <span className="w-16 h-4 bg-[#ffffff] rounded-sm"></span>
                </div>
            </div>
            {/* features box */}
            <div className="flex justify-between items-center w-full lg:w-2/3 overflow-hidden">
                <div
                    ref={scrollRef}
                    onMouseEnter={() => (isPaused.current = true)}
                    onMouseLeave={() => (isPaused.current = false)}
                    className="flex justify-start items-center gap-10 overflow-x-hidden pb-4 w-full pr-4"
                >
                    {
                        features.map((feature, index) => (
                            <div key={index} className={`shrink-0 h-[345px] w-[300px] bg-[#${feature.bg}] rounded-2xl px-5 py-10 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow`}>
                                <img src={feature.icon} alt="" className="w-[3em] h-[3em]" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-[clamp(2.1rem,3vw,2rem)] font-medium">{feature.title}</h2>
                                    <p className="text-[clamp(0.8rem,3vw,1rem)] font-normal w-3/5 text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* Duplicate features for seamless scrolling */}
                    {
                        features.map((feature, index) => (
                            <div key={`dup-${index}`} className={`shrink-0 h-[345px] w-[300px] bg-[#${feature.bg}] rounded-2xl px-5 py-10 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow`}>
                                <img src={feature.icon} alt="" className="w-[3em] h-[3em]" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-[clamp(2.1rem,3vw,2rem)] font-medium">{feature.title}</h2>
                                    <p className="text-[clamp(0.8rem,3vw,1rem)] font-normal w-3/5 text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}


{/* <div>
    
</div> */}