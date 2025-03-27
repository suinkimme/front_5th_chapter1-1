import { createObserver } from "./createObserver";
import { NotFountPage } from "../pages";

export const createHashRouter = (routes) => {
  const { subscribe, notify } = createObserver();

  const getPath = () => window.location.hash.slice(1) || "/";

  const getTarget = () => {
    const path = getPath();
    return routes[path] ?? NotFountPage;
  };

  const push = (path) => {
    window.location.hash = path;
  };

  window.addEventListener("hashchange", () => notify());

  return { push, subscribe, getTarget, getPath };
};
