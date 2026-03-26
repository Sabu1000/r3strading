const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Results",
    link: "#results",
  },
  {
    name: "Specialization",
    link: "#specialization",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Innovation", imgPath: "/images/ideas.svg" },
  { text: "Vision", imgPath: "/images/vision_logo_scaled.svg" },
  { text: "Opportunity", imgPath: "/images/designs.svg" },
  { text: "Brilliance", imgPath: "/images/brilliance_logo_star_bold.svg" },
  { text: "Innovation", imgPath: "/images/ideas.svg" },
  { text: "Vision", imgPath: "/images/vision_logo_scaled.svg" },
  { text: "Opportunity", imgPath: "/images/designs.svg" },
  { text: "Brilliance", imgPath: "/images/brilliance_logo_star_bold.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Years of Industry Experience" },
  { value: 300, suffix: "+", label: "Enterprise Clients Served" },
  { value: 150, suffix: "+", label: "Successful Digital Transformations" },
  { value: 95, suffix: "%", label: "Customer Satisfaction Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Cloud Solutions",
    imgPath: "/images/logos/cloud1.png",
  },
  {
    name: "AI & Data Engineering",
    imgPath: "/images/logos/brain1.png",
  },
  {
    name: "API & Backend Systems",
    imgPath: "/images/logos/computer1.png",
  },
  {
    name: "Interactive UX Engineering",
    imgPath: "/images/logos/paint1.png",
  },
  {
    name: "Version Control & DevOps",
    imgPath: "/images/logos/infinity1.png",
  },
];


const techStackIcons = [
  {
    name: "Cloud Solutions",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI & Data Engineering",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "API & Backend Systems",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive UX Engineering",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control & DevOps",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
  {
    review:
      "This consulting team transformed our legacy systems into a robust cloud-native infrastructure. Their strategic insight and technical delivery were key to a smooth migration.",
    imgPath: "/images/randomcompanylogo1.png",
    logoPath: "/images/r3slogo1.png",
    title: "Cloud Solutions Architect",
    date: "March 2023 – Present",
    responsibilities: [
      "Designed and deployed enterprise-grade cloud migration strategies on Microsoft Azure.",
      "Conducted infrastructure assessments and cost optimization analyses.",
      "Enabled secure and scalable deployments using IaC tools like Terraform and Bicep.",
    ],
  },
  {
    review:
      "The cybersecurity framework implemented by this team gave us peace of mind. They handled risk assessment, identity access, and compliance flawlessly.",
    imgPath: "/images/randomcompanylogo2.png",
    logoPath: "/images/r3slogo1.png",
    title: "Cybersecurity Consultant",
    date: "January 2021 – February 2023",
    responsibilities: [
      "Developed zero-trust architectures and identity access management (IAM) frameworks.",
      "Led security audits and compliance assessments (ISO 27001, NIST).",
      "Implemented SIEM solutions and trained internal teams on threat detection.",
    ],
  },
  {
    review:
      "They led our digital transformation from planning through execution. Their agile leadership and technical roadmap reshaped our operations across departments.",
    imgPath: "/images/randomcompanylogo3.png",
    logoPath: "/images/r3slogo1.png",
    title: "Digital Transformation Lead",
    date: "July 2019 – December 2020",
    responsibilities: [
      "Oversaw enterprise-wide digital transformation initiatives for public sector clients.",
      "Integrated DevOps workflows and modernized application delivery pipelines.",
      "Advised C-suite on technology alignment, innovation strategy, and change management.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "James Carter",
    mentions: "@jcarter_enterprise",
    review:
      "R3STrading provided us with a seamless cloud migration strategy that modernized our infrastructure. Their team demonstrated outstanding technical depth and business alignment.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Daniel Kim",
    mentions: "@dankim_fintech",
    review:
      "The R3STrading team delivered a scalable microservices framework and CI/CD automation that reduced our deployment time by over 60%. Highly professional and efficient.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Michael Allen",
    mentions: "@mallen_hrsystems",
    review:
      "We partnered with R3STrading for a digital transformation initiative. Their agile methodology and Azure expertise brought clarity, structure, and speed to our project.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Jared Nguyen",
    mentions: "@jarednytech",
    review:
      "From strategy to execution, R3STrading exceeded expectations. Their DevOps solutions helped us cut release times and streamline environment provisioning dramatically.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Omar Harris",
    mentions: "@omarh_secops",
    review:
      "The cybersecurity framework R3STrading implemented covered compliance, access control, and threat detection. Their expertise is unmatched in cloud security.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Elliot Brooks",
    mentions: "@elliotgovcloud",
    review:
      "R3STrading helped our government agency modernize outdated infrastructure through efficient project management and cloud-native architecture. A trusted partner in public tech.",
    imgPath: "/images/client6.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
