import { Outlet } from "react-router-dom";
const MainLayout : React.FC = () => <>
    <main>
        Main stuff
        <br />
        <Outlet />
    </main>
</>;

export default MainLayout;