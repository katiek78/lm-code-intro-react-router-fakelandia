import { Routes, Route } from 'react-router-dom';
import Confession from './confession/Confession';
import Home from './Home';
import Misdemeanours from './Misdemeanours';
import Error404 from './error/Error404';
import MainLayout from './layout/MainLayout';

const Router: React.FC = () =>     
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="/confession" element={<Confession />}></Route>
                <Route path="/misdemeanours" element={<Misdemeanours />}></Route>
                <Route path="*" element={<Error404></Error404>} />
            </Route>
        </Routes>    

export default Router;