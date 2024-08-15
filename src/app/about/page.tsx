import Image from "next/image";
import { Col, Container, Nav, Row } from "react-bootstrap";
import aboutImg from '../../../public/images/about-us.jpg'
import visionImg from '../../../public/images/img-1_about.png'
import missionImg from '../../../public/images/img-2_mission.jpg'
import dirEng from '../../../public/images/icn-direct_engagement.png'
import outCom from '../../../public/images/icn_outcome.png'
import iconDev from '../../../public/images/icn_development.png'
import icnBuilding from '../../../public/images/icn_building-green_economy.png'
import icnWaste from '../../../public/images/icn_waste_manag.png'
import icnStak from '../../../public/images/icn_building-green_economy.png'
import styles from './about.module.css'
import Link from "next/link";

export default function About() {
    return (
        <div>
            <div className={styles.imageContainer}>
                <Image
                    src={aboutImg}
                    layout="responsive"
                    width={700}
                    height={445}
                    alt="About Image"
                    className={styles.customImage}
                />
            </div>
            <Container>
                <div className="my-2">
                    <Nav>
                        <Link href={'/home'} className='nav-link text-dark'>Home</Link>
                        <Link href={'/about'} className='nav-link'>About</Link>
                    </Nav>
                </div>
            </Container>
            <hr />
            <Container className="mb-5">
                <h1 className={styles.aboutTitle}>ABOUT US</h1>
                <p className={styles.aboutUsText}>
                    Founded in the year 2012, NEPRA Foundation is one of a kind organisation focusing
                    on making a socio-economic and environmental impact by engaging in several activities
                    and initiatives involving different stakeholders in the waste management sector.
                    With the purpose to create a positive impact, NEPRA Foundation has curated several
                    initiatives for the well-being of the waste picker community and to enable behavioural
                    change toward sustainable waste management practices.Till date, NEPRA foundation
                    through its awareness activities has reached out to over ~3 million individuals
                    enabling behavioural change towards waste management. Its dry waste management education
                    initiative has sensitized more than 1.5 million students empowering them to be
                    changemakers for a sustainable future. NEPRA foundation is also involved in empowering
                    the women of the BoEP section by providing them opportunities to earn a living by
                    making waste into a source of income. Foundation's education support has helped over
                    100 children of the waste pickers community to attain quality education.NEPRA
                    Foundation has initiated projects and initiatives in line with making a positive
                    impact on People and the Planet collectively.
                </p>
            </Container>
            <div className={styles.greybg}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4 mb-md-0">
                            <h2 className="h2">VISION</h2>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p className={styles.aboutUsText}>
                                    Impact and drive socio economic benefits to People and Planet
                                    positively  by engaging in awareness activities and initiatives
                                    involving different stakeholders of the waste management sector.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-center p-4">
                                <Image
                                    src={visionImg}
                                    width={500}
                                    height={430}
                                    alt="About Image"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="my-3">
                <Row>
                    <Col md={6}>
                        <div className="d-flex justify-content-center p-4">
                            <Image
                                src={missionImg}
                                width={500}
                                height={430}
                                alt="About Image"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <h2 className="h2 mt-3">MISSION</h2>
                        <div>
                            <ul>
                                <li>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.aboutUsText}>
                                        Enable behavioural change towards waste segregation
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.aboutUsText}>
                                        Mainstream the waste picker community with a special
                                        emphasis on women and children to achieve environmental justice
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.aboutUsText}>
                                        Empower children to become change makers for
                                        a sustainable future
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.aboutUsText}>
                                        Create value chain and empower through ecosystem
                                        creation for different waste streams
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.aboutUsText}>
                                        Improve better standards of living for Bottom
                                        of the Economic Pyramid (BoEP) workers
                                        and create enabling environment with better
                                        opportunities for them in the waste
                                        management sector and related activities
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={styles.blurBG}>
                <Container className="mt-3 text-white">
                    <Row>
                        <Col className="text-center">
                            <h2 className="h2 mt-5">OUR APPROACH</h2>
                            <Row className="my-4">
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={dirEng}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Direct Engagement
                                        </span>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={outCom}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Outcome & Impact Orientation
                                        </span>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={iconDev}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Enabling Models of Development
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-3 mb-5">
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={icnBuilding}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Direct Engagement
                                        </span>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={icnWaste}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Organizing the Waste Management Sector
                                        </span>
                                    </div>
                                </Col>
                                <Col md="4" xs="12">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image
                                            src={icnStak}
                                            width={125}
                                            height={125}
                                            alt="Image"
                                        />
                                        <span className={styles.iconText}>
                                            Prioritizing all Stakeholders
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}