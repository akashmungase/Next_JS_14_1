import { Col, Container, Row } from "react-bootstrap";
import footerStyle from './footer.module.css'
import Image from "next/image";
import footerLogo from '../../../../../public/images/footer-logo.png'

export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Container>
                <Row>
                    <Col>
                        <div className="mb-3">
                            <Image
                                src={footerLogo}
                                width={150}
                                height={200}
                                alt="Footer Image"
                            />
                        </div>
                        <h1 className={footerStyle.H1}>REGISTERED ADDRESS</h1>
                        <p className="py-4">
                            B/36, Aryaman Bungalow,
                            opposite Anand Niketan School, Near Thaltej-Shilaj Crossing, Daskroi, Ahmedabad,
                            Gujarat, India- 380054
                        </p>
                        <h1 className={footerStyle.H1}>COMMUNICATION ADDRESS</h1>
                        <p className="py-4">
                            708, 7th Floor, Noble Trade Center, Opp. B.D. Rao Hall, Near Bhuyangdev Cross Roads, Memnagar, Ahmedabad, Gujarat, India- 380052
                        </p>
                        <b>Phone No:-</b> <span>+91-79-40050400</span>
                        <b className="me-1">Write to us at:</b>
                        <a href="mailto:info@neprafoundation.org">info@neprafoundation.org</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}