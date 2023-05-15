import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import navbar from "../utils/navbar";
import Navbar from "../components/navbar";
import GenInput from '../components/generics/input';

let Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {
            navbar.map((val, ind) => {
              return (
                <Route key={val.id} path={val.path} element={val.element} />
              );
            })
          }
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;