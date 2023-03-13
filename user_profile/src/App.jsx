import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PofilePage from "./pages/PofilePage";
function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />}></Route>
      <Route path="profile" element={<PofilePage />} />
    </Routes>
  );
}

export default App;
