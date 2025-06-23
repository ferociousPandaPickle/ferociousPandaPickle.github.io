import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiSpringboot, SiLua, SiDart } from "react-icons/si";


function About(){

    const fullText = `I'm a passionate developer with experience across multiple programming languages and technologies. I enjoy building innovative solutions and learning new technologies to solve complex problems. From low-level programming with C/C++ to modern web development with React, I bring versatility and dedication to every project I work on.`;


    const TechLogo = ({ icon, name }) => (
    <div className="flex flex-col items-center p-2 text-white hover:scale-110 transition">
        <div className="text-4xl">{icon}</div>
        <div className="mt-1 text-sm">{name}</div>
    </div>
    );


    return(
        <>
        <div className="pages">
            <div className="short-des">
                <Typewriter
                    words={[fullText]}
                    typeSpeed={30}
                    cursor
                    cursorStyle="<"
                />
            </div>
            <div className="I-know">
                <TechLogo icon={<SiC />} name="C" />
                <TechLogo icon={<SiCplusplus />} name="C++" />
                <TechLogo icon={<FaHtml5 />} name="HTML" />
                <TechLogo icon={<FaCss3Alt />} name="CSS" />
                <TechLogo icon={<FaJs />} name="JavaScript" />
                <TechLogo icon={<FaReact />} name="React" />
                <TechLogo icon={<FaPython />} name="Python" />
                <TechLogo icon={<FaJava />} name="Java" />
                <TechLogo icon={<SiMongodb />} name="MongoDB" />
                <TechLogo icon={<SiSpringboot />} name="Spring Boot" />
                <TechLogo icon={<SiLua />} name="Lua" />
                <TechLogo icon={<SiDart />} name="Dart" />
            </div>
        </div>
        </>
    )
}
export default About