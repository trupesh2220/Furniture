import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

function Header() {
  return (
    <>
      <div className="bg-white shadow-xl ">
        <div className="container mx-auto px-3 py-3 hidden md:block">
          <WebNavbar />
        </div>
        <div className="mx-5 md:hidden py-3">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}

export default Header;
