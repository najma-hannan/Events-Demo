import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage1 from '../images/hero-image-1.jpg';
import heroImage2 from '../images/hero-image-2.jpg';
import heroImage3 from '../images/hero-image-3.jpg';
import heroImage4 from '../images/hero-image-4.jpg';
import heroImage5 from '../images/hero-image-5.jpg';


const images = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
];

export function HeroSection() {
    const [backgroundImage, setBackgroundImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const heroStyle = {
        backgroundImage: `url(${images[backgroundImage]})`,
    };

    return (
        <section className="hero-section" style={heroStyle}>
            <div className="hero-text col-lg-7 mx-auto py-5 text-center">
                <h1 className="mt-5 fs-1 fw-bold">The journey to your amazing memories starts here!</h1>
                <p className="fs-4 mt-4 fw-light">Your go-to destination for discovering and attending incredible events!</p>
                <div className="">
                    <Button size="md" variant="info" as={Link} to="/events">Explore our event list</Button>
                </div>
            </div>
        </section>
    )
}
