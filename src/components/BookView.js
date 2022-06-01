import {
  Button, Card, CardGroup, Container, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function BookView(props) {
  const { book } = props;

  return (
    <Container className="bookContainer">
      <Row>
        <Col>
          <CardGroup>
            <Card className="bookCard text-center">
              <Card.Body>
                <Card.Title>{book.Title}</Card.Title>
                <Card.Text>{book.Author}</Card.Text>
                <Button variant="link">Delete</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

BookView.propTypes = {
  book: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  }).isRequired,
};
