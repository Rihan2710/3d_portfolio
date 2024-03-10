import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    c,
    c_plus,
    java,
    python,
    firebase,
    php,
    android,
    mysql,
    idocker,
    opencv,
    car,
    contact,
    editor,
    lock,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Programming",
    },
    {
        imageUrl: c_plus,
        name: "C++",
        type: "Programming",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Programming",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: android,
        name: "Android",
        type: "Programming",
    },
    {
        imageUrl: mysql,
        name: "My-Sql",
        type: "Database",
    },
    {
        imageUrl: idocker,
        name: "Docker",
        type: "Software",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "Library",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rihan2710',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rihan-nardekar-8535a7258',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals. With an budget friendly purchase to desired things. ',
        link: 'https://github.com/Rihan2710/PriceDeals',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Smart Switch',
        description: 'Created an Android app with Bluetooth module integration for remote control of appliances,establishing a wireless connection between users device & Arduino module',
        link: 'https://github.com/Rihan2710/SmartSwitch',
    },
    {
        iconUrl: editor,
        theme: 'btn-back-blue',
        name: 'Code Editor',
        description: 'This software offers visual file representation, real-time collaboration through Firebase cloud database, integrated run and compile features with file operations. With Swing for a user friendly GUI.',
        link: 'https://github.com/Rihan2710/Code_Editor',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos, shorts & audio tracks. Can connect with friends in a familiar social media environment. With an encryption algorithm on uploading media. ',
        link: 'https://github.com/Rihan2710/Instagram_Clone',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D Portfolio',
        description: 'Developed a 3d portfolio website using Three.js , Tailwind CSS, React by Vite and Emailjs. With a live hosting on deployment platform. Used SketchFab for free 3d models.',
        link: 'https://github.com/Rihan2710/3d_portfolio',
    },
    {
        iconUrl: lock,
        theme: 'btn-back-yellow',
        name: 'Guardian Mate',
        description: 'App that helps people for good cause while in emergency like forgot phone, lost your phone or robbed. Feauters include Access Contacts, Location, Ring Mobile, Lock Mobile Screen by remotely device. ',
        link: 'https://github.com/Rihan2710/GuardianMate',
    }
];