export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nexora — Demo Account Platform</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#070b14;
  --panel:#0e1524;
  --panel2:#111a2c;
  --border:rgba(255,255,255,.08);
  --text:#f8fafc;
  --muted:#94a3b8;
  --blue:#3b82f6;
  --cyan:#22d3ee;
  --green:#22c55e;
  --red:#ef4444;
  --gold:#f59e0b;
}

html,body{
  margin:0;
  min-height:100%;
  font-family:Inter,Arial,sans-serif;
  background:
    radial-gradient(circle at 15% 10%,rgba(59,130,246,.15),transparent 28%),
    radial-gradient(circle at 85% 15%,rgba(34,211,238,.09),transparent 25%),
    radial-gradient(circle at 50% 90%,rgba(99,102,241,.08),transparent 32%),
    var(--bg);
  color:var(--text);
}

button,input{
  font:inherit;
}

button{
  cursor:pointer;
}

input{
  width:100%;
  padding:14px 15px;
  margin:7px 0;
  border:1px solid var(--border);
  border-radius:12px;
  background:#0a1120;
  color:white;
  outline:none;
}

input::placeholder{
  color:#64748b;
}

input:focus{
  border-color:rgba(59,130,246,.8);
  box-shadow:0 0 0 3px rgba(59,130,246,.12);
}

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  background:
    radial-gradient(circle at 20% 20%,rgba(59,130,246,.2),transparent 30%),
    radial-gradient(circle at 80% 80%,rgba(34,211,238,.12),transparent 28%),
    #050912;
}

.auth-card{
  width:100%;
  max-width:430px;
  padding:34px;
  border:1px solid var(--border);
  border-radius:24px;
  background:rgba(14,21,36,.92);
  box-shadow:0 30px 100px rgba(0,0,0,.5);
  backdrop-filter:blur(20px);
}

.brand{
  font-size:30px;
  font-weight:900;
  letter-spacing:2px;
  text-align:center;
}

.brand-mark{
  display:inline-flex;
  width:42px;
  height:42px;
  align-items:center;
  justify-content:center;
  border-radius:13px;
  margin-right:8px;
  background:linear-gradient(135deg,var(--blue),var(--cyan));
  box-shadow:0 10px 30px rgba(59,130,246,.3);
}

.auth-subtitle{
  text-align:center;
  color:var(--muted);
  margin:12px 0 28px;
}

.auth-button{
  width:100%;
  margin-top:12px;
  padding:14px;
  border:0;
  border-radius:12px;
  color:white;
  font-weight:800;
  background:linear-gradient(135deg,#2563eb,#0891b2);
}

.auth-switch{
  text-align:center;
  color:var(--muted);
  font-size:14px;
  margin-top:20px;
}

.auth-switch button{
  border:0;
  background:none;
  color:#60a5fa;
  font-weight:700;
}

.auth-message{
  min-height:22px;
  text-align:center;
  margin-top:14px;
  font-size:14px;
}

.success{color:var(--green);font-weight:700}
.error{color:#f87171;font-weight:700}

/* APP */

#app{
  display:none;
  min-height:100vh;
}

.sidebar{
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  width:255px;
  padding:25px 17px;
  background:rgba(5,10,19,.96);
  border-right:1px solid var(--border);
  z-index:20;
}

.side-brand{
  padding:5px 12px 30px;
  font-size:22px;
  font-weight:900;
  letter-spacing:1.5px;
}

.side-brand span{
  color:#60a5fa;
}

.demo-label{
  margin:0 10px 20px;
  padding:8px 10px;
  border:1px solid rgba(245,158,11,.18);
  border-radius:8px;
  background:rgba(245,158,11,.08);
  color:#fbbf24;
  font-size:11px;
  font-weight:800;
  text-align:center;
}

.nav{
  display:block;
  width:100%;
  margin:5px 0;
  padding:13px 14px;
  border:0;
  border-radius:11px;
  background:transparent;
  color:#94a3b8;
  text-align:left;
  transition:.2s;
}

.nav:hover{
  background:rgba(59,130,246,.1);
  color:white;
}

.nav.active{
  background:linear-gradient(135deg,rgba(59,130,246,.95),rgba(37,99,235,.75));
  color:white;
  box-shadow:0 10px 25px rgba(37,99,235,.2);
}

.logout{
  margin-top:25px;
  color:#fca5a5;
}

.main{
  margin-left:255px;
  padding:0 38px 50px;
}

.topbar{
  height:72px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid var(--border);
}

.status{
  color:#94a3b8;
  font-size:13px;
}

.status-dot{
  display:inline-block;
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
  margin-right:7px;
  box-shadow:0 0 10px var(--green);
}

.user-chip{
  padding:8px 12px;
  border:1px solid var(--border);
  border-radius:20px;
  color:#cbd5e1;
  font-size:13px;
}

.page{
  display:none;
}

.page.active{
  display:block;
}

.header{
  padding:38px 0 25px;
}

.header h1{
  margin:0;
  font-size:34px;
  letter-spacing:-1px;
}

.header p{
  color:var(--muted);
  margin:8px 0 0;
}

/* DASHBOARD */

.balance-card{
  position:relative;
  overflow:hidden;
  padding:30px;
  border:1px solid rgba(96,165,250,.18);
  border-radius:22px;
  background:
    radial-gradient(circle at 90% 10%,rgba(34,211,238,.15),transparent 30%),
    linear-gradient(135deg,#101b32,#0b1425);
  box-shadow:0 25px 60px rgba(0,0,0,.25);
}

.balance-card:after{
  content:"";
  position:absolute;
  width:180px;
  height:180px;
  right:-70px;
  bottom:-90px;
  border-radius:50%;
  background:rgba(59,130,246,.12);
}

.balance-label{
  color:#94a3b8;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:1px;
  font-weight:800;
}

.balance{
  font-size:48px;
  font-weight:900;
  margin:12px 0;
  letter-spacing:-2px;
}

.balance-note{
  color:#64748b;
  font-size:13px;
}

.quick-actions{
  display:flex;
  gap:10px;
  margin-top:25px;
}

.primary{
  border:0;
  padding:12px 18px;
  border-radius:11px;
  background:linear-gradient(135deg,#2563eb,#0891b2);
  color:white;
  font-weight:800;
}

.secondary{
  border:1px solid var(--border);
  padding:12px 18px;
  border-radius:11px;
  background:#111827;
  color:#e2e8f0;
  font-weight:700;
}

.danger{
  border:0;
  padding:12px 18px;
  border-radius:11px;
  background:#7f1d1d;
  color:white;
  font-weight:700;
}

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
  margin-top:20px;
}

.card,.panel{
  border:1px solid var(--border);
  border-radius:18px;
  background:rgba(14,21,36,.86);
  box-shadow:0 15px 40px rgba(0,0,0,.18);
}

.card{
  padding:22px;
}

.card-title{
  color:#64748b;
  font-size:11px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:.8px;
}

.card-number{
  font-size:27px;
  font-weight:900;
  margin-top:9px;
}

.card-small{
  color:#64748b;
  font-size:12px;
  margin-top:7px;
}

.panel{
  padding:25px;
  margin-top:20px;
}

.panel h2{
  margin-top:0;
}

.panel p{
  color:var(--muted);
}

.grid-two{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:17px 0;
  border-bottom:1px solid var(--border);
}

.transaction:last-child{
  border-bottom:0;
}

.tx-left{
  display:flex;
  align-items:center;
  gap:12px;
}

.tx-icon{
  width:40px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  background:#111c30;
}

.tx-name{
  font-weight:800;
}

.tx-date{
  color:#64748b;
  font-size:11px;
  margin-top:4px;
}

.tx-amount{
  text-align:right;
  font-weight:800;
}

.deposit-text{color:var(--green)}
.withdraw-text{color:#f87171}
.pending-text{color:var(--gold)}

.pending{
  padding:14px;
  margin-top:10px;
  border:1px solid rgba(245,158,11,.18);
  border-radius:12px;
  background:rgba(245,158,11,.08);
  color:#fbbf24;
}

.empty{
  color:#64748b;
  padding:15px 0;
}

/* MOBILE */

@media(max-width:850px){

  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    bottom:auto;
  }

  .main{
    margin-left:0;
    padding:0 18px 40px;
  }

  .side-brand{
    padding-bottom:18px;
  }

  .cards,
  .grid-two{
    grid-template-columns:1fr;
  }

  .topbar{
    height:60px;
  }

  .header h1{
    font-size:28px;
  }

  .balance{
    font-size:38px;
  }

  .quick-actions{
    flex-wrap:wrap;
  }
}
</style>
</head>

<body>

<div id="auth">
  <div class="auth-card">

    <div class="brand">
      <span class="brand-mark">N</span>NEXORA
    </div>

    <div class="auth-subtitle">
      Premium demo account platform
    </div>

    <div id="loginForm">

      <input id="loginEmail" type="email" placeholder="Email">

      <input id="loginPassword" type="password" placeholder="Password">

      <button class="auth-button" onclick="login()">
        Sign In
      </button>

      <div class="auth-switch">
        New to Nexora?
        <button onclick="showSignup()">Create demo account</button>
      </div>

    </div>

    <div id="signupForm" style="display:none">

      <input id="signupName" placeholder="Full name">

      <input id="signupEmail" type="email" placeholder="Email">

      <input id="signupPassword" type="password" placeholder="Password">

      <button class="auth-button" onclick="signup()">
        Create Demo Account
      </button>

      <div class="auth-switch">
        Already registered?
        <button onclick="showLogin()">Sign in</button>
      </div>

    </div>

    <div id="authMessage" class="auth-message"></div>

  </div>
</div>


<div id="app">

  <aside class="sidebar">

    <div class="side-brand">
      NEXORA <span>•</span>
    </div>

    <div class="demo-label">
      DEMO ENVIRONMENT
    </div>

    <button class="nav active" onclick="showPage('dashboard',this)">
      ◈ &nbsp; Overview
    </button>

    <button class="nav" onclick="showPage('wallet',this)">
      ◇ &nbsp; Wallet
    </button>

    <button class="nav" onclick="showPage('transactions',this)">
      ≡ &nbsp; Activity
    </button>

    <button class="nav" onclick="showPage('profile',this)">
      ◎ &nbsp; Profile
    </button>

    <button class="nav" onclick="showPage('projects',this)">
      ◫ &nbsp; Projects
    </button>

    <button class="nav" onclick="showPage('settings',this)">
      ⚙ &nbsp; Settings
    </button>

    <button class="nav logout" onclick="logout()">
      ↪ &nbsp; Sign Out
    </button>

  </aside>


  <main class="main">

    <div class="topbar">
      <div class="status">
        <span class="status-dot"></span>
        Demo platform online
      </div>

      <div class="user-chip" id="topUser">
        Account
      </div>
    </div>


    <!-- OVERVIEW -->

    <section id="dashboard" class="page active">

      <div class="header">
        <h1 id="welcomeTitle">Welcome</h1>
        <p>Overview of your Nexora demo account.</p>
      </div>

      <div class="balance-card">

        <div class="balance-label">
          Simulated available balance
        </div>

        <div class="balance" id="dashboardBalance">
          $0.00
        </div>

        <div class="balance-note">
          Demonstration value — no real funds are held.
        </div>

        <div class="quick-actions">
          <button class="primary" onclick="openWallet()">
            Add Demo Funds
          </button>

          <button class="secondary" onclick="openTransactions()">
            View Activity
          </button>
        </div>

      </div>


      <div class="cards">

        <div class="card">
          <div class="card-title">Balance</div>
          <div class="card-number" id="dashboardCardBalance">
            $0.00
          </div>
          <div class="card-small">Simulated funds</div>
        </div>

        <div class="card">
          <div class="card-title">Projects</div>
          <div class="card-number" id="projectCount">0</div>
          <div class="card-small">Active demo projects</div>
        </div>

        <div class="card">
          <div class="card-title">Account</div>
          <div class="card-number">Active</div>
          <div class="card-small">Demo account status</div>
        </div>

      </div>


      <div class="grid-two">

        <div class="panel">
          <h2>Recent activity</h2>
          <div id="dashboardTransactions"></div>
        </div>

        <div class="panel">
          <h2>Platform notice</h2>
          <p>
            Nexora is currently running as a browser-based demonstration.
            Wallet balances and transactions are illustrative only.
          </p>
        </div>

      </div>

    </section>


    <!-- WALLET -->

    <section id="wallet" class="page">

      <div class="header">
        <h1>Wallet</h1>
        <p>Manage simulated funds in your demo account.</p>
      </div>

      <div class="balance-card">

        <div class="balance-label">
          Simulated balance
        </div>

        <div class="balance" id="walletBalance">
          $0.00
        </div>

        <div class="balance-note">
          Demo value only. No real money is transferred.
        </div>

      </div>


      <div class="grid-two">

        <div class="panel">

          <h2>Add demo funds</h2>

          <p>
            Increase your simulated balance for testing the interface.
          </p>

          <input
            id="depositAmount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
          >

          <button class="primary" onclick="deposit()">
            Add Demo Funds
          </button>

          <p id="depositMessage"></p>

        </div>


        <div class="panel">

          <h2>Demo withdrawal</h2>

          <p>
            Withdrawal requests are simulated and remain pending.
          </p>

          <input
            id="withdrawAmount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
          >

          <input
            id="withdrawPin"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="Withdrawal PIN"
          >

          <button class="primary" onclick="withdraw()">
            Submit Demo Request
          </button>

          <p id="withdrawMessage"></p>

        </div>

      </div>


      <div class="grid-two">

        <div class="panel">

          <h2>Withdrawal PIN</h2>

          <p>
            Create a 4–6 digit PIN for this browser demo.
          </p>

          <input
            id="newPin"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="4–6 digit PIN"
          >

          <button class="secondary" onclick="setWithdrawalPin()">
            Save PIN
          </button>

          <p id="pinMessage"></p>

        </div>


        <div class="panel">

          <h2>Pending requests</h2>

          <div id="pendingList">
            No pending requests.
          </div>

        </div>

      </div>

    </section>


    <!-- ACTIVITY -->

    <section id="transactions" class="page">

      <div class="header">
        <h1>Activity</h1>
        <p>Your simulated account activity.</p>
      </div>

      <div class="panel">
        <div id="transactionList"></div>
      </div>

    </section>


    <!-- PROFILE -->

    <section id="profile" class="page">

      <div class="header">
        <h1>Profile</h1>
        <p>Manage your demo account information.</p>
      </div>

      <div class="panel">

        <input id="profileName" placeholder="Full name">

        <input id="profileEmail" disabled placeholder="Email">

        <button class="primary" onclick="saveProfile()">
          Save Changes
        </button>

        <p id="profileMessage"></p>

      </div>

    </section>


    <!-- PROJECTS -->

    <section id="projects" class="page">

      <div class="header">
        <h1>Projects</h1>
        <p>Manage your demonstration projects.</p>
      </div>

      <div class="panel">

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <button class="primary" onclick="addProject()">
          Create Project
        </button>

        <div id="projectList"></div>

      </div>

    </section>


    <!-- SETTINGS -->

    <section id="settings" class="page">

      <div class="header">
        <h1>Settings</h1>
        <p>Demo account configuration.</p>
      </div>

      <div class="panel">

        <h2>Demo environment</h2>

        <p>
          This platform is a browser-only demonstration. It does not
          process real deposits, withdrawals, investments, mining,
          financial returns, or other real-money transactions.
        </p>

        <p>
          Account information and demo activity are stored locally
          in this browser.
        </p>

        <button class="danger" onclick="logout()">
          Sign Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

function getAccount(){

  const raw=localStorage.getItem("nexoraAccount");

  if(!raw)return null;

  try{
    return JSON.parse(raw);
  }catch(e){
    return null;
  }

}


function saveAccount(account){

  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );

}


function showSignup(){

  document.getElementById("loginForm").style.display="none";

  document.getElementById("signupForm").style.display="block";

  document.getElementById("authMessage").textContent="";

}


function showLogin(){

  document.getElementById("loginForm").style.display="block";

  document.getElementById("signupForm").style.display="none";

  document.getElementById("authMessage").textContent="";

}


function signup(){

  const name=document.getElementById("signupName").value.trim();

  const email=document.getElementById("signupEmail").value.trim();

  const password=document.getElementById("signupPassword").value;

  const message=document.getElementById("authMessage");


  if(!name||!email||!password){

    message.textContent="Please complete all fields.";

    message.className="auth-message error";

    return;

  }


  if(password.length<6){

    message.textContent="Password must contain at least 6 characters.";

    message.className="auth-message error";

    return;

  }


  const account={
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

  localStorage.setItem("nexoraLoggedIn","true");

  openDashboard();

}


function login(){

  const email=document.getElementById("loginEmail").value.trim();

  const password=document.getElementById("loginPassword").value;

  const account=getAccount();

  const message=document.getElementById("authMessage");


  if(!account){

    message.textContent="No demo account found. Create one first.";

    message.className="auth-message error";

    return;

  }


  if(email!==account.email||password!==account.password){

    message.textContent="Incorrect email or password.";

    message.className="auth-message error";

    return;

  }


  localStorage.setItem("nexoraLoggedIn","true");

  openDashboard();

}


function openDashboard(){

  const account=getAccount();

  if(!account)return;


  document.getElementById("auth").style.display="none";

  document.getElementById("app").style.display="block";


  document.getElementById("welcomeTitle").textContent=
    "Welcome, "+account.name;


  document.getElementById("topUser").textContent=
    account.name;


  document.getElementById("profileName").value=
    account.name;


  document.getElementById("profileEmail").value=
    account.email;


  updateBalance();

  renderProjects();

  renderTransactions();

  renderDashboardTransactions();

  renderPendingWithdrawals();

}


function logout(){

  localStorage.removeItem("nexoraLoggedIn");

  document.getElementById("app").style.display="none";

  document.getElementById("auth").style.display="flex";

  showLogin();

}


function showPage(page,button){

  document.querySelectorAll(".page").forEach(
    section=>section.classList.remove("active")
  );


  document.getElementById(page).classList.add("active");


  document.querySelectorAll(".nav").forEach(
    nav=>nav.classList.remove("active")
  );


  if(button)button.classList.add("active");


  updateBalance();

  renderTransactions();

  renderDashboardTransactions();

  renderPendingWithdrawals();

}


function openWallet(){

  const button=[...document.querySelectorAll(".nav")]
    .find(x=>x.textContent.includes("Wallet"));

  showPage("wallet",button);

}


function openTransactions(){

  const button=[...document.querySelectorAll(".nav")]
    .find(x=>x.textContent.includes("Activity"));

  showPage("transactions",button);

}


function updateBalance(){

  const account=getAccount();

  if(!account)return;


  const amount=Number(account.balance||0);

  const formatted="$"+amount.toFixed(2);


  document.getElementById("walletBalance").textContent=formatted;

  document.getElementById("dashboardBalance").textContent=formatted;

  document.getElementById("dashboardCardBalance").textContent=formatted;

}


function deposit(){

  const account=getAccount();

  const input=document.getElementById("depositAmount");

  const message=document.getElementById("depositMessage");

  const amount=Number(input.value);


  if(!account){

    message.textContent="Please sign in first.";

    message.className="error";

    return;

  }


  if(!Number.isFinite(amount)||amount<=0){

    message.textContent="Enter a valid amount.";

    message.className="error";

    return;

  }


  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }


  account.balance=Number(account.balance||0)+amount;


  account.transactions.unshift({

    id:Date.now(),

    type:"Deposit",

    amount:amount,

    status:"Completed",

    date:new Date().toLocaleString()

  });


  saveAccount(account);

  input.value="";


  message.textContent=
    "$"+amount.toFixed(2)+" added to your simulated balance.";

  message.className="success";


  updateBalance();

  renderTransactions();

  renderDashboardTransactions();

}


function setWithdrawalPin(){

  const account=getAccount();

  const input=document.getElementById("newPin");

  const message=document.getElementById("pinMessage");

  const pin=input.value.trim();


  if(!account)return;


  if(!/^[0-9]{4,6}$/.test(pin)){

    message.textContent="PIN must contain 4–6 digits.";

    message.className="error";

    return;

  }


  account.withdrawalPin=pin;

  saveAccount(account);

  input.value="";


  message.textContent="Demo withdrawal PIN saved.";

  message.className="success";

}


function withdraw(){

  const account=getAccount();

  const amount=Number(
    document.getElementById("withdrawAmount").value
  );

  const pin=document.getElementById("withdrawPin").value.trim();

  const message=document.getElementById("withdrawMessage");


  if(!account)return;


  if(!Number.isFinite(amount)||amount<=0){

    message.textContent="Enter a valid amount.";

    message.className="error";

    return;

  }


  if(!account.withdrawalPin){

    message.textContent="Create a withdrawal PIN first.";

    message.className="error";

    return;

  }


  if(pin!==account.withdrawalPin){

    message.textContent="Incorrect withdrawal PIN.";

    message.className="error";

    return;

  }


  if(amount>Number(account.balance||0)){

    message.textContent="Insufficient simulated balance.";

    message.className="error";

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


  document.getElementById("withdrawAmount").value="";

  document.getElementById("withdrawPin").value="";


  message.textContent=
    "Demo withdrawal request submitted and marked pending.";

  message.className="success";


  updateBalance();

  renderTransactions();

  renderDashboardTransactions();

  renderPendingWithdrawals();

}


function renderPendingWithdrawals(){

  const account=getAccount();

  const list=document.getElementById("pendingList");


  list.innerHTML="";


  if(
    !account||
    !Array.isArray(account.pendingWithdrawals)||
    account.pendingWithdrawals.length===0
  ){

    list.innerHTML='<div class="empty">No pending requests.</div>';

    return;

  }


  account.pendingWithdrawals.forEach(item=>{

    const div=document.createElement("div");

    div.className="pending";

    div.textContent=
      "Withdrawal $"+
      Number(item.amount).toFixed(2)+
      " • Pending • "+
      item.date;

    list.appendChild(div);

  });

}


function renderTransactions(){

  const account=getAccount();

  const list=document.getElementById("transactionList");


  list.innerHTML="";


  if(
    !account||
    !Array.isArray(account.transactions)||
    account.transactions.length===0
  ){

    list.innerHTML='<div class="empty">No activity yet.</div>';

    return;

  }


  account.transactions.forEach(item=>{

    const row=document.createElement("div");

    row.className="transaction";


    const left=document.createElement("div");

    left.className="tx-left";


    const icon=document.createElement("div");

    icon.className="tx-icon";

    icon.textContent=
      item.type==="Deposit"?"↓":"↑";


    const info=document.createElement("div");


    const name=document.createElement("div");

    name.className="tx-name";

    name.textContent=item.type;


    const date=document.createElement("div");

    date.className="tx-date";

    date.textContent=item.date;


    info.appendChild(name);

    info.appendChild(date);

    left.appendChild(icon);

    left.appendChild(info);


    const right=document.createElement("div");

    right.className="tx-amount";

    right.innerHTML=
      '<div class="'+
      (item.type==="Deposit"?"deposit-text":"withdraw-text")+
      '">'+
      (item.type==="Deposit"?"+":"-")+
      "$"+Number(item.amount).toFixed(2)+
      "</div>";


    const status=document.createElement("div");

    status.className=
      item.status==="Pending"
        ?"pending-text"
        :"tx-date";

    status.textContent=item.status;


    right.appendChild(status);

    row.appendChild(left);

    row.appendChild(right);

    list.appendChild(row);

  });

}


function renderDashboardTransactions(){

  const account=getAccount();

  const list=document.getElementById("dashboardTransactions");


  if(!list)return;


  list.innerHTML="";


  if(
    !account||
    !Array.isArray(account.transactions)||
    account.transactions.length===0
  ){

    list.innerHTML='<div class="empty">No recent activity.</div>';

    return;

  }


  account.transactions.slice(0,4).forEach(item=>{

    const row=document.createElement("div");

    row.className="transaction";


    const name=document.createElement("div");

    name.className="tx-name";

    name.textContent=item.type;


    const amount=document.createElement("div");

    amount.className="tx-amount "+
      (item.type==="Deposit"?"deposit-text":"withdraw-text");

    amount.textContent=
      (item.type==="Deposit"?"+":"-")+
      "$"+Number(item.amount).toFixed(2);


    row.appendChild(name);

    row.appendChild(amount);

    list.appendChild(row);

  });

}


function saveProfile(){

  const account=getAccount();

  const name=document.getElementById("profileName")
    .value.trim();

  const message=document.getElementById("profileMessage");


  if(!name){

    message.textContent="Please enter your name.";

    message.className="error";

    return;

  }


  account.name=name;

  saveAccount(account);


  document.getElementById("welcomeTitle").textContent=
    "Welcome, "+name;

  document.getElementById("topUser").textContent=
    name;


  message.textContent="Profile saved successfully.";

  message.className="success";

}


function addProject(){

  const account=getAccount();

  const input=document.getElementById("projectInput");

  const name=input.value.trim();


  if(!account||!name)return;


  if(!Array.isArray(account.projects)){
    account.projects=[];
  }


  account.projects.push(name);

  saveAccount(account);

  input.value="";

  renderProjects();

}


function renderProjects(){

  const account=getAccount();

  const list=document.getElementById("projectList");


  list.innerHTML="";


  if(
    !account||
    !Array.isArray(account.projects)||
    account.projects.length===0
  ){

    list.innerHTML=
      '<div class="empty">No projects yet.</div>';

    updateProjectCount();

    return;

  }


  account.projects.forEach((project,index)=>{

    const row=document.createElement("div");

    row.className="transaction";


    const name=document.createElement("div");

    name.className="tx-name";

    name.textContent=project;


    const button=document.createElement("button");

    button.className="danger";

    button.textContent="Delete";


    button.onclick=function(){

      account.projects.splice(index,1);

      saveAccount(account);

      renderProjects();

    };


    row.appendChild(name);

    row.appendChild(button);

    list.appendChild(row);

  });


  updateProjectCount();

}


function updateProjectCount(){

  const account=getAccount();

  const count=
    account&&Array.isArray(account.projects)
      ?account.projects.length
      :0;


  document.getElementById("projectCount").textContent=count;

}


if(localStorage.getItem("nexoraLoggedIn")==="true"){
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
