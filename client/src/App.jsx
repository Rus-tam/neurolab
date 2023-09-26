import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/views/Home.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import SignUp from "./components/views/SignUp.jsx";
import SignIn from "./components/views/SignIn.jsx";
import "react-toastify/dist/ReactToastify.css";
import SimpleIsomerization from "./components/labs/SimpleIsomerization.jsx";
import LabsList from "./components/labs/Labs.jsx";
import RequireAuth from "./store/RequireAuth.jsx";
import UsersList from "./components/views/UsersList.jsx";
import MyWorks from "./components/views/MyWorks.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/labs" element={<LabsList />}></Route>
            <Route
              path="/labs/simple-isomerization"
              element={<SimpleIsomerization />}
            ></Route>

            <Route path="/labs/my-works" element={<MyWorks />}></Route>

            <Route path="/all-users" element={<UsersList />}></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
