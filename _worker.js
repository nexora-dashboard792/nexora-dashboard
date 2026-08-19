export default {
  async fetch(request) {
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nexora</title>

<style>
*{box-sizing:border-box}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  background:#f4f7fb;
  color:#172033;
}

button,input{
  font:inherit;
}

button{
  cursor:pointer;
}

.hidden{
  display:none!important;
}

input{
  width:100%;
  padding:13px 14px;
  margin:7px 0;
  border:1px solid #d7dee9;
  border-radius:10px;
  outline:none;
}

input:focus{
  border-color:#356ae6;
  box-shadow:0 0 0 3px rgba(53,106,230,.1);
}

.btn{
  border:0;
  border-radius:10px;
  padding:12px 17px;
  background:#2463eb;
  color:#fff;
  font-weight:700;
}

.btn.secondary{
  background:#e9eef8;
  color:#24324a;
}

.btn.danger{
  background:#d9363e;
}

.link{
  border:0;
  background:none;
  color:#2463eb;
  font-weight:700;
}

.muted{
  color:#718096;
}

.msg{
  min-height:20px;
  margin-top:12px;
  font-size:14px;
}

.ok{
  color:#16834b;
  font-weight:600;
}

.err{
  color:#d9363e;
  font-weight:600;
}

/* AUTH */

#auth{
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:24px;
  background:#0b1220;
}

.auth{
  width:min(430px,100%);
  background:#fff;
  border-radius:22px;
  padding:34px;
  box-shadow:0 25px 70px rgba(0,0,0,.3);
}

.brand{
  font-size:30px;
  font-weight:800;
  letter-spacing:.5px;
  text-align:center;
}

/* APP */

#app{
  min-height:100vh;
}

.side{
  position:fixed;
  inset:0 auto 0 0;
  width:245px;
  background:#101a2c;
  color:#d9e2f2;
  padding:25px 17px;
  z-index:3;
}

.logo{
  color:#fff;
  font-size:25px;
  font-weight:800;
  margin:0 10px 30px;
}

.nav{
  width:100%;
  border:0;
  background:transparent;
  color:#aebbd0;
  text-align:left;
  padding:13px 14px;
  border-radius:10px;
  margin:3px 0;
}

.nav:hover,
.nav.active{
  background:#2463eb;
  color:#fff;
}

.logout{
  margin-top:25px;
  background:#bd2933;
  color:#fff;
}

.main{
  margin-left:245px;
  padding:0 34px 40px;
}

.notice{
  margin:0 -34px;
  padding:8px;
  text-align:center;
  background:#fff4cf;
  color:#85600a;
  font-size:12px;
  font-weight:700;
}

.page{
  display:none;
}

.page.active{
  display:block;
}

.top{
  padding:31px 0 24px;
  display:flex;
  justify-content:space-between;
  align-items:end;
}

.top h1{
  margin:0;
  font-size:32px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:17px;
}

.card,
.panel{
  background:#fff;
  border:1px solid #e8edf5;
  border-radius:16px;
  box-shadow:0 7px 25px rgba(23,32,51,.04);
}

.card{
  padding:20px;
}

.panel{
  padding:23px;
  margin-top:20px;
}

.label{
  font-size:13px;
  color:#738096;
}

.value{
  font-size:27px;
  font-weight:800;
  margin-top:9px;
}

.value.orange{
  color:#c47a00;
}

.balance{
  font-size:43px;
  font-weight:850;
  margin:5px 0;
}

.row{
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap:wrap;
}

.row input{
  max-width:280px;
}

.panel h2{
  margin:0 0 8px;
  font-size:19px;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,
td{
  text-align:left;
  padding:14px 8px;
  border-bottom:1px solid #edf1f6;
  font-size:14px;
}

th{
  color:#718096;
  font-size:12px;
  text-transform:uppercase;
}

.badge{
  display:inline-block;
  padding:5px 9px;
  border-radius:20px;
  font-size:12px;
  font-weight:700;
  background:#e7f7ee;
  color:#16834b;
}

.badge.pending{
  background:#fff4cf;
  color:#a56b00;
}

.listitem{
  padding:15px 0;
  border-bottom:1px solid #edf1f6;
}

.listitem:last-child{
  border-bottom:0;
}

@media(max-width:850px){

  .side{
    position:relative;
    width:100%;
    height:auto;
  }

  .main{
    margin:0;
    padding:0 20px 30px;
  }

  .notice{
    margin:0 -20px;
  }

  .grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:520px){

  .grid{
    grid-template-columns:1fr;
  }

  .top{
    display:block;
  }

  .top h1{
    font-size:27px;
  }

  .balance{
    font-size:36px;
  }

  table{
    font-size:12px;
  }

  th,
  td{
    padding:10px 5px;
  }
}
</style>
</head>

<body>

<div id="auth">

  <div class="auth">

    <div class="brand">
      NEXORA
    </div>

    <p
      class="muted"
      style="text-align:center"
    >
      Digital finance workspace
    </p>

    <div id="loginBox">

      <input
        id="le"
        type="email"
        placeholder="Email"
      >

      <input
        id="lp"
        type="password"
        placeholder="Password"
      >

      <button
        class="btn"
        style="width:100%;margin-top:8px"
        onclick="login()"
      >
        Sign In
      </button>

      <p
        style="text-align:center"
        class="muted"
      >
        New to Nexora?

        <button
          class="link"
          onclick="toggleAuth()"
        >
          Create account
        </button>
      </p>

    </div>


    <div
      id="signupBox"
      class="hidden"
    >

      <input
        id="sn"
        placeholder="Full name"
      >

      <input
        id="se"
        type="email"
        placeholder="Email"
      >

      <input
        id="sp"
        type="password"
        placeholder="Password (6+ characters)"
      >

      <button
        class="btn"
        style="width:100%;margin-top:8px"
        onclick="signup()"
      >
        Create Account
      </button>

      <p
        style="text-align:center"
        class="muted"
      >
        Already registered?

        <button
          class="link"
          onclick="toggleAuth()"
        >
          Sign in
        </button>
      </p>

    </div>


    <div
      id="authMsg"
      class="msg"
    ></div>

  </div>

</div>


<div
  id="app"
  class="hidden"
>

  <aside class="side">

    <div class="logo">
      NEXORA
    </div>

    <button
      class="nav active"
      onclick="page('home',this)"
    >
      🏠 Overview
    </button>

    <button
      class="nav"
      onclick="page('wallet',this)"
    >
      💳 Wallet
    </button>

    <button
      class="nav"
      onclick="page('invest',this)"
    >
      📈 Portfolio
    </button>

    <button
      class="nav"
      onclick="page('transactions',this)"
    >
      📋 Transactions
    </button>

    <button
      class="nav"
      onclick="page('projects',this)"
    >
      📁 Projects
    </button>

    <button
      class="nav"
      onclick="page('profile',this)"
    >
      👤 Profile
    </button>

    <button
      class="nav"
      onclick="page('settings',this)"
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

    <div class="notice">
      Test environment — wallet activity uses simulated funds.
      No real money is processed.
    </div>


    <!-- OVERVIEW -->

    <section
      id="home"
      class="page active"
    >

      <div class="top">

        <div>

          <h1 id="welcome">
            Welcome
          </h1>

          <p class="muted">
            Here is your account overview.
          </p>

        </div>

      </div>


      <div class="grid">

        <div class="card">

          <div class="label">
            Total Balance
          </div>

          <div
            id="b1"
            class="value"
          >
            $0.00
          </div>

        </div>


        <div class="card">

          <div class="label">
            Available
          </div>

          <div
            id="b2"
            class="value"
          >
            $0.00
          </div>

        </div>


        <div class="card">

          <div class="label">
            Pending
          </div>

          <div
            id="pendingValue"
            class="value orange"
          >
            $0.00
          </div>

        </div>


        <div class="card">

          <div class="label">
            Projects
          </div>

          <div
            id="pc"
            class="value"
          >
            0
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>
          Account snapshot
        </h2>

        <p
          id="snapshot"
          class="muted"
        >
          Your simulated account is ready.
        </p>

      </div>

    </section>


    <!-- WALLET -->

    <section
      id="wallet"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Wallet
          </h1>

          <p class="muted">
            Manage your simulated account balance.
          </p>

        </div>

      </div>


      <div class="panel">

        <div class="label">
          Available balance
        </div>

        <div
          id="wb"
          class="balance"
        >
          $0.00
        </div>

      </div>


      <div class="panel">

        <h2>
          Deposit
        </h2>

        <p class="muted">
          Add simulated funds to your test balance.
        </p>

        <div class="row">

          <input
            id="da"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
          >

          <button
            class="btn"
            onclick="deposit()"
          >
            Deposit
          </button>

        </div>

        <div
          id="dm"
          class="msg"
        ></div>

      </div>


      <div class="panel">

        <h2>
          Withdrawal
        </h2>

        <p class="muted">
          Requests are simulated and remain pending
          in this test environment.
        </p>

        <div class="row">

          <input
            id="wa"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
          >

          <input
            id="wp"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="Withdrawal PIN"
          >

          <button
            class="btn"
            onclick="withdraw()"
          >
            Request Withdrawal
          </button>

        </div>

        <div
          id="wm"
          class="msg"
        ></div>

      </div>


      <div class="panel">

        <h2>
          Withdrawal PIN
        </h2>

        <p class="muted">
          Set a 4–6 digit PIN for simulated withdrawal requests.
        </p>

        <div class="row">

          <input
            id="np"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="4–6 digit PIN"
          >

          <button
            class="btn secondary"
            onclick="setPin()"
          >
            Save PIN
          </button>

        </div>

        <div
          id="pm"
          class="msg"
        ></div>

      </div>


      <div class="panel">

        <h2>
          Pending withdrawals
        </h2>

        <div
          id="pendingList"
          class="muted"
        >
          No pending withdrawals.
        </div>

      </div>

    </section>


    <!-- PORTFOLIO -->

    <section
      id="invest"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Portfolio
          </h1>

          <p class="muted">
            A professional view of your simulated financial workspace.
          </p>

        </div>

      </div>


      <div class="grid">

        <div class="card">

          <div class="label">
            Portfolio Value
          </div>

          <div
            id="pv"
            class="value"
          >
            $0.00
          </div>

        </div>


        <div class="card">

          <div class="label">
            Cash Allocation
          </div>

          <div class="value">
            100%
          </div>

        </div>


        <div class="card">

          <div class="label">
            Account Status
          </div>

          <div class="value">
            Active
          </div>

        </div>


        <div class="card">

          <div class="label">
            Environment
          </div>

          <div class="value">
            Test
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>
          Portfolio status
        </h2>

        <p class="muted">
          Portfolio figures are illustrative and are not connected
          to brokerage, investment, payment, or banking networks.
        </p>

      </div>

    </section>


    <!-- TRANSACTIONS -->

    <section
      id="transactions"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Transactions
          </h1>

          <p class="muted">
            Account activity and simulated requests.
          </p>

        </div>

      </div>


      <div class="panel">

        <div id="tx">
          No transactions yet.
        </div>

      </div>

    </section>


    <!-- PROJECTS -->

    <section
      id="projects"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Projects
          </h1>

          <p class="muted">
            Organize your Nexora workspace.
          </p>

        </div>

      </div>


      <div class="panel">

        <div class="row">

          <input
            id="project"
            placeholder="Project name"
          >

          <button
            class="btn"
            onclick="addProject()"
          >
            Add Project
          </button>

        </div>

        <div id="projectsList"></div>

      </div>

    </section>


    <!-- PROFILE -->

    <section
      id="profile"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Profile
          </h1>

          <p class="muted">
            Manage your account details.
          </p>

        </div>

      </div>


      <div class="panel">

        <input
          id="pn"
          placeholder="Full name"
        >

        <input
          id="pe"
          disabled
          placeholder="Email"
        >

        <button
          class="btn"
          onclick="saveProfile()"
        >
          Save Profile
        </button>

        <div
          id="profMsg"
          class="msg"
        ></div>

      </div>

    </section>


    <!-- SETTINGS -->

    <section
      id="settings"
      class="page"
    >

      <div class="top">

        <div>

          <h1>
            Settings
          </h1>

          <p class="muted">
            Account and security preferences.
          </p>

        </div>

      </div>


      <div class="panel">

        <h2>
          Security
        </h2>

        <p class="muted">
          This test account stores its data locally in your browser.
          Do not use real passwords or sensitive financial information.
        </p>

        <button
          class="btn danger"
          onclick="logout()"
        >
          Sign Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

const storageKey =
  "nexoraAccount";


function acct(){

  try{

    return JSON.parse(
      localStorage.getItem(storageKey) || "null"
    );

  }catch(error){

    return null;

  }

}


function save(account){

  localStorage.setItem(
    storageKey,
    JSON.stringify(account)
  );

}


function showMessage(id,text,success){

  const element =
    document.getElementById(id);

  element.textContent =
    text;

  element.className =
    "msg " +
    (success ? "ok" : "err");

}


function toggleAuth(){

  document
    .getElementById("loginBox")
    .classList
    .toggle("hidden");

  document
    .getElementById("signupBox")
    .classList
    .toggle("hidden");

  document
    .getElementById("authMsg")
    .textContent =
    "";

}


function signup(){

  const name =
    document
      .getElementById("sn")
      .value
      .trim();

  const email =
    document
      .getElementById("se")
      .value
      .trim();

  const password =
    document
      .getElementById("sp")
      .value;


  if(
    !name ||
    !email ||
    !password
  ){

    showMessage(
      "authMsg",
      "Please complete all fields.",
      false
    );

    return;

  }


  if(password.length < 6){

    showMessage(
      "authMsg",
      "Password must contain at least 6 characters.",
      false
    );

    return;

  }


  const account = {

    name:name,

    email:email,

    password:password,

    balance:0,

    pin:"",

    projects:[],

    transactions:[],

    pending:[]

  };


  save(account);


  localStorage.setItem(
    "nexoraLoggedIn",
    "1"
  );


  openDashboard();

}


function login(){

  const account =
    acct();


  if(!account){

    showMessage(
      "authMsg",
      "No account found. Create an account first.",
      false
    );

    return;

  }


  const email =
    document
      .getElementById("le")
      .value
      .trim();

  const password =
    document
      .getElementById("lp")
      .value;


  if(
    email !== account.email ||
    password !== account.password
  ){

    showMessage(
      "authMsg",
      "Incorrect email or password.",
      false
    );

    return;

  }


  localStorage.setItem(
    "nexoraLoggedIn",
    "1"
  );


  openDashboard();

}


function openDashboard(){

  const account =
    acct();


  if(!account){
    return;
  }


  document
    .getElementById("auth")
    .classList
    .add("hidden");


  document
    .getElementById("app")
    .classList
    .remove("hidden");


  document
    .getElementById("welcome")
    .textContent =
    "Welcome, " +
    account.name +
    " 👋";


  document
    .getElementById("pn")
    .value =
    account.name;


  document
    .getElementById("pe")
    .value =
    account.email;


  render();

}


function logout(){

  localStorage.removeItem(
    "nexoraLoggedIn"
  );


  document
    .getElementById("app")
    .classList
    .add("hidden");


  document
    .getElementById("auth")
    .classList
    .remove("hidden");

}


function page(id,button){

  document
    .querySelectorAll(".page")
    .forEach(function(section){

      section.classList.remove(
        "active"
      );

    });


  document
    .getElementById(id)
    .classList
    .add("active");


  document
    .querySelectorAll(".nav")
    .forEach(function(nav){

      nav.classList.remove(
        "active"
      );

    });


  button.classList.add(
    "active"
  );


  render();

}


function money(value){

  return "$" +
    Number(value || 0)
      .toFixed(2);

}


function render(){

  const account =
    acct();


  if(!account){
    return;
  }


  if(!Array.isArray(account.projects)){
    account.projects = [];
  }


  if(!Array.isArray(account.transactions)){
    account.transactions = [];
  }


  if(!Array.isArray(account.pending)){
    account.pending = [];
  }


  const pendingTotal =
    account.pending.reduce(
      function(total,item){

        return total +
          Number(item.amount || 0);

      },
      0
    );


  document
    .getElementById("b1")
    .textContent =
    money(account.balance);


  document
    .getElementById("b2")
    .textContent =
    money(account.balance);


  document
    .getElementById("wb")
    .textContent =
    money(account.balance);


  document
    .getElementById("pv")
    .textContent =
    money(account.balance);


  document
    .getElementById("pendingValue")
    .textContent =
    money(pendingTotal);


  document
    .getElementById("pc")
    .textContent =
    account.projects.length;


  document
    .getElementById("snapshot")
    .textContent =
    account.transactions.length
      ? "Your account has " +
        account.transactions.length +
        " recorded transaction(s)."
      : "Your simulated account is ready.";


  renderTransactions();

  renderPending();

  renderProjects();

}


function deposit(){

  const account =
    acct();


  const input =
    document.getElementById("da");


  const amount =
    Number(input.value);


  if(!account){

    showMessage(
      "dm",
      "Please sign in first.",
      false
    );

    return;

  }


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    showMessage(
      "dm",
      "Enter a valid amount.",
      false
    );

    return;

  }


  account.balance =
    Number(account.balance || 0) +
    amount;


  if(!Array.isArray(account.transactions)){

    account.transactions = [];

  }


  account.transactions.unshift({

    type:"Deposit",

    amount:amount,

    status:"Completed",

    date:new Date()
      .toLocaleString()

  });


  save(account);


  input.value =
    "";


  showMessage(
    "dm",
    money(amount) +
    " was added to your simulated balance.",
    true
  );


  render();

}


function setPin(){

  const account =
    acct();


  const input =
    document.getElementById("np");


  const pin =
    input.value.trim();


  if(
    !/^[0-9]{4,6}$/.test(pin)
  ){

    showMessage(
      "pm",
      "PIN must contain 4–6 digits.",
      false
    );

    return;

  }


  account.pin =
    pin;


  save(account);


  input.value =
    "";


  showMessage(
    "pm",
    "Withdrawal PIN saved.",
    true
  );

}


function withdraw(){

  const account =
    acct();


  const amount =
    Number(
      document
        .getElementById("wa")
        .value
    );


  const pin =
    document
      .getElementById("wp")
      .value
      .trim();


  if(
    !Number.isFinite(amount) ||
    amount <= 0
  ){

    showMessage(
      "wm",
      "Enter a valid amount.",
      false
    );

    return;

  }


  if(!account.pin){

    showMessage(
      "wm",
      "Set a withdrawal PIN first.",
      false
    );

    return;

  }


  if(pin !== account.pin){

    showMessage(
      "wm",
      "Incorrect withdrawal PIN.",
      false
    );

    return;

  }


  if(
    amount >
    Number(account.balance || 0)
  ){

    showMessage(
      "wm",
      "Insufficient balance.",
      false
    );

    return;

  }


  if(!Array.isArray(account.pending)){

    account.pending = [];

  }


  if(!Array.isArray(account.transactions)){

    account.transactions = [];

  }


  account.balance =
    Number(account.balance || 0) -
    amount;


  const withdrawal = {

    id:Date.now(),

    type:"Withdrawal",

    amount:amount,

    status:"Pending",

    date:new Date()
      .toLocaleString()

  };


  account.pending.unshift(
    withdrawal
  );


  account.transactions.unshift(
    withdrawal
  );


  save(account);


  document
    .getElementById("wa")
    .value =
    "";


  document
    .getElementById("wp")
    .value =
    "";


  showMessage(
    "wm",
    "Withdrawal request submitted and marked pending.",
    true
  );


  render();

}


function renderPending(){

  const account =
    acct();


  const list =
    document
      .getElementById("pendingList");


  list.innerHTML =
    "";


  if(
    !account ||
    !account.pending ||
    account.pending.length === 0
  ){

    list.textContent =
      "No pending withdrawals.";

    return;

  }


  account.pending.forEach(
    function(item){

      const div =
        document.createElement(
          "div"
        );


      div.className =
        "listitem";


      div.textContent =
        "Withdrawal: " +
        money(item.amount) +
        " — Pending — " +
        item.date;


      list.appendChild(
        div
      );

    }
  );

}


function renderTransactions(){

  const account =
    acct();


  const list =
    document.getElementById("tx");


  list.innerHTML =
    "";


  if(
    !account ||
    !account.transactions ||
    account.transactions.length === 0
  ){

    list.textContent =
      "No transactions yet.";

    return;

  }


  const table =
    document.createElement(
      "table"
    );


  table.innerHTML =
    "<thead>" +
    "<tr>" +
    "<th>Type</th>" +
    "<th>Amount</th>" +
    "<th>Status</th>" +
    "<th>Date</th>" +
    "</tr>" +
    "</thead>";


  const tbody =
    document.createElement(
      "tbody"
    );


  account.transactions.forEach(
    function(item){

      const row =
        document.createElement(
          "tr"
        );


      const type =
        document.createElement(
          "td"
        );


      type.textContent =
        item.type;


      const amount =
        document.createElement(
          "td"
        );


      amount.textContent =
        money(item.amount);


      const status =
        document.createElement(
          "td"
        );


      const badge =
        document.createElement(
          "span"
        );


      badge.className =
        "badge " +
        (
          item.status === "Pending"
            ? "pending"
            : ""
        );


      badge.textContent =
        item.status;


      status.appendChild(
        badge
      );


      const date =
        document.createElement(
          "td"
        );


      date.textContent =
        item.date;


      row.appendChild(type);

      row.appendChild(amount);

      row.appendChild(status);

      row.appendChild(date);


      tbody.appendChild(row);

    }
  );


  table.appendChild(
    tbody
  );


  list.appendChild(
    table
  );

}


function addProject(){

  const account =
    acct();


  const input =
    document.getElementById(
      "project"
    );


  const name =
    input.value.trim();


  if(!name){
    return;
  }


  if(!Array.isArray(account.projects)){

    account.projects = [];

  }


  account.projects.push(
    name
  );


  save(account);


  input.value =
    "";


  render();

}


function renderProjects(){

  const account =
    acct();


  const list =
    document.getElementById(
      "projectsList"
    );


  list.innerHTML =
    "";


  if(
    !account ||
    !account.projects
  ){

    return;

  }


  account.projects.forEach(
    function(project,index){

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "listitem";


      item.textContent =
        project + " ";


      const button =
        document.createElement(
          "button"
        );


      button.className =
        "btn danger";


      button.style.float =
        "right";


      button.textContent =
        "Delete";


      button.onclick =
        function(){

          account.projects.splice(
            index,
            1
          );


          save(account);

          render();

        };


      item.appendChild(
        button
      );


      list.appendChild(
        item
      );

    }
  );

}


function saveProfile(){

  const account =
    acct();


  const name =
    document
      .getElementById("pn")
      .value
      .trim();


  if(!name){

    showMessage(
      "profMsg",
      "Please enter your name.",
      false
    );

    return;

  }


  account.name =
    name;


  save(account);


  document
    .getElementById("welcome")
    .textContent =
    "Welcome, " +
    name +
    " 👋";


  showMessage(
    "profMsg",
    "Profile saved successfully.",
    true
  );

}


if(
  localStorage.getItem(
    "nexoraLoggedIn"
  ) === "1"
){

  openDashboard();

}

</script>

</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }
};
