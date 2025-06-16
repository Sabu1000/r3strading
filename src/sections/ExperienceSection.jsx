import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useEffect(() => {
        expCards.forEach((card, index) => {
            console.log(`Logo ${index + 1}:`, card.logoPath);
        });
    }, []);

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0, 
                transformOrigin: 'left left',
                duration: 1, 
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            })
        });  

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',  
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% screen',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress,
                    })
                }
            },
        });

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0, 
                duration: 1, 
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                }
            })
        });
    }, []);

    return (
        <section id="results" className='w-full md:mt-40 mt-20 section-padding xl:px-0 scroll-mt-24'>
            <div className='w-full h-full md:px-20 px-5'>
                <TitleHeader
                    title="Client-Focused Solutions"
                    sub="Driving Technology-Enabled Business Transformation"
                />
                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card, index) => (
                            <div key={card.title} className='exp-card-wrapper flex flex-col md:flex-row'>
                                <div className='xl:w-2/6 flex items-center justify-center'>
                                    <GlowCard card={card} index={index}>
                                        <div className="flex items-center justify-center bg-zinc-900 rounded-2xl p-6 shadow-lg">
                                            <img 
                                                src={card.imgPath} 
                                                alt={card.title} 
                                                className="w-32 h-32 object-contain rounded-xl border-4 border-zinc-800"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${card.imgPath}`);
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className='xl:w-4/6'>
                                    <div className='flex items-start'>
                                        <div className='timeline-wrapper'>
                                            <div className='timeline' />
                                            <div className='gradient-line w-1 h-full' />
                                        </div>

                                        <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                            <div className='timeline-logo flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full'>
                                                <img 
                                                    src={card.logoPath} 
                                                    alt={`${card.title} logo`}
                                                    className="w-12 h-12 object-contain"
                                                    onError={(e) => {
                                                        console.error(`Failed to load logo: ${card.logoPath}`);
                                                        e.target.src = '/images/placeholder-logo.png';
                                                        e.target.style.display = 'none';
                                                        e.target.parentNode.innerHTML = `<div class="flex items-center justify-center w-full h-full text-white font-bold text-2xl">${card.title.charAt(0)}</div>`;
                                                    }}
                                                />
                                            </div>
                                            <div> 
                                                <h1 className='font-semibold text-3xl'>
                                                    {card.title}
                                                </h1>
                                                <p className='my-5 text-white-50'>
                                                    {card.date}
                                                </p>
                                                <p className='text-[#839cb5] italic'>
                                                    Responsibilities
                                                </p>
                                                <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                    {card.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx} className='text-lg'>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection