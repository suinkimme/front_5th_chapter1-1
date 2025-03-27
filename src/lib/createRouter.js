import { createObserver } from "./createObserver";
import { NotFountPage } from "../pages";
import { BASE_URL } from "../config";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getPath = () => window.location.pathname.replace(BASE_URL, "");

  const getTarget = () =>
    routes[window.location.pathname.replace(BASE_URL, "")] ?? NotFountPage;

  const push = (path) => {
    window.history.pushState({}, "", `${BASE_URL}${path}`);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return { push, subscribe, getTarget, getPath };
};
