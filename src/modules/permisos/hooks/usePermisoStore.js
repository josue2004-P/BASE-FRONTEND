import { useDispatch, useSelector } from "react-redux";
import { permisoService } from '../services/permisoService';

import {onLoadPermisos, onLogoutPermiso} from "../store/permisoSlice"

export const usePermisoStore = () => {

  const { permisos, permiso,isLoadingPermisos} = useSelector((state) => state.permiso);
  const dispatch = useDispatch();

  const startPermisos = async () => {
    try {

      const data = await permisoService.obtenerPermisos();
      dispatch(onLoadPermisos(data));
    } catch (error) {
      dispatch(onLogoutPermiso(error));
    }
  };


  return {
    //* Propiedades
    permisos,
    permiso,
    isLoadingPermisos,
    //* Métodos
    startPermisos,
 
  };
};
