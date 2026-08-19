export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nexora</title>

<style>
*{box-sizing:border-box}

body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#f5f7fb;
  color:#111827;
}

button,input{
  font:inherit;
}

button{
  cursor:pointer;
}

input{
  width:100%;
  padding:13px;
  margin:7px 0;
  border:1px solid #d1d5db;
  border-radius:8px;
}

button.primary{
  border:0;
  background:#2563eb;
  color:white;
  padding:12px 18px;
  border-radius:8px;
  font-weight:bold;
}

button.danger{
  border:0;
  background:#dc2626;
  color:white;
  padding:12px 18px;
  border-radius:8px;
  font-weight:bold;
}

/* LOGIN */

#auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:#0f172a;
}

.auth-card{
  width:100%;
  max-width:420px;
  background:white;
  padding:32px;
  border-radius:18px;
  box-shadow:0 20px 50px rgba(0,0,0,.25);
}

.auth-logo{
  text-align:center;
  font-size:30px;
  font-weight:800;
}

.auth-subtitle{
  text-align:center;
  color:#64748b;
  margin:8px 0 25px;
}

.auth-button{
  width:100%;
  margin-top:12px;
  padding:13px;
  border:0;
  border-radius:8px;
  background:#2563eb;
  color:white;
  font-weight:bold;
}

.auth-switch{
  text-align:center;
  margin-top:20px;
  color:#64748b;
}

.auth-switch button{
  border:0;
  background:none;
  color:#2563eb;
  font-weight:bold;
}

.auth-message{
  min-height:20px;
  margin-top:12px;
  text-align:center;
  font-size:14px;
}

/* APP */

#app{
  display:none;
  min-height:100vh;
}

.sidebar{
  width:240px;
  background:#111827;
  color:white;
  padding:25px 18px;
  position:fixed;
  height:100vh;
  left:0;
  top:0;
}

.logo{
  font-size:25px;
  font-weight:800;
  margin-bottom:30px;
}

.nav{
  width:100%;
  padding:13px 15px;
  margin-bottom:8px;
  border:0;
  border-radius:9px;
  background:transparent;
  color:#cbd5e1;
  text-align:left;
}

.nav:hover,
.nav.active{
  background:#2563eb;
  color:white;
}

.logout{
  margin-top:20px;
  background:#dc2626;
  color:white;
}

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:0 35px 35px;
}

.test-banner{
  background:#fef3c7;
  color:#92400e;
  padding:9px 15px;
  text-align:center;
  font-size:12px;
  font-weight:bold;
  margin:0 -35px;
}

.page{
  display:none;
}

.page.active{
  display:block;
}

.header{
  padding-top:35px;
  margin-bottom:25px;
}

.header h1{
  margin:0;
  font-size:32px;
}

.header p{
  color:#64748b;
}

/* CARDS */

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.card{
  background:white;
  padding:25px;
  border-radius:15px;
  box-shadow:0 5px 20px rgba(0,0,0,.05);
}

.card-title{
  color:#64748b;
  font-size:14px;
}

.number{
  font-size:30px;
  font-weight:bold;
  margin-top:10px;
}

/* PANELS */

.panel{
  background:white;
  padding:25px;
  border-radius:15px;
  margin-top:25px;
  box-shadow:0 5px 20px rgba(0,0,0,.05);
}

.balance{
  font-size:42px;
  font-weight:800;
  margin-top:10px;
}

.message-success{
  color:#15803d;
  font-weight:bold;
}

.message-error{
  color:#dc2626;
  font-weight:bold;
}

.pending{
  background:#fef3c7;
  color:#92400e;
  padding:12px;
  border-radius:8px;
  margin-top:10px;
}

.transaction{
  padding:15px 0;
  border-bottom:1px solid #e5e7eb;
}

.transaction:last-child{
  border-bottom:0;
}

.deposit-text{
  color:#15803d;
  font-weight:bold;
}

.withdrawal-text{
  color:#dc2626;
  font-weight:bold;
}

.pending-text{
  color:#d97706;
  font-weight:bold;
}

/* MOBILE */

@media(max-width:700px){

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
    font-size:34px;
  }
}
</style>
</head>

<body>

<!-- AUTH -->

<div id="auth">

  <div class="auth-card">

    <div class="auth-logo">
      NEXORA
    </div>

    <div class="auth-subtitle">
      Account
    </div>

    <div id="loginForm">

      <input
        id="loginEmail"
        type="email"
        placeholder="Email"
      >

      <input
        id="loginPassword"
        type="password"
        placeholder="Password"
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
      >

      <input
        id="signupEmail"
        type="email"
        placeholder="Email"
      >

      <input
        id="signupPassword"
        type="password"
        placeholder="Password"
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


<!-- APP -->

<div id="app">

  <aside class="sidebar">

    <div class="logo">
      NEXORA
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
      💰 Wallet
    </button>

    <button
      class="nav"
      onclick="showPage('transactions',this)"
    >
      📋 Transactions
    </button>

    <button
      class="nav"
      onclick="showPage('profile',this)"
    >
      👤 Profile
    </button>

    <button
      class="nav"
      onclick="showPage('projects',this)"
    >
      📁 Projects
    </button>

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
      🚪 Logout
    </button>

  </aside>


  <main class="main">

    <div class="test-banner">
      Test environment — wallet activity uses simulated funds.
    </div>


    <!-- DASHBOARD -->

    <section
      id="dashboard"
      class="page active"
    >

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

          <div
            class="number"
            id="dashboardBalance"
          >
            $0.00
          </div>

        </div>


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
            Account
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
          Welcome to your dashboard.
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
          Manage your simulated wallet.
        </p>

      </div>


      <div class="panel">

        <div class="card-title">
          Available Balance
        </div>

        <div
          class="balance"
          id="walletBalance"
        >
          $0.00
        </div>

      </div>


      <!-- DEPOSIT -->

      <div class="panel">

        <h2>
          Deposit
        </h2>

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

        <br>

        <button
          class="primary"
          onclick="deposit()"
        >
          Deposit
        </button>

        <p id="depositMessage"></p>

      </div>


      <!-- WITHDRAWAL -->

      <div class="panel">

        <h2>
          Withdrawal
        </h2>

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

        <button
          class="primary"
          onclick="withdraw()"
        >
          Request Withdrawal
        </button>

        <p id="withdrawMessage"></p>

      </div>


      <!-- PIN -->

      <div class="panel">

        <h2>
          Withdrawal PIN
        </h2>

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

        <button
          class="primary"
          onclick="setWithdrawalPin()"
        >
          Set PIN
        </button>

        <p id="pinMessage"></p>

      </div>


      <!-- PENDING -->

      <div class="panel">

        <h2>
          Pending Withdrawals
        </h2>

        <div id="pendingList">
          No pending withdrawals.
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
          Your transaction history.
        </p>

      </div>

      <div class="panel">

        <div id="transactionList">
          No transactions yet.
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
          Manage your profile.
        </p>

      </div>

      <div class="panel">

        <input
          id="profileName"
          placeholder="Your name"
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

    <section
      id="projects"
      class="page"
    >

      <div class="header">

        <h1>
          Projects
        </h1>

        <p>
          Create and manage projects.
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

    <section
      id="settings"
      class="page"
    >

      <div class="header">

        <h1>
          Settings
        </h1>

        <p>
          Account settings.
        </p>

      </div>

      <div class="panel">

        <h2>
          Account
        </h2>

        <p>
          This account uses simulated funds in a test environment.
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


  document.getElementById("walletBalance").textContent =
    formatted;


  document.getElementById("dashboardBalance").textContent =
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
      "message-error";

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
      "message-error";

    return;

  }


  if(!Array.isArray(account.transactions)){

    account.transactions = [];

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


  input.value =
    "";


  message.textContent =
    "$" +
    amount.toFixed(2) +
    " was added to your simulated balance.";

  message.className =
    "message-success";


  updateBalance();

  renderTransactions();

}


/* WITHDRAWAL PIN */

function setWithdrawalPin(){

  const account =
    getAccount();

  const input =
    document.getElementById("newPin");

  const message =
    document.getElementById("pinMessage");


  const pin =
    input.value.trim();


  if(!account){

    return;

  }


  if(!/^[0-9]{4,6}$/.test(pin)){

    message.textContent =
      "PIN must contain 4–6 digits.";

    message.className =
      "message-error";

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
    "message-success";

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
      "message-error";

    return;

  }


  if(!account.withdrawalPin){

    message.textContent =
      "Set a withdrawal PIN first.";

    message.className =
      "message-error";

    return;

  }


  if(pin !== account.withdrawalPin){

    message.textContent =
      "Incorrect withdrawal PIN.";

    message.className =
      "message-error";

    return;

  }


  if(
    amount >
    Number(account.balance || 0)
  ){

    message.textContent =
      "Insufficient balance.";

    message.className =
      "message-error";

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
    "message-success";


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

}


/* PENDING WITHDRAWALS */

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

    list.textContent =
      "No pending withdrawals.";

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


  list.innerHTML =
    "";


  if(
    !account ||
    !Array.isArray(account.transactions) ||
    account.transactions.length === 0
  ){

    list.textContent =
      "No transactions yet.";

    return;

  }


  account.transactions.forEach(
    function(item){

      const div =
        document.createElement("div");


      div.className =
        "transaction";


      const title =
        document.createElement("strong");


      title.textContent =
        item.type;


      if(item.type === "Deposit"){

        title.className =
          "deposit-text";

      }else{

        title.className =
          "withdrawal-text";

      }


      const amount =
        document.createElement("div");


      amount.textContent =
        "$" +
        Number(item.amount).toFixed(2) +
        " — " +
        item.status;


      if(item.status === "Pending"){

        amount.className =
          "pending-text";

      }


      const date =
        document.createElement("small");


      date.textContent =
        item.date;


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
      .value
      .trim();

  const message =
    document.getElementById("profileMessage");


  if(!name){

    message.textContent =
      "Please enter your name.";

    message.className =
      "message-error";

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
    "message-success";

}


/* PROJECTS */

function addProject(){

  const account =
    getAccount();

  const input =
    document.getElementById("projectInput");

  const name =
    input.value.trim();


  if(!name){
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
    !Array.isArray(account.projects)
  ){

    updateProjectCount();

    return;

  }


  account.projects.forEach(
    function(project,index){

      const item =
        document.createElement("div");


      item.style.padding =
        "15px 0";

      item.style.borderBottom =
        "1px solid #e5e7eb";


      const title =
        document.createElement("strong");


      title.textContent =
        project;


      const br =
        document.createElement("br");


      const deleteButton =
        document.createElement("button");


      deleteButton.className =
        "danger";

      deleteButton.style.marginTop =
        "8px";

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

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }
};
