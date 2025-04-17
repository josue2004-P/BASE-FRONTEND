import PropTypes from "prop-types";

export default function Header({title}) {
  return (
    <header>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </header>
  );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
  };
  