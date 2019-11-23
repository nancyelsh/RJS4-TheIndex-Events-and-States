import React from "react";
import BookRow from "./BookRow";
const AuthorDetail = props => {
  const bookDetail = props.author.books.map(book => (
    <BookRow author={props.author} book={book} key={book.title} />
  ));

  return (
    <div className="author col-xs-10">
      <div>
        <h3>{`${props.author.first_name} ${props.author.last_name}`}</h3>
        <img
          src={props.author.imageUrl}
          className="img-thumbnail"
          alt={`${props.author.first_name} ${props.author.last_name}`}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookDetail}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
