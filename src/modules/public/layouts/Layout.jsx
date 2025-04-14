import PropTypes from "prop-types";
import './css/index.css'

import Navbar from "../components/Navbar";
import useDocumentTitle from "../libs/useDocumentTitle";

export default function Layout({ children, title }) {

  useDocumentTitle(` Base | ${title}`);

  return (
    <>
      <Navbar/>
      <main className="mt-6 max-w-4xl  mx-auto">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Acepta cualquier elemento renderizable en React
  title: PropTypes.string.isRequired,  // Debe ser una cadena de texto obligatoria
};
