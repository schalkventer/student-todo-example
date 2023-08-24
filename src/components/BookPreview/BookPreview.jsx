import p from "prop-types";
import "./BookPreview.css";

/**
 * To show a basic overview a book with minimal extracted information. Is
 * generally clickable, which would take you to a more detailed version of the
 * book.
 */
export const BookPreview = (props) => {
  const { id, title, onClick, image, author } = props;
  console.log(image);

  return (
    <button onClick={() => onClick(id)} className="preview">
      <img alt="" className="preview__image" src={image} />

      <div className="preview__info">
        <h3 className="preview__title">{title}</h3>
        <div className="preview__author">{author}</div>
      </div>
    </button>
  );
};

BookPreview.propTypes = {
  id: p.string.isRequired,
  title: p.string.isRequired,

  /**
   * Function to call when the book is clicked, author is passed the book ID as
   * the first argument.
   */
  onClick: p.func.isRequired,

  /**
   * URL of the book's cover image
   */
  image: p.string.isRequired,

  /**
   * Name of the book's author
   */
  author: p.string.isRequired,
};
