import WeatherApp from "@/public/Weather-App.png";
import MovieApp from "@/public/Movie-App.png";
import Twice from "@/public/Twice.png";
import Corif from "@/public/Corif-App.png";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as DiIcons from "react-icons/di";
export const ProjectDetails = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Real-Time Weather Forecasting and Other Weather-Related Data.",
    img: WeatherApp,
    link: "https://weather-app-by-crizronell.vercel.app/",
    stack1: <SiIcons.SiTailwindcss size={30} />,
    stack2: <GrIcons.GrReactjs size={30} />,
    stack3: <SiIcons.SiNextdotjs size={30} />,
    github: <BsIcons.BsGithub size={30} />,
    githublink: "https://github.com/crizronell/Weather-App",
  },
  {
    id: 2,
    title: "Movie App",
    description:
      "An app with information about movies. Watch trailers and get updated.",
    img: MovieApp,
    link: "https://movie-app-by-crizronell.vercel.app/",
    stack1: <SiIcons.SiTailwindcss size={30} />,
    stack2: <GrIcons.GrReactjs size={30} />,
    stack3: <SiIcons.SiNextdotjs size={30} />,
    github: <BsIcons.BsGithub size={30} />,
    githublink: "https://github.com/crizronell/MovieApp",
  },
  {
    id: 3,
    title: "Twice",
    description:
      "Ready to Be is the twelfth extended play by South Korean girl group Twice.",
    img: Twice,
    link: "https://twice-by-crizronell.vercel.app/",
    stack1: <SiIcons.SiTailwindcss size={30} />,
    stack2: <GrIcons.GrReactjs size={30} />,
    stack3: <SiIcons.SiNextdotjs size={30} />,
    github: <BsIcons.BsGithub size={30} />,
    githublink: "https://github.com/crizronell/ONCE",
  },
  {
    id: 4,
    title: "Corif App",
    description:
      "Capstone Online Repository With Information Filtering: An app where you can store and search capstone project documents.",
    img: Corif,
    stack1: <SiIcons.SiPostgresql size={30} />,
    stack2: <SiIcons.SiExpress size={30} />,
    stack3: <GrIcons.GrReactjs size={30} />,
    stack4: <DiIcons.DiNodejsSmall size={30} />,
    stack5: <BsIcons.BsFillBootstrapFill size={30} />,
    github: <BsIcons.BsGithub size={30} />,
    githublink: "https://github.com/crizronell/Capstone-repository-Client",
  },
];
