import smartlandscapeImg from "./images/smartlandscape.png"
import calvinelandscapeImg from "./images/calvine landscape.png"
import ccdcImg from "./images/ccdc.png"
import nanocraftcbdImg from "./images/nanocraftcbd.png"
import petlycbdImg from "./images/petlycbd.png"
import letMeInImg from "./images/let-me-in.png"

export const allProjects = [
  {
    title: "Chinatown Community Development Center",
    techStack: ["html5", "css3"],
    imgSrc: ccdcImg,
    imgAlt: "",
    description: "Redesign of a careers landing page.",
    demoLink: "https://chinatowncdc.applytojob.com/apply/",
    type: "Client Work",
  },
  {
    title: "Nanocraft CBD",
    techStack: ["shopify", "html5", "css3", "javascript"],
    imgSrc: nanocraftcbdImg,
    imgAlt: "",
    description:
      "Redesigned product landing pages. Added more features to already existing theme",
    type: "Client Work",
    demoLink: "http://nanocraftcbd.com/",
  },
  {
    title: "PETLYcbd",
    techStack: ["shopify", "html5", "css3", "javascript"],
    imgSrc: petlycbdImg,
    imgAlt: "",
    description: "Added more features to already existing theme",
    demoLink: "http://petlycbd.com/",
    type: "Client Work",
  },
  {
    title: "Smart Landscape SD",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "gatsby",
      "sanity",
      "netlify",
    ],
    imgSrc: smartlandscapeImg,
    imgAlt: "",
    description:
      "Redesign of another landscaping business page. The form on the old website was not working, redesigned to have form on every single page.",
    type: "Client Work",
    demoLink: "http://smartlandscapesd.com/",
  },
  {
    title: "Calvine Landscape",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "gatsby",
      "sanity",
      "netlify",
    ],
    imgSrc: calvinelandscapeImg,
    imgAlt: "",
    description:
      "Redesigned a client's landscaping business page. Using Gatsby as a foundation, page speed greatly increased.",
    type: "Client Work",
    demoLink: "http://calvinelandscape.com/",
  },
  {
    title: "Let Me In",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "node",
      "express",
      "mongodb",
    ],
    imgSrc: letMeInImg,
    imgAlt: "",
    description:
      "A CRUD application that allows a user to add a home to a database with the corresponding gate/access code. The user will be able to search for the home when they're on route. The search mechanics are case-sensitive.",
    type: "Personal",
    demoLink: "https://protected-oasis-33800.herokuapp.com/",
    repoLink:
      "https://github.com/sweetlikekendy/access-house-react-express-mongo",
  },
]

export const techLinks = ["https://gatsbyjs.org", "https://sanity.io"]
