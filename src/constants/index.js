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
    house,
    college,
    godot,
    python,
    threads,
    promptopia,
    portfolio,
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Game Developer",
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
        name: "Python",
        icon: python,
    },
    {
        name: "Godot",
        icon: godot,
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
        title: "Self-Taught",
        company_name: "Home",
        icon: house,
        iconBg: "#383E56",
        date: "January 2022 - September 2023",
        points: [
            "Learning Basic Web Development HTML-CSS, JavaScript.",
            "Learning Basic Game Development With Godot Engine.",
            "Learning FrontEnd Framework such as ReactJs and Tailwind .",
            "Learning BackEnd Framework such as NextJs and Express.",
            "Making Web and Game Project.",
        ],
    },
    {
        title: "College",
        company_name: "Bina Sarana Informatika",
        icon: college,
        iconBg: "#163bb3",
        date: "September 2023 - Present",
        points: [
            "Learning Python Basic.",
            "Learning Basic Machine Learning with Python.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "An amazing web developer! The website created is a marvel: aesthetic, responsive, and full of innovation. Thank you so much!",
        name: "Chat Gpt 3.5",
        designation: "Chatbot",
        company: "Open AI",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png",
    },
    {
        testimonial:
            "I am very satisfied with the work of Ryan. The website they created met my needs and was completed on time. Ryan was also very communicative and responsive to my questions. I highly recommend Ryan to anyone who needs web development services.",
        name: "Bard",
        designation: "Chatbot",
        company: "Google",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_Bard_logo.svg/600px-Google_Bard_logo.svg.png",
    },
    {
        testimonial:
            "I am very pleased with the end result you provided. I am very impressed with your skills in developing an attractive and user-friendly website. I also appreciate your hard work and ability to meet deadlines. Thank you very much! 🙏",
        name: "Bing Ai",
        designation: "Chatbot",
        company: "Microsoft",
        image: "https://logos-world.net/wp-content/uploads/2021/02/Bing-Emblem.png",
    },
];

const projects = [
    {
        name: "Threads Clone",
        description:
            "Threads is a social media website that I have cloned. It's a platform that allows users to share content with friends, follow interesting content, interact through comments and likes, and join groups and communities. Users can also communicate through private messages, explore personalized feeds, and manage their privacy settings. In addition, Threads supports sharing multimedia content, notifications, and responsiveness across various devices.",
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
                name: "nextJs",
                color: "pink-text-gradient",
            },
        ],
        image: threads,
        source_code_link: "https://github.com/Elbanteny/threads_clone",
        web_link: "https://threads-clone-sage.vercel.app/"
    },
    {
        name: "Promptopia",
        description:
            "Promptopia is a website designed for gathering chatbot prompts, offering a diverse range of conversation starters and interaction ideas. It's a valuable resource for chatbot developers and enthusiasts looking to enhance dialogues and inspire AI projects.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextJs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: promptopia,
        source_code_link: "https://github.com/Elbanteny/promptopia",
        web_link: "https://promptopia-one-phi.vercel.app/"
    },
    {
        name: "Tailwind Portfolio",
        description:
            "Portfolio website with Tailwind: An online showcase of an individual's work and achievements, built with Tailwind CSS for quick, responsive design. This sleek and modern portfolio includes projects, info about the person, and features both dark and light modes for user preference.",
        tags: [
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "javaScript",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Elbanteny/portfolio-tailwind-css",
        web_link: "https://elbanteny.github.io/portfolio-tailwind-css/#home"
    },
];

export { services, technologies, experiences, testimonials, projects };