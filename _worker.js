export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>NEXORA — Demo Account Platform</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#07111f;
  --panel:#0d1a2b;
  --panel2:#102238;
  --line:rgba(255,255,255,.09);
  --text:#eef6ff;
  --muted:#91a4ba;
  --blue:#3b82f6;
  --blue2:#60a5fa;
  --green:#22c55e;
  --red:#ef4444;
  --yellow:#f59e0b;
}

html{scroll-behavior:smooth}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  background:
    radial-gradient(circle at 15% 10%,rgba(59,130,246,.18),transparent 30%),
    radial-gradient(circle at 85% 15%,rgba(14,165,233,.12),transparent 28%),
    radial-gradient(circle at 50% 90%,rgba(99,102,241,.12),transparent 35%),
    linear-gradient(135deg,#050b14,#091625 50%,#07111f);
  color:var(--text);
  min-height:100vh;
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.16;
  background-image:
    linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
  background-size:42px 42px;
}

button,input{
  font:inherit;
}

button{
  cursor:pointer;
}

input{
  width:100%;
  padding:14px;
  margin:7px 0;
  border:1px solid #26384e;
  border-radius:10px;
  background:#0b1727;
  color:white;
  outline:none;
}

input:focus{
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(59,130,246,.12);
}

.hidden{
  display:none!important;
}

/* AUTH */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  position:relative;
  z-index:1;
}

.auth-card{
  width:100%;
  max-width:440px;
  padding:36px;
  border:1px solid var(--line);
  border-radius:24px;
  background:rgba(10,23,39,.88);
  backdrop-filter:blur(20px);
  box-shadow:0 30px 100px rgba(0,0,0,.45);
}

.brand{
  text-align:center;
  font-size:30px;
  font-weight:900;
  letter-spacing:3px;
}

.brand span{
  color:var(--blue2);
}

.auth-sub{
  text-align:center;
  color:var(--muted);
  margin:9px 0 28px;
  font-size:14px;
}

.auth-button{
  width:100%;
  border:0;
  border-radius:10px;
  padding:14px;
  margin-top:10px;
  color:white;
  background:linear-gradient(135deg,#2563eb,#3b82f6);
  font-weight:800;
}

.auth-button:hover{
  filter:brightness(1.1);
}

.auth-switch{
  text-align:center;
  color:var(--muted);
  margin-top:20px;
  font-size:14px;
}

.auth-switch button{
  border:0;
  background:none;
  color:var(--blue2);
  font-weight:700;
}

.auth-message{
  text-align:center;
  min-height:20px;
  margin-top:15px;
  font-size:14px;
}

.success{color:var(--green);font-weight:700}
.error{color:#f87171;font-weight:700}
.warning{color:#fbbf24;font-weight:700}

/* APP */

#app{
  min-height:100vh;
  position:relative;
  z-index:1;
}

.sidebar{
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  width:255px;
  padding:27px 17px;
  background:rgba(5,14,26,.96);
  border-right:1px solid var(--line);
  z-index:10;
}

.logo{
  font-size:25px;
  font-weight:900;
  letter-spacing:2px;
  padding:0 10px;
  margin-bottom:35px;
}

.logo span{
  color:var(--blue2);
}

.nav{
  width:100%;
  border:0;
  border-radius:10px;
  background:transparent;
  color:#8da0b7;
  padding:13px 14px;
  margin-bottom:7px;
  text-align:left;
  transition:.2s;
}

.nav:hover,
.nav.active{
  color:white;
  background:linear-gradient(90deg,#2563eb,#1d4ed8);
  box-shadow:0 8px 25px rgba(37,99,235,.22);
}

.logout{
  margin-top:22px;
  background:rgba(239,68,68,.12);
  color:#fca5a5;
}

.main{
  margin-left:255px;
  padding:0 38px 50px;
}

.banner{
  margin:0 -38px;
  padding:9px 15px;
  text-align:center;
  font-size:12px;
  font-weight:700;
  color:#fbbf24;
  background:rgba(120,75,10,.24);
  border-bottom:1px solid rgba(245,158,11,.12);
}

.page{
  display:none;
}

.page.active{
  display:block;
}

.header{
  padding-top:38px;
  margin-bottom:25px;
}

.header h1{
  margin:0;
  font-size:35px;
  letter-spacing:-1px;
}

.header p{
  color:var(--muted);
  margin-top:8px;
}

/* DASHBOARD */

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.card{
  padding:23px;
  border:1px solid var(--line);
  border-radius:17px;
  background:linear-gradient(
    145deg,
    rgba(17,36,58,.92),
    rgba(9,24,41,.92)
  );
  box-shadow:0 15px 35px rgba(0,0,0,.16);
}

.card-label{
  color:var(--muted);
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.8px;
  font-weight:700;
}

.card-value{
  font-size:30px;
  font-weight:900;
  margin-top:12px;
}

.card-note{
  margin-top:7px;
  color:#60a5fa;
  font-size:13px;
}

.panel{
  margin-top:22px;
  padding:26px;
  border:1px solid var(--line);
  border-radius:18px;
  background:rgba(13,26,43,.86);
  box-shadow:0 15px 40px rgba(0,0,0,.14);
}

.panel h2{
  margin-top:0;
}

.panel p{
  color:var(--muted);
  line-height:1.6;
}

.balance{
  font-size:46px;
  font-weight:900;
  letter-spacing:-1.5px;
  margin-top:10px;
}

.balance-label{
  color:var(--muted);
  text-transform:uppercase;
  letter-spacing:.8px;
  font-size:12px;
  font-weight:700;
}

.action-row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.primary{
  border:0;
  padding:12px 18px;
  border-radius:10px;
  background:#2563eb;
  color:white;
  font-weight:800;
}

.secondary{
  border:1px solid #2b425d;
  padding:12px 18px;
  border-radius:10px;
  background:#0b1727;
  color:#dbeafe;
  font-weight:700;
}

.danger{
  border:0;
  padding:12px 18px;
  border-radius:10px;
  background:#991b1b;
  color:white;
  font-weight:800;
}

/* TRANSACTIONS */

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:17px 0;
  border-bottom:1px solid var(--line);
}

.transaction:last-child{
  border-bottom:0;
}

.transaction-title{
  font-weight:800;
}

.transaction-date{
  color:var(--muted);
  font-size:12px;
  margin-top:5px;
}

.transaction-amount{
  font-weight:900;
  text-align:right;
}

.deposit{
  color:#4ade80;
}

.withdrawal{
  color:#f87171;
}

.pending{
  color:#fbbf24;
}

.badge{
  display:inline-block;
  margin-top:5px;
  padding:4px 8px;
  border-radius:20px;
  font-size:11px;
  background:rgba(245,158,11,.12);
  color:#fbbf24;
}

/* EMPTY */

.empty{
  text-align:center;
  padding:25px;
  color:var(--muted);
}

/* MOBILE */

@media(max-width:800px){

  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    padding:18px;
  }

  .logo{
    margin-bottom:15px;
  }

  .main{
    margin-left:0;
    padding:0 20px 35px;
  }

  .banner{
    margin:0 -20px;
  }

  .cards{
    grid-template-columns:1fr;
  }

  .header h1{
    font-size:28px;
  }

  .balance{
    font-size:36px;
  }

  .transaction{
    align-items:flex-start;
  }
}
</style>
</head>

<body>

<!-- AUTH -->

<div id="auth">

  <div class="auth-card">

    <div class="brand">
      NEX<span>ORA</span>
    </div>

    <div class="auth-sub" id="authSub">
      Create your NEXORA demo account.
    </div>

    <form id="authForm">

      <input
        id="name"
        placeholder="Full name"
        required
      >

      <input
        id="email"
        type="email"
        placeholder="Email address"
        required
      >

      <input
        id="password"
        type="password"
        minlength="6"
        placeholder="Password"
        required
      >

      <button class="auth-button" id="authBtn">
        Create account
      </button>

    </form>

    <div class="auth-switch">

      <button id="switchMode">
        Already have an account? Login
      </button>

    </div>

    <div id="authMessage" class="auth-message"></div>

  </div>

</div>


<!-- APP -->

<div id="app" class="hidden">

  <aside class="sidebar">

    <div class="logo">
      NEX<span>ORA</span>
    </div>

    <button class="nav active" onclick="showPage('dashboard',this)">
      🏠 Dashboard
    </button>

    <button class="nav" onclick="showPage('wallet',this)">
      💳 Wallet
    </button>

    <button class="nav" onclick="showPage('transactions',this)">
      📋 Transactions
    </button>

    <button class="nav" onclick="showPage('profile',this)">
      👤 Profile
    </button>

    <button class="nav" onclick="showPage('projects',this)">
      📁 Projects
    </button>

    <button class="nav" onclick="showPage('settings',this)">
      ⚙️ Settings
    </button>

    <button class="nav logout" onclick="logout()">
      🚪 Logout
    </button>

  </aside>


  <main class="main">

    <div class="banner">
      DEMO ENVIRONMENT — All balances and wallet activity are simulated.
    </div>


    <!-- DASHBOARD -->

    <section id="dashboard" class="page active">

      <div class="header">

        <h1>
          Welcome, <span id="welcomeName">User</span>
        </h1>

        <p>
          Here's an overview of your NEXORA demo account.
        </p>

      </div>


      <div class="cards">

        <div class="card">

          <div class="card-label">
            Demo Balance
          </div>

          <div class="card-value" id="dashboardBalance">
            $0.00
          </div>

          <div class="card-note">
            ● Simulated funds
          </div>

        </div>


        <div class="card">

          <div class="card-label">
            Transactions
          </div>

          <div class="card-value" id="transactionCount">
            0
          </div>

          <div class="card-note">
            Account activity
          </div>

        </div>


        <div class="card">

          <div class="card-label">
            Projects
          </div>

          <div class="card-value" id="projectCount">
            0
          </div>

          <div class="card-note">
            Active workspace
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>Account overview</h2>

        <p>
          NEXORA is currently running in demonstration mode.
          Wallet activity shown here is illustrative and does not
          represent real money, investments, financial returns,
          or a real bank account.
        </p>

        <div class="action-row">

          <button
            class="primary"
            onclick="showPageByName('wallet')"
          >
            Open Wallet
          </button>

          <button
            class="secondary"
            onclick="showPageByName('transactions')"
          >
            View Transactions
          </button>

        </div>

      </div>

    </section>


    <!-- WALLET -->

    <section id="wallet" class="page">

      <div class="header">

        <h1>Wallet</h1>

        <p>
          Manage your simulated demo balance.
        </p>

      </div>


      <div class="panel">

        <div class="balance-label">
          Available Demo Balance
        </div>

        <div class="balance" id="walletBalance">
          $0.00
        </div>

        <p>
          This balance is stored locally in your browser and
          has no monetary value.
        </p>

      </div>


      <!-- DEPOSIT -->

      <div class="panel">

        <h2>Demo Deposit</h2>

        <p>
          Add illustrative funds to your demo wallet.
        </p>

        <input
          id="depositAmount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter demo amount"
        >

        <button
          class="primary"
          onclick="deposit()"
        >
          Add Demo Funds
        </button>

        <p id="depositMessage"></p>

      </div>


      <!-- WITHDRAWAL -->

      <div class="panel">

        <h2>Demo Withdrawal</h2>

        <p>
          Withdrawal requests are simulated. Approved requests
          are not sent to a bank or payment provider.
        </p>

        <input
          id="withdrawAmount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter demo amount"
        >

        <input
          id="withdrawPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="Withdrawal PIN"
        >

        <button
          class="primary"
          onclick="withdraw()"
        >
          Submit Demo Withdrawal
        </button>

        <p id="withdrawMessage"></p>

      </div>


      <!-- PIN -->

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

        <button
          class="secondary"
          onclick="setWithdrawalPin()"
        >
          Save PIN
        </button>

        <p id="pinMessage"></p>

      </div>


      <!-- PENDING -->

      <div class="panel">

        <h2>Pending Demo Withdrawals</h2>

        <div id="pendingList">
          <div class="empty">
            No pending withdrawals.
          </div>
        </div>

      </div>

    </section>


    <!-- TRANSACTIONS -->

    <section id="transactions" class="page">

      <div class="header">

        <h1>Transactions</h1>

        <p>
          Your simulated account activity.
        </p>

      </div>

      <div class="panel">

        <div id="transactionList">
          <div class="empty">
            No transactions yet.
          </div>
        </div>

      </div>

    </section>


    <!-- PROFILE -->

    <section id="profile" class="page">

      <div class="header">

        <h1>Profile</h1>

        <p>
          Manage your demo account information.
        </p>

      </div>

      <div class="panel">

        <input
          id="profileName"
          placeholder="Full name"
        >

        <input
          id="profileEmail"
          disabled
          placeholder="Email"
        >

        <button
          class="primary"
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

        <h1>Projects</h1>

        <p>
          Manage your NEXORA workspace.
        </p>

      </div>

      <div class="panel">

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <button
          class="primary"
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

        <h1>Settings</h1>

        <p>
          Account preferences and demo information.
        </p>

      </div>

      <div class="panel">

        <h2>Demo account</h2>

        <p>
          NEXORA is a browser-only demonstration. It does not
          process real deposits, withdrawals, investments,
          cryptocurrency, or financial returns.
        </p>

        <button
          class="danger"
          onclick="logout()"
        >
          Log Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

const KEY = "nexora_demo_account";

let loginMode = false;


/* HELPERS */

function getAccount(){

  const raw = localStorage.getItem(KEY);

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
    KEY,
    JSON.stringify(account)
  );

}


function money(value){

  return "$" + Number(value || 0).toFixed(2);

}


function setMessage(id,text,type){

  const el = document.getElementById(id);

  if(!el){
    return;
  }

  el.textContent = text;

  el.className = type || "";

}


/* AUTH */

document.getElementById("switchMode").onclick = function(){

  loginMode = !loginMode;

  document.getElementById("authSub").textContent =
    loginMode
      ? "Login to your NEXORA demo account."
      : "Create your NEXORA demo account.";

  document.getElementById("authBtn").textContent =
    loginMode
      ? "Login"
      : "Create account";

  document.getElementById("switchMode").textContent =
    loginMode
      ? "New here? Create an account"
      : "Already have an account? Login";

  const name =
    document.getElementById("name");

  name.style.display =
    loginMode ? "none" : "block";

  name.required = !loginMode;

  document.getElementById("authMessage").textContent = "";

};


document.getElementById("authForm").onsubmit =
function(event){

  event.preventDefault();

  const email =
    document.getElementById("email").value.trim();

  const password =
    document.getElementById("password").value;

  const message =
    document.getElementById("authMessage");


  if(loginMode){

    const old = getAccount();

    if(
      !old ||
      old.email !== email ||
      old.password !== password
    ){

      message.textContent =
        "Demo login failed. Check your details.";

      message.className =
        "auth-message error";

      return;

    }

    openApp();

    return;

  }


  const name =
    document.getElementById("name").value.trim();


  if(!name){

    message.textContent =
      "Please enter your name.";

    message.className =
      "auth-message error";

    return;

  }


  if(password.length < 6){

    message.textContent =
      "Password must contain at least 6 characters.";

    message.className =
      "auth-message error";

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

  openApp();

};


/* APP */

function openApp(){

  const account = getAccount();

  if(!account){
    return;
  }


  document.getElementById("auth")
    .classList.add("hidden");

  document.getElementById("app")
    .classList.remove("hidden");


  document.getElementById("welcomeName")
    .textContent = account.name;


  document.getElementById("profileName")
    .value = account.name;


  document.getElementById("profileEmail")
    .value = account.email;


  updateAll();

}


function logout(){

  document.getElementById("app")
    .classList.add("hidden");

  document.getElementById("auth")
    .classList.remove("hidden");

  document.getElementById("authForm")
    .reset();

  loginMode = false;

  document.getElementById("name")
    .style.display = "block";

  document.getElementById("name")
    .required = true;

  document.getElementById("authSub")
    .textContent =
      "Create your NEXORA demo account.";

  document.getElementById("authBtn")
    .textContent =
      "Create account";

  document.getElementById("switchMode")
    .textContent =
      "Already have an account? Login";

}


function showPage(page,button){

  document.querySelectorAll(".page")
    .forEach(function(item){

      item.classList.remove("active");

    });


  const target =
    document.getElementById(page);

  if(target){
    target.classList.add("active");
  }


  document.querySelectorAll(".nav")
    .forEach(function(item){

      item.classList.remove("active");

    });


  if(button){
    button.classList.add("active");
  }


  updateAll();

}


function showPageByName(page){

  const buttons =
    document.querySelectorAll(".nav");

  let found = false;

  buttons.forEach(function(button){

    const text =
      button.textContent.toLowerCase();

    if(
      (page === "wallet" && text.includes("wallet")) ||
      (page === "transactions" && text.includes("transactions"))
    ){

      showPage(page,button);

      found = true;

    }

  });


  if(!found){
    showPage(page,null);
  }

}


/* BALANCE */

function updateBalance(){

  const account = getAccount();

  if(!account){
    return;
  }


  const value =
    money(account.balance);


  document.getElementById("dashboardBalance")
    .textContent = value;


  document.getElementById("walletBalance")
    .textContent = value;

}


/* DEPOSIT */

function deposit(){

  const account = getAccount();

  if(!account){

    setMessage(
      "depositMessage",
      "Please create an account first.",
      "error"
    );

    return;

  }


  const input =
    document.getElementById("depositAmount");


  const amount =
    Number(input.value);


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    setMessage(
      "depositMessage",
      "Enter a valid demo amount.",
      "error"
    );

    return;

  }


  if(!Array.isArray(account.transactions)){
    account.transactions = [];
  }


  account.balance =
    Number(account.balance || 0) + amount;


  account.transactions.unshift({

    id:Date.now(),

    type:"Demo Deposit",

    amount:amount,

    status:"Completed",

    date:new Date().toLocaleString()

  });


  saveAccount(account);


  input.value = "";


  setMessage(
    "depositMessage",
    money(amount) +
      " added to your simulated balance.",
    "success"
  );


  updateAll();

}


/* WITHDRAWAL PIN */

function setWithdrawalPin(){

  const account = getAccount();

  const input =
    document.getElementById("newPin");

  const pin =
    input.value.trim();


  if(!account){
    return;
  }


  if(!/^[0-9]{4,6}$/.test(pin)){

    setMessage(
      "pinMessage",
      "PIN must contain 4–6 digits.",
      "error"
    );

    return;

  }


  account.withdrawalPin = pin;

  saveAccount(account);

  input.value = "";


  setMessage(
    "pinMessage",
    "Demo withdrawal PIN saved.",
    "success"
  );

}


/* WITHDRAWAL */

function withdraw(){

  const account = getAccount();

  if(!account){
    return;
  }


  const amount =
    Number(
      document.getElementById("withdrawAmount")
        .value
    );


  const pin =
    document.getElementById("withdrawPin")
      .value
      .trim();


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    setMessage(
      "withdrawMessage",
      "Enter a valid demo amount.",
      "error"
    );

    return;

  }


  if(!account.withdrawalPin){

    setMessage(
      "withdrawMessage",
      "Set your demo withdrawal PIN first.",
      "error"
    );

    return;

  }


  if(pin !== account.withdrawalPin){

    setMessage(
      "withdrawMessage",
      "Incorrect demo withdrawal PIN.",
      "error"
    );

    return;

  }


  if(
    amount > Number(account.balance || 0)
  ){

    setMessage(
      "withdrawMessage",
      "Insufficient simulated balance.",
      "error"
    );

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

    type:"Demo Withdrawal",

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


  document.getElementById("withdrawAmount")
    .value = "";

  document.getElementById("withdrawPin")
    .value = "";


  setMessage(
    "withdrawMessage",
    "Demo withdrawal submitted and marked pending.",
    "success"
  );


  updateAll();

}


/* PENDING */

function renderPending(){

  const account = getAccount();

  const list =
    document.getElementById("pendingList");


  if(!account){

    list.innerHTML =
      '<div class="empty">No pending withdrawals.</div>';

    return;

  }


  const items =
    Array.isArray(account.pendingWithdrawals)
      ? account.pendingWithdrawals
      : [];


  if(items.length === 0){

    list.innerHTML =
      '<div class="empty">No pending withdrawals.</div>';

    return;

  }


  list.innerHTML = "";


  items.forEach(function(item){

    const row =
      document.createElement("div");

    row.className = "transaction";


    row.innerHTML =

      '<div>' +

        '<div class="transaction-title">' +
          'Demo Withdrawal' +
        '</div>' +

        '<div class="transaction-date">' +
          item.date +
        '</div>' +

      '</div>' +

      '<div class="transaction-amount">' +

        '<div class="pending">' +
          money(item.amount) +
        '</div>' +

        '<span class="badge">' +
          'Pending' +
        '</span>' +

      '</div>';


    list.appendChild(row);

  });

}


/* TRANSACTIONS */

function renderTransactions(){

  const account = getAccount();

  const list =
    document.getElementById("transactionList");


  const items =
    account &&
    Array.isArray(account.transactions)
      ? account.transactions
      : [];


  document.getElementById("transactionCount")
    .textContent = items.length;


  if(items.length === 0){

    list.innerHTML =
      '<div class="empty">No transactions yet.</div>';

    return;

  }


  list.innerHTML = "";


  items.forEach(function(item){

    const row =
      document.createElement("div");

    row.className = "transaction";


    const isDeposit =
      item.type === "Demo Deposit";


    const statusClass =
      item.status === "Pending"
        ? "pending"
        : isDeposit
          ? "deposit"
          : "withdrawal";


    row.innerHTML =

      '<div>' +

        '<div class="transaction-title">' +
          item.type +
        '</div>' +

        '<div class="transaction-date">' +
          item.date +
        '</div>' +

      '</div>' +

      '<div class="transaction-amount">' +

        '<div class="' +
          statusClass +
        '">' +

          (isDeposit ? "+" : "-") +
          money(item.amount) +

        '</div>' +

        '<span class="badge">' +
          item.status +
        '</span>' +

      '</div>';


    list.appendChild(row);

  });

}


/* PROFILE */

function saveProfile(){

  const account = getAccount();

  if(!account){
    return;
  }


  const name =
    document.getElementById("profileName")
      .value
      .trim();


  if(!name){

    setMessage(
      "profileMessage",
      "Please enter your name.",
      "error"
    );

    return;

  }


  account.name = name;

  saveAccount(account);


  document.getElementById("welcomeName")
    .textContent = name;


  setMessage(
    "profileMessage",
    "Profile saved in demo mode.",
    "success"
  );

}


/* PROJECTS */

function addProject(){

  const account = getAccount();

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


  account.projects.push({

    id:Date.now(),

    name:name

  });


  saveAccount(account);

  input.value = "";


  renderProjects();

}


function renderProjects(){

  const account = getAccount();

  const list =
    document.getElementById("projectList");


  const projects =
    account &&
    Array.isArray(account.projects)
      ? account.projects
      : [];


  document.getElementById("projectCount")
    .textContent = projects.length;


  if(projects.length === 0){

    list.innerHTML =
      '<div class="empty">No projects yet.</div>';

    return;

  }


  list.innerHTML = "";


  projects.forEach(function(project,index){

    const row =
      document.createElement("div");

    row.className = "transaction";


    row.innerHTML =

      '<div>' +

        '<div class="transaction-title">' +
          escapeHtml(project.name || project) +
        '</div>' +

        '<div class="transaction-date">' +
          'NEXORA workspace project' +
        '</div>' +

      '</div>' +

      '<button class="danger" data-index="' +
        index +
      '">' +
        'Delete' +
      '</button>';


    row.querySelector("button")
      .onclick = function(){

        account.projects.splice(index,1);

        saveAccount(account);

        renderProjects();

      };


    list.appendChild(row);

  });

}


/* SECURITY HELPER FOR PROJECT NAMES */

function escapeHtml(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* UPDATE EVERYTHING */

function updateAll(){

  const account = getAccount();

  if(!account){
    return;
  }


  document.getElementById("welcomeName")
    .textContent = account.name;


  document.getElementById("profileName")
    .value = account.name;


  document.getElementById("profileEmail")
    .value = account.email;


  updateBalance();

  renderTransactions();

  renderPending();

  renderProjects();

}


/* START */

(function(){

  const account = getAccount();

  if(account){

    document.getElementById("auth")
      .classList.add("hidden");

    document.getElementById("app")
      .classList.remove("hidden");

    updateAll();

  }

})();

</script>

</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }
};
