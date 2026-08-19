export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nexora</title>

<style>
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#f4f6f8;
  color:#111827
}
button,input{font:inherit}
button{cursor:pointer}

#login{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:#0f172a
}

.box{
  width:100%;
  max-width:400px;
  background:white;
  padding:30px;
  border-radius:16px;
  box-shadow:0 20px 50px #0004
}

.logo{
  text-align:center;
  font-size:30px;
  font-weight:800;
  margin-bottom:8px
}

.sub{
  text-align:center;
  color:#64748b;
  margin-bottom:25px
}

input{
  width:100%;
  padding:13px;
  border:1px solid #d1d5db;
  border-radius:8px;
  margin:6px 0
}

button{
  border:0;
  border-radius:8px;
  padding:12px 18px;
  background:#2563eb;
  color:white;
  font-weight:bold
}

.full{
  width:100%;
  margin-top:10px
}

.link{
  background:none;
  color:#2563eb;
  padding:0
}

#app{
  display:none;
  min-height:100vh
}

.sidebar{
  position:fixed;
  left:0;
  top:0;
  width:230px;
  height:100vh;
  padding:25px 15px;
  background:#111827;
  color:white
}

.brand{
  font-size:25px;
  font-weight:800;
  margin-bottom:30px
}

.nav{
  width:100%;
  text-align:left;
  margin:4px 0;
  background:transparent;
  color:#cbd5e1
}

.nav.active,.nav:hover{
  background:#2563eb;
  color:white
}

.logout{
  background:#dc2626;
  color:white;
  margin-top:20px
}

main{
  margin-left:230px;
  padding:0 30px 40px
}

.notice{
  background:#fef3c7;
  color:#92400e;
  padding:9px;
  text-align:center;
  font-size:12px;
  font-weight:bold;
  margin:0 -30px
}

.page{display:none}
.page.active{display:block}

header{
  padding-top:30px;
  margin-bottom:25px
}

header h1{
  margin:0;
  font-size:32px
}

.muted{color:#64748b}

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px
}

.card,.panel{
  background:white;
  border-radius:14px;
  padding:22px;
  margin-top:18px;
  box-shadow:0 4px 18px #0000000d
}

.card-title{
  color:#64748b;
  font-size:14px
}

.amount{
  font-size:32px;
  font-weight:800;
  margin-top:8px
}

.wallet{
  font-size:42px;
  font-weight:800
}

.success{color:#15803d;font-weight:bold}
.error{color:#dc2626;font-weight:bold}

.tx{
  padding:14px 0;
  border-bottom:1px solid #e5e7eb
}

.pending{
  padding:12px;
  margin-top:10px;
  border-radius:8px;
  background:#fef3c7;
  color:#92400e
}

@media(max-width:700px){
  .sidebar{
    position:relative;
    width:100%;
    height:auto
  }

  main{
    margin-left:0;
    padding:0 18px 30px
  }

  .notice{
    margin:0 -18px
  }

  .cards{
    grid-template-columns:1fr
  }

  .wallet{
    font-size:34px
  }
}
</style>
</head>

<body>

<div id="login">

  <div class="box">

    <div class="logo">NEXORA</div>

    <div class="sub">Account</div>

    <div id="loginForm">

      <input id="email" type="email" placeholder="Email">

      <input id="password" type="password" placeholder="Password">

      <button class="full" onclick="login()">Sign In</button>

      <p style="text-align:center">
        Don't have an account?
        <button class="link" onclick="showSignup()">Create one</button>
      </p>

    </div>

    <div id="signupForm" style="display:none">

      <input id="name" placeholder="Full name">

      <input id="newEmail" type="email" placeholder="Email">

      <input id="newPassword" type="password" placeholder="Password">

      <button class="full" onclick="signup()">Create Account</button>

      <p style="text-align:center">
        Already have an account?
        <button class="link" onclick="showLogin()">Sign in</button>
      </p>

    </div>

    <div id="authMessage"></div>

  </div>

</div>


<div id="app">

  <aside class="sidebar">

    <div class="brand">NEXORA</div>

    <button class="nav active" onclick="page('dashboard',this)">
      🏠 Dashboard
    </button>

    <button class="nav" onclick="page('wallet',this)">
      💰 Wallet
    </button>

    <button class="nav" onclick="page('transactions',this)">
      📋 Transactions
    </button>

    <button class="nav" onclick="page('profile',this)">
      👤 Profile
    </button>

    <button class="nav" onclick="page('projects',this)">
      📁 Projects
    </button>

    <button class="nav" onclick="page('settings',this)">
      ⚙️ Settings
    </button>

    <button class="nav logout" onclick="logout()">
      🚪 Logout
    </button>

  </aside>


  <main>

    <div class="notice">
      Test environment — all wallet activity uses simulated funds.
    </div>


    <section id="dashboard" class="page active">

      <header>
        <h1 id="welcome">Welcome to Nexora</h1>
        <p class="muted">Your account overview.</p>
      </header>

      <div class="cards">

        <div class="card">
          <div class="card-title">Available Balance</div>
          <div class="amount" id="dashBalance">$0.00</div>
        </div>

        <div class="card">
          <div class="card-title">Projects</div>
          <div class="amount" id="count">0</div>
        </div>

        <div class="card">
          <div class="card-title">Account</div>
          <div class="amount">Active</div>
        </div>

      </div>

      <div class="panel">
        <h2>Nexora is online 🚀</h2>
        <p id="dashMessage">Welcome to your dashboard.</p>
      </div>

    </section>


    <section id="wallet" class="page">

      <header>
        <h1>Wallet</h1>
        <p class="muted">Manage your simulated wallet.</p>
      </header>

      <div class="panel">

        <div class="card-title">Available Balance</div>

        <div class="wallet" id="balance">$0.00</div>

      </div>


      <div class="panel">

        <h2>Deposit</h2>

        <p class="muted">
          Add simulated funds to your test balance.
        </p>

        <input
          id="deposit"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
        >

        <br>

        <button onclick="depositFunds()">
          Deposit
        </button>

        <p id="depositMsg"></p>

      </div>


      <div class="panel">

        <h2>Withdrawal</h2>

        <p class="muted">
          Withdrawal requests are simulated and remain pending.
        </p>

        <input
          id="withdraw"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
        >

        <input
          id="pin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="Withdrawal PIN"
        >

        <button onclick="withdrawFunds()">
          Request Withdrawal
        </button>

        <p id="withdrawMsg"></p>

      </div>


      <div class="panel">

        <h2>Withdrawal PIN</h2>

        <input
          id="setPin"
          type="password"
          inputmode="numeric"
          maxlength="6"
          placeholder="4–6 digit PIN"
        >

        <button onclick="savePin()">
          Set PIN
        </button>

        <p id="pinMsg"></p>

      </div>


      <div class="panel">

        <h2>Pending Withdrawals</h2>

        <div id="pending">
          No pending withdrawals.
        </div>

      </div>

    </section>


    <section id="transactions" class="page">

      <header>
        <h1>Transactions</h1>
        <p class="muted">Your transaction history.</p>
      </header>

      <div class="panel" id="transactionsList">
        No transactions yet.
      </div>

    </section>


    <section id="profile" class="page">

      <header>
        <h1>Profile</h1>
        <p class="muted">Manage your profile.</p>
      </header>

      <div class="panel">

        <input id="profileName" placeholder="Your name">

        <input id="profileEmail" disabled>

        <button onclick="saveProfile()">
          Save Profile
        </button>

        <p id="profileMsg"></p>

      </div>

    </section>


    <section id="projects" class="page">

      <header>
        <h1>Projects</h1>
        <p class="muted">Create and manage projects.</p>
      </header>

      <div class="panel">

        <input id="project" placeholder="Project name">

        <button onclick="addProject()">
          Add Project
        </button>

        <div id="projects"></div>

      </div>

    </section>


    <section id="settings" class="page">

      <header>
        <h1>Settings</h1>
        <p class="muted">Account settings.</p>
      </header>

      <div class="panel">

        <h2>Account</h2>

        <p class="muted">
          This is a test environment using simulated funds.
        </p>

        <button class="logout" onclick="logout()">
          Log Out
        </button>

      </div>

    </section>

  </main>

</div>


<script>

function account(){

  const value=localStorage.getItem("nexora");

  if(!value)return null;

  try{
    return JSON.parse(value);
  }catch(e){
    return null;
  }
}


function save(a){
  localStorage.setItem("nexora",JSON.stringify(a));
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

  const name=document.getElementById("name").value.trim();

  const email=document.getElementById("newEmail").value.trim();

  const password=document.getElementById("newPassword").value;

  const msg=document.getElementById("authMessage");


  if(!name||!email||!password){

    msg.textContent="Please complete all fields.";
    msg.className="error";
    return;
  }


  if(password.length<6){

    msg.textContent="Password must contain at least 6 characters.";
    msg.className="error";
    return;
  }


  const a={
    name:name,
    email:email,
    password:password,
    balance:0,
    pin:"",
    projects:[],
    transactions:[],
    pending:[]
  };


  save(a);

  localStorage.setItem("logged","yes");

  open();

}


function login(){

  const a=account();

  const email=document.getElementById("email").value.trim();

  const password=document.getElementById("password").value;

  const msg=document.getElementById("authMessage");


  if(!a){

    msg.textContent="No account found. Create an account first.";
    msg.className="error";
    return;
  }


  if(email!==a.email||password!==a.password){

    msg.textContent="Incorrect email or password.";
    msg.className="error";
    return;
  }


  localStorage.setItem("logged","yes");

  open();

}


function open(){

  const a=account();

  if(!a)return;


  document.getElementById("login").style.display="none";

  document.getElementById("app").style.display="block";


  document.getElementById("welcome").textContent=
    "Welcome, "+a.name+" 👋";


  document.getElementById("dashMessage").textContent=
    "Welcome back, "+a.name+".";


  document.getElementById("profileName").value=a.name;

  document.getElementById("profileEmail").value=a.email;


  refresh();

}


function logout(){

  localStorage.removeItem("logged");

  document.getElementById("app").style.display="none";

  document.getElementById("login").style.display="flex";

  showLogin();

}


function page(id,btn){

  document.querySelectorAll(".page").forEach(
    p=>p.classList.remove("active")
  );

  document.getElementById(id).classList.add("active");


  document.querySelectorAll(".nav").forEach(
    n=>n.classList.remove("active")
  );

  btn.classList.add("active");

  refresh();

}


function refresh(){

  const a=account();

  if(!a)return;


  const money=Number(a.balance||0).toFixed(2);

  document.getElementById("balance").textContent="$"+money;

  document.getElementById("dashBalance").textContent="$"+money;

  document.getElementById("count").textContent=
    Array.isArray(a.projects)?a.projects.length:0;


  renderTransactions();

  renderPending();

  renderProjects();

}


/* DEPOSIT */

function depositFunds(){

  const a=account();

  const input=document.getElementById("deposit");

  const msg=document.getElementById("depositMsg");

  if(!a){

    msg.textContent="Please sign in first.";
    msg.className="error";
    return;
  }


  const amount=Number(input.value);


  if(!Number.isFinite(amount)||amount<=0){

    msg.textContent="Enter a valid amount.";
    msg.className="error";
    return;
  }


  if(!Array.isArray(a.transactions))
    a.transactions=[];


  a.balance=Number(a.balance||0)+amount;


  a.transactions.unshift({

    type:"Deposit",
    amount:amount,
    status:"Completed",
    date:new Date().toLocaleString()

  });


  save(a);


  input.value="";


  msg.textContent=
    "$"+amount.toFixed(2)+" was added to your simulated balance.";

  msg.className="success";


  refresh();

}


/* PIN */

function savePin(){

  const a=account();

  const value=document.getElementById("setPin").value.trim();

  const msg=document.getElementById("pinMsg");


  if(!/^[0-9]{4,6}$/.test(value)){

    msg.textContent="PIN must contain 4–6 digits.";
    msg.className="error";
    return;
  }


  a.pin=value;

  save(a);


  document.getElementById("setPin").value="";

  msg.textContent="Withdrawal PIN saved.";
  msg.className="success";

}


/* WITHDRAW */

function withdrawFunds(){

  const a=account();

  const amount=Number(
    document.getElementById("withdraw").value
  );

  const pin=document.getElementById("pin").value.trim();

  const msg=document.getElementById("withdrawMsg");


  if(!Number.isFinite(amount)||amount<=0){

    msg.textContent="Enter a valid amount.";
    msg.className="error";
    return;
  }


  if(!a.pin){

    msg.textContent="Set a withdrawal PIN first.";
    msg.className="error";
    return;
  }


  if(pin!==a.pin){

    msg.textContent="Incorrect withdrawal PIN.";
    msg.className="error";
    return;
  }


  if(amount>Number(a.balance||0)){

    msg.textContent="Insufficient balance.";
    msg.className="error";
    return;
  }


  if(!Array.isArray(a.pending))
    a.pending=[];

  if(!Array.isArray(a.transactions))
    a.transactions=[];


  a.balance=Number(a.balance)-amount;


  const item={
    type:"Withdrawal",
    amount:amount,
    status:"Pending",
    date:new Date().toLocaleString()
  };


  a.pending.unshift(item);

  a.transactions.unshift(item);


  save(a);


  document.getElementById("withdraw").value="";

  document.getElementById("pin").value="";


  msg.textContent=
    "Withdrawal request submitted and marked pending.";

  msg.className="success";


  refresh();

}


function renderPending(){

  const a=account();

  const box=document.getElementById("pending");

  box.innerHTML="";


  if(!a||!a.pending||a.pending.length===0){

    box.textContent="No pending withdrawals.";
    return;
  }


  a.pending.forEach(item=>{

    const div=document.createElement("div");

    div.className="pending";

    div.textContent=
      "Withdrawal: $"+
      Number(item.amount).toFixed(2)+
      " — Pending — "+
      item.date;

    box.appendChild(div);

  });

}


function renderTransactions(){

  const a=account();

  const box=document.getElementById("transactionsList");

  box.innerHTML="";


  if(!a||!a.transactions||a.transactions.length===0){

    box.textContent="No transactions yet.";
    return;
  }


  a.transactions.forEach(item=>{

    const div=document.createElement("div");

    div.className="tx";


    const title=document.createElement("strong");

    title.textContent=item.type;


    const line=document.createElement("div");

    line.textContent=
      "$"+
      Number(item.amount).toFixed(2)+
      " — "+
      item.status;


    const date=document.createElement("small");

    date.textContent=item.date;


    div.appendChild(title);

    div.appendChild(document.createElement("br"));

    div.appendChild(line);

    div.appendChild(date);


    box.appendChild(div);

  });

}


/* PROFILE */

function saveProfile(){

  const a=account();

  const name=document.getElementById("profileName").value.trim();

  const msg=document.getElementById("profileMsg");


  if(!name){

    msg.textContent="Enter your name.";
    msg.className="error";
    return;
  }


  a.name=name;

  save(a);


  document.getElementById("welcome").textContent=
    "Welcome, "+name+" 👋";


  document.getElementById("dashMessage").textContent=
    "Welcome back, "+name+".";


  msg.textContent="Profile saved.";

  msg.className="success";

}


/* PROJECTS */

function addProject(){

  const a=account();

  const input=document.getElementById("project");

  const value=input.value.trim();


  if(!value)return;


  if(!Array.isArray(a.projects))
    a.projects=[];


  a.projects.push(value);

  save(a);

  input.value="";

  refresh();

}


function renderProjects(){

  const a=account();

  const box=document.getElementById("projects");

  box.innerHTML="";


  if(!a||!a.projects)return;


  a.projects.forEach((name,index)=>{

    const div=document.createElement("div");

    div.style.padding="12px 0";

    div.style.borderBottom="1px solid #e5e7eb";


    const text=document.createElement("strong");

    text.textContent=name;


    const br=document.createElement("br");


    const btn=document.createElement("button");

    btn.textContent="Delete";

    btn.style.background="#dc2626";

    btn.style.marginTop="7px";


    btn.onclick=function(){

      a.projects.splice(index,1);

      save(a);

      refresh();

    };


    div.appendChild(text);

    div.appendChild(br);

    div.appendChild(btn);

    box.appendChild(div);

  });

}


/* AUTO LOGIN */

if(localStorage.getItem("logged")==="yes"){
  open();
}

</script>

</body>
</html>`, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }
};