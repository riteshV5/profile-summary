import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageProfile from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/profile"} element={<PageProfile />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
