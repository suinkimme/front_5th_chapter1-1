import { createObserver } from "./createObserver";
import { NotFountPage } from "../pages";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

export const createHashRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getPath = () => window.location.hash.slice(1) || "/";

  const getTarget = () => {
    const path = getPath();
    return routes[path] ?? NotFountPage;
  };

  const push = (path) => {
    window.location.hash = `${BASE_URL}#${path}`;
  };

  window.addEventListener("hashchange", () => notify());

  return { push, subscribe, getTarget, getPath };
};
