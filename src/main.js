import { createRouter } from "./lib/createRouter";
import { LoginPage, MainPage, ProfilePage } from "./pages";
import { userStorage } from "./storage";
import { store } from "./store";
import { App } from "./App";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const router = createRouter(routes);

App(router, store, userStorage);
