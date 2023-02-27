import React from "react";
import Card from "../Card";
import "./Author.css";

const Author = (props) => {
  const { author, data } = props;
  return (
    <div className="author">
      <div className="author-name">
        <button>{author}</button>
      </div>
      <div className="author-books">
        {data.map((item, index) => {
          return <Card key={item.id} data={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Author;
