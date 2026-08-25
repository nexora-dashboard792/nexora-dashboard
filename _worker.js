export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NEXORA — Account Platform</title>

<style>
*{box-sizing:border-box}

:root{
  --bg:#050911;
  --panel:#0b1422;
  --panel2:#101c2c;
  --panel3:#142238;
  --line:rgba(255,255,255,.075);
  --text:#f4f7fb;
  --muted:#8091a7;
  --blue:#4d8dff;
  --cyan:#43d9ff;
  --green:#43dda0;
  --amber:#ffbd59;
  --red:#ff667d;
}

html,body{
  margin:0;
  min-height:100%;
  background:
    radial-gradient(circle at 15% 5%,rgba(67,217,255,.10),transparent 25%),
    radial-gradient(circle at 90% 15%,rgba(77,141,255,.12),transparent 28%),
    radial-gradient(circle at 50% 100%,rgba(77,141,255,.06),transparent 35%),
    var(--bg);
  color:var(--text);
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.13;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:48px 48px;
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
  padding:24px;
}

.auth-card{
  width:100%;
  max-width:430px;
  padding:38px;
  border:1px solid var(--line);
  border-radius:26px;
  background:
    linear-gradient(145deg,rgba(17,32,51,.97),rgba(6,14,24,.98));
  box-shadow:0 40px 100px rgba(0,0,0,.55);
}

.brand{
  font-size:27px;
  font-weight:950;
  letter-spacing:5px;
}

.brand span{color:var(--cyan)}

.auth-card h1{
  margin:45px 0 8px;
  font-size:30px;
}

.auth-card p{
  color:var(--muted);
  line-height:1.6;
}

.input{
  width:100%;
  margin:8px 0;
  padding:14px;
  border:1px solid var(--line);
  border-radius:11px;
  outline:none;
  color:white;
  background:#07111e;
}

.input:focus{
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(77,141,255,.12);
}

.primary{
  width:100%;
  margin-top:12px;
  padding:14px;
  border:0;
  border-radius:11px;
  color:white;
  font-weight:850;
  background:linear-gradient(135deg,#5c99ff,#3678ee);
}

.switch{
  margin-top:20px;
  text-align:center;
  color:var(--muted);
  font-size:13px;
}

.switch button{
  border:0;
  background:none;
  color:var(--cyan);
  font-weight:800;
}

/* APP */

#app{min-height:100vh}

/* SIDEBAR */

.sidebar{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  width:238px;
  padding:28px 16px;
  z-index:20;
  border-right:1px solid var(--line);
  background:
    linear-gradient(180deg,#07111e,#050b14);
}

.logo{
  padding:0 14px;
  font-size:24px;
  font-weight:950;
  letter-spacing:4px;
}

.logo span{color:var(--cyan)}

.subtitle{
  padding:8px 14px 35px;
  color:#50637a;
  font-size:9px;
  text-transform:uppercase;
  letter-spacing:1.7px;
}

.section-label{
  padding:0 14px 8px;
  color:#52677e;
  font-size:9px;
  text-transform:uppercase;
  letter-spacing:1.5px;
  font-weight:900;
}

.nav{
  width:100%;
  display:flex;
  align-items:center;
  gap:12px;
  margin:4px 0;
  padding:12px 14px;
  border:1px solid transparent;
  border-radius:10px;
  background:transparent;
  color:#8192a8;
  text-align:left;
  transition:.2s;
}

.nav:hover{
  color:white;
  background:rgba(255,255,255,.035);
}

.nav.active{
  color:white;
  border-color:rgba(77,141,255,.16);
  background:linear-gradient(90deg,rgba(77,141,255,.18),rgba(77,141,255,.035));
}

.nav-icon{
  width:20px;
  text-align:center;
}

.side-bottom{
  position:absolute;
  left:16px;
  right:16px;
  bottom:22px;
}

.demo-box{
  padding:12px;
  border:1px solid rgba(255,189,89,.12);
  border-radius:10px;
  color:#c69c58;
  background:rgba(255,189,89,.04);
  font-size:9px;
  line-height:1.6;
}

.logout{
  margin-top:9px;
  color:#a27582;
}

/* TOPBAR */

.topbar{
  position:fixed;
  top:0;
  right:0;
  left:238px;
  height:74px;
  z-index:15;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 38px;
  border-bottom:1px solid var(--line);
  background:rgba(5,9,17,.78);
  backdrop-filter:blur(20px);
}

.top-title{
  color:#8799af;
  font-size:12px;
}

.top-right{
  display:flex;
  align-items:center;
  gap:18px;
}

.live{
  display:flex;
  align-items:center;
  gap:7px;
  color:#8194aa;
  font-size:11px;
}

.dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
  box-shadow:0 0 12px var(--green);
}

.user{
  display:flex;
  align-items:center;
  gap:10px;
  padding-left:17px;
  border-left:1px solid var(--line);
}

.avatar{
  width:35px;
  height:35px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:linear-gradient(135deg,#4d8dff,#43d9ff);
  color:white;
  font-weight:900;
}

.user-name{
  font-size:12px;
  font-weight:800;
}

/* CONTENT */

.content{
  margin-left:238px;
  padding:108px 40px 50px;
}

.container{
  max-width:1480px;
  margin:auto;
}

.demo-banner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:24px;
  padding:10px 14px;
  border:1px solid rgba(255,189,89,.12);
  border-radius:9px;
  color:#c59b59;
  background:rgba(255,189,89,.04);
  font-size:10px;
}

.title{
  margin-bottom:25px;
}

.title h1{
  margin:0;
  font-size:36px;
  letter-spacing:-1.3px;
}

.title p{
  margin:8px 0 0;
  color:var(--muted);
}

/* HERO GRID */

.hero-grid{
  display:grid;
  grid-template-columns:minmax(0,1.55fr) minmax(340px,.72fr);
  gap:20px;
}

/* BALANCE CARD */

.balance-card{
  position:relative;
  min-height:355px;
  overflow:hidden;
  padding:34px;
  border:1px solid rgba(77,141,255,.17);
  border-radius:25px;
  background:
    radial-gradient(circle at 88% 12%,rgba(67,217,255,.16),transparent 23%),
    radial-gradient(circle at 15% 95%,rgba(77,141,255,.12),transparent 30%),
    linear-gradient(135deg,#10243b,#0a1727 65%,#08111e);
  box-shadow:0 30px 80px rgba(0,0,0,.25);
}

.balance-card:after{
  content:"";
  position:absolute;
  width:450px;
  height:450px;
  right:-280px;
  top:-270px;
  border:1px solid rgba(67,217,255,.08);
  border-radius:50%;
  box-shadow:
    0 0 0 45px rgba(67,217,255,.018),
    0 0 0 90px rgba(67,217,255,.012);
}

.card-head{
  display:flex;
  align-items:start;
  justify-content:space-between;
}

.card-label{
  color:#8ba0b7;
  font-size:10px;
  text-transform:uppercase;
  letter-spacing:1.7px;
  font-weight:850;
}

.status{
  padding:6px 10px;
  border-radius:20px;
  color:#60dca1;
  background:rgba(67,221,160,.08);
  font-size:9px;
  font-weight:900;
}

.balance{
  margin-top:14px;
  font-size:54px;
  line-height:1;
  font-weight:950;
  letter-spacing:-3px;
}

.balance small{
  color:#8095ad;
  font-size:18px;
  letter-spacing:0;
}

.balance-description{
  margin-top:10px;
  color:#71859c;
  font-size:11px;
}

.quick-actions{
  position:absolute;
  left:34px;
  bottom:30px;
  display:flex;
  gap:9px;
  z-index:2;
}

.action{
  padding:11px 17px;
  border:1px solid rgba(255,255,255,.08);
  border-radius:9px;
  color:#dbe7f4;
  background:rgba(255,255,255,.045);
  font-size:11px;
  font-weight:800;
}

.action:hover{
  background:rgba(255,255,255,.09);
}

.action.main{
  color:white;
  border-color:#4d8dff;
  background:#4d8dff;
}

/* PENDING */

.pending-card{
  min-height:355px;
  padding:27px;
  border:1px solid rgba(255,189,89,.12);
  border-radius:25px;
  background:
    linear-gradient(145deg,#111c2a,#09121e);
}

.panel-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:10px;
}

.panel-head h2{
  margin:0;
  font-size:16px;
}

.badge{
  padding:5px 9px;
  border-radius:20px;
  color:#ffc463;
  background:rgba(255,189,89,.08);
  font-size:9px;
  font-weight:900;
}

.pending-item{
  padding:16px 0;
  border-top:1px solid var(--line);
}

.pending-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
}

.pending-name{
  font-size:12px;
  font-weight:800;
}

.pending-amount{
  color:var(--amber);
  font-size:12px;
  font-weight:900;
}

.pending-info{
  margin-top:5px;
  color:#70839a;
  font-size:10px;
}

.pending-status{
  display:inline-block;
  margin-top:8px;
  padding:4px 7px;
  border-radius:5px;
  color:#e9af59;
  background:rgba(255,189,89,.07);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
}

/* STATS */

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  margin-top:20px;
}

.stat{
  padding:20px;
  border:1px solid var(--line);
  border-radius:16px;
  background:rgba(12,22,35,.78);
}

.stat-label{
  color:#70849b;
  font-size:9px;
  text-transform:uppercase;
  letter-spacing:1px;
  font-weight:900;
}

.stat-value{
  margin-top:8px;
  font-size:22px;
  font-weight:950;
}

.green{color:var(--green)}
.amber{color:var(--amber)}

/* LOWER GRID */

.lower{
  display:grid;
  grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);
  gap:20px;
  margin-top:20px;
}

.panel{
  padding:25px;
  border:1px solid var(--line);
  border-radius:19px;
  background:rgba(11,20,33,.78);
}

.panel h2{
  margin:0 0 17px;
  font-size:16px;
}

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
  border-top:1px solid var(--line);
}

.tx-left{
  display:flex;
  align-items:center;
  gap:11px;
}

.tx-icon{
  width:37px;
  height:37px;
  display:grid;
  place-items:center;
  border-radius:9px;
  color:#77a7ff;
  background:rgba(77,141,255,.08);
}

.tx-name{
  font-size:12px;
  font-weight:800;
}

.tx-date{
  margin-top:4px;
  color:#70849a;
  font-size:9px;
}

.tx-value{
  font-size:12px;
  font-weight:900;
}

.account-row{
  display:flex;
  justify-content:space-between;
  padding:13px 0;
  border-bottom:1px solid var(--line);
  font-size:12px;
}

.account-row:last-child{
  border-bottom:0;
}

.account-row span{
  color:#71849a;
}

/* MODAL */

.modal{
  position:fixed;
  inset:0;
  z-index:100;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:rgba(0,0,0,.72);
  backdrop-filter:blur(8px);
}

.modal.show{
  display:flex;
}

.modal-box{
  width:100%;
  max-width:450px;
  padding:30px;
  border:1px solid var(--line);
  border-radius:20px;
  background:#0c1827;
  box-shadow:0 35px 100px rgba(0,0,0,.6);
}

.modal-box h2{
  margin:0 35px 10px 0;
}

.modal-box p{
  color:var(--muted);
  line-height:1.7;
  font-size:13px;
}

.close{
  float:right;
  border:0;
  background:none;
  color:#8295ab;
  font-size:25px;
}

.modal-input{
  width:100%;
  padding:13px;
  margin:7px 0;
  border:1px solid var(--line);
  border-radius:10px;
  outline:none;
  color:white;
  background:#07111e;
}

.modal-button{
  width:100%;
  margin-top:8px;
  padding:13px;
  border:0;
  border-radius:10px;
  color:white;
  background:#4d8dff;
  font-weight:850;
}

/* MOBILE */

@media(max-width:1100px){

  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    padding:17px;
  }

  .subtitle,
  .section-label,
  .side-bottom{
    display:none;
  }

  .nav{
    display:none;
  }

  .topbar{
    left:0;
  }

  .content{
    margin-left:0;
    padding:105px 20px 40px;
  }

  .hero-grid,
  .lower{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:650px){

  .topbar{
    padding:0 16px;
  }

  .top-title,
  .user-name{
    display:none;
  }

  .content{
    padding-left:14px;
    padding-right:14px;
  }

  .title h1{
    font-size:28px;
  }

  .balance-card{
    min-height:340px;
    padding:25px;
  }

  .balance{
    font-size:39px;
    letter-spacing:-2px;
  }

  .quick-actions{
    left:25px;
    right:25px;
    bottom:22px;
    flex-wrap:wrap;
  }

  .action{
    flex:1;
    min-width:90px;
    padding:10px 8px;
  }

  .demo-banner{
    display:block;
    line-height:1.6;
  }
}

@media(max-width:420px){

  .stats{
    grid-template-columns:1fr;
  }

  .quick-actions .action{
    min-width:100%;
  }

  .auth-card{
    padding:27px;
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

    <h1 id="authTitle">
      Create your account
    </h1>

    <p id="authSub">
      Set up your NEXORA demonstration account.
    </p>

    <form id="authForm">

      <input
        id="name"
        class="input"
        placeholder="Full name"
        required
      >

      <input
        id="email"
        class="input"
        type="email"
        placeholder="Email address"
        required
      >

      <input
        id="password"
        class="input"
        type="password"
        placeholder="Password"
        required
      >

      <button
        class="primary"
        type="submit"
        id="authButton"
      >
        Create account
      </button>

    </form>

    <div class="switch">

      <span id="switchLabel">
        Already have an account?
      </span>

      <button
        id="switchMode"
        type="button"
      >
        Login
      </button>

    </div>

  </div>

</div>


<!-- APP -->

<div
  id="app"
  class="hidden"
>

  <aside class="sidebar">

    <div class="logo">
      NEX<span>ORA</span>
    </div>

    <div class="subtitle">
      Account platform
    </div>

    <div class="section-label">
      Workspace
    </div>

    <button class="nav active">
      <span class="nav-icon">⌂</span>
      Overview
    </button>

    <button
      class="nav"
      onclick="openModal('Wallet')"
    >
      <span class="nav-icon">◈</span>
      Wallet
    </button>

    <button
      class="nav"
      onclick="openModal('Transactions')"
    >
      <span class="nav-icon">↗</span>
      Transactions
    </button>

    <button
      class="nav"
      onclick="openModal('Projects')"
    >
      <span class="nav-icon">▦</span>
      Projects
    </button>

    <div
      class="section-label"
      style="margin-top:24px"
    >
      Account
    </div>

    <button
      class="nav"
      onclick="openModal('Profile')"
    >
      <span class="nav-icon">○</span>
      Profile
    </button>

    <button
      class="nav"
      onclick="openModal('Settings')"
    >
      <span class="nav-icon">⚙</span>
      Settings
    </button>

    <div class="side-bottom">

      <div class="demo-box">
        <strong>DEMO MODE</strong><br>
        Balances and activity displayed here
        are simulated interface data.
      </div>

      <button
        class="nav logout"
        onclick="logout()"
      >
        <span class="nav-icon">↪</span>
        Sign out
      </button>

    </div>

  </aside>


  <header class="topbar">

    <div class="top-title">
      Account overview
    </div>

    <div class="top-right">

      <div class="live">
        <span class="dot"></span>
        Demo environment
      </div>

      <div class="user">

        <div class="avatar">
          N
        </div>

        <div
          id="userName"
          class="user-name"
        >
          User
        </div>

      </div>

    </div>

  </header>


  <main class="content">

    <div class="container">

      <div class="demo-banner">

        <span>
          Demonstration account — no real money is processed.
        </span>

        <strong>
          SIMULATED DATA
        </strong>

      </div>


      <div class="title">

        <h1>
          Welcome back,
          <span id="welcomeName">
            User
          </span>
        </h1>

        <p>
          Your account overview and recent activity.
        </p>

      </div>


      <!-- WIDE MAIN SECTION -->

      <div class="hero-grid">


        <!-- BALANCE -->

        <section class="balance-card">

          <div class="card-head">

            <div>

              <div class="card-label">
                Total balance
              </div>

              <div class="balance">
                $<span id="balanceAmount">1100000.00</span>
              </div>

              <div class="balance-description">
                Account value · USD
              </div>

            </div>

            <div class="status">
              ACCOUNT ACTIVE
            </div>

          </div>


          <div class="quick-actions">

            <button
              class="action main"
              onclick="openModal('Deposit')"
            >
              + Deposit
            </button>

            <button
              class="action"
              onclick="openModal('Withdrawal')"
            >
              Withdraw
            </button>

            <button
              class="action"
              onclick="openModal('Transfer')"
            >
              Transfer
            </button>

          </div>

        </section>


        <!-- PENDING -->

        <section class="pending-card">

          <div class="panel-head">

            <h2>
              Pending activity
            </h2>

            <span class="badge">
              02 PENDING
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Withdrawal request
              </div>

              <div class="pending-amount">
                $25,000.00
              </div>

            </div>

            <div class="pending-info">
              Submitted today · 08:31
            </div>

            <span class="pending-status">
              Pending
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Account review
              </div>

              <div class="pending-amount">
                Review
              </div>

            </div>

            <div class="pending-info">
              Demonstration account review
            </div>

            <span class="pending-status">
              Pending
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Processing status
              </div>

              <div class="pending-amount">
                —
              </div>

            </div>

            <div class="pending-info">
              No real financial processing occurs.
            </div>

          </div>

        </section>

      </div>


      <!-- STATISTICS -->

      <div class="stats">

        <div class="stat">

          <div class="stat-label">
            Balance
          </div>

          <div
            class="stat-value"
            id="statBalance"
          >
            $1.10M
          </div>

        </div>


        <div class="stat">

          <div class="stat-label">
            Pending amount
          </div>

          <div class="stat-value amber">
            $25K
          </div>

        </div>


        <div class="stat">

          <div class="stat-label">
            Projects
          </div>

          <div class="stat-value">
            08
          </div>

        </div>


        <div class="stat">

          <div class="stat-label">
            Account status
          </div>

          <div class="stat-value green">
            Active
          </div>

        </div>

      </div>


      <!-- LOWER CONTENT -->

      <div class="lower">


        <section class="panel">

          <h2>
            Recent activity
          </h2>

          <div id="transactionsList">

            <div class="transaction">

              <div class="tx-left">

                <div class="tx-icon">
                  ↓
                </div>

                <div>

                  <div class="tx-name">
                    Demo deposit
                  </div>

                  <div class="tx-date">
                    Today · 09:42
                  </div>

                </div>

              </div>

              <div class="tx-value green">
                +$50,000.00
              </div>

            </div>


            <div class="transaction">

              <div class="tx-left">

                <div class="tx-icon">
                  ↗
                </div>

                <div>

                  <div class="tx-name">
                    Withdrawal request
                  </div>

                  <div class="tx-date">
                    Today · 08:31
                  </div>

                </div>

              </div>

              <div class="tx-value amber">
                $25,000.00
              </div>

            </div>


            <div class="transaction">

              <div class="tx-left">

                <div class="tx-icon">
                  ◆
                </div>

                <div>

                  <div class="tx-name">
                    Demo account credit
                  </div>

                  <div class="tx-date">
                    Yesterday · 16:20
                  </div>

                </div>

              </div>

              <div class="tx-value green">
                +$75,000.00
              </div>

            </div>

          </div>

        </section>


        <section class="panel">

          <h2>
            Account overview
          </h2>


          <div class="account-row">
            <span>Account</span>
            <strong>NEXORA Demo</strong>
          </div>

          <div class="account-row">
            <span>Status</span>
            <strong class="green">Active</strong>
          </div>

          <div class="account-row">
            <span>Projects</span>
            <strong>08</strong>
          </div>

          <div class="account-row">
            <span>Environment</span>
            <strong>Demo</strong>
          </div>

          <div class="account-row">
            <span>Currency</span>
            <strong>USD</strong>
          </div>

        </section>

      </div>

    </div>

  </main>

</div>


<!-- MODAL -->

<div
  id="modal"
  class="modal"
  onclick="modalBackground(event)"
>

  <div class="modal-box">

    <button
      class="close"
      onclick="closeModal()"
    >
      ×
    </button>

    <h2 id="modalTitle">
      Deposit
    </h2>

    <p id="modalText">
      Enter the amount you want to add to your
      local test balance.
    </p>

    <input
      id="modalAmount"
      class="modal-input"
      type="number"
      min="0"
      step="0.01"
      placeholder="Enter amount"
    >

    <button
      class="modal-button"
      onclick="demoAction()"
    >
      Continue
    </button>

  </div>

</div>


<script>

const KEY="nexora_demo_account_v3";
const BALANCE_KEY="nexora_demo_balance_v3";

let loginMode=false;


/* =========================
   BASIC HELPERS
========================= */

function $(id){
  return document.getElementById(id);
}


/* =========================
   ACCOUNT
========================= */

function getAccount(){

  try{

    return JSON.parse(
      localStorage.getItem(KEY)||"null"
    );

  }catch(e){

    return null;

  }
}


function saveAccount(account){

  localStorage.setItem(
    KEY,
    JSON.stringify(account)
  );

}


function createAccount(name,email,password){

  const account={
    name:name,
    email:email,
    password:password,
    createdAt:new Date().toISOString()
  };

  saveAccount(account);

  return account;
}


/* =========================
   BALANCE
========================= */

function getBalance(){

  const saved =
    localStorage.getItem(BALANCE_KEY);

  if(saved===null){

    localStorage.setItem(
      BALANCE_KEY,
      "1100000.00"
    );

    return 1100000;

  }

  const value=Number(saved);

  if(!Number.isFinite(value)){
    return 1100000;
  }

  return value;
}


function saveBalance(balance){

  localStorage.setItem(
    BALANCE_KEY,
    Number(balance).toFixed(2)
  );

}


function formatMoney(amount){

  return Number(amount).toLocaleString(
    "en-US",
    {
      minimumFractionDigits:2,
      maximumFractionDigits:2
    }
  );

}


function updateBalanceDisplay(){

  const balance=getBalance();

  $("balanceAmount").textContent=
    formatMoney(balance);

  $("statBalance").textContent=
    "$"+(balance/1000000).toFixed(2)+"M";

}


/* =========================
   APP
========================= */

function showApp(account){

  $("auth").classList.add("hidden");

  $("app").classList.remove("hidden");

  $("userName").textContent=
    account.name;

  $("welcomeName").textContent=
    account.name;

  const first=
    account.name
      .trim()
      .charAt(0)
      .toUpperCase();

  $("userName")
    .previousElementSibling
    .textContent=
      first||"N";

  updateBalanceDisplay();

}


function logout(){

  $("app").classList.add("hidden");

  $("auth").classList.remove("hidden");

  $("authForm").reset();

  loginMode=false;

  updateAuthMode();

}


/* =========================
   LOGIN / SIGNUP
========================= */

function updateAuthMode(){

  $("authTitle").textContent=
    loginMode
      ?"Welcome back"
      :"Create your account";

  $("authSub").textContent=
    loginMode
      ?"Login to your NEXORA account."
      :"Set up your NEXORA account.";

  $("authButton").textContent=
    loginMode
      ?"Login"
      :"Create account";

  $("switchLabel").textContent=
    loginMode
      ?"New here?"
      :"Already have an account?";

  $("switchMode").textContent=
    loginMode
      ?"Create account"
      :"Login";

  $("name").style.display=
    loginMode
      ?"none"
      :"block";

  $("name").required=
    !loginMode;

}


$("switchMode").onclick=function(){

  loginMode=!loginMode;

  updateAuthMode();

};


$("authForm").onsubmit=function(event){

  event.preventDefault();

  const email=
    $("email")
      .value
      .trim()
      .toLowerCase();

  const password=
    $("password").value;


  if(loginMode){

    const old=getAccount();

    if(
      !old||
      old.email!==email||
      old.password!==password
    ){

      alert(
        "Login failed. Please use the same details used when creating the account."
      );

      return;

    }

    showApp(old);

    return;

  }


  const name=
    $("name")
      .value
      .trim();


  if(!name||!email||!password){

    alert(
      "Please complete all fields."
    );

    return;

  }


  if(password.length<6){

    alert(
      "Use at least 6 characters for the password."
    );

    return;

  }


  const account=
    createAccount(
      name,
      email,
      password
    );

  showApp(account);

};


/* =========================
   MODAL
========================= */

function openModal(title){

  $("modalTitle").textContent=
    title;

  $("modalAmount").value="";

  if(title==="Deposit"){

    $("modalText").textContent=
      "Enter an amount to add to your local test balance.";

    $("modalAmount").placeholder=
      "Enter deposit amount";

  }else if(title==="Withdrawal"){

    $("modalText").textContent=
      "Enter an amount to subtract from your local test balance.";

    $("modalAmount").placeholder=
      "Enter withdrawal amount";

  }else if(title==="Transfer"){

    $("modalText").textContent=
      "Enter an amount for a local test transfer.";

    $("modalAmount").placeholder=
      "Enter transfer amount";

  }else{

    $("modalText").textContent=
      "This section is currently available as a user-interface test.";

    $("modalAmount").placeholder=
      "Optional amount";

  }

  $("modal").classList.add("show");

}


function closeModal(){

  $("modal")
    .classList
    .remove("show");

}


function modalBackground(event){

  if(event.target.id==="modal"){

    closeModal();

  }

}


/* =========================
   DEPOSIT / WITHDRAW / TRANSFER
========================= */

function demoAction(){

  const title=
    $("modalTitle")
      .textContent;

  const rawAmount=
    $("modalAmount")
      .value;

  const amount=
    Number(rawAmount);


  if(
    ["Deposit","Withdrawal","Transfer"]
      .includes(title)
  ){

    if(
      rawAmount===""||
      !Number.isFinite(amount)||
      amount<=0
    ){

      alert(
        "Please enter a valid amount."
      );

      return;

    }

  }


  /* DEPOSIT */

  if(title==="Deposit"){

    const currentBalance=
      getBalance();

    const newBalance=
      currentBalance+amount;

    saveBalance(newBalance);

    updateBalanceDisplay();


    alert(
      "Deposit successful.\n\n"+
      "Amount added: $"+
      formatMoney(amount)+
      "\n\n"+
      "New balance: $"+
      formatMoney(newBalance)
    );


    closeModal();

    return;

  }


  /* WITHDRAWAL */

  if(title==="Withdrawal"){

    const currentBalance=
      getBalance();


    if(amount>currentBalance){

      alert(
        "Insufficient test balance."
      );

      return;

    }


    const newBalance=
      currentBalance-amount;

    saveBalance(newBalance);

    updateBalanceDisplay();


    alert(
      "Withdrawal recorded.\n\n"+
      "Amount: $"+
      formatMoney(amount)+
      "\n\n"+
      "Remaining balance: $"+
      formatMoney(newBalance)
    );


    closeModal();

    return;

  }


  /* TRANSFER */

  if(title==="Transfer"){

    alert(
      "Transfer recorded for local testing.\n\n"+
      "Amount: $"+
      formatMoney(amount)
    );

    closeModal();

    return;

  }


  /* OTHER SECTIONS */

  alert(
    title+
    " section opened."
  );

  closeModal();

}


/* =========================
   ESC KEY
========================= */

document.addEventListener(
  "keydown",
  function(event){

    if(event.key==="Escape"){

      closeModal();

    }

  }
);


/* =========================
   START APP
========================= */

const existing=
  getAccount();


if(existing){

  showApp(existing);

}else{

  updateAuthMode();

}


/* INITIAL BALANCE */

updateBalanceDisplay();

</script>

</body>
</html>`;

    return new Response(
      html,
      {
        status:200,
        headers:{
          "content-type":
            "text/html; charset=UTF-8",

          "cache-control":
            "no-store"
        }
      }
    );
  }
};