// src/modules/permisos/tests/Permisos.test.jsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Permisos from "../components/Permisos";
import { Provider } from "react-redux";
import { store } from "../../../store";

// Mock de store y helper
vi.mock("../../../hooks/usePermisoStore", () => ({
  usePermisoStore: () => ({
    startEliminarPermiso: vi.fn(),
  }),
}));

vi.mock("../../../helpers/formatearFechaHora", () => ({
  formatearFechaHora: () => ({
    fechaFormateada: "21/04/2025 10:00 AM",
  }),
}));

describe("Permisos Component", () => {
  const fakeItem = {
    id: 1,
    nombre: "Permiso Test",
    descripcion: "Descripción de prueba",
    fechaCreacion: "2025-04-21T10:00:00Z",
  };

  it("renderiza los datos correctamente", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Permisos items={fakeItem} />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText("Permiso Test")).toBeInTheDocument();
    expect(screen.getByText("Descripción de prueba")).toBeInTheDocument();
    expect(screen.getByText("21 de abril de 2025, 04:00:00")).toBeInTheDocument();
    expect(screen.getByText("Editar Permiso")).toBeInTheDocument();
    expect(screen.getByText("Eliminar Permiso")).toBeInTheDocument();
  });
});
