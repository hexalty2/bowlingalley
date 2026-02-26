import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import LandingPage from "@/pages/LandingPage";
import ReservationPage from "@/pages/ReservationPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reserve" element={<ReservationPage />} />
        </Routes>
      </HashRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;