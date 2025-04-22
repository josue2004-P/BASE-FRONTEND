// Mock del helper de fecha
vi.mock("../helpers/formatearFechaHora", () => ({
  formatearFechaHora: vi.fn(() => ({
    fechaFormateada: "20/04/2025",
  })),
}));

import { render, screen, fireEvent } from "@testing-library/react";
import Permisos from "../components/Permisos";
import { usePermisoStore } from "../hooks/usePermisoStore";
import { MemoryRouter } from "react-router-dom";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { formatearFechaHora } from "../helpers/formatearFechaHora"; 

// Mock del store
vi.mock("../hooks/usePermisoStore", () => ({
  usePermisoStore: vi.fn(),
}));

describe("Permisos component", () => {
  const mockEliminar = vi.fn();

  const item = {
    id: 1,
    nombre: "Admin",
    descripcion: "Acceso completo",
    fechaCreacion: "2025-04-20T10:30:00",
  };

  beforeEach(() => {
    usePermisoStore.mockReturnValue({
      startEliminarPermiso: mockEliminar,
    });
  });

  it("debe llamar a formatearFechaHora con la fecha de creación", () => {
    render(
      <table>
        <tbody>
          <Permisos items={item} />
        </tbody>
      </table>,
      { wrapper: MemoryRouter }
    );

    // Verifica que la función formatearFechaHora haya sido llamada con la fecha
    expect(vi.mocked(formatearFechaHora)).toHaveBeenCalledWith("2025-04-20T10:30:00");
  });

  it("debe renderizar los datos correctamente", () => {
    render(
      <table>
        <tbody>
          <Permisos items={item} />
        </tbody>
      </table>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Acceso completo")).toBeInTheDocument();
    expect(screen.getByText("20/04/2025")).toBeInTheDocument();
    expect(screen.getByText("Editar Permiso")).toBeInTheDocument();
    expect(screen.getByText("Eliminar Permiso")).toBeInTheDocument();
  });

  it("debe llamar a startEliminarPermiso al hacer clic en eliminar", () => {
    render(
      <table>
        <tbody>
          <Permisos items={item} />
        </tbody>
      </table>,
      { wrapper: MemoryRouter }
    );

    fireEvent.click(screen.getByText("Eliminar Permiso"));

    expect(mockEliminar).toHaveBeenCalledWith(item);
  });

  it("debe tener el enlace de edición correcto", () => {
    render(
      <table>
        <tbody>
          <Permisos items={item} />
        </tbody>
      </table>,
      { wrapper: MemoryRouter }
    );

    const link = screen.getByText("Editar Permiso").closest("a");
    expect(link).toHaveAttribute("href", "/editar/1");
  });
});
