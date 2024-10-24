import React, { useEffect, useState } from 'react'

const TopSellers = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("books.json")
  }, [])

  return (
    <>
      <div>TopSellers</div>
    </>
  )
}

export default TopSellers