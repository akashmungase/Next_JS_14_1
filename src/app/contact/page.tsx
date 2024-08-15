import Image from "next/image";
import styles from './contact.module.css'
import contactImg from '../../../public/images/contact_us.jpg'
import { Col, Container, Nav, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div>
            <div className={styles.imageContainer}>
                <Image
                    src={contactImg}
                    layout="responsive"
                    width={1940}
                    height={480}
                    alt="About Image"
                    className={styles.customImage}
                />
            </div>
            <div className={styles.mapImg}>
                <Container className="mb-3">
                    <div className="my-2">
                        <Nav>
                            <Link href={'/home'} className='nav-link text-dark'>Home</Link>
                            <Link href={'/about'} className='nav-link'>Contact</Link>
                        </Nav>
                    </div>
                </Container>
                <Container className="shadow rounded bg-white p-3 my-5">
                    <Row>
                        <h2 className="h2 my-3">Contact US</h2>
                        <Col md="6" xs="12">
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: '20px', height: '40px', color: '#23a884' }} />
                                <p className="h4 pt-1 ps-3">Communication Address:</p>
                            </div>
                            <p className="px-5 fs-5 primary-text">708, 7th Floor, Noble Trade Center, Opp. B.D. Rao Hall,
                                Near Bhuyangdev Cross Roads, Memnagar, Ahmedabad, Gujarat, India- 380052
                            </p>
                            <div className="mt-2 d-flex">
                                <FontAwesomeIcon icon={faPhone} style={{ width: '20px', height: '50px', color: '#23a884' }} />
                                <h4 className="fs-5 pt-2 ps-3">+91-79-40050400</h4>
                            </div>
                            <div className="mb-2 d-flex">
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '20px', height: '40px', color: '#23a884' }} />
                                <h4 className="fs-5 pt-2 ps-3 theme-color">info@neprafoundation.org</h4>
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                        <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}