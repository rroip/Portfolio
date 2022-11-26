
import Project from '../../components/Project';
import FitCalScreen from "./assets/FitCal_screenshot.jpg";


function Portfolio() {
    const data = [
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://google.com",
            repo: "https://github.com",
            image: FitCalScreen
        },
        {
            name: 'pastel-puzzels',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com",
            image: ""
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://github.com",
            repo: "https://github.com",
            image: ""
        },
        {
            name: 'led-wall',
            description: 'Node/IoT',
            link: "https://github.com",
            repo: "https://github.com",
            image: ""
        },
        {
            name: 'calculator',
            description: 'React/JavaScript/CSS',
            link: "https://github.com",
            repo: "https://github.com",
            image: ""
        }
    ];

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>

            {data.map(project => {
                return (
                <Project 
                data={ project }
                />
              );
            })}


        </section>
    )
}

export default Portfolio;