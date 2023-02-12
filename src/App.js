import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import SingIn from "./routes/sing-in/sing-in.component";

const Shop = () => {
  return (
    <div>
      <h2>Soy Shopping</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sing-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
