import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout : React.FC = () => <>
    <Header />
    <main>        
        <Outlet />
    </main>
    <Footer />
</>;

export default MainLayout;