import { Typewriter } from 'react-simple-typewriter';


function Home(){
  const fullText = `> FILE #0087-A4X :: PRANAV KADIYAM
> STATUS: ACTIVE — UNDER SURVEILLANCE
> PROFILE:
    • Full-Stack Developer
    • Training in Cybersecurity Protocols
    • Experimenting with AI / ML Constructs
    • Game Developer in Progress
> THREAT LEVEL: RISING
> NOTE: System logs show rapid skill acquisition — monitor closely.`;

    return(
        <>
        <div className="pages">
            <div className="topName">
                ✦ Greetings, Runner  
            </div>
            <div className="middleBody">
            <pre className='cyber-text'>
                <Typewriter
                    words={[fullText]}
                    typeSpeed={30}
                    cursor
                    cursorStyle="<"
                />
            </pre>
            </div>

            <div className="bottomButtons">
                <a
                href="personal-portifolio\src\assets\Internship Resume.pdf"
                target='_blank'
                download="Pranav-Kadiyam-Resume.pdf"
                style={{ textDecoration: 'none',   color: '#00f0ff', }}
                >
                <button style={{ all: 'unset', cursor: 'pointer' }}>
                    📄 Access Resume
                </button>
                </a>
                <a
                href="https://github.com/ferociousPandaPickle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#00f0ff' }}
                >
                <button style={{ all: 'unset', cursor: 'pointer' }}>
                    🚪 Access Repository
                </button>
                </a>
            </div>

        </div>
        </>
    )
}
export default Home