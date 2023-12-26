import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="bg-background dark:bg-dark-background text-copy dark:text-dark-copy min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;