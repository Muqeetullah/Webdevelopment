import React from "react";
import Card from "./Card";
const CardList = ({robots}) => {
  const mapcards = robots.map((user, i) => {
    return (
      <Card
        key={i}
        name={robots[i].name}
        id={robots[i].id}
        emial={robots[i].email}
      />
    );
  });
  return <div>{mapcards}</div>;
};
export default CardList;
