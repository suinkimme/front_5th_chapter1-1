export const App = (router, store, storage) => {
  const render = () => {
    const path = router.getPath();
    const { loggedIn } = store.getState();

    if (path === "/login" && loggedIn) {
      router.push("/");
      return;
    }

    if (path === "/profile" && !loggedIn) {
      router.push("/login");
      return;
    }

    const $root = document.getElementById("root");
    const template = router.getTarget();
    $root.innerHTML = template();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    const formData = new FormData(e.target);

    if (targetId === "login-form") {
      const username = formData.get("username").trim();
      storage.set({ username, email: "", bio: "" });
      store.setState({
        user: storage.get(),
        loggedIn: true,
      });

      return;
    }

    if (targetId === "profile-form") {
      const username = formData.get("username").trim();
      const email = formData.get("email").trim();
      const bio = formData.get("bio").trim();
      storage.set({ username, email, bio });
      store.setState({
        user: storage.get(),
      });

      return;
    }
  };

  const handleAnchorClick = (e) => {
    const anchor = e.target.closest("a");
    if (anchor) {
      e.preventDefault();

      if (anchor.id === "logout") {
        handleLogout();
        return;
      }

      const path = anchor.href.replace(window.location.origin, "");
      router.push(path);
    }
  };

  const handleLogout = () => {
    storage.reset();
    store.setState({
      user: storage.get(),
      loggedIn: false,
    });
    router.push("/login");
  };

  const init = () => {
    router.subscribe(render);
    store.subscribe(render);

    document.body.addEventListener("click", handleAnchorClick);
    document.body.addEventListener("submit", handleFormSubmit);

    render();
  };

  init();
};
