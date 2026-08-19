export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#0b1220">

<title>Nexora</title>

<style>
:root{
  --bg:#f4f7fb;
  --surface:#ffffff;
  --surface-soft:#f8fafc;
  --border:#e5e7eb;
  --text:#111827;
  --muted:#64748b;
  --primary:#2563eb;
  --primary-dark:#1d4ed8;
  --success:#15803d;
  --success-bg:#ecfdf3;
  --danger:#dc2626;
  --danger-bg:#fef2f2;
  --warning:#b45309;
  --warning-bg:#fffbeb;
  --nav:#0b1220;
  --nav-muted:#94a3b8;
  --shadow:0 12px 35px rgba(15,23,42,.07);
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background:var(--bg);
  color:var(--text);
}

button,
input{
  font:inherit;
}

button{
  cursor:pointer;
}

input{
  width:100%;
  padding:13px 14px;
  border:1px solid var(--border);
  border-radius:10px;
  background:#fff;
  color:var(--text);
  outline:none;
  transition:.2s;
}

input:focus{
  border-color:var(--primary);
  box-shadow:0 0 0 3px rgba(37,99,235,.10);
}

button:focus-visible,
input:focus-visible{
  outline:3px solid rgba(37,99,235,.18);
  outline-offset:2px;
}

/* AUTH */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  background:
    radial-gradient(circle at top left,#1d4ed8 0,transparent 32%),
    linear-gradient(135deg,#07101f,#101b32 55%,#0b1220);
}

.auth-shell{
  width:100%;
  max-width:1080px;
  display:grid;
  grid-template-columns:1fr 430px;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,.32);
}

.auth-intro{
  padding:55px;
  color:white;
  background:
    linear-gradient(
      145deg,
      rgba(37,99,235,.94),
      rgba(15,23,42,.97)
    );
  min-height:600px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.auth-brand{
  font-size:32px;
  font-weight:850;
  letter-spacing:-1px;
  margin-bottom:70px;
}

.auth-intro h1{
  font-size:48px;
  line-height:1.05;
  margin:0 0 20px;
  letter-spacing:-2px;
}

.auth-intro p{
  max-width:500px;
  color:#dbeafe;
  line-height:1.7;
  font-size:16px;
}

.auth-points{
  margin-top:35px;
  display:grid;
  gap:13px;
}

.auth-point{
  display:flex;
  align-items:center;
  gap:10px;
  color:#e2e8f0;
  font-size:14px;
}

.auth-point span{
  width:24px;
  height:24px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,.12);
}

.auth-card{
  background:white;
  padding:38px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.auth-logo{
  font-size:29px;
  font-weight:850;
  letter-spacing:-1px;
  text-align:center;
}

.auth-subtitle{
  text-align:center;
  color:var(--muted);
  margin:8px 0 28px;
  font-size:14px;
}

.auth-button{
  width:100%;
  margin-top:12px;
  padding:13px;
  border:0;
  border-radius:10px;
  background:var(--primary);
  color:white;
  font-weight:700;
  transition:.2s;
}

.auth-button:hover{
  background:var(--primary-dark);
  transform:translateY(-1px);
}

.auth-switch{
  text-align:center;
  margin-top:20px;
  color:var(--muted);
  font-size:14px;
}

.auth-switch button{
  border:0;
  background:none;
  color:var(--primary);
  font-weight:700;
}

.auth-message{
  min-height:20px;
  margin-top:14px;
  text-align:center;
  font-size:14px;
}

.message-success{
  color:var(--success);
}

.message-error{
  color:var(--danger);
}

/* APP */

#app{
  display:none;
  min-height:100vh;
}

.sidebar{
  width:250px;
  background:var(--nav);
  color:white;
  padding:25px 18px;
  position:fixed;
  left:0;
  top:0;
  height:100vh;
  z-index:20;
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:24px;
  font-weight:850;
  letter-spacing:-.5px;
  padding:5px 10px 28px;
}

.brand-mark{
  width:34px;
  height:34px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(135deg,#60a5fa,#2563eb);
  font-size:17px;
  box-shadow:0 8px 20px rgba(37,99,235,.28);
}

.nav-label{
  padding:0 10px 10px;
  font-size:11px;
  text-transform:uppercase;
  letter-spacing:.12em;
  color:#64748b;
  font-weight:800;
}

.nav{
  width:100%;
  padding:12px 13px;
  margin-bottom:6px;
  border:0;
  border-radius:10px;
  background:transparent;
  color:var(--nav-muted);
  text-align:left;
  display:flex;
  align-items:center;
  gap:11px;
  transition:.2s;
}

.nav:hover{
  background:rgba(255,255,255,.06);
  color:white;
}

.nav.active{
  background:#2563eb;
  color:white;
  box-shadow:0 8px 20px rgba(37,99,235,.20);
}

.logout{
  margin-top:20px;
  color:#fca5a5;
}

.logout:hover{
  background:rgba(220,38,38,.14);
  color:#fecaca;
}

.main{
  margin-left:250px;
  width:calc(100% - 250px);
  padding:0 38px 45px;
}

.test-banner{
  background:rgba(255,251,235,.95);
  color:#92400e;
  padding:8px 15px;
  text-align:center;
  font-size:11px;
  font-weight:700;
  margin:0 -38px;
  border-bottom:1px solid #fde68a;
}

.header{
  padding-top:34px;
  margin-bottom:25px;
}

.header-row{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:20px;
}

.header h1{
  margin:0;
  font-size:31px;
  letter-spacing:-1px;
}

.header p{
  color:var(--muted);
  margin:8px 0 0;
}

.page{
  display:none;
}

.page.active{
  display:block;
}

/* CARDS */

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.card{
  background:var(--surface);
  padding:23px;
  border:1px solid rgba(226,232,240,.8);
  border-radius:16px;
  box-shadow:var(--shadow);
}

.card-title{
  color:var(--muted);
  font-size:13px;
  font-weight:650;
}

.number{
  font-size:29px;
  font-weight:800;
  margin-top:10px;
  letter-spacing:-.5px;
}

.card-icon{
  width:39px;
  height:39px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:11px;
  background:#eff6ff;
  margin-bottom:16px;
}

/* PANELS */

.panel{
  background:var(--surface);
  padding:25px;
  border:1px solid rgba(226,232,240,.8);
  border-radius:16px;
  margin-top:20px;
  box-shadow:var(--shadow);
}

.panel h2{
  margin:0 0 8px;
  font-size:19px;
}

.panel p{
  color:var(--muted);
  line-height:1.6;
}

.panel-description{
  margin-top:0;
  font-size:14px;
}

.balance-panel{
  background:
    radial-gradient(circle at 90% 10%,rgba(96,165,250,.20),transparent 35%),
    linear-gradient(135deg,#0b1220,#172554);
  color:white;
}

.balance-panel .card-title{
  color:#bfdbfe;
}

.balance{
  font-size:44px;
  font-weight:850;
  margin-top:8px;
  letter-spacing:-1.5px;
}

.balance-note{
  color:#cbd5e1;
  font-size:12px;
  margin-top:8px;
}

.button-row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.primary,
.danger,
.secondary{
  border:0;
  padding:12px 18px;
  border-radius:10px;
  font-weight:700;
  transition:.2s;
}

.primary{
  background:var(--primary);
  color:white;
}

.primary:hover{
  background:var(--primary-dark);
}

.secondary{
  background:#e2e8f0;
  color:#334155;
}

.danger{
  background:var(--danger);
  color:white;
}

.primary:hover,
.secondary:hover,
.danger:hover{
  transform:translateY(-1px);
}

.message{
  min-height:20px;
  margin-bottom:0;
  font-size:14px;
  font-weight:650;
}

/* TRANSACTIONS */

.transaction-head{
  display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1fr;
  padding:11px 0;
  border-bottom:1px solid var(--border);
  color:var(--muted);
  font-size:12px;
  font-weight:750;
}

.transaction{
  display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1fr;
  padding:16px 0;
  border-bottom:1px solid #eef2f7;
  align-items:center;
  font-size:14px;
}

.transaction:last-child{
  border-bottom:0;
}

.deposit-text{
  color:var(--success);
  font-weight:750;
}

.withdrawal-text{
  color:var(--danger);
  font-weight:750;
}

.pending-text{
  color:var(--warning);
  font-weight:700;
}

.status-pill{
  display:inline-flex;
  align-items:center;
  width:max-content;
  padding:5px 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:750;
}

.status-completed{
  background:var(--success-bg);
  color:var(--success);
}

.status-pending{
  background:var(--warning-bg);
  color:var(--warning);
}

/* PENDING */

.pending{
  background:var(--warning-bg);
  border:1px solid #fde68a;
  color:#92400e;
  padding:14px;
  border-radius:11px;
  margin-top:10px;
  font-size:14px;
}

/* EMPTY */

.empty{
  padding:30px 10px;
  text-align:center;
  color:var(--muted);
}

.empty-icon{
  font-size:28px;
  margin-bottom:8px;
}

/* PROJECT */

.project-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:15px;
  padding:16px 0;
  border-bottom:1px solid #eef2f7;
}

.project-item:last-child{
  border-bottom:0;
}

.project-name{
  font-weight:700;
}

/* TOAST */

.toast{
  position:fixed;
  right:25px;
  bottom:25px;
  background:#111827;
  color:white;
  padding:13px 17px;
  border-radius:11px;
  box-shadow:0 15px 40px rgba(0,0,0,.18);
  opacity:0;
  pointer-events:none;
  transform:translateY(12px);
  transition:.25s;
  z-index:100;
  font-size:14px;
}

.toast.show{
  opacity:1;
  transform:translateY(0);
}

/* MOBILE */

@media(max-width:900px){

  .auth-shell{
    grid-template-columns:1fr;
    max-width:470px;
  }

  .auth-intro{
    display:none;
  }

  .cards{
    grid-template-columns:1fr;
  }

}

@media(max-width:700px){

  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    padding:14px;
  }

  .brand{
    padding:5px 7px 15px;
  }

  .nav-label{
    display:none;
  }

  .nav{
    width:auto;
    display:inline-flex;
    margin:3px;
    padding:10px 11px;
  }

  .logout{
    margin-top:5px;
  }

  .main{
    margin-left:0;
    width:100%;
    padding:0 18px 30px;
  }

  .test-banner{
    margin:0 -18px;
  }

  .header{
    padding-top:25px;
  }

  .header-row{
    align-items:flex-start;
    flex-direction:column;
  }

  .transaction-head{
    display:none;
  }

  .transaction{
    display:block;
    padding:17px 0;
  }

  .transaction > div{
    margin-bottom:6px;
  }

  .balance{
    font-size:36px;
  }

}

@media(max-width:420px){

  .auth-card{
    padding:28px 22px;
  }

  .panel{
    padding:20px;
  }

  .number{
    font-size:27px;
  }

}
</style>
</head>

<body>

<!-- AUTH -->

<div id="auth">

  <div class="auth-shell">

    <div class="auth-intro">

      <div class="auth-brand">
        NEXORA
      </div>

      <h1>
        Your financial workspace.
      </h1>

      <p>
        A clean workspace for managing balances,
        transactions, projects and account activity.
      </p>

      <div class="auth-points">

        <div class="auth-point">
          <span>✓</span>
          Simple account management
        </div>

        <div class="auth-point">
          <span>✓</span>
          Organized wallet activity
        </div>

        <div class="auth-point">
          <span>✓</span>
          Clear transaction tracking
        </div>

      </div>

    </div>


    <div class="auth-card">

      <div class="auth-logo">
        NEXORA
      </div>

      <div class="auth-subtitle">
        Account access
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

        <button
          class="auth-button"
          onclick="login()"
        >
          Sign In
        </button>

        <div class="auth-switch">
          Don't have an account?
          <button onclick="showSignup()">
            Create one
          </button>
        </div>

      </div>


      <div
        id="signupForm"
        style="display:none"
      >

        <input
          id="signupName"
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

        <button
          class="auth-button"
          onclick="signup()"
        >
          Create Account
        </button>

        <div class="auth-switch">
          Already have an account?
          <button onclick="showLogin()">
            Sign in
          </button>
        </div>

      </div>


      <div
        id="authMessage"
        class="auth-message"
      ></div>

    </div>

  </div>

</div>


<!-- APP -->

<div id="app">

  <aside class="sidebar">

    <div class="brand">
      <div class="brand-mark">N</div>
      NEXORA
    </div>

    <div class="nav-label">
      Workspace
    </div>

    <button
      class="nav active"
      onclick="showPage('dashboard',this)"
    >
      🏠 Dashboard
    </button>

    <button
      class="nav"
      onclick="showPage('wallet',this)"
    >
      💳 Wallet
    </button>

    <button
      class="nav"
      onclick="showPage('transactions',this)"
    >
      📋 Transactions
    </button>

    <button
      class="nav"
      onclick="showPage('projects',this)"
    >
      📁 Projects
    </button>

    <button
      class="nav"
      onclick="showPage('profile',this)"
    >
      👤 Profile
    </button>

    <div class="nav-label" style="margin-top:18px;">
      Account
    </div>

    <button
      class="nav"
      onclick="showPage('settings',this)"
    >
      ⚙️ Settings
    </button>

    <button
      class="nav logout"
      onclick="logout()"
    >
      🚪 Sign Out
    </button>

  </aside>


  <main class="main">

    <div class="test-banner">
      Test environment · Wallet activity uses simulated funds
    </div>


    <!-- DASHBOARD -->

    <section
      id="dashboard"
      class="page active"
    >

      <div class="header">

        <div class="header-row">

          <div>
            <h1 id="welcomeTitle">
              Welcome to Nexora
            </h1>

            <p>
              Here's an overview of your account.
            </p>
          </div>

        </div>

      </div>


      <div class="cards">

        <div class="card">

          <div class="card-icon">
            💳
          </div>

          <div class="card-title">
            Available Balance
          </div>

          <div
            class="number"
            id="dashboardBalance"
          >
            $0.00
          </div>

        </div>


        <div class="card">

          <div class="card-icon">
            📁
          </div>

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

          <div class="card-icon">
            ✓
          </div>

          <div class="card-title">
            Account Status
          </div>

          <div class="number">
            Active
          </div>

        </div>

      </div>


      <div class="panel balance-panel">

        <div class="card-title">
          Current balance
        </div>

        <div
          class="balance"
          id="dashboardLargeBalance"
        >
          $0.00
        </div>

        <div class="balance-note">
          Simulated balance · Test environment
        </div>

      </div>


      <div class="panel">

        <h2>
          Welcome back
        </h2>

        <p id="dashboardMessage">
          Your Nexora workspace is ready.
        </p>

      </div>

    </section>


    <!-- WALLET -->

    <section
      id="wallet"
      class="page"
    >

      <div class="header">

        <h1>
          Wallet
        </h1>

        <p>
          Manage your simulated wallet activity.
        </p>

      </div>


      <div class="panel balance-panel">

        <div class="card-title">
          Available balance
        </div>

        <div
          class="balance"
          id="walletBalance"
        >
          $0.00
        </div>

        <div class="balance-note">
          Test environment · No real-money processing
        </div>

      </div>


      <!-- DEPOSIT -->

      <div class="panel">

        <h2>
          Deposit
        </h2>

        <p class="panel-description">
          Add simulated funds to your test balance.
        </p>

        <input
          id="depositAmount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter amount"
        >

        <div class="button-row">

          <button
            class="primary"
            onclick="deposit()"
          >
            Add Funds
          </button>

        </div>

        <p
          id="depositMessage"
          class="message"
        ></p>

      </div>


      <!-- WITHDRAWAL -->

      <div class="panel">

        <h2>
          Withdrawal
        </h2>

        <p class="panel-description">
          Withdrawal requests are simulated and remain
          pending in this test environment.
        </p>

        <input
          id="withdrawAmount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter amount"
        >

        <input
          id="withdrawPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="Withdrawal PIN"
        >

        <div class="button-row">

          <button
            class="primary"
            onclick="withdraw()"
          >
            Request Withdrawal
          </button>

        </div>

        <p
          id="withdrawMessage"
          class="message"
        ></p>

      </div>


      <!-- PIN -->

      <div class="panel">

        <h2>
          Withdrawal PIN
        </h2>

        <p class="panel-description">
          Set a 4–6 digit PIN for simulated withdrawal requests.
        </p>

        <input
          id="newPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="4–6 digit PIN"
        >

        <div class="button-row">

          <button
            class="secondary"
            onclick="setWithdrawalPin()"
          >
            Save PIN
          </button>

        </div>

        <p
          id="pinMessage"
          class="message"
        ></p>

      </div>


      <!-- PENDING -->

      <div class="panel">

        <h2>
          Pending withdrawals
        </h2>

        <div id="pendingList">
          <div class="empty">
            <div class="empty-icon">⏳</div>
            No pending withdrawals.
          </div>
        </div>

      </div>

    </section>


    <!-- TRANSACTIONS -->

    <section
      id="transactions"
      class="page"
    >

      <div class="header">

        <h1>
          Transactions
        </h1>

        <p>
          Review your account activity.
        </p>

      </div>


      <div class="panel">

        <div class="transaction-head">

          <div>
            Type
          </div>

          <div>
            Amount
          </div>

          <div>
            Status
          </div>

          <div>
            Date
          </div>

        </div>

        <div id="transactionList">
          <div class="empty">
            <div class="empty-icon">📋</div>
            No transactions yet.
          </div>
        </div>

      </div>

    </section>


    <!-- PROJECTS -->

    <section
      id="projects"
      class="page"
    >

      <div class="header">

        <h1>
          Projects
        </h1>

        <p>
          Create and manage your projects.
        </p>

      </div>


      <div class="panel">

        <h2>
          New project
        </h2>

        <p class="panel-description">
          Add a project to your workspace.
        </p>

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <div class="button-row">

          <button
            class="primary"
            onclick="addProject()"
          >
            Add Project
          </button>

        </div>

      </div>


      <div class="panel">

        <h2>
          Your projects
        </h2>

        <div id="projectList">
          <div class="empty">
            <div class="empty-icon">📁</div>
            No projects yet.
          </div>
        </div>

      </div>

    </section>


    <!-- PROFILE -->

    <section
      id="profile"
      class="page"
    >

      <div class="header">

        <h1>
          Profile
        </h1>

        <p>
          Manage your personal account information.
        </p>

      </div>


      <div class="panel">

        <h2>
          Personal information
        </h2>

        <input
          id="profileName"
          placeholder="Your name"
        >

        <input
          id="profileEmail"
          disabled
          placeholder="Email"
        >

        <div class="button-row">

          <button
            class="primary"
            onclick="saveProfile()"
          >
            Save Changes
          </button>

        </div>

        <p
          id="profileMessage"
          class="message"
        ></p>

      </div>

    </section>


    <!-- SETTINGS -->

    <section
      id="settings"
      class="page"
    >

      <div class="header">

        <h1>
          Settings
        </h1>

        <p>
          Manage your account settings.
        </p>

      </div>


      <div class="panel">

        <h2>
          Account
        </h2>

        <p>
          This Nexora environment uses simulated funds
          for testing and demonstration purposes.
        </p>

        <button
          class="danger"
          onclick="logout()"
        >
          Sign Out
        </button>

      </div>


      <div class="panel">

        <h2>
          Environment
        </h2>

        <p>
          <strong>Test environment</strong><br>
          Wallet activity and transactions are simulated
          and are not connected to a payment processor.
        </p>

      </div>

    </section>

  </main>

</div>


<div
  id="toast"
  class="toast"
></div>


<script>

function getAccount(){

  const raw =
    localStorage.getItem("nexoraAccount");

  if(!raw){
    return null;
  }

  try{
    return JSON.parse(raw);
  }catch(error){
    return null;
  }

}


function saveAccount(account){

  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );

}


function toast(message){

  const element =
    document.getElementById("toast");

  element.textContent =
    message;

  element.classList.add("show");

  clearTimeout(window.nexoraToastTimer);

  window.nexoraToastTimer =
    setTimeout(function(){

      element.classList.remove("show");

    },3000);

}


function showSignup(){

  document.getElementById("loginForm").style.display =
    "none";

  document.getElementById("signupForm").style.display =
    "block";

  document.getElementById("authMessage").textContent =
    "";

}


function showLogin(){

  document.getElementById("loginForm").style.display =
    "block";

  document.getElementById("signupForm").style.display =
    "none";

  document.getElementById("authMessage").textContent =
    "";

}


function signup(){

  const name =
    document.getElementById("signupName").value.trim();

  const email =
    document.getElementById("signupEmail").value.trim();

  const password =
    document.getElementById("signupPassword").value;

  const message =
    document.getElementById("authMessage");


  if(!name || !email || !password){

    message.textContent =
      "Please complete all fields.";

    message.className =
      "auth-message message-error";

    return;

  }


  if(password.length < 6){

    message.textContent =
      "Password must contain at least 6 characters.";

    message.className =
      "auth-message message-error";

    return;

  }


  const existing =
    getAccount();

  if(existing){

    message.textContent =
      "An account already exists in this browser. Sign in instead.";

    message.className =
      "auth-message message-error";

    return;

  }


  const account = {

    name:name,

    email:email,

    password:password,

    balance:0,

    withdrawalPin:"",

    projects:[],

    transactions:[],

    pendingWithdrawals:[]

  };


  saveAccount(account);


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function login(){

  const email =
    document.getElementById("loginEmail").value.trim();

  const password =
    document.getElementById("loginPassword").value;

  const account =
    getAccount();

  const message =
    document.getElementById("authMessage");


  if(!account){

    message.textContent =
      "No account found. Create an account first.";

    message.className =
      "auth-message message-error";

    return;

  }


  if(
    email !== account.email ||
    password !== account.password
  ){

    message.textContent =
      "Incorrect email or password.";

    message.className =
      "auth-message message-error";

    return;

  }


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function openDashboard(){

  const account =
    getAccount();

  if(!account){
    return;
  }


  document.getElementById("auth").style.display =
    "none";

  document.getElementById("app").style.display =
    "block";


  document.getElementById("welcomeTitle").textContent =
    "Welcome, " + account.name + " 👋";


  document.getElementById("dashboardMessage").textContent =
    "Welcome back, " + account.name + ".";


  document.getElementById("profileName").value =
    account.name;


  document.getElementById("profileEmail").value =
    account.email;


  updateBalance();

  renderProjects();

  renderTransactions();

  renderPendingWithdrawals();

}


function logout(){

  localStorage.removeItem(
    "nexoraLoggedIn"
  );


  document.getElementById("app").style.display =
    "none";

  document.getElementById("auth").style.display =
    "flex";


  showLogin();

}


function showPage(page,button){

  document.querySelectorAll(".page")
    .forEach(function(section){

      section.classList.remove("active");

    });


  document.getElementById(page)
    .classList.add("active");


  document.querySelectorAll(".nav")
    .forEach(function(nav){

      nav.classList.remove("active");

    });


  if(button){
    button.classList.add("active");
  }


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

}


function updateBalance(){

  const account =
    getAccount();

  if(!account){
    return;
  }


  const balance =
    Number(account.balance || 0);


  const formatted =
    "$" + balance.toFixed(2);


  document.getElementById("walletBalance").textContent =
    formatted;


  document.getElementById("dashboardBalance").textContent =
    formatted;


  document.getElementById("dashboardLargeBalance").textContent =
    formatted;

}


/* DEPOSIT */

function deposit(){

  const account =
    getAccount();

  const input =
    document.getElementById("depositAmount");

  const message =
    document.getElementById("depositMessage");


  if(!account){

    message.textContent =
      "Please sign in first.";

    message.className =
      "message message-error";

    return;

  }


  const amount =
    Number(input.value);


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    message.textContent =
      "Enter a valid amount.";

    message.className =
      "message message-error";

    return;

  }


  if(!Array.isArray(account.transactions)){

    account.transactions = [];

  }


  account.balance =
    Number(account.balance || 0) + amount;


  account.transactions.unshift({

    id:Date.now(),

    type:"Deposit",

    amount:amount,

    status:"Completed",

    date:new Date().toLocaleString()

  });


  saveAccount(account);


  input.value =
    "";


  message.textContent =
    "$" +
    amount.toFixed(2) +
    " added to your simulated balance.";

  message.className =
    "message message-success";


  updateBalance();

  renderTransactions();

  toast("Deposit recorded");

}


/* WITHDRAWAL PIN */

function setWithdrawalPin(){

  const account =
    getAccount();

  const input =
    document.getElementById("newPin");

  const message =
    document.getElementById("pinMessage");


  if(!account){

    return;

  }


  const pin =
    input.value.trim();


  if(!/^[0-9]{4,6}$/.test(pin)){

    message.textContent =
      "PIN must contain 4–6 digits.";

    message.className =
      "message message-error";

    return;

  }


  account.withdrawalPin =
    pin;


  saveAccount(account);


  input.value =
    "";


  message.textContent =
    "Withdrawal PIN saved.";

  message.className =
    "message message-success";


  toast("Withdrawal PIN saved");

}


/* WITHDRAWAL */

function withdraw(){

  const account =
    getAccount();

  const amount =
    Number(
      document.getElementById("withdrawAmount").value
    );

  const pin =
    document.getElementById("withdrawPin").value.trim();

  const message =
    document.getElementById("withdrawMessage");


  if(!account){

    return;

  }


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    message.textContent =
      "Enter a valid withdrawal amount.";

    message.className =
      "message message-error";

    return;

  }


  if(!account.withdrawalPin){

    message.textContent =
      "Set a withdrawal PIN first.";

    message.className =
      "message message-error";

    return;

  }


  if(pin !== account.withdrawalPin){

    message.textContent =
      "Incorrect withdrawal PIN.";

    message.className =
      "message message-error";

    return;

  }


  if(
    amount >
    Number(account.balance || 0)
  ){

    message.textContent =
      "Insufficient balance.";

    message.className =
      "message message-error";

    return;

  }


  if(!Array.isArray(account.pendingWithdrawals)){

    account.pendingWithdrawals = [];

  }


  if(!Array.isArray(account.transactions)){

    account.transactions = [];

  }


  account.balance =
    Number(account.balance || 0) - amount;


  const withdrawal = {

    id:Date.now(),

    type:"Withdrawal",

    amount:amount,

    status:"Pending",

    date:new Date().toLocaleString()

  };


  account.pendingWithdrawals.unshift(
    withdrawal
  );


  account.transactions.unshift(
    withdrawal
  );


  saveAccount(account);


  document.getElementById("withdrawAmount").value =
    "";

  document.getElementById("withdrawPin").value =
    "";


  message.textContent =
    "Withdrawal request submitted and marked pending.";

  message.className =
    "message message-success";


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

  toast("Withdrawal request submitted");

}


/* PENDING */

function renderPendingWithdrawals(){

  const account =
    getAccount();

  const list =
    document.getElementById("pendingList");


  list.innerHTML =
    "";


  if(
    !account ||
    !Array.isArray(account.pendingWithdrawals) ||
    account.pendingWithdrawals.length === 0
  ){

    list.innerHTML =
      '<div class="empty">' +
      '<div class="empty-icon">⏳</div>' +
      'No pending withdrawals.' +
      '</div>';

    return;

  }


  account.pendingWithdrawals.forEach(
    function(item){

      const div =
        document.createElement("div");


      div.className =
        "pending";


      div.textContent =
        "Withdrawal: $" +
        Number(item.amount).toFixed(2) +
        " · Pending · " +
        item.date;


      list.appendChild(div);

    }
  );

}


/* TRANSACTIONS */

function renderTransactions(){

  const account =
    getAccount();

  const list =
    document.getElementById("transactionList");


  list.innerHTML =
    "";


  if(
    !account ||
    !Array.isArray(account.transactions) ||
    account.transactions.length === 0
  ){

    list.innerHTML =
      '<div class="empty">' +
      '<div class="empty-icon">📋</div>' +
      'No transactions yet.' +
      '</div>';

    return;

  }


  account.transactions.forEach(
    function(item){

      const row =
        document.createElement("div");

      row.className =
        "transaction";


      const type =
        document.createElement("div");

      type.textContent =
        item.type;

      type.className =
        item.type === "Deposit"
          ? "deposit-text"
          : "withdrawal-text";


      const amount =
        document.createElement("div");

      amount.textContent =
        "$" +
        Number(item.amount).toFixed(2);


      const status =
        document.createElement("div");

      const pill =
        document.createElement("span");

      pill.className =
        "status-pill " +
        (
          item.status === "Pending"
            ? "status-pending"
            : "status-completed"
        );

      pill.textContent =
        item.status;

      status.appendChild(pill);


      const date =
        document.createElement("div");

      date.textContent =
        item.date;


      row.appendChild(type);

      row.appendChild(amount);

      row.appendChild(status);

      row.appendChild(date);


      list.appendChild(row);

    }
  );

}


/* PROFILE */

function saveProfile(){

  const account =
    getAccount();

  const name =
    document.getElementById("profileName")
      .value
      .trim();

  const message =
    document.getElementById("profileMessage");


  if(!account){
    return;
  }


  if(!name){

    message.textContent =
      "Please enter your name.";

    message.className =
      "message message-error";

    return;

  }


  account.name =
    name;


  saveAccount(account);


  document.getElementById("welcomeTitle").textContent =
    "Welcome, " + name + " 👋";


  document.getElementById("dashboardMessage").textContent =
    "Welcome back, " + name + ".";


  message.textContent =
    "Profile saved successfully.";

  message.className =
    "message message-success";


  toast("Profile updated");

}


/* PROJECTS */

function addProject(){

  const account =
    getAccount();

  const input =
    document.getElementById("projectInput");

  const name =
    input.value.trim();


  if(!account || !name){
    return;
  }


  if(!Array.isArray(account.projects)){

    account.projects = [];

  }


  account.projects.push(name);


  saveAccount(account);


  input.value =
    "";


  renderProjects();

  updateProjectCount();

  toast("Project added");

}


function renderProjects(){

  const account =
    getAccount();

  const list =
    document.getElementById("projectList");


  list.innerHTML =
    "";


  if(
    !account ||
    !Array.isArray(account.projects) ||
    account.projects.length === 0
  ){

    list.innerHTML =
      '<div class="empty">' +
      '<div class="empty-icon">📁</div>' +
      'No projects yet.' +
      '</div>';

    updateProjectCount();

    return;

  }


  account.projects.forEach(
    function(project,index){

      const item =
        document.createElement("div");

      item.className =
        "project-item";


      const name =
        document.createElement("div");

      name.className =
        "project-name";

      name.textContent =
        project;


      const deleteButton =
        document.createElement("button");

      deleteButton.className =
        "danger";

      deleteButton.textContent =
        "Delete";


      deleteButton.onclick =
        function(){

          account.projects.splice(
            index,
            1
          );

          saveAccount(account);

          renderProjects();

          updateProjectCount();

          toast("Project removed");

        };


      item.appendChild(name);

      item.appendChild(deleteButton);

      list.appendChild(item);

    }
  );


  updateProjectCount();

}


function updateProjectCount(){

  const account =
    getAccount();


  const count =
    account &&
    Array.isArray(account.projects)
      ? account.projects.length
      : 0;


  document.getElementById("projectCount")
    .textContent =
    count;

}


/* AUTO LOGIN */

if(
  localStorage.getItem("nexoraLoggedIn") === "true"
){

  openDashboard();

}

</script>

</body>
</html>`;

    return new Response(html,{
      status:200,
      headers:{
        "content-type":"text/html; charset=UTF-8",
        "cache-control":"no-store"
      }
    });
  }
};
