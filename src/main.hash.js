import { createHashRouter } from "./lib/createHashRouter";
import { userStorage } from "./storage";
import { store } from "./store";
import { ROUTES } from "./config";
import { App } from "./App";

const router = createHashRouter(ROUTES);

App(router, store, userStorage);
