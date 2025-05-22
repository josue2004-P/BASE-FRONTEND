import PropTypes from "prop-types";
import { useSidebarNavigate } from "../hooks/useSidebarNavigate";
import { Link } from "react-router-dom";

export default function SidebarLink({ to, children, className = "" }) {
  const navigate = useSidebarNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to, 300); // Espera 300ms antes de cambiar de ruta
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
