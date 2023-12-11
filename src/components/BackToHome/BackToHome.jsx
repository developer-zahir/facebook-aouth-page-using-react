import { TbHomeShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./BackToHome.scss"
const BackToHome = () => {
  return (
    <Link className="back-to-home" to="/">
      <TbHomeShare />
    </Link>
  );
};

export default BackToHome;
