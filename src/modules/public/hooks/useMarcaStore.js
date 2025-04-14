import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useMarcaStore = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { marcas,marca,activeMarca } = useSelector(
    (state) => state.marca
  );

  return {
    //* Propiedades
    activeMarca,
    marca,
    marcas,
    hasEventSelected: !!activeMarca,

    //* Métodos

  };
};
