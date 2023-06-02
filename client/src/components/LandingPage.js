import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { HeroSection } from './HeroSection';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import concertImage1 from '../images/concert1.jpg';
import concertImage2 from '../images/concert2.jpg';
import { dateFormatter } from '../utils';

export async function loader() {
  try {
    const response = await axios.get("/events");
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


const LandingPage = () => {
  const events = useLoaderData();
  const upcomingEvents = events?.slice(0, 3);


  return (
    <>
      <HeroSection />

      <section>
        <h2 className="mt-5 fw-bold text-center fs-2">We got what you need</h2>

        <Container className="py-5">
          <div className="row pt-5">
            <div className="col-sm-6 px-4">
              <p className='fs-5'>
                At Events Hub, we bring you a world of <strong>exciting opportunities</strong>, where you can explore a wide range of events and <strong>easily secure your spot</strong>. From concerts and festivals to workshops and conferences, we have curated a diverse selection of events to cater to your interests and passions.</p>
            </div>

            <div className="col-sm-6">
              <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={concertImage1} alt="" />
            </div>
          </div>
        </Container>

        <Container className="py-5">
          <div className="row pt-5">
            <div className="col-sm-6">
              <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={concertImage2} alt="" />
            </div>

            <div className="col-sm-6 px-4">
              <p className='fs-5'>
                <strong>Secure Ticket Purchases</strong>: Booking your tickets is a breeze with Events Hub. We prioritize your peace of mind by partnering with trusted event organizers, ensuring <strong>secure transactions and authentic tickets</strong>. Purchase with confidence and get ready to embark on unforgettable adventures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center fs-2 fw-bold">Upcoming Events</h2>

          {
            upcomingEvents?.length > 0 ?
              <ul className="event-list list-unstyled mt-5">
                {upcomingEvents.map(event => (
                  <li key={event.id}>
                    <Card>
                      <Card.Img variant="top" src={event.image_url} />
                      <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text className="text-muted">
                          <span>{dateFormatter.format(new Date(event.start_date))}</span> {" - "} <span>{dateFormatter.format(new Date(event.end_date))}</span> <br />
                          {event.location}
                        </Card.Text>
                        <Card.Text>{event.description}</Card.Text>
                        <Card.Text>
                          <small className="text-muted"> Organized by: {event.organizer.name}</small>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Button size="sm" variant="link" as={Link} to={`/events/${event.id}`}>View Event</Button>
                      </Card.Footer>
                    </Card>
                  </li>
                ))}
              </ul> : <Container className="mx-auto col-md-6">
                <Alert variant='info'>
                  <p>There aren't any upcoming events at the momemt.</p>
                </Alert>
              </Container>
          }
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
