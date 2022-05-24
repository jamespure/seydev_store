import { Route, Routes } from "react-router-dom";
import Index from "../pages/index";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} exact />
      </Routes>
    </>
  );
}

export default App;
