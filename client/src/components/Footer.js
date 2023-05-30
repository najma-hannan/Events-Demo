import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-dark text-white">
        <Container className="d-flex justify-content-between py-5">
            <div>
                <Link to="/" className="fw-bold text-info text-decoration-none fs-1">Events Hub</Link>
                <p className="text-muted">Discover and Attend Remarkable Events.</p>
                <Stack className="mt-4" gap={2}>
                    <Stack direction='horizontal' gap={2}>
                        <a className="text-decoration-none text-white" href="/#">Privacy & Policy</a> |
                        <a className="text-decoration-none text-white" href="/#">Terms of use</a>
                    </Stack>
                    <Stack direction='horizontal' gap={2}>
                        <a className="text-decoration-none text-white" href="mailto:support@eventshub.com">support@eventshub.com</a> |
                        <a className="text-decoration-none text-white" href="tel:+254723478982">+254 734 567 198</a>
                    </Stack>
                    <div className="">
                        &copy;{" "}{new Date().getFullYear()}, {" Events Hub Ltd."}
                    </div>
                </Stack>
            </div>
            <div>
                <h2 className="fs-4 fw-bold text-info">Follow Events Hub on:</h2>
                <ul className="list-unstyled mt-4 d-flex gap-4 text-">
                    <li>
                        <FaTwitter className="fs-2"/>
                    </li>
                    <li>
                        <FaInstagram className="fs-2"/>
                    </li>
                    <li>
                        <FaFacebook className="fs-2"/>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;
