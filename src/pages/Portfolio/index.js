
import Project from '../../components/Project';
import FitCalScreen from "./assets/FitCal_screenshot.png";
import PwScreen from "./assets/PW_Screen_Shot.png";
import Team from "./assets/My_Team_screenshot.png";
import NoteTaker from "./assets/Note_Taker schreenshot.png";
import WeatherApp from "./assets/weather app screenshot.png";
import WorkDaySchedule from "./assets/Screen Shot.png";
import "../../App.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function Portfolio() {
    const data = [
        {
            name: 'FitCal',
            description: 'FitCal is a fitness app with integration of APIs, graphs, forms and secure user account creation.',
            link: "https://fitcalxxii.herokuapp.com",
            repo: "https://github.com/rroip/FitCalv2",
            image: FitCalScreen
        },
        {
            name: 'Password Generator',
            description: 'This is a simple password generator app.',
            link: "https://rroip.github.io/Password_Challenge/",
            repo: "https://github.com/rroip/Password_Challenge",
            image: PwScreen
        },
        {
            name: 'Team Generator',
            description: 'Team Generator application to assist the user with creation of their own dream team file database.',
            link: "https://github.com/rroip/Team-Generator",
            repo: "https://github.com/rroip/Team-Generator",
            image: Team
        },
        {
            name: 'Note Taker',
            description: 'Note Taker application to assist the user with quick saving of reminders and notes. Note Taker allows users to write and save their notes in a simple to use interface.',
            link: "https://ssnotetaker.herokuapp.com",
            repo: "https://github.com/rroip/Note_Taker",
            image: NoteTaker
        },
        {
            name: 'Weather App/API',
            description: 'Weather Dashboard app lets user to use OpenWeather One Call API inside a clean and simple interface.',
            link: "https://rroip.github.io/Weather-Dashboard/",
            repo: "https://github.com/rroip/Weather-Dashboard",
            image: WeatherApp
        },
        {
            name: 'Work Day Schedule',
            description: 'A simple scheduler that anables the user to organize and save thir workday.',
            link: "https://rroip.github.io/Day-Scheduler/",
            repo: "https://github.com/rroip/Day-Scheduler",
            image: WorkDaySchedule
        }
    ];

    return (
        <section className='portfolio'>
            <h2>Portfolio</h2>
            <Container className=''>
                <Row className='p-1'>
                    {data.map((project, i) => (
                        <Col xs={6} md={6} className='project-col'>
                            <Project data={project} key={"project" + i} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;