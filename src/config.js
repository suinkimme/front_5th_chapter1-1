import { LoginPage, MainPage, ProfilePage } from "./pages";

export const BASE_URL =
  process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

export const ROUTES = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};
