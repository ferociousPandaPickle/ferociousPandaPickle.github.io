

import personalweb from '../assets/portifolio-web_optimized.png'

function Projects(){
    return(
        <>
        <div className="pages">
            <div className="project-card">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <img src= {personalweb} width={400} height={200} alt="skill-cards" className="project-photo"></img>
                </a>
                <h2>Personal Portifolio V-1</h2>
                <p>This is my personal portifolio</p>
                <div>
                    <button>React</button>
                    <button>CSS</button>
                    <button>HTML</button>
                </div>
            </div>

            <div className="project-card">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <img src= {personalweb} width={400} height={200} alt="skill-cards" className="project-photo"></img>
                </a>                <h2>Personal Portifolio V-1</h2>
                <p>This is my personal portifolio</p>
                <div>
                    <button>React</button>
                    <button>CSS</button>
                    <button>HTML</button>
                </div>
            </div>

        </div>
        </>
    )
}
export default Projects