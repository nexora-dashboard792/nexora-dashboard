export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Nexora — Demo Account</title>

<style>
:root{
  --bg:#eef3f8;
  --surface:#fff;
  --dark:#0b1728;
  --dark2:#12233b;
  --blue:#2563eb;
  --blue2:#3b82f6;
  --text:#172033;
  --muted:#718096;
  --border:#e3e9f1;
  --green:#16834b;
  --red:#c93434;
  --orange:#c27b00;
  --shadow:0 12px 35px rgba(20,35,60,.08);
}

*{box-sizing:border-box}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at 5% 0%,rgba(59,130,246,.13),transparent 28%),
    radial-gradient(circle at 100% 10%,rgba(14,165,233,.10),transparent 25%),
    linear-gradient(135deg,#f7faff,#edf3f9);
}

button,input{font:inherit}
button{cursor:pointer}

.hidden{display:none!important}

/* AUTH */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:25px;
  background:
    radial-gradient(circle at 20% 10%,rgba(59,130,246,.22),transparent 30%),
    radial-gradient(circle at 90% 80%,rgba(14,165,233,.15),transparent 30%),
    #081426;
}

.auth-card{
  width:100%;
  max-width:440px;
  background:rgba(255,255,255,.98);
  padding:38px;
  border-radius:24px;
  box-shadow:0 35px 90px rgba(0,0,0,.35);
}

.brand{
  font-size:30px;
  font-weight:900;
  letter-spacing:3px;
  text-align:center;
}

.brand span{color:var(--blue)}

.auth-sub{
  text-align:center;
  color:var(--muted);
  margin:8px 0 28px;
}

input{
  width:100%;
  padding:14px 15px;
  border:1px solid var(--border);
  border-radius:10px;
  margin:7px 0;
  outline:none;
  background:#fff;
}

input:focus{
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(37,99,235,.10);
}

.auth-btn{
  width:100%;
  border:0;
  background:var(--blue);
  color:white;
  padding:14px;
  border-radius:10px;
  font-weight:800;
  margin-top:12px;
}

.auth-switch{
  border:0;
  background:none;
  color:var(--blue);
  font-weight:700;
  display:block;
  margin:20px auto 0;
}

.demo-note{
  margin-top:20px;
  padding:12px;
  border-radius:10px;
  background:#f1f5f9;
  color:#64748b;
  font-size:12px;
  text-align:center;
}

/* APP */

#app{min-height:100vh}

.topbar{
  height:74px;
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(15px);
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 34px;
  position:sticky;
  top:0;
  z-index:20;
}

.top-brand{
  font-weight:900;
  font-size:23px;
  letter-spacing:2px;
}

.top-brand span{color:var(--blue)}

.user-area{
  display:flex;
  align-items:center;
  gap:14px;
}

.avatar{
  width:40px;
  height:40px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(135deg,var(--blue),#60a5fa);
  color:white;
  font-weight:900;
}

.user-name{
  font-weight:700;
}

.logout-btn{
  border:0;
  background:#f1f5f9;
  color:#475569;
  padding:9px 13px;
  border-radius:9px;
}

.demo-bar{
  background:#fff7dc;
  color:#916300;
  text-align:center;
  padding:8px 15px;
  font-size:12px;
  font-weight:700;
  border-bottom:1px solid #f1df9d;
}

.layout{
  display:flex;
  max-width:1500px;
  margin:auto;
}

.sidebar{
  width:230px;
  padding:25px 15px;
  flex-shrink:0;
}

.nav{
  width:100%;
  border:0;
  background:transparent;
  color:#64748b;
  padding:13px 16px;
  border-radius:10px;
  text-align:left;
  margin-bottom:5px;
  font-weight:600;
}

.nav:hover,
.nav.active{
  background:#e8f0ff;
  color:var(--blue);
}

.content{
  flex:1;
  padding:30px 35px 50px;
  min-width:0;
}

.page{display:none}
.page.active{display:block}

.page-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:25px;
}

.page-head h1{
  margin:0;
  font-size:30px;
  letter-spacing:-.5px;
}

.page-head p{
  margin:7px 0 0;
  color:var(--muted);
}

/* DASHBOARD */

.hero{
  background:
    radial-gradient(circle at 85% 20%,rgba(96,165,250,.25),transparent 25%),
    linear-gradient(135deg,#0c1b31,#172f50);
  color:white;
  border-radius:20px;
  padding:30px;
  box-shadow:var(--shadow);
  position:relative;
  overflow:hidden;
}

.hero:after{
  content:"";
  position:absolute;
  width:220px;
  height:220px;
  right:-80px;
  bottom:-120px;
  border-radius:50%;
  border:35px solid rgba(255,255,255,.05);
}

.hero-small{
  color:#9fb3cc;
  font-size:13px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:1px;
}

.hero h2{
  font-size:38px;
  margin:12px 0 4px;
}

.hero p{
  color:#b7c6d9;
  margin:0;
}

.quick-actions{
  display:flex;
  gap:10px;
  margin-top:25px;
  flex-wrap:wrap;
}

.quick{
  border:1px solid rgba(255,255,255,.15);
  background:rgba(255,255,255,.09);
  color:white;
  padding:10px 15px;
  border-radius:9px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
  margin-top:20px;
}

.stat{
  background:rgba(255,255,255,.94);
  border:1px solid var(--border);
  border-radius:16px;
  padding:22px;
  box-shadow:var(--shadow);
}

.stat-label{
  color:var(--muted);
  font-size:12px;
  text-transform:uppercase;
  font-weight:800;
  letter-spacing:.5px;
}

.stat-value{
  font-size:26px;
  font-weight:900;
  margin-top:9px;
}

/* PANELS */

.panel{
  background:rgba(255,255,255,.94);
  border:1px solid var(--border);
  border-radius:17px;
  padding:25px;
  box-shadow:var(--shadow);
  margin-top:20px;
}

.panel h2{
  margin:0 0 8px;
}

.panel p{
  color:var(--muted);
}

.balance{
  font-size:43px;
  font-weight:900;
  margin-top:10px;
}

.label{
  color:var(--muted);
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.7px;
  font-weight:800;
}

.primary{
  border:0;
  background:var(--blue);
  color:white;
  padding:12px 18px;
  border-radius:9px;
  font-weight:800;
}

.secondary{
  border:1px solid var(--border);
  background:white;
  color:#334155;
  padding:12px 18px;
  border-radius:9px;
  font-weight:700;
}

.danger{
  border:0;
  background:#dc3d3d;
  color:white;
  padding:11px 17px;
  border-radius:9px;
  font-weight:800;
}

.message{
  min-height:20px;
  font-size:14px;
  font-weight:700;
}

.success{color:var(--green)}
.error{color:var(--red)}

.pending{
  background:#fff8df;
  color:#946300;
  border:1px solid #f2dda0;
  padding:14px;
  border-radius:10px;
  margin-top:10px;
}

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:17px 0;
  border-bottom:1px solid var(--border);
}

.transaction:last-child{border-bottom:0}

.tx-title{font-weight:800}
.tx-date{font-size:12px;color:var(--muted);margin-top:5px}
.tx-amount{font-weight:900;text-align:right}
.deposit{color:var(--green)}
.withdraw{color:var(--red)}
.pending-text{color:var(--orange)}

.project{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 0;
  border-bottom:1px solid var(--border);
}

/* MOBILE */

@media(max-width:850px){

  .topbar{
    padding:0 18px;
  }

  .user-name{
    display:none;
  }

  .layout{
    display:block;
  }

  .sidebar{
    width:100%;
    display:flex;
    overflow-x:auto;
    padding:10px;
    gap:5px;
    border-bottom:1px solid var(--border);
    background:white;
  }

  .nav{
    white-space:nowrap;
    width:auto;
    margin:0;
  }

  .content{
    padding:22px 17px 40px;
  }

  .stats{
    grid-template-columns:1fr;
  }

  .hero h2{
    font-size:30px;
  }

  .page-head{
    align-items:flex-start;
  }
}

@media(max-width:500px){

  .topbar{
    height:65px;
  }

  .hero{
    padding:23px;
  }

  .panel{
    padding:19px;
  }

  .balance{
    font-size:35px;
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
      Create your Nexora demo account.
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
        placeholder="Password"
        required
      >

      <button class="auth-btn" id="authBtn">
        Create account
      </button>

    </form>

    <button class="auth-switch" id="switchMode">
      Already have an account? Login
    </button>

    <div class="demo-note">
      Demo platform only. Balances and transactions are simulated
      and do not represent real money or financial returns.
    </div>

  </div>

</div>


<!-- APP -->

<div id="app" class="hidden">

  <header class="topbar">

    <div class="top-brand">
      NEX<span>ORA</span>
    </div>

    <div class="user-area">

      <div class="avatar" id="avatar">
        N
      </div>

      <div class="user-name" id="userName">
        Demo User
      </div>

      <button class="logout-btn" onclick="logout()">
        Sign out
      </button>

    </div>

  </header>

  <div class="demo-bar">
    DEMO ENVIRONMENT — ALL BALANCES, DEPOSITS AND WITHDRAWALS ARE SIMULATED
  </div>

  <div class="layout">

    <aside class="sidebar">

      <button class="nav active" onclick="showPage('dashboard',this)">
        ◉ Dashboard
      </button>

      <button class="nav" onclick="showPage('wallet',this)">
        ◈ Wallet
      </button>

      <button class="nav" onclick="showPage('transactions',this)">
        ≡ Transactions
      </button>

      <button class="nav" onclick="showPage('projects',this)">
        ◇ Projects
      </button>

      <button class="nav" onclick="showPage('profile',this)">
        ○ Profile
      </button>

      <button class="nav" onclick="showPage('settings',this)">
        ⚙ Settings
      </button>

    </aside>


    <main class="content">

      <!-- DASHBOARD -->

      <section id="dashboard" class="page active">

        <div class="page-head">
          <div>
            <h1>Dashboard</h1>
            <p>Overview of your Nexora demo account.</p>
          </div>
        </div>

        <div class="hero">

          <div class="hero-small">
            Available demo balance
          </div>

          <h2 id="heroBalance">$0.00</h2>

          <p>
            Simulated funds · Demo account
          </p>

          <div class="quick-actions">

            <button class="quick" onclick="showPage('wallet')">
              + Deposit
            </button>

            <button class="quick" onclick="showPage('wallet')">
              ↗ Withdrawal
            </button>

            <button class="quick" onclick="showPage('transactions')">
              View activity
            </button>

          </div>

        </div>


        <div class="stats">

          <div class="stat">
            <div class="stat-label">Available Balance</div>
            <div class="stat-value" id="dashboardBalance">
              $0.00
            </div>
          </div>

          <div class="stat">
            <div class="stat-label">Projects</div>
            <div class="stat-value" id="projectCount">
              0
            </div>
          </div>

          <div class="stat">
            <div class="stat-label">Account Status</div>
            <div class="stat-value">Active</div>
          </div>

        </div>


        <div class="panel">

          <h2>Welcome back</h2>

          <p id="dashboardMessage">
            Your demo account is ready.
          </p>

        </div>

      </section>


      <!-- WALLET -->

      <section id="wallet" class="page">

        <div class="page-head">
          <div>
            <h1>Wallet</h1>
            <p>Manage your simulated wallet activity.</p>
          </div>
        </div>


        <div class="panel">

          <div class="label">
            Available demo balance
          </div>

          <div class="balance" id="walletBalance">
            $0.00
          </div>

        </div>


        <div class="panel">

          <h2>Deposit</h2>

          <p>
            Add simulated funds to your demo balance.
          </p>

          <input
            id="depositAmount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Enter amount"
          >

          <button class="primary" onclick="deposit()">
            Add demo funds
          </button>

          <p id="depositMessage" class="message"></p>

        </div>


        <div class="panel">

          <h2>Withdrawal request</h2>

          <p>
            Demo withdrawals are placed into a simulated
            pending state.
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
            maxlength="6"
            inputmode="numeric"
            placeholder="Withdrawal PIN"
          >

          <button class="primary" onclick="withdraw()">
            Submit request
          </button>

          <p id="withdrawMessage" class="message"></p>

        </div>


        <div class="panel">

          <h2>Withdrawal PIN</h2>

          <p>
            Create a 4–6 digit PIN for demo withdrawal requests.
          </p>

          <input
            id="newPin"
            type="password"
            maxlength="6"
            inputmode="numeric"
            placeholder="4–6 digit PIN"
          >

          <button class="secondary" onclick="setPin()">
            Save PIN
          </button>

          <p id="pinMessage" class="message"></p>

        </div>


        <div class="panel">

          <h2>Pending requests</h2>

          <div id="pendingList">
            No pending requests.
          </div>

        </div>

      </section>


      <!-- TRANSACTIONS -->

      <section id="transactions" class="page">

        <div class="page-head">
          <div>
            <h1>Transactions</h1>
            <p>Your simulated account activity.</p>
          </div>
        </div>

        <div class="panel">

          <div id="transactionList">
            No transactions yet.
          </div>

        </div>

      </section>


      <!-- PROJECTS -->

      <section id="projects" class="page">

        <div class="page-head">
          <div>
            <h1>Projects</h1>
            <p>Organize your Nexora demo projects.</p>
          </div>
        </div>

        <div class="panel">

          <input
            id="projectInput"
            placeholder="Project name"
          >

          <button class="primary" onclick="addProject()">
            Create project
          </button>

          <div id="projectList"></div>

        </div>

      </section>


      <!-- PROFILE -->

      <section id="profile" class="page">

        <div class="page-head">
          <div>
            <h1>Profile</h1>
            <p>Manage your demo account details.</p>
          </div>
        </div>

        <div class="panel">

          <input id="profileName" placeholder="Full name">

          <input id="profileEmail" disabled>

          <button class="primary" onclick="saveProfile()">
            Save changes
          </button>

          <p id="profileMessage" class="message"></p>

        </div>

      </section>


      <!-- SETTINGS -->

      <section id="settings" class="page">

        <div class="page-head">
          <div>
            <h1>Settings</h1>
            <p>Account preferences and information.</p>
          </div>
        </div>

        <div class="panel">

          <h2>Demo account</h2>

          <p>
            Nexora is currently operating as a browser-based
            demonstration. It does not process real deposits,
            withdrawals, investments, or financial returns.
          </p>

          <button class="danger" onclick="logout()">
            Sign out
          </button>

        </div>

      </section>

    </main>

  </div>

</div>


<script>

const KEY = "nexora_demo_account";

let loginMode = false;


function getAccount(){

  try{
    return JSON.parse(localStorage.getItem(KEY) || "null");
  }catch(e){
    return null;
  }

}


function saveAccount(account){

  localStorage.setItem(KEY,JSON.stringify(account));

}


function money(value){

  return "$" + Number(value || 0).toLocaleString(
    "en-US",
    {
      minimumFractionDigits:2,
      maximumFractionDigits:2
    }
  );

}


function showSignup(){

  loginMode=false;

  document.getElementById("authSub").textContent=
    "Create your Nexora demo account.";

  document.getElementById("authBtn").textContent=
    "Create account";

  document.getElementById("switchMode").textContent=
    "Already have an account? Login";

  document.getElementById("name").style.display="block";

  document.getElementById("name").required=true;

}


document.getElementById("switchMode").onclick=function(){

  loginMode=!loginMode;

  if(loginMode){

    document.getElementById("authSub").textContent=
      "Welcome back to your Nexora demo account.";

    document.getElementById("authBtn").textContent=
      "Login";

    document.getElementById("switchMode").textContent=
      "New here? Create an account";

    document.getElementById("name").style.display="none";

    document.getElementById("name").required=false;

  }else{

    showSignup();

  }

};


document.getElementById("authForm").onsubmit=function(e){

  e.preventDefault();

  const email=
    document.getElementById("email").value.trim();

  const password=
    document.getElementById("password").value;

  if(loginMode){

    const old=getAccount();

    if(
      !old ||
      old.email!==email ||
      old.password!==password
    ){

      alert(
        "Demo login failed. Use the details from your demo account."
      );

      return;

    }

    localStorage.setItem(
      "nexora_logged_in",
      "true"
    );

    openApp();

    return;

  }


  const name=
    document.getElementById("name").value.trim();

  if(!name){

    alert("Please enter your name.");

    return;

  }


  const account={

    name:name,

    email:email,

    password:password,

    balance:0,

    pin:"",

    projects:[],

    transactions:[],

    pending:[]

  };


  saveAccount(account);

  localStorage.setItem(
    "nexora_logged_in",
    "true"
  );

  openApp();

};


function openApp(){

  const account=getAccount();

  if(!account){
    return;
  }

  document.getElementById("auth").classList.add("hidden");

  document.getElementById("app").classList.remove("hidden");

  document.getElementById("userName").textContent=
    account.name;

  document.getElementById("welcomeName").textContent=
    account.name;

  document.getElementById("avatar").textContent=
    account.name.charAt(0).toUpperCase();

  document.getElementById("profileName").value=
    account.name;

  document.getElementById("profileEmail").value=
    account.email;

  updateUI();

}


function logout(){

  localStorage.removeItem("nexora_logged_in");

  document.getElementById("app").classList.add("hidden");

  document.getElementById("auth").classList.remove("hidden");

  document.getElementById("email").value="";

  document.getElementById("password").value="";

  showSignup();

}


function showPage(id,button){

  document.querySelectorAll(".page")
    .forEach(function(page){
      page.classList.remove("active");
    });

  const page=document.getElementById(id);

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

  updateUI();

}


function updateUI(){

  const account=getAccount();

  if(!account){
    return;
  }

  const value=money(account.balance);

  document.getElementById("heroBalance").textContent=value;

  document.getElementById("dashboardBalance").textContent=value;

  document.getElementById("walletBalance").textContent=value;

  document.getElementById("projectCount").textContent=
    Array.isArray(account.projects)
      ? account.projects.length
      : 0;

  document.getElementById("dashboardMessage").textContent=
    "Welcome back, " + account.name + ".";

  renderTransactions();

  renderPending();

  renderProjects();

}


function deposit(){

  const account=getAccount();

  const input=document.getElementById("depositAmount");

  const message=document.getElementById("depositMessage");

  const amount=Number(input.value);

  if(!Number.isFinite(amount) || amount<=0){

    message.textContent="Enter a valid amount.";

    message.className="message error";

    return;

  }


  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }


  account.balance=
    Number(account.balance || 0)+amount;


  account.transactions.unshift({

    type:"Deposit",

    amount:amount,

    status:"Completed",

    date:new Date().toLocaleString()

  });


  saveAccount(account);

  input.value="";

  message.textContent=
    money(amount)+" added to your simulated balance.";

  message.className="message success";

  updateUI();

}


function setPin(){

  const account=getAccount();

  const pin=
    document.getElementById("newPin").value.trim();

  const message=
    document.getElementById("pinMessage");


  if(!/^[0-9]{4,6}$/.test(pin)){

    message.textContent=
      "PIN must contain 4–6 digits.";

    message.className="message error";

    return;

  }


  account.pin=pin;

  saveAccount(account);

  document.getElementById("newPin").value="";

  message.textContent=
    "Demo withdrawal PIN saved.";

  message.className="message success";

}


function withdraw(){

  const account=getAccount();

  const amount=
    Number(
      document.getElementById("withdrawAmount").value
    );

  const pin=
    document.getElementById("withdrawPin").value.trim();

  const message=
    document.getElementById("withdrawMessage");


  if(!Number.isFinite(amount) || amount<=0){

    message.textContent="Enter a valid amount.";

    message.className="message error";

    return;

  }


  if(!account.pin){

    message.textContent=
      "Create a withdrawal PIN first.";

    message.className="message error";

    return;

  }


  if(pin!==account.pin){

    message.textContent=
      "Incorrect withdrawal PIN.";

    message.className="message error";

    return;

  }


  if(amount>Number(account.balance || 0)){

    message.textContent=
      "Insufficient simulated balance.";

    message.className="message error";

    return;

  }


  if(!Array.isArray(account.pending)){
    account.pending=[];
  }

  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }


  account.balance=
    Number(account.balance || 0)-amount;


  const request={

    id:Date.now(),

    type:"Withdrawal",

    amount:amount,

    status:"Pending",

    date:new Date().toLocaleString()

  };


  account.pending.unshift(request);

  account.transactions.unshift(request);

  saveAccount(account);


  document.getElementById("withdrawAmount").value="";

  document.getElementById("withdrawPin").value="";


  message.textContent=
    "Demo withdrawal request submitted as pending.";

  message.className="message success";

  updateUI();

}


function renderPending(){

  const account=getAccount();

  const list=document.getElementById("pendingList");

  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.pending) ||
    account.pending.length===0
  ){

    list.textContent="No pending requests.";

    return;

  }


  account.pending.forEach(function(item){

    const div=document.createElement("div");

    div.className="pending";

    div.textContent=
      "Withdrawal · "+
      money(item.amount)+
      " · Pending · "+
      item.date;

    list.appendChild(div);

  });

}


function renderTransactions(){

  const account=getAccount();

  const list=document.getElementById("transactionList");

  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.transactions) ||
    account.transactions.length===0
  ){

    list.textContent="No transactions yet.";

    return;

  }


  account.transactions.forEach(function(item){

    const row=document.createElement("div");

    row.className="transaction";


    const left=document.createElement("div");

    const title=document.createElement("div");

    title.className="tx-title";

    title.textContent=item.type;

    const date=document.createElement("div");

    date.className="tx-date";

    date.textContent=item.date;

    left.appendChild(title);

    left.appendChild(date);


    const right=document.createElement("div");

    right.className="tx-amount";

    right.textContent=
      money(item.amount);


    if(item.status==="Pending"){

      right.className+=" pending-text";

    }else if(item.type==="Deposit"){

      right.className+=" deposit";

    }else{

      right.className+=" withdraw";

    }


    const status=document.createElement("div");

    status.style.fontSize="11px";

    status.textContent=item.status;

    right.appendChild(status);


    row.appendChild(left);

    row.appendChild(right);

    list.appendChild(row);

  });

}


function addProject(){

  const account=getAccount();

  const input=document.getElementById("projectInput");

  const name=input.value.trim();


  if(!name){
    return;
  }


  if(!Array.isArray(account.projects)){
    account.projects=[];
  }


  account.projects.push(name);

  saveAccount(account);

  input.value="";

  updateUI();

}


function renderProjects(){

  const account=getAccount();

  const list=document.getElementById("projectList");

  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.projects) ||
    account.projects.length===0
  ){

    list.innerHTML=
      "<p>No projects created yet.</p>";

    return;

  }


  account.projects.forEach(function(project,index){

    const row=document.createElement("div");

    row.className="project";


    const title=document.createElement("strong");

    title.textContent=project;


    const del=document.createElement("button");

    del.className="danger";

    del.textContent="Delete";


    del.onclick=function(){

      account.projects.splice(index,1);

      saveAccount(account);

      updateUI();

    };


    row.appendChild(title);

    row.appendChild(del);

    list.appendChild(row);

  });

}


function saveProfile(){

  const account=getAccount();

  const name=
    document.getElementById("profileName").value.trim();

  const message=
    document.getElementById("profileMessage");


  if(!name){

    message.textContent="Enter your name.";

    message.className="message error";

    return;

  }


  account.name=name;

  saveAccount(account);

  message.textContent="Profile saved in demo mode.";

  message.className="message success";

  openApp();

}


/* AUTO LOGIN */

if(
  localStorage.getItem("nexora_logged_in")==="true" &&
  getAccount()
){

  openApp();

}

</script>

</body>
</html>`;

    return new Response(html,{
      status:200,
      headers:{
        "Content-Type":"text/html; charset=UTF-8",
        "Cache-Control":"no-store"
      }
    });
  }
};
