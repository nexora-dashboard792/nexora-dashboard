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

.app {
  display: flex;
  min-height: 100vh;
}

/* SIDEBAR */

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

/* MAIN */

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

/* CONTENT */

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

input {
  width: 100%;
  max-width: 500px;
  padding: 13px;
  margin: 10px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
}

/* MOBILE */

@media (max-width: 700px) {

  .app {
    display: block;
  }

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
}
</style>
</head>

<body>

<div class="app">

  <aside class="sidebar">

    <div class="logo">
      NEXORA
    </div>

    <button class="nav active" onclick="showPage('dashboard', this)">
      🏠 Dashboard
    </button>

    <button class="nav" onclick="showPage('profile', this)">
      👤 Profile
    </button>

    <button class="nav" onclick="showPage('projects', this)">
      📁 Projects
    </button>

    <button class="nav" onclick="showPage('settings', this)">
      ⚙️ Settings
    </button>

  </aside>

  <main class="main">

    <!-- DASHBOARD -->

    <section id="dashboard" class="page active">

      <div class="header">
        <h1>Welcome to Nexora</h1>
        <p>Your dashboard overview.</p>
      </div>

      <div class="cards">

        <div class="card">
          <div class="card-title">Projects</div>
          <div class="number" id="projectCount">0</div>
        </div>

        <div class="card">
          <div class="card-title">Tasks</div>
          <div class="number">0</div>
        </div>

        <div class="card">
          <div class="card-title">Status</div>
          <div class="number">Active</div>
        </div>

      </div>

      <div class="panel">
        <h2>Nexora is online 🚀</h2>
        <p>Your dashboard is successfully running.</p>
      </div>

    </section>


    <!-- PROFILE -->

    <section id="profile" class="page">

      <div class="header">
        <h1>Profile</h1>
        <p>Manage your Nexora profile.</p>
      </div>

      <div class="panel">

        <h2>Your Profile</h2>

        <input id="nameInput" placeholder="Your name">

        <br>

        <button class="button" onclick="saveProfile()">
          Save Profile
        </button>

        <p id="profileMessage"></p>

      </div>

    </section>


    <!-- PROJECTS -->

    <section id="projects" class="page">

      <div class="header">
        <h1>Projects</h1>
        <p>Create and manage your projects.</p>
      </div>

      <div class="panel">

        <input id="projectInput" placeholder="Project name">

        <br>

        <button class="button" onclick="addProject()">
          Add Project
        </button>

        <div id="projectList"></div>

      </div>

    </section>


    <!-- SETTINGS -->

    <section id="settings" class="page">

      <div class="header">
        <h1>Settings</h1>
        <p>Customize your Nexora experience.</p>
      </div>

      <div class="panel">

        <h2>Settings</h2>

        <p>
          Nexora dashboard settings will appear here.
        </p>

        <button class="button" onclick="alert('Nexora settings are active!')">
          Test Settings
        </button>

      </div>

    </section>

  </main>

</div>

<script>

function showPage(page, button) {

  document.querySelectorAll('.page')
    .forEach(function(section) {
      section.classList.remove('active');
    });

  document.getElementById(page)
    .classList.add('active');

  document.querySelectorAll('.nav')
    .forEach(function(nav) {
      nav.classList.remove('active');
    });

  button.classList.add('active');
}


function saveProfile() {

  const name = document.getElementById('nameInput').value;

  document.getElementById('profileMessage').textContent =
    name ? 'Profile saved for ' + name + ' ✅' : 'Please enter your name.';
}


let projects = [];


function addProject() {

  const input = document.getElementById('projectInput');

  const name = input.value.trim();

  if (!name) {
    return;
  }

  projects.push(name);

  input.value = '';

  renderProjects();
}


function renderProjects() {

  const list = document.getElementById('projectList');

  list.innerHTML = '';

  projects.forEach(function(project, index) {

    const item = document.createElement('div');

    item.style.padding = '15px 0';
    item.style.borderBottom = '1px solid #e5e7eb';

    item.innerHTML =
      '<strong>' + project + '</strong>' +
      '<br>' +
      '<button class="button" style="margin-top:8px" onclick="deleteProject(' +
      index +
      ')">Delete</button>';

    list.appendChild(item);

  });

  document.getElementById('projectCount').textContent =
    projects.length;
}


function deleteProject(index) {

  projects.splice(index, 1);

  renderProjects();
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