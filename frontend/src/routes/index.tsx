import { Routes, Route, Navigate} from "react-router-dom";
import CarRegister from "../pages/CarRegister";
import Home from "../pages/Home";
import Login from "../pages/Login";

export function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cars/register" element={<CarRegister />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </div>
  );
}