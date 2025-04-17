import { useUsuarioStore } from "../hooks/useUsuarioStore";
import { useEffect } from "react";
import { Header } from "../components";

export default function HomeAdminPage() {
  const { usuarios, isLoadingUsuarios, startUsuarios } = useUsuarioStore();

  if (isLoadingUsuarios) {
    <h2 className="text-2xl font-semibold">CARGANDO</h2>;
  }

  useEffect(() => {
    startUsuarios();
  }, []);

  return (
    <>
      <section className="">
        <Header title="Usuarios" />

        <article className="mt-5  grid grid-cols-2 gap-5">
          {usuarios.map((item, index) => (
            <div key={index} className="shadow-lg p-4">
              <p>{item.nombre}</p>
            </div>
          ))}
        </article>
        
      </section>
    </>
  );
}
