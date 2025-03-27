(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const f=()=>{const t=new Set;return{subscribe:s=>t.add(s),notify:()=>t.forEach(s=>s())}},v=t=>{const{subscribe:e,notify:o}=f();let s={...t};return{getState:()=>({...s}),setState:a=>{s={...s,...a},o()},subscribe:e}},x=(t,e=window.localStorage)=>({get:()=>JSON.parse(e.getItem(t)),set:r=>e.setItem(t,JSON.stringify(r)),reset:()=>e.removeItem(t)}),l=x("user"),d=v({user:l.get(),loggedIn:!!l.get()}),c={profile:{title:"프로필",path:"/profile"},login:{title:"로그인",path:"/login"},logout:{title:"로그아웃",path:"/logout"}},p="/front_5th_chapter1-1#",m=t=>(window.location.pathname==="/index.hash.html"?window.location.hash.slice(1)||"/":window.location.pathname)===t?"text-blue-600 font-bold":"text-gray-600",g=()=>{const{loggedIn:t}=d.getState(),o=(t?[c.profile,c.logout]:[c.login]).map(s=>s.path===c.logout.path?`
        <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
      `:`<li><a href="${`${p}${s.path}`}" class="${m(s.path)}">${s.title}</a></li>`).join("");return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${m(`${p}/`)}">홈</a></li>
        ${o}
      </ul>
    </nav>
  `},h=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,w=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${g()}
        
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>

        ${h()}
      </div>
    </div>
  `,y=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form method="POST" id="login-form">
          <div class="mb-4">
            <input type="text" name="username" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,S=()=>{const{username:t,email:e,bio:o}=d.getState().user;return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${g()}

          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form method="POST" id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${t}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${e}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${o}</textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>

          ${h()}
        </div>
      </div>
    </div>
  `},$=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `,L="/front_5th_chapter1-1",P=t=>{const{subscribe:e,notify:o}=f(),s=()=>window.location.pathname,n=()=>t[window.location.pathname]??$,r=a=>{window.history.pushState({},"",`${L}${a}`),o()};return window.addEventListener("popstate",()=>o()),{push:r,subscribe:e,getTarget:n,getPath:s}},u="/front_5th_chapter1-1",j={[`${u}/`]:w,[`${u}/login`]:y,[`${u}/profile`]:S},i=P(j),b=()=>{const t=i.getPath(),{loggedIn:e}=d.getState();if(t==="/login"&&e){i.push("/");return}if(t==="/profile"&&!e){i.push("/login");return}const o=document.getElementById("root"),s=i.getTarget();o.innerHTML=s()},I=t=>{t.preventDefault();const e=t.target.id,o=new FormData(t.target);if(e==="login-form"){const s=o.get("username").trim();l.set({username:s,email:"",bio:""}),d.setState({user:l.get(),loggedIn:!0});return}if(e==="profile-form"){const s=o.get("username").trim(),n=o.get("email").trim(),r=o.get("bio").trim();l.set({username:s,email:n,bio:r}),d.setState({user:l.get()});return}},O=t=>{const e=t.target.closest("a");if(e){if(t.preventDefault(),e.id==="logout"){_();return}const o=e.href.replace(window.location.origin,"");i.push(o)}},_=()=>{l.reset(),d.setState({user:l.get(),loggedIn:!1}),i.push("/login")},A=()=>{i.subscribe(b),d.subscribe(b),document.body.addEventListener("click",O),document.body.addEventListener("submit",I),b()};A();
