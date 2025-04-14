import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import { clienteAxios } from "../../api";
// import {
//   onDeleteProducto,
//   onLoadProductos,
//   onUpdateProducto,
//   onLoadProducto,
//   onLogoutModalProducto
// } from "../../store";
import { useNavigate } from "react-router-dom";

export const useClienteStore = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { cliente,clientes,activeCliente } = useSelector(
    (state) => state.cliente
  );

  // GUARDAR PRODUCTO
  const startSavingProducto = async (producto) => {
    try {
      // Creando
      const { data } = await clienteAxios.post(
        "/producto/upload-image",
        producto
      );
      Swal.fire({
        title: "!Agregado Correctamente!",
        icon: "success",
      });
      navigate("/productos")
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startDeletingProducto = async (id) => {
    // Todo: Llegar al backend
    try {
      Swal.fire({
        title: "¿Deseas borrar el equipo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar.",
      }).then((result) => {
        if (result.isConfirmed) {
          clienteAxios.put(`/admin/equipo/eliminar-equipo/${id}`);
          dispatch(onDeleteProducto());
          startLoadingProductos();
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  // CAMBIAR DISPONIBILIDAD
  const startDisponibleProducto = async (id) => {
    // Todo: Llegar al backend
    const filterCategoria =[];
    const page =1;
    const search = "";
    //const [clearDropdown, setClearDropdown] = useState(false);
  
    const datos = [
      {
        filterCategoria: filterCategoria,
        page: page,
        search: search,
      },
    ];

    try {
      Swal.fire({
        title: "¿Deseas cambiar la disponibilidad del producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar.",
      }).then((result) => {
        if (result.isConfirmed) {
          clienteAxios.put(`/producto/disponible-producto/${id}`);
          startLoadingProductos(datos);
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startUpdateProducto = async (producto) => {
    // Todo: Llegar al backend
    try {
      await clienteAxios.put(
        `/producto/editar-producto/${producto.id}`,
        producto
      );
      dispatch(onUpdateProducto({ ...producto }));
      Swal.fire({
        title: "!Editado Correctamente!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  // OBTENER EQUIPOS
  const startLoadingProductos = async (datos) => {

    const page = datos.map((items)=>items.page) 
    const filterCategoria = datos.map((items)=>items.filterCategoria) 
    const search = datos.map((items)=>items.search) 

  try {
    const { data } = await clienteAxios.get( `/producto/obtener-productos?page=${page}&categoria=${filterCategoria.toString()}&search=${search}`);
    dispatch(onLoadProductos(data.productos));

    // dispatch(onLoadFiltrosProducto({
    //   total: data.total,
    //   page:data.page,
    //   limit:data.limit
    // }));

    if (!data.ok) return dispatch(onLoadProductos(data.msg));
  } catch (error) {
    console.log("Error cargando equipos");
    console.log(error);
  }
};

  const startLoadingProducto = async (equipo) => {
    try {
      const { data } = await clienteAxios.get(
        `/admin/equipo/obtener-equipo/${equipo}`
      );
      dispatch(onLoadProducto(data.equipo));

      if (!data.ok) return dispatch(onLoadProducto(data.msg));
    } catch (error) {
      console.log("Error cargando equipos");
      console.log(error);
    }
  };

  const startLogoutModal = () => {
    dispatch(onLogoutModalProducto());
  };

  return {
    //* Propiedades
    activeCliente,
    cliente,
    clientes,
    hasEventSelected: !!activeCliente,

    //* Métodos
    startLoadingProductos,
    startLoadingProducto,
    startSavingProducto,
    startUpdateProducto,
    startDisponibleProducto,
    startLogoutModal,
    startDeletingProducto,
  };
};
