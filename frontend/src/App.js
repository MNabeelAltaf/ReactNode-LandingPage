import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutUs";
import BookingPage from "./pages/Booking";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>

      {/* <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : ""}`
              }
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/error"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : ""}`
              }
            >
              Error
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;