import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <div>
              <h4> {name}</h4>
              <img src={image} alt={name} />
              <p>{age} years</p>
            </div>
            <button> Reminder </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
