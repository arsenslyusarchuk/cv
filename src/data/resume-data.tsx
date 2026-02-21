import type { ResumeData } from "@/lib/types";
import { Avatar } from "@/images/logos";

export const RESUME_DATA: ResumeData = {
  name: "Arsen Slyusarchuk",
  initials: "AS",
  location: "Lviv, Ukraine, EET",
  locationLink: "https://www.google.com/maps/place/Lviv",
  about: "PhD, Javascript Competency Manager at ELEKS",
  summary: (
    <>
      <p>
        With a foundation in Applied Mathematics and over a decade of experience
        in software engineering, I've built my career around leading, growing,
        and inspiring technical teams to deliver high-impact solutions.
        Currently, I serve as a Competency Manager, overseeing the continuous
        growth of a JavaScript engineering stream of over 200 specialists.
      </p>
      <p>
        My focus lies at the intersection of people management, technology
        strategy, and innovation. I'm deeply engaged in mentorship, conflict
        resolution, and staffing processes, ensuring that every engineer has a
        clear development path and that each team is built for both excellence
        and sustainability.
      </p>
      <p>
        Beyond people leadership, I actively contribute to R&D initiatives,
        pre-sales, and AI-driven solutions, bridging the gap between
        cutting-edge research and real-world software delivery.
      </p>
      <p>
        As a PhD in Engineering Sciences, my academic work centered on
        computational modeling and molecular simulations, resulting in
        publications in journals such as Macromolecules, Soft Matter, and Liquid
        Crystals.
      </p>
      <p>
        I'm passionate about continuous learning, team culture, and creating
        environments where people thrive, innovate, and grow together.
      </p>
    </>
  ),
  avatarUrl: Avatar,
  personalWebsiteUrl: "",
  contact: {
    email: "arsenslyusarchuk@gmail.com",
    tel: "+380937677173",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arsenslyusarchuk",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arsenslyusarchuk/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/ASlyusarchuk",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Lviv Polytechnic National University",
      degree:
        "PhD (Candidate of Technical Sciences). Defended a Thesis on specialty 'Mathematical Simulation and Methods of Calculation' ",
      start: "2013",
      end: "2021",
    },
    {
      school: "Lviv Polytechnic National University",
      degree: "Master's Degree in Applied Mathematics",
      start: "2008",
      end: "2013",
    },
  ],
  publications: [
    {
      citation:
        "Ilnytskyi J., Slyusarchuk A., Saphiannikova M. Photocontrollable self-assembly of azobenzene-decorated nanoparticles in bulk: Computer simulation study // Macromolecules. 2016. Vol. 49(23). P. 9272-9282.",
      doi: "10.1021/acs.macromol.6b01871",
    },
    {
      citation:
        "Ilnytskyi J., Slyusarchuk A., Sokołowski S. Gelation of patchy ligand shell nanoparticles decorated by liquid-crystalline ligands: computer simulation study // Soft Matter. 2018. Is. 19. P. 3799-3810.",
      doi: "10.1039/C8SM00356D",
    },
    {
      citation:
        "Ilnytskyi J., Slyusarchuk A., Saphiannikova M. Photo-controllable percolation of decorated nanoparticles in a nanopore: molecular dynamics simulation study // Mathematical Modelling and Computing. 2016. Vol. 3, N 1. P. 33-42.",
      doi: "10.23939/mmc2016.01.033",
    },
    {
      citation:
        "Slyusarchuk A., Yaremchuk D., Ilnytskyi J. Adsorption of decorated nanoparticles on a liquid crystalline polymer brush: molecular dynamics study // Mathematical Modelling and Computing. 2020. Vol. 7, N 2. P. 207-218.",
      doi: "10.23939/mmc2020.02.207",
    },
    {
      citation:
        "Slyusarchuk, A., Yaremchuk, D., Lintuvuori, J., Wilson, M. R., Grenzer, M., Sokołowski, S., & Ilnytskyi, J. Aided- and self-assembly of liquid crystalline nanoparticles in bulk and in solution: computer simulation studies // Liquid Crystals. 2023. Vol. 50, Issue 1, pp. 74–97.",
      doi: "10.1080/02678292.2023.2169872",
    },
  ],
  work: [
    {
      company: "Eleks",
      link: "https://eleks.com/",
      badges: [
        "Technology Strategy",
        "Mentorship",
        "Workshops",
        "Career Path",
        "Competency Assessment",
        "Technology Standards",
        "Interviewing",
        "R&D",
        "Pre-sales",
        "AI",
        "JavaScript",
      ],
      title: "Javascript Competency Manager",
      start: "2019",
      end: "present",
      description: (
        <>
          Leading a JavaScript competence stream of around 200 engineers across
          strategy, growth, and engineering excellence.
          <ul className="list-inside list-disc">
            <li>
              Define and execute the competence development strategy for the
              JavaScript stream
            </li>
            <li>
              Design and scale trainings, workshops, and knowledge-sharing
              programs
            </li>
            <li>Develop and govern structured career path frameworks</li>
            <li>
              Conduct competency assessments and develop expert interview groups
            </li>
            <li>
              Establish and promote technology standards and engineering best
              practices
            </li>
            <li>
              Drive technical interviewing and staffing decisions across teams
            </li>
            <li>
              Provide mentorship, coaching, and conflict resolution support
            </li>
            <li>Lead and contribute to R&D and AI-driven initiatives</li>
            <li>Support pre-sales activities and technical solution design</li>
            <li>Bridge research, AI innovation, and real-world delivery</li>
          </ul>
        </>
      ),
    },
    {
      company: "Lviv Polytechnic National University",
      link: "https://lpnu.ua/en",
      badges: ["Teaching", "Research", "Information Systems"],
      title:
        "Assistant of the Department of Information Systems and Technologies",
      start: "2020",
      end: "present",
      description:
        "Educational and Research Institute of Spatial Planning and Advanced Technologies. Teaching and research in information systems and technologies.",
    },
    {
      company: "Perfectial",
      link: "https://uk.wikipedia.org/wiki/Perfectial",
      badges: [
        "React",
        "React Native",
        "Angular",
        "Polymer",
        "Ionic",
        "Backbone.js",
        "Node.js",
        "Ruby on Rails",
        "Python",
        "AWS",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Solr",
        "Redux",
        "Flux",
        "Webpack",
        "Gulp",
      ],
      title: "Senior Full Stack Developer",
      start: "2012",
      end: "2019",
      description: (
        <>
          Progressed from Junior to Senior Software Engineer.
          <p>
            Delivered web and mobile solutions across 12 international projects
            spanning logistics, SaaS enterprise systems, marketplaces,
            advertising platforms, fintech, e-commerce, and real-time
            applications for US, UK, and EU clients.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Developed and delivered production-ready features based on
              technical specifications
            </li>
            <li>
              Built scalable front-end and back-end solutions across web and
              mobile platforms
            </li>
            <li>
              Implemented real-time functionality and interactive user
              experiences
            </li>
            <li>
              Contributed to multi-tenant SaaS and marketplace architectures
            </li>
            <li>Integrated APIs, payment systems, and third-party services</li>
            <li>
              Performed code reviews and maintained code quality standards
            </li>
            <li>Fixed defects and improved system performance and stability</li>
            <li>
              Collaborated directly with customers and cross-functional teams
            </li>
            <li>Participated in Agile-based development processes</li>
            <li>
              Contributed to architectural decisions and technology selection
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "LITS (Lviv IT School)",
      link: "http://lits.ua/",
      badges: ["Ruby on Rails", "Mentoring", "Teaching"],
      title: "Student Mentor — Ruby on Rails Course",
      start: "2015",
      end: "2016",
      description:
        "Mentored students through a Ruby on Rails development course, providing guidance on programming fundamentals, best practices, and project work.",
    },
  ],
  skills: [
    "Technology Strategy",
    "Competency Management",
    "Mentorship & Coaching",
    "Technical Interviewing",
    "Team Leadership",
    "Pre-sales",
    "Teaching & Research",
    "R&D / AI",
    "JavaScript/TypeScript",
    "React/React Native",
    "Angular",
    "Node.js",
    "Ruby on Rails",
    "Python",
    "PostgreSQL/MySQL/MongoDB",
    "AWS",
  ],
  projects: [],
} as const;
