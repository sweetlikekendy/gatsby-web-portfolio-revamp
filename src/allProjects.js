import smartlandscapeImg from "./images/smartlandscape.png"
import calvinelandscapeImg from "./images/calvine landscape.png"
export const allProjects = [
  {
    name: "Smart Landscape SD",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "gatsby",
      "sanity",
      "netlify",
    ],
    img: smartlandscapeImg,
    description:
      "Redesign of another landscaping business page. The form on the old website was not working, redesigned to have form on every single page.",
    demoLink: "http://smartlandscapesd.com/",
  },
  {
    name: "Calvine Landscape",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "gatsby",
      "sanity",
      "netlify",
    ],
    img: calvinelandscapeImg,
    description:
      "Redesigned a client's landscaping business page. Using Gatsby as a foundation, page speed greatly increased.",
    demoLink: "http://calvinelandscape.com/",
  },
  {
    name: "Let Me In",
    techStack: [
      "html5",
      "css3",
      "javascript",
      "react",
      "node",
      "express",
      "mongodb",
    ],
    img: "https://picsum.photos/id/12/200/200",
    description:
      "A CRUD application that allows a user to add a home to a database with the corresponding gate/access code. The user will be able to search for the home when they're on route. The search mechanics are case-sensitive.",
    demoLink: "https://protected-oasis-33800.herokuapp.com/",
    repoLink:
      "https://github.com/sweetlikekendy/access-house-react-express-mongo",
  },
]

export const techLinks = ["https://gatsbyjs.org", "https://sanity.io"]
