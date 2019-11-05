import React from "react";
const AuthorDetail = props => {
  const BookDetail = props.author.books.map(book => {
    return (
      <tr>
        <td>{book.title}</td>
        <td>{`${props.author.first_name} ${props.author.last_name}`}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  });
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
        <tbody>{BookDetail}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
