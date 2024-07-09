import "../App.css";
import "../index.css";
function Header() {
  return (
    <>
      <div className="rounded-b-2xl  h-[12vh] justify-around pt-10 bg-[#5ea5b6] border-b-2 border-blue-100 flex flex-row justify-items-center font-extrabold text-lg font-mono flex-wrap sm:h-[100px]  md:justify-around">
        {/* <div className="bg-black rounded-lg">
          <p className="text-yellow-50 w-">GET CV</p>
        </div> */}

        <nav className="flex flex-row justify-between gap-5 md:flex">
          <a
            href="#portfolio"
            className="text-white transition ease-in-out hover:text-cyan-700 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white transition ease-in-out hover:text-cyan-700 hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
export default Header;
