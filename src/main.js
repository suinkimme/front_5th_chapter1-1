import { createRouter } from "./lib/createRouter";
import { LoginPage, MainPage, ProfilePage } from "./pages";
import { store } from "./store";

const router = createRouter({
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
});

const render = () => {
  const path = window.location.pathname;
  const { loggedIn } = store.getState();

  if (path === "/login" && loggedIn) {
    router.push("/");
    return;
  }

  const $root = document.getElementById("root");
  const template = router.getTarget();
  $root.innerHTML = template();
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const targetId = e.target.id;

  if (targetId === "login-form") {
    // const username = document.getElementById("username").value.trim();
    store.setState({
      loggedIn: true,
    });
  }
};

const handleAnchorClick = (e) => {
  const anchor = e.target.closest("a");
  if (anchor) {
    e.preventDefault();
    const path = anchor.href.replace(window.location.origin, "");
    router.push(path);
  }
};

const init = () => {
  router.subscribe(render);
  store.subscribe(render);

  document.body.addEventListener("click", handleAnchorClick);
  document.body.addEventListener("submit", handleFormSubmit);

  render();
};

init();
