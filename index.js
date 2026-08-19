export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nexora</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #111827;
}

button,
input {
  font: inherit;
}

/* AUTH */

#auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #0f172a;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 32px;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0,0,0,.25);
}

.auth-logo {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 8px;
}

.auth-subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
}

.auth-card input {
  width: 100%;
  padding: 13px;
  margin: 7px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.auth-button {
  width: 100%;
  margin-top: 12px;
  padding: 13px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.auth-button:hover {
  background: #1d4ed8;
}

.auth-switch {
  text-align: center;
  margin-top: 20px;
  color: #64748b;
}

.auth-switch button {
  border: 0;
  background: none;
  color: #2563eb;
  font-weight: bold;
  cursor: pointer;
}

.auth-message {
  min-height: 20px;
  margin-top: 12px;
  text-align: center;
  font-size: 14px;
}

/* APP */

#app {
  display: none;
  min-height: 100vh;
}

.sidebar {
  width: 240px;
  background: #111827;
  color: white;
  padding: 25px 18px;
  position: fixed;
  height: 100vh;
}

.logo {
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 35px;
}

.nav {
  width: 100%;
  padding: 13px 15px;
  margin-bottom: 8px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: #cbd5e1;
  text-align: left;
  font-size: 15px;
  cursor: pointer;
}

.nav:hover,
.nav.active {
  background: #2563eb;
  color: white;
}

.logout {
  margin-top: 25px;
  background: #dc2626;
  color: white;
}

.main {
  margin-left: 240px;
  width: calc(100% - 240px);
  padding: 35px;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  margin: 0;
  font-size: 32px;
}

.header p {
  color: #64748b;
}

/* CARDS */

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,.05);
}

.card-title {
  color: #64748b;
  font-size: 14px;
}

.number {
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
}

/* PANELS */

.panel {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-top: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,.05);
}

.button {
  border: 0;
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.button:hover {
  background: #1d4ed8;
}

.panel input {
  width: 100%;
  max-width: 500px;
  padding: 13px;
  margin: 8px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

/* MOBILE */

@media (max-width: 700px) {

  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    padding: 18px;
  }

  .logo {
    margin-bottom: 15px;
  }

  .main {
    margin-left: 0;
    width: 100%;
    padding: 20px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .auth-card {
    padding: 25px;
  }
}
</style>
</head>

<body>

<!-- LOGIN / CREATE ACCOUNT -->

<div id="auth">

  <div class="auth-card">

    <div class="auth-logo">NEXORA</div>

    <div class="auth-subtitle" id="authSubtitle">
      Sign in to your dashboard
    </div>

    <div id="loginForm">

      <input
        id="loginEmail"
        type="email"
        placeholder="Email"
        autocomplete="email"
      >

      <input
        id="loginPassword"
        type="password"
        placeholder="Password"
        autocomplete="current-password"
      >

      <button class="auth-button" onclick="login()">
        Sign In
      </button>

      <div class="auth-switch">
        Don't have an account?
        <button onclick="showSignup()">Create one</button>
      </div>

    </div>


    <div id="signupForm" style="display:none;">

      <input
        id="signupName"
        type="text"
        placeholder="Full name"
        autocomplete="name"
      >

      <input
        id="signupEmail"
        type="email"
        placeholder="Email"
        autocomplete="email"
      >

      <input
        id="signupPassword"
        type="password"
        placeholder="Password"
        autocomplete="new-password"
      >

      <button class="auth-button" onclick="signup()">
        Create Account
      </button>

      <div class="auth-switch">
        Already have an account?
        <button onclick="showLogin()">Sign in</button>
      </div>

    </div>

    <div class="auth-message" id="authMessage"></div>

  </div>

</div>


<!-- APP -->

<div id="app">

  <aside class="sidebar">

    <div class="logo">
      NEXORA
    </div>

    <button
      class="nav active"
      onclick="showPage('dashboard', this)"
    >
      🏠 Dashboard
    </button>

    <button
      class="nav"
      onclick="showPage('profile', this)"
    >
      👤 Profile
    </button>

    <button
      class="nav"
      onclick="showPage('projects', this)"
    >
      📁 Projects
    </button>

    <button
      class="nav"
      onclick="showPage('settings', this)"
    >
      ⚙️ Settings
    </button>

    <button
      class="nav logout"
      onclick="logout()"
    >
      🚪 Logout
    </button>

  </aside>


  <main class="main">

    <!-- DASHBOARD -->

    <section id="dashboard" class="page active">

      <div class="header">

        <h1 id="welcomeTitle">
          Welcome to Nexora
        </h1>

        <p>
          Your dashboard overview.
        </p>

      </div>


      <div class="cards">

        <div class="card">

          <div class="card-title">
            Projects
          </div>

          <div
            class="number"
            id="projectCount"
          >
            0
          </div>

        </div>


        <div class="card">

          <div class="card-title">
            Tasks
          </div>

          <div class="number">
            0
          </div>

        </div>


        <div class="card">

          <div class="card-title">
            Status
          </div>

          <div class="number">
            Active
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>
          Nexora is online 🚀
        </h2>

        <p id="dashboardMessage">
          Welcome to your Nexora dashboard.
        </p>

      </div>

    </section>


    <!-- PROFILE -->

    <section id="profile" class="page">

      <div class="header">

        <h1>
          Profile
        </h1>

        <p>
          Manage your Nexora profile.
        </p>

      </div>


      <div class="panel">

        <h2>
          Your Profile
        </h2>

        <input
          id="profileName"
          placeholder="Your name"
        >

        <br>

        <input
          id="profileEmail"
          placeholder="Email"
          disabled
        >

        <br>

        <button
          class="button"
          onclick="saveProfile()"
        >
          Save Profile
        </button>

        <p id="profileMessage"></p>

      </div>

    </section>


    <!-- PROJECTS -->

    <section id="projects" class="page">

      <div class="header">

        <h1>
          Projects
        </h1>

        <p>
          Create and manage your projects.
        </p>

      </div>


      <div class="panel">

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <br>

        <button
          class="button"
          onclick="addProject()"
        >
          Add Project
        </button>

        <div id="projectList"></div>

      </div>

    </section>


    <!-- SETTINGS -->

    <section id="settings" class="page">

      <div class="header">

        <h1>
          Settings
        </h1>

        <p>
          Customize your Nexora experience.
        </p>

      </div>


      <div class="panel">

        <h2>
          Account
        </h2>

        <p>
          You are signed in to Nexora.
        </p>

        <button
          class="button"
          onclick="logout()"
        >
          Log Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

/*
  DEMO ACCOUNT SYSTEM

  This stores the account locally in the browser.
  It is NOT production authentication.
*/


function getAccount() {

  const data = localStorage.getItem("nexoraAccount");

  return data ? JSON.parse(data) : null;

}


function showSignup() {

  document.getElementById("loginForm").style.display = "none";

  document.getElementById("signupForm").style.display = "block";

  document.getElementById("authSubtitle").textContent =
    "Create your Nexora account";

  document.getElementById("authMessage").textContent = "";

}


function showLogin() {

  document.getElementById("loginForm").style.display = "block";

  document.getElementById("signupForm").style.display = "none";

  document.getElementById("authSubtitle").textContent =
    "Sign in to your dashboard";

  document.getElementById("authMessage").textContent = "";

}


function signup() {

  const name =
    document.getElementById("signupName").value.trim();

  const email =
    document.getElementById("signupEmail").value.trim();

  const password =
    document.getElementById("signupPassword").value;

  const message =
    document.getElementById("authMessage");


  if (!name || !email || !password) {

    message.textContent =
      "Please complete all fields.";

    return;

  }


  if (password.length < 6) {

    message.textContent =
      "Password must be at least 6 characters.";

    return;

  }


  const account = {

    name: name,

    email: email,

    password: password,

    projects: []

  };


  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function login() {

  const email =
    document.getElementById("loginEmail").value.trim();

  const password =
    document.getElementById("loginPassword").value;


  const account = getAccount();


  if (!account) {

    document.getElementById("authMessage").textContent =
      "No account found. Create an account first.";

    return;

  }


  if (
    email !== account.email ||
    password !== account.password
  ) {

    document.getElementById("authMessage").textContent =
      "Incorrect email or password.";

    return;

  }


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function openDashboard() {

  const account = getAccount();


  if (!account) {
    return;
  }


  document.getElementById("auth").style.display =
    "none";

  document.getElementById("app").style.display =
    "flex";


  document.getElementById("welcomeTitle").textContent =
    "Welcome, " + account.name + " 👋";


  document.getElementById("dashboardMessage").textContent =
    "Welcome back, " + account.name + ".";


  document.getElementById("profileName").value =
    account.name;


  document.getElementById("profileEmail").value =
    account.email;


  renderProjects();

}


function logout() {

  localStorage.removeItem(
    "nexoraLoggedIn"
  );


  document.getElementById("app").style.display =
    "none";

  document.getElementById("auth").style.display =
    "flex";


  showLogin();

}


function showPage(page, button) {

  document.querySelectorAll(".page")
    .forEach(function(section) {

      section.classList.remove("active");

    });


  document.getElementById(page)
    .classList.add("active");


  document.querySelectorAll(".nav")
    .forEach(function(nav) {

      nav.classList.remove("active");

    });


  button.classList.add("active");

}


function saveProfile() {

  const account = getAccount();

  if (!account) {
    return;
  }


  const name =
    document.getElementById("profileName").value.trim();


  if (!name) {

    document.getElementById("profileMessage").textContent =
      "Please enter your name.";

    return;

  }


  account.name = name;


  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );


  document.getElementById("welcomeTitle").textContent =
    "Welcome, " + name + " 👋";


  document.getElementById("dashboardMessage").textContent =
    "Welcome back, " + name + ".";


  document.getElementById("profileMessage").textContent =
    "Profile saved successfully ✅";

}


function addProject() {

  const account = getAccount();

  if (!account) {
    return;
  }


  const input =
    document.getElementById("projectInput");


  const name =
    input.value.trim();


  if (!name) {
    return;
  }


  if (!account.projects) {
    account.projects = [];
  }


  account.projects.push(name);


  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );


  input.value = "";


  renderProjects();

}


function renderProjects() {

  const account = getAccount();

  const list =
    document.getElementById("projectList");


  list.innerHTML = "";


  if (!account || !account.projects) {

    document.getElementById("projectCount").textContent =
      "0";

    return;

  }


  account.projects.forEach(
    function(project, index) {

      const item =
        document.createElement("div");


      item.style.padding =
        "15px 0";

      item.style.borderBottom =
        "1px solid #e5e7eb";


      item.innerHTML =
        "<strong>" +
        escapeHtml(project) +
        "</strong>" +
        "<br>" +
        '<button class="button" style="margin-top:8px" onclick="deleteProject(' +
        index +
        ')">Delete</button>';


      list.appendChild(item);

    }
  );


  document.getElementById("projectCount").textContent =
    account.projects.length;

}


function deleteProject(index) {

  const account = getAccount();

  if (!account || !account.projects) {
    return;
  }


  account.projects.splice(index, 1);


  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );


  renderProjects();

}


function escapeHtml(value) {

  const div =
    document.createElement("div");

  div.textContent = value;

  return div.innerHTML;

}


/* AUTO LOGIN */

if (
  localStorage.getItem("nexoraLoggedIn") === "true"
) {

  openDashboard();

}

</script>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};