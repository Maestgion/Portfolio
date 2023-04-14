import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    srm,
    cn,
    envision,
    coder,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextjs,
    expressjs,
    bs,
    mui,
    framerMotion
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Beginner AR Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bs,
    },
    {
      name: "Material Ui",
      icon: mui,
    },
    {
      name: "Framer Motion",
      icon: framerMotion,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
 
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Coding Ninjas Club SRM",
      icon: cn,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - April 2022",
      points: [
        "Worked as a Front-end developer in this Student Led Club. Developed the front-end for the websites as per the requirement.",
        "Had the experience of working in a  a a collaborative environment as I collaborated with cross-functional teams including designers, content-writers, and other developers to create high-quality websites.",
        "Implemented the responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Team Envision",
      icon: envision,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Nov 2022",
      points: [
        "Worked as a Front-end developer in the technical team of Aaruush(Technical Fest of SRMIST). Developed the front-end for the websites as per the requirement.",
        "Collaborated with cross-functional teams including designers, content-writers, and other developers to create high-quality websites.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed the sites using React. JS, Next.JS and othe technologies.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Hackathons",
      icon: coder,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Started participating in hackathons as and worked as a front-end developer.",
        "Won the 'Smart India Hackathon 2022' and the role was of a front-end deceloper.",
        "Worked in a highly Collaborative atmosphere with the fellow developers and designers.",
        "Participated in 'SRM Smart Campus' hackathon and worked as a Full Stack Developer.",
        "The Journey is still going on..."
      ],
    },
    {
      title: "Web Developer",
      company_name: "SRMIST",
      icon: srm,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Developing In-house Projects for the University.",
        "Working under the guidance of the Professors to execute the ideas efficiently.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };