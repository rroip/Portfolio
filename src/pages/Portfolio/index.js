
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
            description: 'MERN Description',
            link: "https://google.com",
            repo: "https://github.com",
            image: FitCalScreen
        },
        {
            name: 'Password Generator',
            description: 'Description',
            link: "https://github.com",
            repo: "https://github.com",
            image: PwScreen
        },
        {
            name: 'Team Generator',
            description: 'Description',
            link: "https://github.com",
            repo: "https://github.com",
            image: Team
        },
        {
            name: 'Note Taker',
            description: 'Description',
            link: "https://github.com",
            repo: "https://github.com",
            image: NoteTaker
        },
        {
            name: 'Weather App/API',
            description: 'Description',
            link: "https://github.com",
            repo: "https://github.com",
            image: WeatherApp
        },
        {
            name: 'Work Day Schedule',
            description: 'Description',
            link: "https://github.com",
            repo: "https://github.com",
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