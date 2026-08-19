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

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

/* AUTH */

#auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #0f172a;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 32px;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0,0,0,.25);
}

.auth-logo {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
}

.auth-subtitle {
  text-align: center;
  color: #64748b;
  margin: 8px 0 25px;
}

.auth-card input {
  width: 100%;
  padding: 13px;
  margin: 7px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.auth-button {
  width: 100%;
  margin-top: 12px;
  padding: 13px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: bold;
}

.auth-switch {
  text-align: center;
  margin-top: 20px;
  color: #64748b;
}

.auth-switch button {
  border: 0;
  background: none;
  color: #2563eb;
  font-weight: bold;
}

.auth-message {
  min-height: 20px;
  margin-top: 12px;
  text-align: center;
  font-size: 14px;
}

/* TEST NOTICE */

.demo-banner {
  background: #fef3c7;
  color: #92400e;
  padding: 8px 15px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}

/* APP */

#app {
  display: none;
  min-height: 100vh;
}

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
  margin-bottom: 30px;
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
}

.nav:hover,
.nav.active {
  background: #2563eb;
  color: white;
}

.logout {
  margin-top: 20px;
  background: #dc2626;
  color: white;
}

.main {
  margin-left: 240px;
  width: calc(100% - 240px);
  padding: 0 35px 35px;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

.header {
  padding-top: 35px;
  margin-bottom: 25px;
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
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}

/* PANELS */

.panel {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-top: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,.05);
}

.panel input {
  width: 100%;
  max-width: 500px;
  padding: 13px;
  margin: 7px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.button {
  border: 0;
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 8px;
}

.button.danger {
  background: #dc2626;
}

.button.secondary {
  background: #475569;
}

.balance {
  font-size: 42px;
  font-weight: 800;
  margin-top: 10px;
}

.pending {
  background: #fef3c7;
  color: #92400e;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
}

.transaction {
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
}

.transaction:last-child {
  border-bottom: 0;
}

.deposit {
  color: #15803d;
}

.withdrawal {
  color: #dc2626;
}

.pending-text {
  color: #d97706;
}

/* MOBILE */

@media (max-width: 700px) {
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
    padding: 0 20px 25px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .balance {
    font-size: 34px;
  }
}
</style>
</head>

<body>

<!-- AUTH -->

<div id="auth">

  <div class="auth-card">

    <div class="auth-logo">NEXORA</div>

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
        type="button"
        onclick="login()"
      >
        Sign In
      </button>

      <div class="auth-switch">
        Don't have an account?
        <button
          type="button"
          onclick="showSignup()"
        >
          Create one
        </button>
      </div>

    </div>

    <div id="signupForm" style="display:none">

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
        type="button"
        onclick="signup()"
      >
        Create Account
      </button>

      <div class="auth-switch">
        Already have an account?
        <button
          type="button"
          onclick="showLogin()"
        >
          Sign in
        </button>
      </div>

    </div>

    <div id="authMessage" class="auth-message"></div>

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
      type="button"
      onclick="showPage('dashboard', this)"
    >
      🏠 Dashboard
    </button>

    <button
      class="nav"
      type="button"
      onclick="showPage('wallet', this)"
    >
      💰 Wallet
    </button>

    <button
      class="nav"
      type="button"
      onclick="showPage('transactions', this)"
    >
      📋 Transactions
    </button>

    <button
      class="nav"
      type="button"
      onclick="showPage('profile', this)"
    >
      👤 Profile
    </button>

    <button
      class="nav"
      type="button"
      onclick="showPage('projects', this)"
    >
      📁 Projects
    </button>

    <button
      class="nav"
      type="button"
      onclick="showPage('settings', this)"
    >
      ⚙️ Settings
    </button>

    <button
      class="nav logout"
      type="button"
      onclick="logout()"
    >
      🚪 Logout
    </button>

  </aside>


  <main class="main">

    <div class="demo-banner">
      Test environment — transactions use simulated funds.
    </div>


    <!-- DASHBOARD -->

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

        <h2>Nexora is online 🚀</h2>

        <p id="dashboardMessage">
          Welcome to your dashboard.
        </p>

      </div>

    </section>


    <!-- WALLET -->

    <section id="wallet" class="page">

      <div class="header">

        <h1>Wallet</h1>

        <p>
          Wallet management.
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

        <h2>Deposit</h2>

        <p>
          Add simulated funds to your balance.
        </p>

        <input
          id="depositAmount"
          type="number"
          min="1"
          step="0.01"
          placeholder="Amount"
        >

        <br>

        <button
          class="button"
          type="button"
          onclick="deposit()"
        >
          Deposit
        </button>

        <p id="depositMessage"></p>

      </div>


      <!-- WITHDRAWAL -->

      <div class="panel">

        <h2>Withdrawal</h2>

        <p>
          Withdrawals use simulated funds and require
          your withdrawal PIN. Requests are placed into
          pending status.
        </p>

        <input
          id="withdrawAmount"
          type="number"
          min="1"
          step="0.01"
          placeholder="Amount"
        >

        <br>

        <input
          id="withdrawPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="Withdrawal PIN"
        >

        <br>

        <button
          class="button"
          type="button"
          onclick="withdraw()"
        >
          Request Withdrawal
        </button>

        <p id="withdrawMessage"></p>

      </div>


      <!-- PIN -->

      <div class="panel">

        <h2>Withdrawal PIN</h2>

        <p>
          Set a PIN for withdrawal requests.
        </p>

        <input
          id="newPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="4–6 digit PIN"
        >

        <br>

        <button
          class="button secondary"
          type="button"
          onclick="setWithdrawalPin()"
        >
          Set PIN
        </button>

        <p id="pinMessage"></p>

      </div>


      <!-- PENDING -->

      <div class="panel">

        <h2>Pending Withdrawals</h2>

        <div id="pendingList">
          No pending withdrawals.
        </div>

      </div>

    </section>


    <!-- TRANSACTIONS -->

    <section id="transactions" class="page">

      <div class="header">

        <h1>Transactions</h1>

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

    <section id="profile" class="page">

      <div class="header">

        <h1>Profile</h1>

        <p>
          Manage your profile.
        </p>

      </div>

      <div class="panel">

        <input
          id="profileName"
          placeholder="Your name"
        >

        <br>

        <input
          id="profileEmail"
          disabled
          placeholder="Email"
        >

        <br>

        <button
          class="button"
          type="button"
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
          Create and manage projects.
        </p>

      </div>

      <div class="panel">

        <input
          id="projectInput"
          placeholder="Project name"
        >

        <br>

        <button
          class="button"
          type="button"
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
          Account settings.
        </p>

      </div>

      <div class="panel">

        <h2>Account</h2>

        <p>
          This account is currently operating in a
          test environment using simulated funds.
        </p>

        <button
          class="button danger"
          type="button"
          onclick="logout()"
        >
          Log Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

function getAccount() {

  const data =
    localStorage.getItem("nexoraAccount");

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Account data error:", error);
    return null;
  }

}


function saveAccount(account) {

  localStorage.setItem(
    "nexoraAccount",
    JSON.stringify(account)
  );

}


function showSignup() {

  document.getElementById("loginForm").style.display =
    "none";

  document.getElementById("signupForm").style.display =
    "block";

  document.getElementById("authMessage").textContent =
    "";

}


function showLogin() {

  document.getElementById("loginForm").style.display =
    "block";

  document.getElementById("signupForm").style.display =
    "none";

  document.getElementById("authMessage").textContent =
    "";

}


function signup() {

  const name =
    document.getElementById("signupName").value.trim();

  const email =
    document.getElementById("signupEmail").value.trim();

  const password =
    document.getElementById("signupPassword").value;

  const message =
    document.getElementById("authMessage");


  if (!name || !email || !password) {

    message.textContent =
      "Please complete all fields.";

    return;

  }


  if (password.length < 6) {

    message.textContent =
      "Password must contain at least 6 characters.";

    return;

  }


  const existingAccount =
    getAccount();


  if (existingAccount) {

    message.textContent =
      "An account already exists on this browser. Sign in instead.";

    return;

  }


  const account = {

    name: name,

    email: email,

    password: password,

    balance: 0,

    withdrawalPin: "",

    projects: [],

    transactions: [],

    pendingWithdrawals: []

  };


  saveAccount(account);


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function login() {

  const email =
    document.getElementById("loginEmail").value.trim();

  const password =
    document.getElementById("loginPassword").value;

  const account =
    getAccount();

  const message =
    document.getElementById("authMessage");


  if (!account) {

    message.textContent =
      "No account found. Create an account first.";

    return;

  }


  if (
    email !== account.email ||
    password !== account.password
  ) {

    message.textContent =
      "Incorrect email or password.";

    return;

  }


  localStorage.setItem(
    "nexoraLoggedIn",
    "true"
  );


  openDashboard();

}


function openDashboard() {

  const account =
    getAccount();


  if (!account) {
    return;
  }


  document.getElementById("auth").style.display =
    "none";

  document.getElementById("app").style.display =
    "flex";


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


function logout() {

  localStorage.removeItem(
    "nexoraLoggedIn"
  );


  document.getElementById("app").style.display =
    "none";

  document.getElementById("auth").style.display =
    "flex";

  showLogin();

}


function showPage(page, button) {

  document.querySelectorAll(".page")
    .forEach(function(section) {

      section.classList.remove("active");

    });


  const selectedPage =
    document.getElementById(page);


  if (selectedPage) {

    selectedPage.classList.add("active");

  }


  document.querySelectorAll(".nav")
    .forEach(function(nav) {

      nav.classList.remove("active");

    });


  if (button) {
    button.classList.add("active");
  }


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

}


function updateBalance() {

  const account =
    getAccount();


  if (!account) {
    return;
  }


  const balance =
    Number(account.balance || 0);


  const formatted =
    "$" + balance.toFixed(2);


  const walletBalance =
    document.getElementById("walletBalance");


  const dashboardBalance =
    document.getElementById("dashboardBalance");


  if (walletBalance) {

    walletBalance.textContent =
      formatted;

  }


  if (dashboardBalance) {

    dashboardBalance.textContent =
      formatted;

  }

}


/* DEPOSIT */

function deposit() {

  const account =
    getAccount();

  const input =
    document.getElementById("depositAmount");

  const message =
    document.getElementById("depositMessage");


  if (!account) {

    message.textContent =
      "Please sign in first.";

    return;

  }


  if (!input || !message) {
    return;
  }


  const amount =
    Number(input.value);


  if (
    !Number.isFinite(amount) ||
    amount <= 0
  ) {

    message.textContent =
      "Enter a valid amount.";

    return;

  }


  if (!Array.isArray(account.transactions)) {

    account.transactions = [];

  }


  if (!Array.isArray(account.pendingWithdrawals)) {

    account.pendingWithdrawals = [];

  }


  const currentBalance =
    Number(account.balance);


  if (!Number.isFinite(currentBalance)) {

    account.balance = 0;

  }


  /*
    Add simulated funds to the balance.
  */

  account.balance =
    Number(account.balance || 0) + amount;


  /*
    Record the simulated deposit.
  */

  account.transactions.unshift({

    id:
      Date.now(),

    type:
      "Deposit",

    amount:
      amount,

    status:
      "Completed",

    date:
      new Date().toLocaleString()

  });


  /*
    Save the updated account.
  */

  saveAccount(account);


  /*
    Clear the input.
  */

  input.value = "";


  /*
    Update the interface.
  */

  updateBalance();

  renderTransactions();


  /*
    Show confirmation.
  */

  message.textContent =
    "$" +
    amount.toFixed(2) +
    " added to your simulated balance successfully.";

}


/* WITHDRAWAL PIN */

function setWithdrawalPin() {

  const account =
    getAccount();

  const input =
    document.getElementById("newPin");

  const message =
    document.getElementById("pinMessage");


  if (!account) {

    message.textContent =
      "Please sign in first.";

    return;

  }


  const pin =
    input.value.trim();


  if (!/^[0-9]{4,6}$/.test(pin)) {

    message.textContent =
      "PIN must contain 4–6 digits.";

    return;

  }


  account.withdrawalPin =
    pin;


  saveAccount(account);


  input.value = "";


  message.textContent =
    "Withdrawal PIN saved successfully ✅";

}


/* WITHDRAWAL */

function withdraw() {

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


  if (!account) {

    message.textContent =
      "Please sign in first.";

    return;

  }


  if (
    !Number.isFinite(amount) ||
    amount <= 0
  ) {

    message.textContent =
      "Enter a valid withdrawal amount.";

    return;

  }


  if (!account.withdrawalPin) {

    message.textContent =
      "Set a withdrawal PIN first.";

    return;

  }


  if (pin !== account.withdrawalPin) {

    message.textContent =
      "Incorrect withdrawal PIN.";

    return;

  }


  if (
    amount >
    Number(account.balance || 0)
  ) {

    message.textContent =
      "Insufficient balance.";

    return;

  }


  if (!Array.isArray(account.pendingWithdrawals)) {

    account.pendingWithdrawals = [];

  }


  if (!Array.isArray(account.transactions)) {

    account.transactions = [];

  }


  /*
    Reserve the simulated amount.
  */

  account.balance =
    Number(account.balance || 0) - amount;


  const withdrawal = {

    id:
      Date.now(),

    type:
      "Withdrawal",

    amount:
      amount,

    status:
      "Pending",

    date:
      new Date().toLocaleString()

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
    "Withdrawal submitted and is now pending ⏳";


  updateBalance();

  renderTransactions();

  renderPendingWithdrawals();

}


/* PENDING WITHDRAWALS */

function renderPendingWithdrawals() {

  const account =
    getAccount();


  const list =
    document.getElementById("pendingList");


  if (!list) {
    return;
  }


  list.innerHTML = "";


  if (
    !account ||
    !Array.isArray(account.pendingWithdrawals) ||
    account.pendingWithdrawals.length === 0
  ) {

    list.textContent =
      "No pending withdrawals.";

    return;

  }


  account.pendingWithdrawals.forEach(
    function(item) {

      const div =
        document.createElement("div");


      div.className =
        "pending";


      div.innerHTML =
        "<strong>Withdrawal: $" +
        Number(item.amount).toFixed(2) +
        "</strong><br>" +
        "Status: Pending<br>" +
        "<small>" +
        escapeHtml(item.date) +
        "</small>";


      list.appendChild(div);

    }
  );

}


/* TRANSACTIONS */

function renderTransactions() {

  const account =
    getAccount();


  const list =
    document.getElementById("transactionList");


  if (!list) {
    return;
  }


  list.innerHTML = "";


  if (
    !account ||
    !Array.isArray(account.transactions) ||
    account.transactions.length === 0
  ) {

    list.textContent =
      "No transactions yet.";

    return;

  }


  account.transactions.forEach(
    function(item) {

      const div =
        document.createElement("div");


      div.className =
        "transaction";


      const typeClass =
        item.type === "Deposit"
          ? "deposit"
          : "withdrawal";


      const statusClass =
        item.status === "Pending"
          ? "pending-text"
          : "";


      div.innerHTML =
        "<strong class='" +
        typeClass +
        "'>" +
        escapeHtml(item.type) +
        "</strong>" +
        "<br>" +
        "$" +
        Number(item.amount).toFixed(2) +
        " — " +
        "<span class='" +
        statusClass +
        "'>" +
        escapeHtml(item.status) +
        "</span>" +
        "<br>" +
        "<small>" +
        escapeHtml(item.date) +
        "</small>";


      list.appendChild(div);

    }
  );

}


/* PROFILE */

function saveProfile() {

  const account =
    getAccount();


  const name =
    document.getElementById("profileName")
      .value
      .trim();


  const message =
    document.getElementById("profileMessage");


  if (!account) {

    message.textContent =
      "Please sign in first.";

    return;

  }


  if (!name) {

    message.textContent =
      "Please enter your name.";

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
    "Profile saved successfully ✅";

}


/* PROJECTS */

function addProject() {

  const account =
    getAccount();


  const input =
    document.getElementById("projectInput");


  const name =
    input.value.trim();


  if (!account || !name) {
    return;
  }


  if (!Array.isArray(account.projects)) {

    account.projects = [];

  }


  account.projects.push(name);


  saveAccount(account);


  input.value = "";


  renderProjects();

}


function renderProjects() {

  const account =
    getAccount();


  const list =
    document.getElementById("projectList");


  if (!list) {
    return;
  }


  list.innerHTML = "";


  if (
    !account ||
    !Array.isArray(account.projects)
  ) {

    document.getElementById("projectCount").textContent =
      "0";

    return;

  }


  account.projects.forEach(
    function(project, index) {

      const item =
        document.createElement("div");


      item.style.padding =
        "15px 0";


      item.style.borderBottom =
        "1px solid #e5e7eb";


      item.innerHTML =
        "<strong>" +
        escapeHtml(project) +
        "</strong>" +
        "<br>" +
        '<button class="button danger" type="button" onclick="deleteProject(' +
        index +
        ')">Delete</button>';


      list.appendChild(item);

    }
  );


  document.getElementById("projectCount").textContent =
    account.projects.length;

}


function deleteProject(index) {

  const account =
    getAccount();


  if (
    !account ||
    !Array.isArray(account.projects)
  ) {

    return;

  }


  account.projects.splice(
    index,
    1
  );


  saveAccount(account);


  renderProjects();

}


/* SECURITY HELPER */

function escapeHtml(value) {

  const div =
    document.createElement("div");


  div.textContent =
    String(value);


  return div.innerHTML;

}


/* AUTO LOGIN */

if (
  localStorage.getItem("nexoraLoggedIn") === "true"
) {

  openDashboard();

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