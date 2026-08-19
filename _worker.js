export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>NEXORA — Account Platform Demo</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#07111f;
  --bg2:#0b1728;
  --panel:rgba(17,29,48,.82);
  --panel2:rgba(22,38,61,.9);
  --line:rgba(255,255,255,.08);
  --text:#f8fafc;
  --muted:#8fa2ba;
  --blue:#4f8cff;
  --cyan:#38d9ff;
  --green:#32d583;
  --orange:#ffb547;
  --red:#ff5d73;
}

html,body{
  margin:0;
  min-height:100%;
  font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at 10% 0%,rgba(56,217,255,.13),transparent 28%),
    radial-gradient(circle at 90% 10%,rgba(79,140,255,.18),transparent 30%),
    radial-gradient(circle at 55% 90%,rgba(90,60,255,.10),transparent 35%),
    var(--bg);
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.2;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:48px 48px;
}

button,input{
  font:inherit;
}

button{cursor:pointer}

.hidden{display:none!important}

/* AUTH */

.auth{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:25px;
}

.auth-box{
  width:100%;
  max-width:440px;
  padding:38px;
  border:1px solid var(--line);
  border-radius:28px;
  background:rgba(10,23,39,.88);
  backdrop-filter:blur(25px);
  box-shadow:0 40px 100px rgba(0,0,0,.45);
}

.brand{
  font-size:28px;
  font-weight:900;
  letter-spacing:4px;
}

.brand span{color:var(--cyan)}

.auth-box h1{
  margin:45px 0 8px;
  font-size:30px;
}

.auth-box p{
  color:var(--muted);
}

.field{
  width:100%;
  margin:10px 0;
  padding:15px 16px;
  border-radius:12px;
  border:1px solid var(--line);
  background:#0c1b2d;
  color:white;
  outline:none;
}

.field:focus{
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(79,140,255,.12);
}

.btn{
  border:0;
  border-radius:12px;
  padding:14px 20px;
  font-weight:800;
  color:white;
  background:linear-gradient(135deg,#4f8cff,#3475ed);
  box-shadow:0 12px 30px rgba(79,140,255,.22);
}

.full{width:100%;margin-top:12px}

.switch{
  margin-top:20px;
  text-align:center;
  color:var(--muted);
  font-size:14px;
}

.switch button{
  border:0;
  background:none;
  color:var(--cyan);
  font-weight:800;
}

/* APP */

.app{
  min-height:100vh;
}

.topbar{
  height:76px;
  border-bottom:1px solid var(--line);
  background:rgba(7,17,31,.78);
  backdrop-filter:blur(18px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 42px;
  position:sticky;
  top:0;
  z-index:20;
}

.top-left{
  display:flex;
  align-items:center;
  gap:40px;
}

.logo{
  font-size:24px;
  font-weight:900;
  letter-spacing:3px;
}

.logo span{color:var(--cyan)}

.nav{
  display:flex;
  gap:6px;
}

.nav button{
  border:0;
  color:#91a4bd;
  background:transparent;
  padding:10px 13px;
  border-radius:9px;
}

.nav button:hover,
.nav button.active{
  color:white;
  background:rgba(79,140,255,.12);
}

.user-chip{
  display:flex;
  align-items:center;
  gap:10px;
  color:#dce7f5;
  font-size:14px;
}

.avatar{
  width:36px;
  height:36px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:linear-gradient(135deg,#4f8cff,#38d9ff);
  color:white;
  font-weight:900;
}

/* MAIN */

.main{
  max-width:1500px;
  margin:auto;
  padding:38px 42px 60px;
}

.demo{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:11px 16px;
  margin-bottom:28px;
  border:1px solid rgba(255,181,71,.18);
  border-radius:10px;
  background:rgba(255,181,71,.07);
  color:#ffc76d;
  font-size:12px;
}

.status{
  display:flex;
  align-items:center;
  gap:7px;
}

.dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
  box-shadow:0 0 12px var(--green);
}

.heading{
  display:flex;
  justify-content:space-between;
  align-items:end;
  margin-bottom:28px;
}

.heading h1{
  margin:0;
  font-size:38px;
  letter-spacing:-1px;
}

.heading p{
  color:var(--muted);
  margin:7px 0 0;
}

/* HERO GRID */

.hero-grid{
  display:grid;
  grid-template-columns:minmax(0,1.6fr) minmax(330px,.8fr);
  gap:22px;
}

.balance-card{
  position:relative;
  min-height:285px;
  padding:34px;
  overflow:hidden;
  border-radius:25px;
  border:1px solid rgba(96,165,250,.18);
  background:
    radial-gradient(circle at 85% 15%,rgba(56,217,255,.22),transparent 27%),
    linear-gradient(135deg,#10284a,#0b182b 70%);
  box-shadow:0 25px 70px rgba(0,0,0,.25);
}

.balance-card:after{
  content:"";
  position:absolute;
  width:250px;
  height:250px;
  border-radius:50%;
  right:-100px;
  bottom:-130px;
  border:1px solid rgba(56,217,255,.16);
  box-shadow:0 0 0 35px rgba(56,217,255,.025),
             0 0 0 70px rgba(56,217,255,.018);
}

.balance-label{
  color:#9db0c9;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:1.5px;
  font-weight:800;
}

.balance{
  margin:15px 0 28px;
  font-size:52px;
  font-weight:900;
  letter-spacing:-2px;
}

.balance small{
  font-size:18px;
  color:#91a8c4;
  font-weight:600;
}

.actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.action{
  border:1px solid rgba(255,255,255,.1);
  background:rgba(255,255,255,.06);
  color:white;
  padding:11px 17px;
  border-radius:10px;
  font-weight:700;
}

.action.primary{
  background:#4f8cff;
  border-color:#4f8cff;
}

/* PENDING */

.pending-card{
  padding:27px;
  border-radius:25px;
  border:1px solid rgba(255,181,71,.15);
  background:
    linear-gradient(145deg,rgba(35,31,23,.9),rgba(16,27,42,.92));
  box-shadow:0 25px 70px rgba(0,0,0,.2);
}

.card-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:22px;
}

.card-head h2{
  margin:0;
  font-size:17px;
}

.badge{
  padding:6px 9px;
  border-radius:20px;
  background:rgba(255,181,71,.12);
  color:#ffc76d;
  font-size:11px;
  font-weight:800;
}

.pending-item{
  padding:17px 0;
  border-top:1px solid var(--line);
}

.pending-row{
  display:flex;
  justify-content:space-between;
  gap:10px;
}

.pending-title{
  font-weight:800;
}

.pending-amount{
  color:#ffbf5b;
  font-weight:900;
}

.pending-meta{
  color:var(--muted);
  font-size:12px;
  margin-top:6px;
}

.empty{
  color:var(--muted);
  padding:18px 0;
  font-size:14px;
}

/* STAT GRID */

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
  margin-top:22px;
}

.stat{
  padding:23px;
  border:1px solid var(--line);
  background:var(--panel);
  border-radius:18px;
}

.stat-label{
  color:var(--muted);
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.8px;
}

.stat-value{
  margin-top:10px;
  font-size:24px;
  font-weight:850;
}

/* LOWER */

.lower{
  display:grid;
  grid-template-columns:1.35fr .65fr;
  gap:22px;
  margin-top:22px;
}

.panel{
  border:1px solid var(--line);
  background:var(--panel);
  border-radius:20px;
  padding:26px;
}

.panel h2{
  margin:0 0 20px;
  font-size:18px;
}

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 0;
  border-top:1px solid var(--line);
}

.transaction-left{
  display:flex;
  align-items:center;
  gap:12px;
}

.tx-icon{
  width:38px;
  height:38px;
  display:grid;
  place-items:center;
  border-radius:11px;
  background:rgba(79,140,255,.1);
}

.tx-title{font-weight:750}
.tx-date{font-size:12px;color:var(--muted);margin-top:3px}

.tx-amount{
  font-weight:900;
}

.green{color:var(--green)}
.orange{color:var(--orange)}

.profile-row{
  display:flex;
  justify-content:space-between;
  padding:13px 0;
  border-bottom:1px solid var(--line);
}

.profile-row:last-child{border-bottom:0}

.profile-row span:first-child{color:var(--muted)}

/* MODAL */

.modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.65);
  backdrop-filter:blur(8px);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:100;
  padding:20px;
}

.modal.show{display:flex}

.modal-box{
  width:100%;
  max-width:440px;
  padding:30px;
  border:1px solid var(--line);
  border-radius:22px;
  background:#0d1a2c;
  box-shadow:0 30px 100px rgba(0,0,0,.5);
}

.modal-box h2{margin-top:0}

.close{
  float:right;
  border:0;
  background:none;
  color:#94a3b8;
  font-size:22px;
}

/* RESPONSIVE */

@media(max-width:1100px){
  .hero-grid,
  .lower{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:repeat(2,1fr);
  }

  .nav{
    display:none;
  }
}

@media(max-width:700px){
  .topbar{
    padding:0 18px;
  }

  .main{
    padding:24px 18px 40px;
  }

  .heading{
    display:block;
  }

  .heading h1{
    font-size:30px;
  }

  .balance{
    font-size:39px;
  }

  .stats{
    grid-template-columns:1fr 1fr;
  }

  .demo{
    display:block;
  }
}

@media(max-width:480px){
  .auth-box{
    padding:27px;
  }

  .balance-card,
  .pending-card,
  .panel{
    padding:22px;
  }

  .stats{
    grid-template-columns:1fr;
  }
}
</style>
</head>

<body>

<!-- AUTH -->

<section id="auth" class="auth">

  <div class="auth-box">

    <div class="brand">NEX<span>ORA</span></div>

    <h1 id="authTitle">Create your account</h1>

    <p id="authSub">
      Set up your NEXORA demonstration account.
    </p>

    <form id="authForm">

      <input
        id="name"
        class="field"
        placeholder="Full name"
        required
      >

      <input
        id="email"
        class="field"
        type="email"
        placeholder="Email address"
        required
      >

      <input
        id="password"
        class="field"
        type="password"
        placeholder="Password"
        required
      >

      <button class="btn full" id="authBtn">
        Create account
      </button>

    </form>

    <div class="switch">
      <span id="switchText">Already have an account?</span>
      <button id="switchMode" type="button">Login</button>
    </div>

  </div>

</section>


<!-- APP -->

<section id="app" class="app hidden">

  <header class="topbar">

    <div class="top-left">

      <div class="logo">
        NEX<span>ORA</span>
      </div>

      <nav class="nav">
        <button class="active">Overview</button>
        <button onclick="openModal('Wallet')">Wallet</button>
        <button onclick="openModal('Transactions')">Transactions</button>
        <button onclick="openModal('Projects')">Projects</button>
        <button onclick="openModal('Settings')">Settings</button>
      </nav>

    </div>

    <div class="user-chip">
      <div class="avatar">N</div>
      <span id="userName">User</span>
    </div>

  </header>


  <main class="main">

    <div class="demo">

      <div>
        DEMONSTRATION ENVIRONMENT — balances and transactions are simulated.
      </div>

      <div class="status">
        <span class="dot"></span>
        Online
      </div>

    </div>


    <div class="heading">

      <div>
        <h1>Good day, <span id="welcomeName">User</span></h1>
        <p>Your NEXORA account overview.</p>
      </div>

      <button class="action" onclick="logout()">
        Sign out
      </button>

    </div>


    <!-- WIDE TOP AREA -->

    <div class="hero-grid">

      <div class="balance-card">

        <div class="balance-label">
          Total simulated balance
        </div>

        <div class="balance">
          $1,100,000<small>.00</small>
        </div>

        <div class="actions">

          <button
            class="action primary"
            onclick="openModal('Demo Deposit')">
            + Add demo funds
          </button>

          <button
            class="action"
            onclick="openModal('Demo Withdrawal')">
            Request withdrawal
          </button>

          <button
            class="action"
            onclick="openModal('Transfer')">
            Transfer
          </button>

        </div>

      </div>


      <!-- PENDING IS HERE BESIDE THE BALANCE -->

      <div class="pending-card">

        <div class="card-head">

          <h2>Pending activity</h2>

          <span class="badge">1 PENDING</span>

        </div>

        <div class="pending-item">

          <div class="pending-row">

            <div class="pending-title">
              Withdrawal request
            </div>

            <div class="pending-amount">
              $25,000.00
            </div>

          </div>

          <div class="pending-meta">
            Awaiting demo review · Today
          </div>

        </div>

        <div class="pending-item">

          <div class="pending-row">

            <div class="pending-title">
              Account verification
            </div>

            <div class="pending-amount">
              Review
            </div>

          </div>

          <div class="pending-meta">
            Demonstration status
          </div>

        </div>

      </div>

    </div>


    <!-- STATS -->

    <div class="stats">

      <div class="stat">
        <div class="stat-label">Available demo balance</div>
        <div class="stat-value">$1.10M</div>
      </div>

      <div class="stat">
        <div class="stat-label">Pending</div>
        <div class="stat-value orange">$25K</div>
      </div>

      <div class="stat">
        <div class="stat-label">Projects</div>
        <div class="stat-value">08</div>
      </div>

      <div class="stat">
        <div class="stat-label">Account status</div>
        <div class="stat-value green">Active</div>
      </div>

    </div>


    <!-- LOWER AREA -->

    <div class="lower">

      <div class="panel">

        <h2>Recent activity</h2>

        <div class="transaction">

          <div class="transaction-left">

            <div class="tx-icon">↓</div>

            <div>
              <div class="tx-title">Demo deposit</div>
              <div class="tx-date">Today · 09:42</div>
            </div>

          </div>

          <div class="tx-amount green">
            +$50,000.00
          </div>

        </div>


        <div class="transaction">

          <div class="transaction-left">

            <div class="tx-icon">↗</div>

            <div>
              <div class="tx-title">Withdrawal request</div>
              <div class="tx-date">Today · 08:31</div>
            </div>

          </div>

          <div class="tx-amount orange">
            $25,000.00
          </div>

        </div>


        <div class="transaction">

          <div class="transaction-left">

            <div class="tx-icon">◆</div>

            <div>
              <div class="tx-title">Demo account credit</div>
              <div class="tx-date">Yesterday · 16:20</div>
            </div>

          </div>

          <div class="tx-amount green">
            +$75,000.00
          </div>

        </div>

      </div>


      <div class="panel">

        <h2>Account overview</h2>

        <div class="profile-row">
          <span>Account</span>
          <strong>NEXORA Demo</strong>
        </div>

        <div class="profile-row">
          <span>Status</span>
          <strong class="green">Active</strong>
        </div>

        <div class="profile-row">
          <span>Projects</span>
          <strong>08</strong>
        </div>

        <div class="profile-row">
          <span>Security</span>
          <strong>Protected</strong>
        </div>

      </div>

    </div>

  </main>

</section>


<!-- MODAL -->

<div id="modal" class="modal" onclick="closeModal(event)">

  <div class="modal-box">

    <button class="close" onclick="closeModal()">×</button>

    <h2 id="modalTitle">Demo action</h2>

    <p style="color:#8fa2ba;line-height:1.7">
      This feature is part of the NEXORA demonstration interface.
      It does not move real money or connect to a financial account.
    </p>

    <button
      class="btn full"
      onclick="closeModal()">
      Close
    </button>

  </div>

</div>


<script>

const KEY="nexora_demo_user";

let loginMode=false;

const $=id=>document.getElementById(id);


/* AUTH MODE */

$("switchMode").onclick=()=>{

  loginMode=!loginMode;

  $("authTitle").textContent=
    loginMode
      ?"Welcome back"
      :"Create your account";

  $("authSub").textContent=
    loginMode
      ?"Login to your NEXORA demo account."
      :"Set up your NEXORA demonstration account.";

  $("authBtn").textContent=
    loginMode
      ?"Login"
      :"Create account";

  $("switchMode").textContent=
    loginMode
      ?"Create an account"
      :"Login";

  $("switchText").textContent=
    loginMode
      ?"New here?"
      :"Already have an account?";

  $("name").style.display=
    loginMode
      ?"none"
      :"block";

  $("name").required=!loginMode;

};


/* AUTH */

$("authForm").onsubmit=e=>{

  e.preventDefault();

  const email=$("email").value.trim();

  const password=$("password").value;

  if(loginMode){

    const old=
      JSON.parse(
        localStorage.getItem(KEY)||"null"
      );

    if(
      !old ||
      old.email!==email ||
      old.password!==password
    ){

      alert(
        "Demo login failed. Use the same details used when creating the demo account."
      );

      return;

    }

  }else{

    const name=$("name").value.trim();

    localStorage.setItem(
      KEY,
      JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    );

  }

  load();

};


/* LOAD */

function load(){

  const u=
    JSON.parse(
      localStorage.getItem(KEY)||"null"
    );

  if(!u)return;

  $("auth").classList.add("hidden");

  $("app").classList.remove("hidden");

  $("userName").textContent=u.name;

  $("welcomeName").textContent=u.name;

}


/* LOGOUT */

function logout(){

  localStorage.removeItem(KEY);

  location.reload();

}


/* MODAL */

function openModal(title){

  $("modalTitle").textContent=title;

  $("modal").classList.add("show");

}


function closeModal(e){

  if(
    !e ||
    e.target.id==="modal"
  ){

    $("modal").classList.remove("show");

  }

}


/* START */

load();

</script>

</body>
</html>`;

    return new Response(html,{
      headers:{
        "content-type":"text/html;charset=UTF-8",
        "cache-control":"no-store"
      }
    });
  }
};
