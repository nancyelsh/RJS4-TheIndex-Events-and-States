import React from "react";

const BookRow = props => {
  return (
    <tr>
      <td>{props.book.title}</td>
      <td>{`${props.author.first_name} ${props.author.last_name}`}</td>
      <td>
        <button className="btn" style={{ backgroundColor: props.book.color }} />
      </td>
    </tr>
  );
};

export default BookRow;
