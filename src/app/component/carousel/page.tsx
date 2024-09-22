import { Carousel } from 'react-bootstrap';
import styles from './carousel.module.css'

const CarouselComponent = () => {
    return (
        <Carousel fade interval={3000} pause={false} className={styles.carousel}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <h1 className={styles.slideInLeft}>Impacting Lives of the Waste Pickers Community</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <h1 className={styles.slideInLeft}>Empowering Children to be change makers - in the present for the future</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <h1 className={styles.slideInLeft}>Paving the way for a sustainable and inclusive future</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
