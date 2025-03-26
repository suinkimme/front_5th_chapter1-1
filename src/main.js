import { createRouter } from "./lib/createRouter";
import { LoginPage, MainPage, ProfilePage } from "./pages";

const router = createRouter({
  "/": MainPage(),
  "/login": LoginPage(),
  "/profile": ProfilePage(),
});

const render = () => {
  const $root = document.getElementById("root");
  $root.innerHTML = router.getTarget();
};

const init = () => {
  router.subscribe(render);

  document.body.addEventListener("click", (e) => {
    const anchor = e.target.closest("a");
    if (anchor) {
      e.preventDefault();
      const path = anchor.href.replace(window.location.origin, "");
      router.push(path);
    }
  });

  render();
};

init();
