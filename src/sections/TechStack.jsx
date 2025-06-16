import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { techStackImgs } from '../constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#specialization',
          start: 'top center',
        },
      }
    );
  }, []);

  return (
    <div id="specialization" className="flex-center section-padding scroll-mt-24">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technical Domains of Expertise"
          sub="Bridging Engineering, Architecture, and Delivery"
        />

        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="tech-card card-border overflow-hidden group xl:rounded-full rounded-lg flex flex-col items-center justify-center p-8 bg-[#121212] hover:bg-[#1f1f1f] transition duration-300 w-48 h-48"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img
                  src={icon.imgPath}
                  alt={icon.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-base text-center font-medium">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
