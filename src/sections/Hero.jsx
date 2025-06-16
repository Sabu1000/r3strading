import AnimatedCounter from "../components/AnimatedCounter"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden"> 
  <div
    className="absolute z-20 bg-white/100 backdrop-blur-md rounded-xl p-2"
    style={{ top: '7.5rem', left: '5.5rem' }} // 2.5rem = 40px, adjust as needed
  >
    <img 
      src="/images/logos/r3slogo.png" 
      alt="background" 
      className="w-25 h-auto rounded-lg"
    />
  </div>

    <div className="hero-layout">
    {/*LEFT: HERO CONTENT*/}
    <header className="flex flex-col justfy-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
            <div className="hero-text">
                <h1>
                Unlocking
                <span className="slide">
                    <span className="wrapper">
                        {words.map((word) => ( // map over all elements in words array which is in constants
                        // use key to identify each element in the list and update each span tag
                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2"> 
                            <img
                                src={word.imgPath}
                                alt={word.text} // describe the image incase image does not load
                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                            />
                            <span>{word.text}</span>
                        </span>
                    ))}
                    </span>
                </span>
                </h1>
                <h1>one inspired idea</h1>
                <h1>at a time</h1>

            </div>
             <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                    
            </p>
            <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="Learn More"
            />
        </div>
    </header>
    {/*RIGHT: 3D MODEL*/}

    <figure>
        <div className="hero-3d-layout">
            <HeroExperience />
        </div>
    </figure>
    </div>

    <AnimatedCounter />
    </section>
  )
}

export default Hero
