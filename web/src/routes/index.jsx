import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/home-page", name: "HomePage", component: HomePage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
