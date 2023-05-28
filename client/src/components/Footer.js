import React from 'react';
import { Container, Stack } from 'react-bootstrap';

const Footer = () => (
    <footer className="bg-dark text-white">
        <Stack direction='horizontal' gap={4} bg="dark" as={Container} className="d-flex py-5">
            <div>
                <h4 className="fw-bold text-info ">About Us</h4>
                <p className="">Events Hub, the best place to find your next event.</p>
            </div>
            <div>
                <h4 className="fw-bold text-info">Contact Us</h4>
                <p>events@eventshub.com</p>
            </div>
        </Stack>
    </footer>
);

export default Footer;
