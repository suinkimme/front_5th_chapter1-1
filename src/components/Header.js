const getActiveLink = (path) => {
  const currentPath = window.location.pathname;
  return currentPath === path ? "text-blue-600 font-bold" : "text-gray-600";
};

export const Header = ({ loggedIn }) => {
  console.log(loggedIn);

  return /*HTML*/ `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${getActiveLink("/")}">홈</a></li>
        <li><a href="/profile" class="${getActiveLink("/profile")}">프로필</a></li>
        <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
      </ul>
    </nav>
  `;
};
