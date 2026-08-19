export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>NEXORA — Demo Dashboard</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#07111f;
  --bg2:#0b1728;
  --panel:rgba(17,30,50,.82);
  --panel2:rgba(20,37,61,.78);
  --line:rgba(148,163,184,.14);
  --text:#f8fafc;
  --muted:#94a3b8;
  --blue:#3b82f6;
  --blue2:#60a5fa;
  --green:#34d399;
  --orange:#fbbf24;
  --red:#fb7185;
}

html{scroll-behavior:smooth}

body{
  margin:0;
  min-height:100vh;
  color:var(--text);
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  background:
    radial-gradient(circle at 15% 5%,rgba(37,99,235,.28),transparent 28%),
    radial-gradient(circle at 85% 10%,rgba(14,165,233,.18),transparent 25%),
    radial-gradient(circle at 70% 90%,rgba(99,102,241,.16),transparent 30%),
    linear-gradient(135deg,#050b14 0%,#091525 48%,#07111f 100%);
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.22;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
  background-size:48px 48px;
}

button,input{font:inherit}

button{cursor:pointer}

.hidden{display:none!important}

.demo-pill{
  display:inline-flex;
  align-items:center;
  gap:7px;
  padding:6px 10px;
  border:1px solid rgba(251,191,36,.25);
  border-radius:999px;
  color:#fcd34d;
  background:rgba(251,191,36,.08);
  font-size:11px;
  font-weight:800;
  letter-spacing:.5px;
}

/* AUTH */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
}

.auth-card{
  width:100%;
  max-width:430px;
  padding:38px;
  border:1px solid var(--line);
  border-radius:26px;
  background:rgba(9,20,34,.88);
  backdrop-filter:blur(24px);
  box-shadow:0 30px 100px rgba(0,0,0,.5);
}

.brand{
  text-align:center;
  font-size:31px;
  font-weight:950;
  letter-spacing:3px;
}

.brand-mark{
  width:48px;
  height:48px;
  display:grid;
  place-items:center;
  margin:0 auto 15px;
  border-radius:15px;
  background:linear-gradient(135deg,#2563eb,#60a5fa);
  box-shadow:0 12px 35px rgba(37,99,235,.35);
  font-weight:900;
}

.auth-sub{
  margin:9px 0 28px;
  text-align:center;
  color:var(--muted);
  font-size:14px;
}

.field{
  margin-bottom:12px;
}

.field label{
  display:block;
  margin-bottom:7px;
  color:#cbd5e1;
  font-size:12px;
  font-weight:700;
}

input{
  width:100%;
  padding:14px 15px;
  border:1px solid var(--line);
  border-radius:11px;
  outline:none;
  color:white;
  background:rgba(255,255,255,.045);
}

input:focus{
  border-color:rgba(96,165,250,.65);
  box-shadow:0 0 0 3px rgba(59,130,246,.12);
}

.auth-btn,.primary{
  border:0;
  border-radius:11px;
  padding:13px 18px;
  color:white;
  background:linear-gradient(135deg,#2563eb,#3b82f6);
  font-weight:800;
  box-shadow:0 10px 25px rgba(37,99,235,.2);
}

.auth-btn{
  width:100%;
  margin-top:8px;
}

.switch{
  margin-top:20px;
  text-align:center;
  color:var(--muted);
  font-size:13px;
}

.link-btn{
  border:0;
  background:none;
  color:#60a5fa;
  font-weight:800;
}

/* APP */

#app{
  min-height:100vh;
}

.shell{
  display:flex;
  min-height:100vh;
}

.sidebar{
  position:fixed;
  inset:0 auto 0 0;
  width:245px;
  padding:24px 16px;
  border-right:1px solid var(--line);
  background:rgba(4,12,23,.86);
  backdrop-filter:blur(24px);
  z-index:20;
}

.side-brand{
  display:flex;
  align-items:center;
  gap:12px;
  padding:5px 10px 28px;
}

.side-icon{
  width:38px;
  height:38px;
  display:grid;
  place-items:center;
  border-radius:11px;
  background:linear-gradient(135deg,#2563eb,#60a5fa);
  font-weight:900;
}

.side-name{
  font-size:20px;
  font-weight:900;
  letter-spacing:1.5px;
}

.nav-label{
  padding:12px 12px 8px;
  color:#64748b;
  font-size:10px;
  font-weight:900;
  letter-spacing:1.4px;
  text-transform:uppercase;
}

.nav{
  width:100%;
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px 13px;
  margin:3px 0;
  border:1px solid transparent;
  border-radius:11px;
  color:#94a3b8;
  background:transparent;
  text-align:left;
  transition:.2s;
}

.nav:hover{
  color:white;
  background:rgba(255,255,255,.05);
}

.nav.active{
  color:white;
  border-color:rgba(96,165,250,.13);
  background:linear-gradient(90deg,rgba(37,99,235,.27),rgba(37,99,235,.06));
}

.nav-icon{
  width:22px;
  text-align:center;
}

.logout{
  margin-top:18px;
  color:#fda4af;
}

.content{
  width:calc(100% - 245px);
  margin-left:245px;
}

.topbar{
  height:76px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 34px;
  border-bottom:1px solid var(--line);
  background:rgba(5,15,27,.58);
  backdrop-filter:blur(18px);
  position:sticky;
  top:0;
  z-index:10;
}

.top-left{
  display:flex;
  align-items:center;
  gap:12px;
}

.status-dot{
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--green);
  box-shadow:0 0 12px rgba(52,211,153,.7);
}

.top-right{
  display:flex;
  align-items:center;
  gap:15px;
}

.user-chip{
  display:flex;
  align-items:center;
  gap:10px;
}

.avatar{
  width:37px;
  height:37px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:white;
  background:linear-gradient(135deg,#1d4ed8,#60a5fa);
  font-size:13px;
  font-weight:900;
}

.user-text strong{
  display:block;
  font-size:13px;
}

.user-text span{
  color:var(--muted);
  font-size:11px;
}

.page{
  display:none;
  padding:34px;
}

.page.active{
  display:block;
}

.page-heading{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:20px;
  margin-bottom:24px;
}

.page-heading h1{
  margin:0;
  font-size:31px;
  letter-spacing:-1px;
}

.page-heading p{
  margin:7px 0 0;
  color:var(--muted);
  font-size:14px;
}

/* DASHBOARD */

.balance-grid{
  display:grid;
  grid-template-columns:1.65fr 1fr 1fr;
  gap:16px;
}

.card{
  position:relative;
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:19px;
  background:linear-gradient(145deg,rgba(20,37,61,.9),rgba(10,22,38,.83));
  box-shadow:0 18px 45px rgba(0,0,0,.18);
}

.balance-card{
  min-height:205px;
  padding:25px;
}

.balance-card:after{
  content:"";
  position:absolute;
  width:190px;
  height:190px;
  right:-65px;
  bottom:-95px;
  border-radius:50%;
  background:rgba(59,130,246,.2);
  filter:blur(4px);
}

.eyebrow{
  color:#94a3b8;
  font-size:11px;
  font-weight:800;
  letter-spacing:1px;
  text-transform:uppercase;
}

.balance{
  margin-top:12px;
  font-size:40px;
  font-weight:900;
  letter-spacing:-1.5px;
}

.balance-note{
  margin-top:13px;
  color:#86efac;
  font-size:12px;
  font-weight:700;
}

.small-card{
  min-height:205px;
  padding:24px;
}

.small-value{
  margin-top:22px;
  font-size:26px;
  font-weight:900;
}

.pending-value{
  color:#fcd34d;
}

.card-footer{
  margin-top:12px;
  color:var(--muted);
  font-size:12px;
}

/* MAIN GRID */

.main-grid{
  display:grid;
  grid-template-columns:1.45fr .8fr;
  gap:18px;
  margin-top:18px;
}

.panel{
  padding:23px;
  border:1px solid var(--line);
  border-radius:19px;
  background:rgba(12,27,45,.78);
  backdrop-filter:blur(18px);
}

.panel-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin-bottom:20px;
}

.panel-head h2{
  margin:0;
  font-size:16px;
}

.muted{
  color:var(--muted);
  font-size:12px;
}

.activity{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:15px 0;
  border-bottom:1px solid var(--line);
}

.activity:last-child{
  border-bottom:0;
}

.activity-left{
  display:flex;
  align-items:center;
  gap:12px;
}

.activity-icon{
  width:37px;
  height:37px;
  display:grid;
  place-items:center;
  border-radius:11px;
  background:rgba(59,130,246,.12);
}

.activity-name{
  font-weight:800;
  font-size:13px;
}

.activity-date{
  margin-top:3px;
  color:var(--muted);
  font-size:11px;
}

.amount{
  font-weight:900;
  font-size:13px;
}

.positive{color:#6ee7b7}
.negative{color:#fda4af}
.pending-color{color:#fcd34d}

.pending-item{
  padding:16px;
  margin-bottom:10px;
  border:1px solid rgba(251,191,36,.17);
  border-radius:13px;
  background:rgba(251,191,36,.055);
}

.pending-top{
  display:flex;
  justify-content:space-between;
  gap:12px;
}

.pending-amount{
  font-size:18px;
  font-weight:900;
}

.badge{
  padding:5px 8px;
  border-radius:999px;
  font-size:10px;
  font-weight:900;
}

.badge.pending{
  color:#fcd34d;
  background:rgba(251,191,36,.1);
}

.pending-meta{
  margin-top:9px;
  color:var(--muted);
  font-size:11px;
}

/* WALLET */

.wallet-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}

.action-card{
  padding:24px;
  border:1px solid var(--line);
  border-radius:18px;
  background:rgba(12,27,45,.78);
}

.action-card h2{
  margin:0 0 7px;
  font-size:17px;
}

.action-card p{
  color:var(--muted);
  font-size:12px;
  line-height:1.6;
}

.action-card .primary{
  margin-top:8px;
}

.message{
  min-height:18px;
  font-size:12px;
  font-weight:700;
}

.success{color:#6ee7b7}
.error{color:#fda4af}

/* TRANSACTIONS */

.transaction-list{
  border:1px solid var(--line);
  border-radius:18px;
  overflow:hidden;
}

.transaction{
  display:grid;
  grid-template-columns:1.5fr .8fr .7fr;
  align-items:center;
  gap:15px;
  padding:18px;
  border-bottom:1px solid var(--line);
  background:rgba(12,27,45,.55);
}

.transaction:last-child{
  border-bottom:0;
}

.transaction strong{
  font-size:13px;
}

.transaction small{
  display:block;
  margin-top:4px;
  color:var(--muted);
}

/* SETTINGS / PROFILE / PROJECTS */

.form-panel{
  max-width:700px;
}

.form-panel input{
  margin-bottom:14px;
}

.project{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 0;
  border-bottom:1px solid var(--line);
}

.project:last-child{
  border-bottom:0;
}

.danger{
  border:1px solid rgba(251,113,133,.2);
  border-radius:9px;
  padding:8px 11px;
  color:#fda4af;
  background:rgba(251,113,133,.08);
  font-size:11px;
  font-weight:800;
}

/* MODAL */

.modal{
  position:fixed;
  inset:0;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:rgba(0,0,0,.65);
  backdrop-filter:blur(8px);
  z-index:100;
}

.modal.show{
  display:flex;
}

.modal-box{
  width:100%;
  max-width:430px;
  padding:26px;
  border:1px solid var(--line);
  border-radius:19px;
  background:#0c1b2d;
  box-shadow:0 30px 80px rgba(0,0,0,.45);
}

.modal-box h2{
  margin-top:0;
}

/* MOBILE */

@media(max-width:1050px){
  .balance-grid{
    grid-template-columns:1fr 1fr;
  }

  .balance-card{
    grid-column:1/-1;
  }

  .main-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:760px){
  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    border-right:0;
    border-bottom:1px solid var(--line);
  }

  .shell{
    display:block;
  }

  .content{
    width:100%;
    margin-left:0;
  }

  .topbar{
    position:relative;
    padding:0 18px;
  }

  .page{
    padding:22px 16px 35px;
  }

  .balance-grid,
  .wallet-actions{
    grid-template-columns:1fr;
  }

  .balance-card{
    grid-column:auto;
  }

  .transaction{
    grid-template-columns:1fr;
  }

  .user-text{
    display:none;
  }
}
</style>
</head>

<body>

<!-- AUTH -->

<div id="auth">

  <div class="auth-card">

    <div class="brand-mark">N</div>

    <div class="brand">NEXORA</div>

    <div class="auth-sub">
      Premium account dashboard demo
    </div>

    <div style="text-align:center;margin-bottom:22px">
      <span class="demo-pill">● SIMULATED ENVIRONMENT</span>
    </div>

    <form id="authForm">

      <div class="field" id="nameField">
        <label>FULL NAME</label>
        <input id="authName" placeholder="Your name">
      </div>

      <div class="field">
        <label>EMAIL</label>
        <input id="authEmail" type="email" placeholder="you@example.com" required>
      </div>

      <div class="field">
        <label>PASSWORD</label>
        <input id="authPassword" type="password" placeholder="Password" required>
      </div>

      <button class="auth-btn" id="authButton" type="submit">
        Create Demo Account
      </button>

    </form>

    <div class="switch">
      <span id="switchText">Already have a demo account?</span>
      <button class="link-btn" id="switchButton" type="button">
        Login
      </button>
    </div>

    <div id="authMessage" class="message" style="text-align:center;margin-top:14px"></div>

  </div>

</div>


<!-- APP -->

<div id="app" class="hidden">

  <div class="shell">

    <aside class="sidebar">

      <div class="side-brand">
        <div class="side-icon">N</div>
        <div class="side-name">NEXORA</div>
      </div>

      <div class="nav-label">Workspace</div>

      <button class="nav active" onclick="showPage('dashboard',this)">
        <span class="nav-icon">⌂</span>
        Dashboard
      </button>

      <button class="nav" onclick="showPage('wallet',this)">
        <span class="nav-icon">◈</span>
        Wallet
      </button>

      <button class="nav" onclick="showPage('transactions',this)">
        <span class="nav-icon">↔</span>
        Transactions
      </button>

      <button class="nav" onclick="showPage('projects',this)">
        <span class="nav-icon">▣</span>
        Projects
      </button>

      <div class="nav-label">Account</div>

      <button class="nav" onclick="showPage('profile',this)">
        <span class="nav-icon">◎</span>
        Profile
      </button>

      <button class="nav" onclick="showPage('settings',this)">
        <span class="nav-icon">⚙</span>
        Settings
      </button>

      <button class="nav logout" onclick="logout()">
        <span class="nav-icon">↪</span>
        Logout
      </button>

    </aside>


    <div class="content">

      <header class="topbar">

        <div class="top-left">
          <span class="status-dot"></span>
          <span class="muted">NEXORA DEMO ONLINE</span>
        </div>

        <div class="top-right">

          <span class="demo-pill">
            SIMULATED FUNDS
          </span>

          <div class="user-chip">

            <div class="avatar" id="avatar">
              C
            </div>

            <div class="user-text">
              <strong id="userName">Demo User</strong>
              <span>Demo account</span>
            </div>

          </div>

        </div>

      </header>


      <!-- DASHBOARD -->

      <section id="dashboard" class="page active">

        <div class="page-heading">

          <div>
            <h1>Good to see you, <span id="welcomeName">User</span>.</h1>
            <p>Here's your NEXORA account overview.</p>
          </div>

          <span class="demo-pill">
            DEMO ACCOUNT
          </span>

        </div>


        <div class="balance-grid">

          <div class="card balance-card">

            <div class="eyebrow">Available Demo Balance</div>

            <div class="balance" id="dashboardBalance">
              $0.00
            </div>

            <div class="balance-note">
              ● Simulated account balance
            </div>

          </div>


          <div class="card small-card">

            <div class="eyebrow">Pending Withdrawals</div>

            <div class="small-value pending-value" id="pendingTotal">
              $0.00
            </div>

            <div class="card-footer">
              <span id="pendingCount">0</span> request(s) pending
            </div>

          </div>


          <div class="card small-card">

            <div class="eyebrow">Projects</div>

            <div class="small-value" id="projectCount">
              0
            </div>

            <div class="card-footer">
              Active demo projects
            </div>

          </div>

        </div>


        <div class="main-grid">

          <div class="panel">

            <div class="panel-head">

              <h2>Recent Activity</h2>

              <span class="muted">Latest account events</span>

            </div>

            <div id="dashboardActivity"></div>

          </div>


          <div class="panel">

            <div class="panel-head">

              <h2>Pending Withdrawals</h2>

              <span class="badge pending">PENDING</span>

            </div>

            <div id="dashboardPending"></div>

          </div>

        </div>


        <div class="panel" style="margin-top:18px">

          <div class="panel-head">

            <div>
              <h2>Quick Wallet Actions</h2>
              <div class="muted" style="margin-top:5px">
                All wallet actions are simulated for this demo.
              </div>
            </div>

            <button class="primary" onclick="showPageById('wallet')">
              Open Wallet
            </button>

          </div>

        </div>

      </section>


      <!-- WALLET -->

      <section id="wallet" class="page">

        <div class="page-heading">

          <div>
            <h1>Wallet</h1>
            <p>Manage your simulated demo balance.</p>
          </div>

          <span class="demo-pill">SIMULATED FUNDS</span>

        </div>


        <div class="card balance-card" style="margin-bottom:18px">

          <div class="eyebrow">Available Demo Balance</div>

          <div class="balance" id="walletBalance">
            $0.00
          </div>

          <div class="balance-note">
            ● No real money is processed
          </div>

        </div>


        <div class="wallet-actions">

          <div class="action-card">

            <h2>Deposit</h2>

            <p>
              Add illustrative funds to your simulated demo balance.
            </p>

            <input
              id="depositAmount"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Enter amount"
            >

            <button class="primary" onclick="deposit()">
              Add Demo Funds
            </button>

            <div id="depositMessage" class="message"></div>

          </div>


          <div class="action-card">

            <h2>Withdrawal Request</h2>

            <p>
              Create a simulated withdrawal request. Requests remain pending.
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

            <button class="primary" onclick="withdraw()">
              Request Demo Withdrawal
            </button>

            <div id="withdrawMessage" class="message"></div>

          </div>

        </div>


        <div class="panel" style="margin-top:18px">

          <div class="panel-head">
            <h2>Withdrawal PIN</h2>
            <span class="muted">Demo security setting</span>
          </div>

          <input
            id="newPin"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="Create a 4–6 digit PIN"
          >

          <button class="primary" onclick="setPin()">
            Save PIN
          </button>

          <div id="pinMessage" class="message"></div>

        </div>

      </section>


      <!-- TRANSACTIONS -->

      <section id="transactions" class="page">

        <div class="page-heading">

          <div>
            <h1>Transactions</h1>
            <p>Review your simulated account activity.</p>
          </div>

        </div>

        <div class="transaction-list" id="transactionList"></div>

      </section>


      <!-- PROJECTS -->

      <section id="projects" class="page">

        <div class="page-heading">

          <div>
            <h1>Projects</h1>
            <p>Manage your demo projects.</p>
          </div>

        </div>

        <div class="panel">

          <input
            id="projectInput"
            placeholder="Project name"
          >

          <button class="primary" onclick="addProject()">
            Add Project
          </button>

          <div id="projectList" style="margin-top:15px"></div>

        </div>

      </section>


      <!-- PROFILE -->

      <section id="profile" class="page">

        <div class="page-heading">

          <div>
            <h1>Profile</h1>
            <p>Manage your demo account details.</p>
          </div>

        </div>

        <div class="panel form-panel">

          <div class="field">
            <label>NAME</label>
            <input id="profileName">
          </div>

          <div class="field">
            <label>EMAIL</label>
            <input id="profileEmail" type="email">
          </div>

          <button class="primary" onclick="saveProfile()">
            Save Changes
          </button>

          <div id="profileMessage" class="message"></div>

        </div>

      </section>


      <!-- SETTINGS -->

      <section id="settings" class="page">

        <div class="page-heading">

          <div>
            <h1>Settings</h1>
            <p>Demo account preferences and information.</p>
          </div>

        </div>

        <div class="panel">

          <h2>About this demo</h2>

          <p class="muted" style="line-height:1.8">
            NEXORA is currently operating as a browser-based demonstration.
            Balances, deposits, transactions and withdrawals shown here are
            simulated data. This interface does not process real money or
            provide real investment returns.
          </p>

          <button class="danger" onclick="logout()">
            Log Out
          </button>

        </div>

      </section>

    </div>

  </div>

</div>


<!-- MODAL -->

<div class="modal" id="modal" onclick="closeModal(event)">

  <div class="modal-box">

    <h2 id="modalTitle">NEXORA</h2>

    <p class="muted" id="modalText"></p>

    <button class="primary" onclick="closeModal()">
      Close
    </button>

  </div>

</div>


<script>

const KEY="nexora_demo_account";
let loginMode=false;


function $(id){
  return document.getElementById(id);
}


function getAccount(){

  const raw=localStorage.getItem(KEY);

  if(!raw)return null;

  try{
    return JSON.parse(raw);
  }catch(e){
    return null;
  }

}


function saveAccount(account){
  localStorage.setItem(KEY,JSON.stringify(account));
}


function createDefaultAccount(name,email,password){

  return {
    name:name,
    email:email,
    password:password,
    balance:0,
    withdrawalPin:"",
    projects:[],
    transactions:[],
    pendingWithdrawals:[]
  };

}


function showAuthMessage(text,type){

  $("authMessage").textContent=text;

  $("authMessage").className=
    "message "+(type||"");

}


$("switchButton").onclick=function(){

  loginMode=!loginMode;

  $("nameField").style.display=
    loginMode ? "none" : "block";

  $("authName").required=!loginMode;

  $("authButton").textContent=
    loginMode ? "Login to Demo" : "Create Demo Account";

  $("switchText").textContent=
    loginMode
      ? "New here?"
      : "Already have a demo account?";

  $("switchButton").textContent=
    loginMode
      ? "Create account"
      : "Login";

  showAuthMessage("");

};


$("authForm").onsubmit=function(e){

  e.preventDefault();

  const email=$("authEmail").value.trim().toLowerCase();

  const password=$("authPassword").value;

  if(loginMode){

    const account=getAccount();

    if(
      !account ||
      account.email!==email ||
      account.password!==password
    ){

      showAuthMessage(
        "Demo login failed. Check your details.",
        "error"
      );

      return;
    }

    openApp();

  }else{

    const name=$("authName").value.trim();

    if(!name){

      showAuthMessage(
        "Please enter your name.",
        "error"
      );

      return;
    }

    if(password.length<6){

      showAuthMessage(
        "Password must contain at least 6 characters.",
        "error"
      );

      return;
    }

    const account=
      createDefaultAccount(
        name,
        email,
        password
      );

    saveAccount(account);

    openApp();

  }

};


function openApp(){

  $("auth").classList.add("hidden");

  $("app").classList.remove("hidden");

  refreshApp();

}


function logout(){

  localStorage.removeItem(KEY);

  location.reload();

}


function showPage(id,button){

  document.querySelectorAll(".page")
    .forEach(function(page){
      page.classList.remove("active");
    });

  const page=$(id);

  if(page){
    page.classList.add("active");
  }

  document.querySelectorAll(".nav")
    .forEach(function(nav){
      nav.classList.remove("active");
    });

  if(button){
    button.classList.add("active");
  }

  refreshApp();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function showPageById(id){

  const navs=document.querySelectorAll(".nav");

  let target=null;

  navs.forEach(function(nav){

    if(
      nav.textContent
        .toLowerCase()
        .includes(id.toLowerCase())
    ){
      target=nav;
    }

  });

  showPage(id,target);

}


function formatMoney(value){

  return "$"+Number(value||0).toLocaleString(
    "en-US",
    {
      minimumFractionDigits:2,
      maximumFractionDigits:2
    }
  );

}


function initials(name){

  return String(name||"U")
    .trim()
    .split(/\s+/)
    .slice(0,2)
    .map(x=>x[0])
    .join("")
    .toUpperCase();

}


function refreshApp(){

  const account=getAccount();

  if(!account)return;

  $("userName").textContent=account.name;

  $("welcomeName").textContent=account.name;

  $("avatar").textContent=initials(account.name);

  $("dashboardBalance").textContent=
    formatMoney(account.balance);

  $("walletBalance").textContent=
    formatMoney(account.balance);

  const projects=
    Array.isArray(account.projects)
      ? account.projects
      : [];

  $("projectCount").textContent=
    projects.length;

  renderPendingTotals(account);

  renderDashboardActivity(account);

  renderDashboardPending(account);

  renderTransactions(account);

  renderProjects(account);

  $("profileName").value=account.name;

  $("profileEmail").value=account.email;

}


function renderPendingTotals(account){

  const list=
    Array.isArray(account.pendingWithdrawals)
      ? account.pendingWithdrawals
      : [];

  const total=list.reduce(
    (sum,item)=>
      sum+Number(item.amount||0),
    0
  );

  $("pendingTotal").textContent=
    formatMoney(total);

  $("pendingCount").textContent=
    list.length;

}


function renderDashboardActivity(account){

  const list=$("dashboardActivity");

  list.innerHTML="";

  const transactions=
    Array.isArray(account.transactions)
      ? account.transactions.slice(0,5)
      : [];

  if(!transactions.length){

    list.innerHTML=
      '<div class="muted">No activity yet. Add simulated funds from the Wallet.</div>';

    return;
  }

  transactions.forEach(function(item){

    const row=document.createElement("div");

    row.className="activity";

    const left=document.createElement("div");

    left.className="activity-left";

    const icon=document.createElement("div");

    icon.className="activity-icon";

    icon.textContent=
      item.type==="Deposit" ? "↓" : "↑";

    const text=document.createElement("div");

    const name=document.createElement("div");

    name.className="activity-name";

    name.textContent=item.type;

    const date=document.createElement("div");

    date.className="activity-date";

    date.textContent=item.date;

    text.appendChild(name);

    text.appendChild(date);

    left.appendChild(icon);

    left.appendChild(text);

    const amount=document.createElement("div");

    amount.className="amount "+
      (item.status==="Pending"
        ? "pending-color"
        : item.type==="Deposit"
          ? "positive"
          : "negative");

    amount.textContent=
      (item.type==="Deposit" ? "+" : "-")+
      formatMoney(item.amount);

    row.appendChild(left);

    row.appendChild(amount);

    list.appendChild(row);

  });

}


function renderDashboardPending(account){

  const list=$("dashboardPending");

  list.innerHTML="";

  const pending=
    Array.isArray(account.pendingWithdrawals)
      ? account.pendingWithdrawals
      : [];

  if(!pending.length){

    list.innerHTML=
      '<div class="muted">No pending demo withdrawals.</div>';

    return;
  }

  pending.slice(0,4).forEach(function(item){

    const box=document.createElement("div");

    box.className="pending-item";

    const top=document.createElement("div");

    top.className="pending-top";

    const amount=document.createElement("div");

    amount.className="pending-amount";

    amount.textContent=
      formatMoney(item.amount);

    const badge=document.createElement("span");

    badge.className="badge pending";

    badge.textContent="PENDING";

    top.appendChild(amount);

    top.appendChild(badge);

    const meta=document.createElement("div");

    meta.className="pending-meta";

    meta.textContent=
      "Demo withdrawal • "+item.date;

    box.appendChild(top);

    box.appendChild(meta);

    list.appendChild(box);

  });

}


function deposit(){

  const account=getAccount();

  const amount=Number($("depositAmount").value);

  const message=$("depositMessage");

  if(!Number.isFinite(amount)||amount<=0){

    message.textContent=
      "Enter a valid demo amount.";

    message.className="message error";

    return;
  }

  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }

  account.balance=
    Number(account.balance||0)+amount;

  account.transactions.unshift({

    id:Date.now(),

    type:"Deposit",

    amount:amount,

    status:"Simulated",

    date:new Date().toLocaleString()

  });

  saveAccount(account);

  $("depositAmount").value="";

  message.textContent=
    formatMoney(amount)+
    " added as simulated demo funds.";

  message.className="message success";

  refreshApp();

}


function setPin(){

  const account=getAccount();

  const pin=$("newPin").value.trim();

  const message=$("pinMessage");

  if(!/^[0-9]{4,6}$/.test(pin)){

    message.textContent=
      "PIN must contain 4–6 digits.";

    message.className="message error";

    return;
  }

  account.withdrawalPin=pin;

  saveAccount(account);

  $("newPin").value="";

  message.textContent=
    "Demo withdrawal PIN saved.";

  message.className="message success";

}


function withdraw(){

  const account=getAccount();

  const amount=Number($("withdrawAmount").value);

  const pin=$("withdrawPin").value.trim();

  const message=$("withdrawMessage");

  if(!Number.isFinite(amount)||amount<=0){

    message.textContent=
      "Enter a valid amount.";

    message.className="message error";

    return;
  }

  if(!account.withdrawalPin){

    message.textContent=
      "Set a demo withdrawal PIN first.";

    message.className="message error";

    return;
  }

  if(pin!==account.withdrawalPin){

    message.textContent=
      "Incorrect demo withdrawal PIN.";

    message.className="message error";

    return;
  }

  if(amount>Number(account.balance||0)){

    message.textContent=
      "Insufficient simulated balance.";

    message.className="message error";

    return;
  }

  if(!Array.isArray(account.pendingWithdrawals)){
    account.pendingWithdrawals=[];
  }

  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }

  account.balance=
    Number(account.balance||0)-amount;

  const item={

    id:Date.now(),

    type:"Withdrawal",

    amount:amount,

    status:"Pending",

    date:new Date().toLocaleString()

  };

  account.pendingWithdrawals.unshift(item);

  account.transactions.unshift(item);

  saveAccount(account);

  $("withdrawAmount").value="";

  $("withdrawPin").value="";

  message.textContent=
    "Demo withdrawal submitted and marked Pending.";

  message.className="message success";

  refreshApp();

}


function renderTransactions(account){

  const list=$("transactionList");

  list.innerHTML="";

  const transactions=
    Array.isArray(account.transactions)
      ? account.transactions
      : [];

  if(!transactions.length){

    list.innerHTML=
      '<div class="panel"><div class="muted">No transactions yet.</div></div>';

    return;
  }

  transactions.forEach(function(item){

    const row=document.createElement("div");

    row.className="transaction";

    const first=document.createElement("div");

    const title=document.createElement("strong");

    title.textContent=item.type;

    const date=document.createElement("small");

    date.textContent=item.date;

    first.appendChild(title);

    first.appendChild(date);

    const amount=document.createElement("div");

    amount.className="amount "+
      (item.status==="Pending"
        ? "pending-color"
        : item.type==="Deposit"
          ? "positive"
          : "negative");

    amount.textContent=
      (item.type==="Deposit" ? "+" : "-")+
      formatMoney(item.amount);

    const status=document.createElement("div");

    status.className="muted";

    status.textContent=item.status;

    row.appendChild(first);

    row.appendChild(amount);

    row.appendChild(status);

    list.appendChild(row);

  });

}


function addProject(){

  const account=getAccount();

  const input=$("projectInput");

  const name=input.value.trim();

  if(!name)return;

  if(!Array.isArray(account.projects)){
    account.projects=[];
  }

  account.projects.push(name);

  saveAccount(account);

  input.value="";

  refreshApp();

}


function renderProjects(account){

  const list=$("projectList");

  list.innerHTML="";

  const projects=
    Array.isArray(account.projects)
      ? account.projects
      : [];

  if(!projects.length){

    list.innerHTML=
      '<div class="muted" style="padding:18px 0">No projects created yet.</div>';

    return;
  }

  projects.forEach(function(name,index){

    const row=document.createElement("div");

    row.className="project";

    const title=document.createElement("strong");

    title.textContent=name;

    const remove=document.createElement("button");

    remove.className="danger";

    remove.textContent="Delete";

    remove.onclick=function(){

      account.projects.splice(index,1);

      saveAccount(account);

      refreshApp();

    };

    row.appendChild(title);

    row.appendChild(remove);

    list.appendChild(row);

  });

}


function saveProfile(){

  const account=getAccount();

  const name=$("profileName").value.trim();

  const email=$("profileEmail").value.trim();

  const message=$("profileMessage");

  if(!name||!email){

    message.textContent=
      "Please complete both fields.";

    message.className="message error";

    return;
  }

  account.name=name;

  account.email=email;

  saveAccount(account);

  message.textContent=
    "Profile saved in demo mode.";

  message.className="message success";

  refreshApp();

}


function closeModal(e){

  if(!e||e.target.id==="modal"){
    $("modal").classList.remove("show");
  }

}


function openModal(title,text){

  $("modalTitle").textContent=title;

  $("modalText").textContent=text;

  $("modal").classList.add("show");

}


/* START */

(function(){

  const account=getAccount();

  if(account){

    openApp();

  }

})();

</script>

</body>
</html>`;

    return new Response(html,{
      status:200,
      headers:{
        "content-type":"text/html;charset=UTF-8",
        "cache-control":"no-store"
      }
    });
  }
};
