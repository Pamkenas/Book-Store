import React, { useEffect, useState } from "react";

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then(res => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>TopSellers</div>;
};

export default TopSellers;
