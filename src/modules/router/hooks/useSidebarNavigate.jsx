// hooks/useSidebarNavigate.js
import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../ui/hooks/useUiStore";

export const useSidebarNavigate = () => {
  const navigate = useNavigate();
  const { toogleSidebar } = useUiStore();

  const navigateWithSidebarClose = (to, delay = 300) => {
    toogleSidebar(); // Cierra el sidebar

    setTimeout(() => {
      navigate(to); // Cambia de ruta después de esperar
    }, delay);
  };

  return navigateWithSidebarClose;
};
