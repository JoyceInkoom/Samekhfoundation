import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignIn from "./components/authen/SignIn";
import LandingPage from "./landing";
import ResetPassword from "./components/ResetPassword";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import VolunteerSignUpForm from "./landing/VolunteerSignUpForm";
import GetAllVolunteers from "./pages/dashboard/GetAllVolunteers";
import VolunteerDetails from "./pages/dashboard/VolunteerDetails";
import UsersList from "./pages/dashboard/UserList";
import GetAllContacts from "./pages/dashboard/GetAllContacts";
import PostEvent from "./pages/dashboard/PostEvent";
import AllEventsPage from "./pages/dashboard/AllEvents";
import GetOneEvent from "./pages/dashboard/GetOneEvent";
import ProfilePage from "./pages/dashboard/ProfilePage";
import DonateButton from "./landing/DonateButton";
import SignUp from "./components/authen/SignUp";
import Volunteer from "./landing/Volunteer";
import Contact from "./landing/Contact";
import Projects from "./landing/Projects";
import About from "./landing/About";
import ImpactGallery from "./landing/Impact";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/signupasvolunteer", element: <VolunteerSignUpForm /> },
    { path: "/allvolunteers", element: <GetAllVolunteers /> },
    { path: "/volunteer/:id", element: <VolunteerDetails /> },
    { path: "/allusers", element: <UsersList /> },
    { path: "/allcontacts", element: <GetAllContacts /> },
    { path: "/postevent", element: <PostEvent /> },
    { path: "/allevents", element: <AllEventsPage /> },
    { path: "/events/:eventId", element: <GetOneEvent /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/donate", element: <DonateButton /> },
    { path: "/volunteer", element: <Volunteer /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <About /> },
    { path: "/gallery", element: <ImpactGallery /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
