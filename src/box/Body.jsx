
import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import HomeBox from '../pages/HomeBox';    
import AboutBox from '../pages/AboutBox';
import ProjectsBox from '../pages/ProjectsBox';

function Body(){
    const [hash,setHash] = useState(window.location.hash || '#home');

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return(
        <>
        <div className="terminal-emulator">
            <Header/>
            <div>
                {hash == '#home' && <HomeBox />}
                {hash == '#about' && <AboutBox />}
                {hash == '#projects' && <ProjectsBox />}
            </div>
        </div>
        
        </>
    )
}
export default Body