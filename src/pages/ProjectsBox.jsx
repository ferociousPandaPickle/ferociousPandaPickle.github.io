

import personalweb from '../assets/portifolio-web_optimized.png'

function Projects(){
    return(
        <>
        <div className="pages">

            <div className="project-container">
                <div className="project-card">
                    <a href="https://github.com/ferociousPandaPickle/ferociousPandaPickle.github.io" target="_blank" rel="noopener noreferrer">
                        <img src= {personalweb} alt="skill-cards" className="project-photo"></img>
                    </a>
                    <h2>Personal Portifolio V-1</h2>
                    <p>This is my personal portifolio</p>
                    <div className="tech-tags">
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                    </div>
                </div>
                {/* <div className="project-card">
                    <a href="https://github.com/ferociousPandaPickle/ferociousPandaPickle.github.io" target="_blank" rel="noopener noreferrer">
                        <img src= {personalweb} alt="skill-cards" className="project-photo"></img>
                    </a>
                    <h2>Personal Portifolio V-1</h2>
                    <p>This is my personal portifolio</p>
                    <div className="tech-tags">
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default Projects