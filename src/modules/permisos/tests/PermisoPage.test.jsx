import { render, screen,waitFor,fireEvent} from "@testing-library/react";
import PermisosPage from "../pages/PermisosPage"; // Asegúrate de ajustar la ruta si es necesario
import { usePermisoStore } from "../hooks/usePermisoStore"; // Mock del hook
import { vi, describe, it, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

// Mock del hook usePermisoStore
vi.mock("../hooks/usePermisoStore", () => ({
  usePermisoStore: vi.fn(),
}));

describe("Permisos Page Component", () => {
  beforeEach(() => {
    usePermisoStore.mockReturnValue({
      error: "",
      permisos: [
        {id: 1,nombre: "Perfil 1",descripcion: "Descripción 1",fechaCreacion: "2025-04-20T10:30:00",},
        {id: 2,nombre: "Perfil 2",descripcion: "Descripción 2",fechaCreacion: "2025-04-19T10:30:00",},
        {id: 3,nombre: "Perfil 5",descripcion: "Descripción  5",fechaCreacion: "2025-04-21T10:30:00",},
        {id: 4,nombre: "Perfil 4",descripcion: "Descripción 4",fechaCreacion: "2025-04-22T10:30:00",},
        {id: 5,nombre: "Perfil 6",descripcion: "Descripción 6",fechaCreacion: "2025-04-23T10:30:00",},
        {id: 6,nombre: "Perfil 7",descripcion: "Descripción 7",fechaCreacion: "2025-04-24T10:30:00",},
        {id: 7,nombre: "Perfil 8",descripcion: "Descripción 8",fechaCreacion: "2025-04-25T10:30:00",},
        {id: 8,nombre: "Perfil 9",descripcion: "Descripción 9",fechaCreacion: "2025-04-26T10:30:00",},
        {id: 9,nombre: "Perfil 10",descripcion: "Descripción 10",fechaCreacion: "2025-04-27T10:30:00",},
        {id: 10,nombre: "Perfil 11",descripcion: "Descripción 11",fechaCreacion: "2025-04-28T10:30:00",},
        {id: 11,nombre: "Perfil 12",descripcion: "Descripción 12",fechaCreacion: "2025-04-29T10:30:00",},

      ],
      isLoadingPermisos: false,
      startPermisos: vi.fn(),
    });
  });

  it("debe renderizar la página correctamente con los permisos", () => {
    render(<PermisosPage />, { wrapper: MemoryRouter });

    // Verifica si el encabezado está presente
    expect(screen.getByText("Permisos")).toBeInTheDocument();

    // Verifica si los permisos se están renderizando en la tabla
    expect(screen.getByText("Perfil 1")).toBeInTheDocument();
    expect(screen.getByText("Perfil 2")).toBeInTheDocument();

    // Verifica si los datos de la fecha están presentes
    expect(
      screen.getByText("20 de abril de 2025, 10:30:00")
    ).toBeInTheDocument();
    expect(
      screen.getByText("19 de abril de 2025, 10:30:00")
    ).toBeInTheDocument();
  });

  it('debe manejar la paginación', async () => {
    render(<PermisosPage />, { wrapper: MemoryRouter });

    // Simula un clic en el botón "Siguiente"
    fireEvent.click(screen.getByText('Siguiente'));

    // Espera a que el texto "Página 2" aparezca en el DOM
    await waitFor(() => {
      expect(screen.getByText('Página 2')).toBeInTheDocument();
    });
  });

  it("debe mostrar el mensaje de error si no hay permisos", () => {
    // Simula un escenario sin permisos
    usePermisoStore.mockReturnValue({
      error: "El permiso que ingresaste no está registrado en el sistema",
      permisos: [],
      isLoadingPermisos: false,
      startPermisos: vi.fn(),
    });

    render(<PermisosPage />, { wrapper: MemoryRouter });

    // Verifica que se muestre el mensaje de error
    expect(screen.getByText("El permiso que ingresaste no está registrado en el sistema")).toBeInTheDocument();
  });
});
