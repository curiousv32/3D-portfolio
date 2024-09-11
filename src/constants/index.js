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
    sob,
    devwyre,
    starbucks,
    tesla,
    shopify,
    carrent,
    hero,
    bitcoin,
    assemble,
    jobit,
    tripguide,
    threejs,
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
      title: "Backend Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Solutions Architect",
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Blockchain Developer(internship)",
      company_name: "Summer Of Bitcoin(Bitcoin-core contributor)",
      icon: sob,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - August 2023",
      points: [
        "Contributed to Bitcoin open-source projects under the mentorship of established Bitcoin developers and designers.",
        "Leveraged a curated set of resources and experts to deepen understanding of Bitcoin and its underlying technology.",
        "Developed real-world software solutions, contributing over 50,000 lines of code.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Vendavault",
      icon: devwyre,
      iconBg: "#383E56",
      date: "March 2023 - April 2024",
      points: [
        "Designing and developing scalable, high-performance backend services using modern frameworks and technologies.",
        "Designing and implementing data storage solutions and ensuring their scalability and security.",
        "Troubleshooting, debugging, and enhancing existing backend systems for improved performance and functionality.",
        "Implementing automated testing platforms and unit tests to ensure the robustness and reliability of backend services.",
        "Collaborating with the DevOps team to manage server deployments and ensure reliable uptime."
      ],
    },
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
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Victor proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "After Victor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Chow Chow Food Ordering App",
      description:
        "A comprehensive food ordering platform that enables users to create and manage restaurants, place orders, and process payments seamlessly through Stripe. Offers a user-friendly interface and real-time order tracking for both restaurant owners and customers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "yellow-text-gradient",
        },
      ],
      image: hero, 
      source_code_link: "https://github.com/curiousv32/chow-chow-foodapp-frontend",
    },    
    {
      name: "BIP 340 Adaptor Signatures",
      description:
        "The BIP 340 Adaptor Signatures Module for libsecp256k1-zkp enhances Bitcoin transactions by implementing advanced cryptographic protocols. It builds on Schnorr signatures to improve privacy, security, and functionality. ",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "bitcoin",
          color: "green-text-gradient",
        },
        {
          name: "security",
          color: "pink-text-gradient",
        },
        {
          name: "libsecp256k1",
          color: "yellow-text-gradient",
        },
      ],
      image: bitcoin, 
      source_code_link: "https://curiousv32.github.io/bitcoin-node.github.io/",
    },    
    {
      name: "Assemble",
      description:
        "Assemble is a one-stop mobile application designed to help post-secondary students manage their academic and life tasks more efficiently. The app integrates note-taking, study tools, and to-do lists into a single platform, simplifying the process of staying organized and focused. By consolidating multiple tools into one, Assemble enhances productivity, reduces cognitive load, and ensures students never miss a deadline.",
      tags: [
        {
          name: "android mobile-app",
          color: "blue-text-gradient",
        },
        {
          name: "productivity",
          color: "green-text-gradient",
        },
        {
          name: "note-taking",
          color: "pink-text-gradient",
        },
        {
          name: "study-tools",
          color: "yellow-text-gradient",
        },
      ],
      image: assemble,  // Assuming 'hero' is an image relevant to Assemble. Replace if needed.
      source_code_link: "https://curiousv32.github.io/posts/study-app-project-presentation/",
    },    
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };