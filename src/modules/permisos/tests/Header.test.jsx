import {  describe, it, expect,  } from "vitest";
import { MemoryRouter } from "react-router-dom";
import  Header  from "../components/Header";
import { render, screen,  } from "@testing-library/react";

describe("Permisos component", () => {

  const title = "Crear Permisos"

  it("debe renderizar los datos correctamente", () => {
    render(
        <Header title={title}/>
        ,{ wrapper: MemoryRouter }
    );

    expect(screen.getByText("Crear Permisos")).toBeInTheDocument();
  });
});
