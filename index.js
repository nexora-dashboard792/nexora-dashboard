export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexora Dashboard</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
    }

    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 240px;
      height: 100vh;
      background: #111827;
      padding: 25px 20px;
    }

    .logo {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 40px;
    }

    .nav {
      display: block;
      padding: 14px;
      margin-bottom: 8px;
      border-radius: 8px;
      color: #cbd5e1;
      text-decoration: none;
    }

    .nav:hover {
      background: #1e293b;
      color: white;
    }

    .main {
      margin-left: 240px;
      padding: 40px;
    }

    h1 {
      margin: 0;
      font-size: 34px;
    }

    .subtitle {
      color: #94a3b8;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 30px;
    }

    .card {
      background: #1e293b;
      padding: 25px;
      border-radius: 15px;
    }

    .card-title {
      color: #94a3b8;
    }

    .number {
      font-size: 32px;
      font-weight: bold;
      margin-top: 10px;
    }

    .welcome {
      margin-top: 30px;
      padding: 30px;
      background: #1e293b;
      border-radius: 15px;
    }

    @media (max-width: 700px) {
      .sidebar {
        position: relative;
        width: 100%;
        height: auto;
      }

      .main {
        margin-left: 0;
      }

      .cards {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  <aside class="sidebar">
    <div class="logo">NEXORA</div>

    <a class="nav" href="/">Dashboard</a>
    <a class="nav" href="#profile">Profile</a>
    <a class="nav" href="#projects">Projects</a>
    <a class="nav" href="#settings">Settings</a>
  </aside>

  <main class="main">

    <h1>Welcome to Nexora</h1>
    <p class="subtitle">Your dashboard is ready.</p>

    <div class="cards">

      <div class="card">
        <div class="card-title">Projects</div>
        <div class="number">0</div>
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

    <div class="welcome">
      <h2>Nexora is online 🚀</h2>
      <p>Welcome to your new dashboard.</p>
    </div>

  </main>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
