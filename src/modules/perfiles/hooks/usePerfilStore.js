import { useDispatch, useSelector } from "react-redux";
import { perfilService } from '../services/PerfilService';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {onLoadPerfiles,onLoadPerfil} from "../store/perfilSlice"

export const usePerfilStore = () => {

  const { perfiles, perfil,isLoadingPerfiles} = useSelector((state) => state.perfil);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const startPerfiles = async () => {
    try {

      const data = await perfilService.obtenerPerfiles();
      dispatch(onLoadPerfiles(data));

    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startPerfil = async (id) => {
    try {

      const data = await perfilService.obtenerPerfil(id);
      dispatch(onLoadPerfil(data));

    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startCrearPerfiles = async (datos) => {
    try {

      const data = await perfilService.crearPerfil(datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("perfiles")

    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  return {
    //* Propiedades
    perfiles,
    perfil,
    isLoadingPerfiles,
    //* Métodos
    startPerfil,
    startPerfiles,
    startCrearPerfiles
  };
};
