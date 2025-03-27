import { createHashRouter } from "./lib/createHashRouter";
import { LoginPage, MainPage, ProfilePage } from "./pages";
import { userStorage } from "./storage";
import { store } from "./store";
import { App } from "./App";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const router = createHashRouter(routes);

App(router, store, userStorage);
