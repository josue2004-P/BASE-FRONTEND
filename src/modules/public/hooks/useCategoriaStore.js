import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useCategoriaStore = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { categorias,categoria,activeCategoria } = useSelector(
    (state) => state.categoria
  );

  return {
    //* Propiedades
    activeCategoria,
    categorias,
    categoria,
    hasEventSelected: !!activeCategoria,

    //* Métodos
  };
};
