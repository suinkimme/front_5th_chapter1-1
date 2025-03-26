import { createStore } from "../lib/index.js";
import { userStorage } from "../storage/index.js";

export const store = createStore({
  user: userStorage.get(),
  loggedIn: Boolean(userStorage.get()),
});
