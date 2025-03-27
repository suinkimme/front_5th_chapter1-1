import { createHashRouter } from "./lib/createHashRouter";
import { LoginPage, MainPage, ProfilePage } from "./pages";
import { store } from "./store";
import { userStorage } from "./storage";
import { App } from "./App";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};
const router = createHashRouter(routes);

window.addEventListener("DOMContentLoaded", () => {
  App(router, store, userStorage);
});
