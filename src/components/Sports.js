import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const sportsMatches = [
  { name: "IPL 2025 - Mumbai Indians vs RCB", date: "March 28, 2025", venue: "Wankhede Stadium, Mumbai" },
  { name: "FIFA World Cup Qualifiers - India vs Qatar", date: "April 5, 2025", venue: "Salt Lake Stadium, Kolkata" },
  { name: "Pro Kabaddi League - Bengaluru Bulls vs U Mumba", date: "March 30, 2025", venue: "Kanteerava Stadium, Bangalore" },
  { name: "Tennis - French Open Finals", date: "June 10, 2025", venue: "Roland Garros, France" },
];

const Sports = () => {
  return (
    <Container className="mt-4">
      <h2>Upcoming Sports Matches</h2>
      <Row>
        {sportsMatches.map((match, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{match.name}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {match.date} <br />
                  <strong>Venue:</strong> {match.venue}
                </Card.Text>
                <Button variant="primary">Book Tickets</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;
