import Layout from "../layouts/Layout";
import {useUsuarioStore} from "../hooks/useUsuarioStore"
import { useEffect } from "react";

export default function HomeAdminPage() {

    const {usuarios,isLoadingUsuarios, startUsuarios } = useUsuarioStore();

    if(isLoadingUsuarios){
      <h2 className="text-2xl font-semibold">CARGANDO</h2>
    }

    useEffect(() => {
      startUsuarios();
    }, []);
  
  return (
    <Layout title="Home Administrador">
      <h1 className="text-2xl">ADMINISTRADOR</h1>


      <section className="mt-10">
        <header>
          <h2 className="text-2xl font-semibold">USUARIOS:</h2>
        </header>

        <article className="mt-5  grid grid-cols-2 gap-5">

          {
            usuarios.map((item,index)=>(
              <div key={index} className="shadow-lg p-4" >
                <p>{item.sNombre}</p>
              </div>
            ))
          }

        </article>
      </section>
    </Layout>
  );
}
