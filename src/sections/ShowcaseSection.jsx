import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      );
    });

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our IT Consulting Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div ref={project1Ref}>
            <div className="mb-4">
              <img src="/images/mainimage1.jpg" alt="Cloud Migration" className="rounded-lg w-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Cloud Migration Strategy</h3>
            <p className="text-white/70">
              Scalable Azure cloud architecture for a logistics firm—achieving 30% cost savings.
            </p>
          </div>

          {/* Project 2 */}
          <div ref={project2Ref}>
            <div className="mb-4">
              <img src="/images/mainimage2.jpg" alt="Cybersecurity Platform" className="rounded-lg w-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Cybersecurity Framework</h3>
            <p className="text-white/70">
              Built a zero-trust model with IAM and SIEM for a financial client.
            </p>
          </div>

          {/* Project 3 */}
          <div ref={project3Ref}>
            <div className="mb-4">
              <img src="/images/mainimage3.jpg" alt="Digital Transformation" className="rounded-lg w-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Digital Transformation Roadmap</h3>
            <p className="text-white/70">
              Led agile DevOps rollout for a Caribbean government agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
