import { createObserver } from "./createObserver";
import { NotFountPage } from "../pages";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getPath = () => window.location.pathname;

  const getTarget = () => routes[window.location.pathname] ?? NotFountPage;

  const push = (path) => {
    window.history.pushState({}, "", `${BASE_URL}${path}`);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return { push, subscribe, getTarget, getPath };
};
