import React from 'react'

const Navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>This is my Navbar
        <nav>
            {/* left side */}
            <div>Logo & search bar</div>

            {/* right side */}
            <div>
                Nav Items
            </div>
        </nav>
    </header>
  )
}

export default Navbar