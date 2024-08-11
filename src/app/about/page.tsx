import Image from "next/image";
import { Container, Nav } from "react-bootstrap";
import aboutImg from '../../../public/images/about-us.jpg'
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
                    className={styles.fullWidthImage}
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
        </div>
    )
}