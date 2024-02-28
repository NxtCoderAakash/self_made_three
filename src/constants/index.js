import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    credrIcon,
    nxtWave

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
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "MyResume",
      link:"https://drive.google.com/file/d/1BZ9dRmqsblHUH5R9wPm2x_3GJfTJL1Qz/view"
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "4+ Repositories  150+ Features",
      icon: backend,
    },
    {
      title: "1800+ Hours 20000+ Lines",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Credr, Incredible Incredible Technologies Pvt. Ltd.",
      icon: credrIcon,
      iconBg: "#383E56",
      date: "April 2023 - March 2024 (Ongoing)",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Highlights: 1+ Public Website, 3+ Internal Website, 4+ Code Repositories ,20+ Team Members, 150+ minor features,160 + Api Integration, 200+ Bugs Fixes, 1200+ hours of Live Coding and 20000+ Lines of Code.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Apprentice",
      company_name: "Nxt Wave Technologies Pvt. Ltd.",
      icon: nxtWave,
      iconBg: "#E6DEDD",
      date: "August 2022 - March 2023 ",
      points: [
        "Traversed and Learnt IR 4.0 Technologies with MERN Stack as sepcialization",
        "Completed Assigments timely and designed 30+ mini-projects to hone my skills for Frontend Development",
        "Implementing responsive design to learn ReactJS, Redux, Javascript, CSS, HTML, SQLite and NodeJS",
        "Participating in code reviews and inculcating constructive feedback from my mentors.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His meticulous attention to detail and dedication to project ownership are truly admirable. Aakash consistently delivers top-notch code and creative solutions to challenges.",
      name: "Anoop Munshi",
      designation: "AVP",
      company: "Credr",
      image: "https://i.postimg.cc/yNztQBRS/anoop-munshi-logo.jpg",
    },
    {
      testimonial:
        "His proficiency in ReactJS and typescript is truly commendable, evident in the successful completion of many of our projects. Aakash’s dedication and collaborative spirit make them an invaluable team member.",
      name: "Bhuvanachandra Kuppili",
      designation: "SDE-3, SSE",
      company: "Credr",
      image: "https://i.postimg.cc/fTGryZBg/Bhuvana.jpg",
    },
    {
      testimonial:
        "Aakash's Proficiency and Dedication is commendable and his ownership of Work is truly recommendable.!",
      name: "Praveen Malviya",
      designation: "SSE",
      company: "Credr",
      image: "https://i.postimg.cc/fRMgm5Qx/praveen.jpg",
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