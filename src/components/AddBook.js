import { Form, Button } from 'react-bootstrap';

export default function AddBook() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBookTitle">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" placeholder="Enter book title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBookAuthor">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" placeholder="Enter book author" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
