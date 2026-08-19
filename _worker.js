export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nexora</title>

<style>
*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  color:#0f172a;
  min-height:100vh;
  background:
    radial-gradient(circle at 10% 10%,rgba(37,99,235,.12),transparent 30%),
    radial-gradient(circle at 90% 15%,rgba(14,165,233,.10),transparent 28%),
    radial-gradient(circle at 50% 100%,rgba(99,102,241,.07),transparent 35%),
    linear-gradient(135deg,#f8fafc,#eef3f9,#f8fafc);
  background-attachment:fixed;
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.32;
  background-image:
    linear-gradient(rgba(15,23,42,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(15,23,42,.035) 1px,transparent 1px);
  background-size:42px 42px;
  mask-image:linear-gradient(to bottom,black,transparent 92%);
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
  margin:7px 0;
  border:1px solid #dbe2ea;
  border-radius:10px;
  background:#fff;
  outline:none;
  transition:.2s;
}

input:focus{
  border-color:#2563eb;
  box-shadow:0 0 0 3px rgba(37,99,235,.10);
}

.primary{
  border:0;
  background:#2563eb;
  color:#fff;
  padding:12px 18px;
  border-radius:10px;
  font-weight:700;
  transition:.2s;
}

.primary:hover{
  background:#1d4ed8;
  transform:translateY(-1px);
}

.danger{
  border:0;
  background:#dc2626;
  color:white;
  padding:12px 18px;
  border-radius:10px;
  font-weight:700;
}

/* AUTH */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:
    radial-gradient(circle at 20% 20%,rgba(59,130,246,.18),transparent 30%),
    radial-gradient(circle at 80% 80%,rgba(14,165,233,.12),transparent 30%),
    #07111f;
}

.auth-card{
  width:100%;
  max-width:430px;
  background:rgba(255,255,255,.97);
  padding:34px;
  border-radius:22px;
  box-shadow:0 30px 80px rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.5);
}

.auth-logo{
  text-align:center;
  font-size:32px;
  font-weight:900;
  letter-spacing:2px;
}

.auth-subtitle{
  text-align:center;
  color:#64748b;
  margin:8px 0 26px;
}

.auth-button{
  width:100%;
  margin-top:12px;
  padding:14px;
  border:0;
  border-radius:10px;
  background:#2563eb;
  color:white;
  font-weight:700;
}

.auth-switch{
  text-align:center;
  margin-top:20px;
  color:#64748b;
  font-size:14px;
}

.auth-switch button{
  border:0;
  background:none;
  color:#2563eb;
  font-weight:700;
}

.auth-message{
  min-height:20px;
  margin-top:12px;
  text-align:center;
  font-size:14px;
}

.message-success{
  color:#15803d;
  font-weight:700;
}

.message-error{
  color:#dc2626;
  font-weight:700;
}

/* APP */

#app{
  display:none;
  min-height:100vh;
}

.sidebar{
  width:250px;
  background:
    linear-gradient(180deg,#0b1220 0%,#111827 100%);
  color:white;
  padding:26px 18px;
  position:fixed;
  height:100vh;
  left:0;
  top:0;
  z-index:10;
  border-right:1px solid rgba(255,255,255,.06);
}

.logo{
  font-size:25px;
  font-weight:900;
  letter-spacing:1.5px;
  margin-bottom:34px;
  padding:0 8px;
}

.logo span{
  color:#60a5fa;
}

.nav{
  width:100%;
  padding:13px 15px;
  margin-bottom:7px;
  border:0;
  border-radius:10px;
  background:transparent;
  color:#94a3b8;
  text-align:left;
  transition:.2s;
}

.nav:hover,
.nav.active{
  background:#2563eb;
  color:white;
  box-shadow:0 8px 20px rgba(37,99,235,.20);
}

.logout{
  margin-top:22px;
  background:#7f1d1d;
  color:#fff;
}

.main{
  margin-left:250px;
  width:calc(100% - 250px);
  padding:0 38px 40px;
}

.test-banner{
  background:rgba(254,243,199,.88);
  color:#92400e;
  padding:9px 15px;
  text-align:center;
  font-size:12px;
  font-weight:700;
  margin:0 -38px;
  border-bottom:1px solid rgba(146,64,14,.08);
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
  font-size:34px;
  letter-spacing:-.7px;
}

.header p{
  color:#64748b;
  margin-top:8px;
}

/* CARDS */

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.card{
  background:rgba(255,255,255,.90);
  backdrop-filter:blur(12px);
  padding:25px;
  border-radius:17px;
  border:1px solid rgba(226,232,240,.9);
  box-shadow:
    0 12px 30px rgba(15,23,42,.06),
    0 2px 8px rgba(15,23,42,.03);
}

.card-title{
  color:#64748b;
  font-size:13px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.5px;
}

.number{
  font-size:30px;
  font-weight:800;
  margin-top:10px;
}

/* PANELS */

.panel{
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(12px);
  padding:26px;
  border-radius:17px;
  margin-top:24px;
  border:1px solid rgba(226,232,240,.9);
  box-shadow:
    0 12px 30px rgba(15,23,42,.05),
    0 2px 8px rgba(15,23,42,.03);
}

.panel h2{
  margin-top:0;
}

.balance{
  font-size:44px;
  font-weight:900;
  margin-top:10px;
  letter-spacing:-1px;
}

.balance-label{
  color:#64748b;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:.5px;
  font-weight:700;
}

.pending{
  background:#fff7d6;
  color:#92400e;
  padding:14px;
  border-radius:10px;
  margin-top:10px;
  border:1px solid #fde68a;
}

.transaction{
  padding:17px 0;
  border-bottom:1px solid #e5e7eb;
}

.transaction:last-child{
  border-bottom:0;
}

.deposit-text{
  color:#15803d;
  font-weight:800;
}

.withdrawal-text{
  color:#dc2626;
  font-weight:800;
}

.pending-text{
  color:#d97706;
  font-weight:800;
}

.stat-positive{
  color:#15803d;
  font-size:13px;
  margin-top:6px;
  font-weight:700;
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
    width:100%;
    padding:0 20px 25px;
  }

  .test-banner{
    margin:0 -20px;
  }

  .cards{
    grid-template-columns:1fr;
  }

  .balance{
    font-size:36px;
  }

  .header h1{
    font-size:28px;
  }
}
</style>
</head>

<body>

<div id="auth">

  <div class="auth-card">

    <div class="auth-logo">
      NEXORA
    </div>

    <div class="auth-subtitle">
      Secure account access
    </div>

    <div id="loginForm">

      <input id="loginEmail" type="email" placeholder="Email">

      <input id="loginPassword" type="password" placeholder="Password">

      <button class="auth-button" onclick="login()">
        Sign In
      </button>

      <div class="auth-switch">
        Don't have an account?
        <button onclick="showSignup()">Create one</button>
      </div>

    </div>

    <div id="signupForm" style="display:none">

      <input id="signupName" placeholder="Full name">

      <input id="signupEmail" type="email" placeholder="Email">

      <input id="signupPassword" type="password" placeholder="Password">

      <button class="auth-button" onclick="signup()">
        Create Account
      </button>

      <div class="auth-switch">
        Already have an account?
        <button onclick="showLogin()">Sign in</button>
      </div>

    </div>

    <div id="authMessage" class="auth-message"></div>

  </div>

</div>


<div id="app">

  <aside class="sidebar">

    <div class="logo">
      NEXORA
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

    <div class="test-banner">
      Test environment — wallet activity uses simulated funds.
    </div>


    <section id="dashboard" class="page active">

      <div class="header">

        <h1 id="welcomeTitle">
          Welcome to Nexora
        </h1>

        <p>
          Your account overview.
        </p>

      </div>


      <div class="cards">

        <div class="card">

          <div class="card-title">
            Available Balance
          </div>

          <div class="number" id="dashboardBalance">
            $0.00
          </div>

          <div class="stat-positive">
            ● Account active
          </div>

        </div>


        <div class="card">

          <div class="card-title">
            Projects
          </div>

          <div class="number" id="projectCount">
            0
          </div>

        </div>


        <div class="card">

          <div class="card-title">
            Account Status
          </div>

          <div class="number">
            Active
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>Nexora Overview</h2>

        <p id="dashboardMessage">
          Welcome to your account.
        </p>

      </div>

    </section>


    <section id="wallet" class="page">

      <div class="header">

        <h1>Wallet</h1>

        <p>
          Manage your simulated account balance.
        </p>

      </div>


      <div class="panel">

        <div class="balance-label">
          Available Balance
        </div>

        <div class="balance" id="walletBalance">
          $0.00
        </div>

      </div>


      <div class="panel">

        <h2>Deposit</h2>

        <p>
          Add simulated funds to your test balance.
        </p>

        <input
          id="depositAmount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
        >

        <button class="primary" onclick="deposit()">
          Deposit
        </button>

        <p id="depositMessage"></p>

      </div>


      <div class="panel">

        <h2>Withdrawal</h2>

        <p>
          Withdrawal requests are simulated and remain
          pending in this test environment.
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
          Request Withdrawal
        </button>

        <p id="withdrawMessage"></p>

      </div>


      <div class="panel">

        <h2>Withdrawal PIN</h2>

        <p>
          Set a 4–6 digit PIN for simulated withdrawal requests.
        </p>

        <input
          id="newPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="4–6 digit PIN"
        >

        <button class="primary" onclick="setWithdrawalPin()">
          Set PIN
        </button>

        <p id="pinMessage"></p>

      </div>


      <div class="panel">

        <h2>Pending Withdrawals</h2>

        <div id="pendingList">
          No pending withdrawals.
        </div>

      </div>

    </section>


    <section id="transactions" class="page">

      <div class="header">

        <h1>Transactions</h1>

        <p>
          Review your account activity.
        </p>

      </div>

      <div class="panel">

        <div id="transactionList">
          No transactions yet.
        </div>

      </div>

    </section>


    <section id="profile" class="page">

      <div class="header">

        <h1>Profile</h1>

        <p>
          Manage your account information.
        </p>

      </div>

      <div class="panel">

        <input id="profileName" placeholder="Your name">

        <input id="profileEmail" disabled placeholder="Email">

        <button class="primary" onclick="saveProfile()">
          Save Profile
        </button>

        <p id="profileMessage"></p>

      </div>

    </section>


    <section id="projects" class="page">

      <div class="header">

        <h1>Projects</h1>

        <p>
          Create and manage your projects.
        </p>

      </div>

      <div class="panel">

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <button class="primary" onclick="addProject()">
          Add Project
        </button>

        <div id="projectList"></div>

      </div>

    </section>


    <section id="settings" class="page">

      <div class="header">

        <h1>Settings</h1>

        <p>
          Account settings and information.
        </p>

      </div>

      <div class="panel">

        <h2>Account</h2>

        <p>
          This is a test environment. Wallet activity uses
          simulated funds and does not process real money.
        </p>

        <button class="danger" onclick="logout()">
          Log Out
        </button>

      </div>

    </section>

  </main>

</div>


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

  const name =
    document.getElementById("signupName").value.trim();

  const email =
    document.getElementById("signupEmail").value.trim();

  const password =
    document.getElementById("signupPassword").value;

  const message =
    document.getElementById("authMessage");


  if(!name || !email || !password){

    message.textContent="Please complete all fields.";

    message.className="auth-message message-error";

    return;

  }


  if(password.length < 6){

    message.textContent=
      "Password must contain at least 6 characters.";

    message.className="auth-message message-error";

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

    message.textContent=
      "No account found. Create an account first.";

    message.className="auth-message message-error";

    return;

  }


  if(
    email !== account.email ||
    password !== account.password
  ){

    message.textContent=
      "Incorrect email or password.";

    message.className="auth-message message-error";

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


  document.getElementById("auth").style.display="none";

  document.getElementById("app").style.display="block";


  document.getElementById("welcomeTitle").textContent=
    "Welcome, " + account.name + " 👋";


  document.getElementById("dashboardMessage").textContent=
    "Welcome back, " + account.name + ".";


  document.getElementById("profileName").value=
    account.name;


  document.getElementById("profileEmail").value=
    account.email;


  updateBalance();

  renderProjects();

  renderTransactions();

  renderPendingWithdrawals();

}


function logout(){

  localStorage.removeItem("nexoraLoggedIn");

  document.getElementById("app").style.display="none";

  document.getElementById("auth").style.display="flex";

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


  button.classList.add("active");

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


  document.getElementById("walletBalance")
    .textContent=formatted;


  document.getElementById("dashboardBalance")
    .textContent=formatted;

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

    message.textContent="Please sign in first.";

    message.className="message-error";

    return;

  }


  const amount =
    Number(input.value);


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    message.textContent="Enter a valid amount.";

    message.className="message-error";

    return;

  }


  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }


  account.balance =
    Number(account.balance || 0) + amount;


  account.transactions.unshift({

    type:"Deposit",
    amount:amount,
    status:"Completed",
    date:new Date().toLocaleString()

  });


  saveAccount(account);


  input.value="";


  message.textContent=
    "$" + amount.toFixed(2) +
    " was added to your simulated balance.";

  message.className="message-success";


  updateBalance();

  renderTransactions();

}


/* PIN */

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

    message.textContent=
      "PIN must contain 4–6 digits.";

    message.className="message-error";

    return;

  }


  account.withdrawalPin=pin;

  saveAccount(account);

  input.value="";


  message.textContent=
    "Withdrawal PIN saved.";

  message.className="message-success";

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

    message.textContent=
      "Enter a valid withdrawal amount.";

    message.className="message-error";

    return;

  }


  if(!account.withdrawalPin){

    message.textContent=
      "Set a withdrawal PIN first.";

    message.className="message-error";

    return;

  }


  if(pin !== account.withdrawalPin){

    message.textContent=
      "Incorrect withdrawal PIN.";

    message.className="message-error";

    return;

  }


  if(
    amount > Number(account.balance || 0)
  ){

    message.textContent=
      "Insufficient balance.";

    message.className="message-error";

    return;

  }


  if(!Array.isArray(account.pendingWithdrawals)){
    account.pendingWithdrawals=[];
  }


  if(!Array.isArray(account.transactions)){
    account.transactions=[];
  }


  account.balance =
    Number(account.balance || 0) - amount;


  const withdrawal={

    id:Date.now(),
    type:"Withdrawal",
    amount:amount,
    status:"Pending",
    date:new Date().toLocaleString()

  };


  account.pendingWithdrawals.unshift(withdrawal);

  account.transactions.unshift(withdrawal);

  saveAccount(account);


  document.getElementById("withdrawAmount").value="";

  document.getElementById("withdrawPin").value="";


  message.textContent=
    "Withdrawal request submitted and marked pending.";

  message.className="message-success";


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

}


/* PENDING */

function renderPendingWithdrawals(){

  const account =
    getAccount();

  const list =
    document.getElementById("pendingList");


  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.pendingWithdrawals) ||
    account.pendingWithdrawals.length===0
  ){

    list.textContent=
      "No pending withdrawals.";

    return;

  }


  account.pendingWithdrawals.forEach(
    function(item){

      const div =
        document.createElement("div");

      div.className="pending";

      div.textContent=
        "Withdrawal: $" +
        Number(item.amount).toFixed(2) +
        " — Pending — " +
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


  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.transactions) ||
    account.transactions.length===0
  ){

    list.textContent=
      "No transactions yet.";

    return;

  }


  account.transactions.forEach(
    function(item){

      const div =
        document.createElement("div");

      div.className="transaction";


      const title =
        document.createElement("strong");

      title.textContent=item.type;


      title.className =
        item.type==="Deposit"
          ? "deposit-text"
          : "withdrawal-text";


      const amount =
        document.createElement("div");

      amount.textContent=
        "$" +
        Number(item.amount).toFixed(2) +
        " — " +
        item.status;


      if(item.status==="Pending"){
        amount.className="pending-text";
      }


      const date =
        document.createElement("small");

      date.textContent=item.date;


      div.appendChild(title);

      div.appendChild(
        document.createElement("br")
      );

      div.appendChild(amount);

      div.appendChild(
        document.createElement("br")
      );

      div.appendChild(date);


      list.appendChild(div);

    }
  );

}


/* PROFILE */

function saveProfile(){

  const account =
    getAccount();

  const name =
    document.getElementById("profileName")
      .value.trim();

  const message =
    document.getElementById("profileMessage");


  if(!name){

    message.textContent=
      "Please enter your name.";

    message.className="message-error";

    return;

  }


  account.name=name;

  saveAccount(account);


  document.getElementById("welcomeTitle").textContent=
    "Welcome, " + name + " 👋";


  document.getElementById("dashboardMessage").textContent=
    "Welcome back, " + name + ".";


  message.textContent=
    "Profile saved successfully.";

  message.className="message-success";

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
    account.projects=[];
  }


  account.projects.push(name);

  saveAccount(account);

  input.value="";

  renderProjects();

}


function renderProjects(){

  const account =
    getAccount();

  const list =
    document.getElementById("projectList");


  list.innerHTML="";


  if(
    !account ||
    !Array.isArray(account.projects)
  ){

    updateProjectCount();

    return;

  }


  account.projects.forEach(
    function(project,index){

      const item =
        document.createElement("div");

      item.style.padding="15px 0";

      item.style.borderBottom=
        "1px solid #e5e7eb";


      const title =
        document.createElement("strong");

      title.textContent=project;


      const br =
        document.createElement("br");


      const deleteButton =
        document.createElement("button");

      deleteButton.className="danger";

      deleteButton.style.marginTop="8px";

      deleteButton.textContent="Delete";


      deleteButton.onclick=function(){

        account.projects.splice(index,1);

        saveAccount(account);

        renderProjects();

      };


      item.appendChild(title);

      item.appendChild(br);

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
    .textContent=count;

}


/* AUTO LOGIN */

if(
  localStorage.getItem("nexoraLoggedIn")==="true"
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
