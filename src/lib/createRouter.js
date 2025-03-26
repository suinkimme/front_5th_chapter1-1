import { createObserver } from "./createObserver";
import { NotFountPage } from "../pages";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getTarget = () => routes[window.location.pathname] ?? NotFountPage();

  const push = (path) => {
    window.history.pushState({}, "", path);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return { push, subscribe, getTarget };
};
