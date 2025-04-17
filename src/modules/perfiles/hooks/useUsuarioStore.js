import { useDispatch, useSelector } from "react-redux";
import { usuarioService } from '../services/UsuariosService';

import {onLoadUsuarios, onLogoutUsuario} from "../store/usuarioSlice"

export const useUsuarioStore = () => {

  const { usuarios, usuario,isLoadingUsuarios} = useSelector((state) => state.usuario);
  const dispatch = useDispatch();

  const startUsuarios = async () => {
    try {

      const data = await usuarioService.obtenerUsuarios();
      dispatch(onLoadUsuarios(data));

    } catch (error) {
      dispatch(onLogoutUsuario(error));
    }
  };


  return {
    //* Propiedades
    usuarios,
    usuario,
    isLoadingUsuarios,
    //* Métodos
    startUsuarios,
 
  };
};
