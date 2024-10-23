import { Link } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3BottomLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search books..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
            {/* add autocomplete feature */}
          </div>
        </div>

        {/* right side */}
        <div>Nav Items</div>
      </nav>
    </header>
  );
};

export default Navbar;
