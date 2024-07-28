import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
