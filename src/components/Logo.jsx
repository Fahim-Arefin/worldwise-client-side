import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <div className={`${className}`}>
      <Link to="/">
        <img className="w-52" src="/logo.png" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
