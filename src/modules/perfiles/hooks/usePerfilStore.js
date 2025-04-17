import { useDispatch, useSelector } from "react-redux";
import { perfilService } from '../services/PerfilService';

import {onLoadPerfiles, onLogoutPerfil} from "../store/perfilSlice"

export const usePerfilStore = () => {

  const { perfiles, perfil,isLoadingPerfiles} = useSelector((state) => state.perfil);
  const dispatch = useDispatch();

  const startPerfiles = async () => {
    try {

      const data = await perfilService.obtenerPerfiles();
      dispatch(onLoadPerfiles(data));

    } catch (error) {
      dispatch(onLogoutPerfil(error));
    }
  };


  return {
    //* Propiedades
    perfiles,
    perfil,
    isLoadingPerfiles,
    //* Métodos
    startPerfiles,
 
  };
};
