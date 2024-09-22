'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from './page.module.css'
import foundationImg from '../../public/images/nepra_foundation.jpg'
import CarouselComponent from './component/carousel/page';

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h2">NEPRA Foundation</h2>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className={styles.homeText}>
                NEPRA is committed to the communities in which it operates.
                This has led to the creation of NEPRA Foundation to support
                the Bottom of the Economic Pyramid (BoEP) sections of society,
                and drive positive socio-economic and environmental impact
                through diverse community engagement initiatives and waste
                management activities.
                Founded in 2012, NEPRA Foundation is a charitable trust registered
                under the Trust Registration Act, 1950. It is 12A and 80G certified.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center p-4">
              <Image
                src={foundationImg}
                width={500}
                height={430}
                alt="Nepra Foundation Image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
