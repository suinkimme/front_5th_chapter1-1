import { createRouter } from "./lib/createRouter";
import { userStorage } from "./storage";
import { store } from "./store";
import { ROUTES } from "./config";
import { App } from "./App";

const router = createRouter(ROUTES);

App(router, store, userStorage);
