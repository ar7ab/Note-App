import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="text-xs hidden sm:text-xl left-1 sm:left-10 sm:flex justify-between items-center gap-1"
    >
      <GiNotebook className="text-[#4B89FF] text-sm sm:text-2xl" />
      <h2 className="text-[#2C3E50] font-bold">Notebook</h2>
    </Link>
  );
};

export default Logo;
