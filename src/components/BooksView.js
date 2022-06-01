import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookView from './BookView';
import AddBook from './AddBook';

export default function BooksView(props) {
  const { books } = props;
  return (
    <>
      {books.map((book) => (
        <Col key={book.Title}>
          <BookView book={book} />
        </Col>
      ))}

      <AddBook />
    </>
  );
}

BooksView.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
