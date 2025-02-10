import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[16rem_1fr] h-full gap-4 sm:gap-12">
      {/* En móvil, puedes optar por mostrar la navegación en la parte superior */}
      <div className="sm:hidden mb-4">
        <SideNavigation />
      </div>
      {/* En pantallas sm y superiores, la SideNavigation se mostrará en la columna izquierda */}
      <div className="hidden sm:block">
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
