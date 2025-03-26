import { createObserver } from "./createObserver.js";
import { NotFountPage } from "../pages/index.js";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getPath = () => window.location.pathname;

  const getTarget = () => routes[window.location.pathname] ?? NotFountPage;

  const push = (path) => {
    window.history.pushState({}, "", path);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return { push, subscribe, getTarget, getPath };
};
