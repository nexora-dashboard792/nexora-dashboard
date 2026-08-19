export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>NEXORA — Demo Account Platform</title>

<style>
*{
  box-sizing:border-box;
}

:root{
  --bg:#050a12;
  --bg2:#09111d;
  --surface:#0c1624;
  --surface2:#101d2d;
  --surface3:#142337;
  --line:rgba(255,255,255,.075);
  --text:#f5f8fc;
  --muted:#8799af;
  --blue:#4d8dff;
  --cyan:#47d8ff;
  --green:#39d98a;
  --amber:#ffb84d;
  --red:#ff6378;
}

html,
body{
  margin:0;
  min-height:100%;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background:
    radial-gradient(
      circle at 12% 8%,
      rgba(71,216,255,.10),
      transparent 25%
    ),
    radial-gradient(
      circle at 85% 20%,
      rgba(77,141,255,.12),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #050a12,
      #08111d 50%,
      #050a12
    );
  color:var(--text);
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.17;
  background-image:
    linear-gradient(
      rgba(255,255,255,.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,.025) 1px,
      transparent 1px
    );
  background-size:54px 54px;
}

button,
input{
  font:inherit;
}

button{
  cursor:pointer;
}

.hidden{
  display:none!important;
}

/* =========================
   AUTH
========================= */

#auth{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:25px;
}

.auth-box{
  width:100%;
  max-width:440px;
  padding:38px;
  border:1px solid var(--line);
  border-radius:28px;
  background:
    linear-gradient(
      145deg,
      rgba(16,31,49,.95),
      rgba(7,17,29,.96)
    );
  box-shadow:
    0 40px 100px rgba(0,0,0,.55);
}

.auth-logo{
  font-size:29px;
  font-weight:950;
  letter-spacing:5px;
}

.auth-logo span{
  color:var(--cyan);
}

.auth-box h1{
  margin:48px 0 8px;
  font-size:30px;
}

.auth-box p{
  color:var(--muted);
  line-height:1.6;
}

.field{
  width:100%;
  padding:15px;
  margin:8px 0;
  color:white;
  background:#081422;
  border:1px solid var(--line);
  border-radius:12px;
  outline:none;
}

.field:focus{
  border-color:var(--blue);
  box-shadow:
    0 0 0 3px rgba(77,141,255,.12);
}

.primary{
  width:100%;
  border:0;
  padding:15px;
  margin-top:12px;
  border-radius:12px;
  color:white;
  font-weight:800;
  background:
    linear-gradient(
      135deg,
      #5a98ff,
      #3677ee
    );
}

.switch{
  margin-top:22px;
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

/* =========================
   APPLICATION
========================= */

.app{
  min-height:100vh;
}

/* LEFT RAIL */

.sidebar{
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  width:235px;
  padding:28px 17px;
  background:
    linear-gradient(
      180deg,
      rgba(7,17,29,.98),
      rgba(5,12,21,.98)
    );
  border-right:1px solid var(--line);
  z-index:50;
}

.logo{
  padding:0 14px;
  font-size:24px;
  font-weight:950;
  letter-spacing:4px;
}

.logo span{
  color:var(--cyan);
}

.logo-sub{
  padding:7px 14px 35px;
  color:#52657c;
  font-size:10px;
  letter-spacing:1.5px;
  text-transform:uppercase;
}

.nav-label{
  padding:0 14px 9px;
  color:#53677e;
  font-size:10px;
  letter-spacing:1.5px;
  text-transform:uppercase;
  font-weight:800;
}

.nav{
  width:100%;
  display:flex;
  align-items:center;
  gap:12px;
  margin:4px 0;
  padding:12px 14px;
  color:#8294aa;
  background:transparent;
  border:1px solid transparent;
  border-radius:11px;
  text-align:left;
  transition:.2s;
}

.nav:hover{
  color:white;
  background:rgba(255,255,255,.035);
}

.nav.active{
  color:white;
  background:
    linear-gradient(
      90deg,
      rgba(77,141,255,.18),
      rgba(77,141,255,.045)
    );
  border-color:rgba(77,141,255,.14);
}

.nav-icon{
  width:20px;
  text-align:center;
  opacity:.8;
}

.sidebar-bottom{
  position:absolute;
  left:17px;
  right:17px;
  bottom:25px;
}

.demo-mini{
  padding:13px;
  border-radius:12px;
  background:rgba(255,184,77,.055);
  border:1px solid rgba(255,184,77,.11);
  color:#d5a75d;
  font-size:10px;
  line-height:1.5;
}

.logout{
  margin-top:10px;
  color:#9a7180;
}

/* TOP */

.top{
  position:fixed;
  left:235px;
  right:0;
  top:0;
  height:76px;
  z-index:40;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 38px;
  border-bottom:1px solid var(--line);
  background:rgba(5,10,18,.76);
  backdrop-filter:blur(20px);
}

.top-title{
  color:#8497ad;
  font-size:13px;
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
  color:#8fa4bb;
  font-size:12px;
}

.live-dot{
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
  padding-left:18px;
  border-left:1px solid var(--line);
}

.avatar{
  width:36px;
  height:36px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:
    linear-gradient(
      135deg,
      #4d8dff,
      #47d8ff
    );
  font-weight:900;
}

.user-name{
  font-size:13px;
  font-weight:700;
}

/* CONTENT */

.content{
  margin-left:235px;
  padding:112px 40px 55px;
}

.content-inner{
  max-width:1450px;
  margin:auto;
}

.notice{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 15px;
  margin-bottom:25px;
  border:1px solid rgba(255,184,77,.12);
  border-radius:9px;
  background:rgba(255,184,77,.045);
  color:#c99b54;
  font-size:11px;
}

.page-title{
  margin-bottom:27px;
}

.page-title h1{
  margin:0;
  font-size:36px;
  letter-spacing:-1.2px;
}

.page-title p{
  margin:8px 0 0;
  color:var(--muted);
}

/* MAIN GRID */

.main-grid{
  display:grid;
  grid-template-columns:
    minmax(0,1.6fr)
    minmax(330px,.75fr);
  gap:20px;
}

/* WALLET */

.wallet{
  min-height:350px;
  position:relative;
  overflow:hidden;
  padding:34px;
  border:1px solid rgba(77,141,255,.17);
  border-radius:25px;
  background:
    radial-gradient(
      circle at 87% 15%,
      rgba(71,216,255,.17),
      transparent 24%
    ),
    radial-gradient(
      circle at 15% 90%,
      rgba(77,141,255,.11),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #10253d,
      #0a1727 65%,
      #09121f
    );
  box-shadow:
    0 30px 80px rgba(0,0,0,.28);
}

.wallet:before{
  content:"";
  position:absolute;
  width:420px;
  height:420px;
  border:1px solid rgba(71,216,255,.07);
  border-radius:50%;
  right:-230px;
  top:-250px;
  box-shadow:
    0 0 0 50px rgba(71,216,255,.018),
    0 0 0 100px rgba(71,216,255,.012);
}

.wallet-top{
  display:flex;
  justify-content:space-between;
  align-items:start;
}

.wallet-label{
  color:#8ea3bb;
  font-size:11px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:1.7px;
}

.wallet-status{
  padding:6px 10px;
  border-radius:20px;
  background:rgba(57,217,138,.08);
  color:#61dda0;
  font-size:10px;
  font-weight:800;
}

.big-number{
  position:relative;
  margin-top:15px;
  font-size:53px;
  font-weight:950;
  letter-spacing:-2.8px;
}

.currency{
  color:#8398b1;
  font-size:19px;
  font-weight:700;
}

.wallet-note{
  margin-top:8px;
  color:#71859e;
  font-size:12px;
}

.wallet-actions{
  position:absolute;
  left:34px;
  bottom:30px;
  display:flex;
  gap:10px;
}

.action{
  border:1px solid rgba(255,255,255,.09);
  border-radius:10px;
  padding:12px 18px;
  color:#dce8f5;
  background:rgba(255,255,255,.055);
  font-weight:750;
}

.action:hover{
  background:rgba(255,255,255,.09);
}

.action.blue{
  color:white;
  border-color:#4d8dff;
  background:#4d8dff;
}

/* PENDING */

.pending{
  min-height:350px;
  padding:27px;
  border:1px solid rgba(255,184,77,.12);
  border-radius:25px;
  background:
    linear-gradient(
      145deg,
      rgba(24,28,32,.94),
      rgba(10,19,31,.96)
    );
}

.panel-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:18px;
}

.panel-head h2{
  margin:0;
  font-size:17px;
}

.count{
  padding:5px 9px;
  border-radius:20px;
  background:rgba(255,184,77,.09);
  color:#ffc66b;
  font-size:10px;
  font-weight:900;
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

.pending-name{
  font-weight:750;
  font-size:13px;
}

.pending-money{
  color:#ffc15a;
  font-weight:900;
  font-size:13px;
}

.pending-detail{
  margin-top:6px;
  color:#73879e;
  font-size:11px;
}

.pending-state{
  display:inline-block;
  margin-top:9px;
  padding:4px 7px;
  border-radius:5px;
  background:rgba(255,184,77,.07);
  color:#e8ad58;
  font-size:9px;
  font-weight:900;
  text-transform:uppercase;
}

/* STATS */

.stats{
  display:grid;
  grid-template-columns:
    repeat(4,1fr);
  gap:17px;
  margin-top:20px;
}

.stat{
  padding:21px;
  border:1px solid var(--line);
  border-radius:17px;
  background:
    linear-gradient(
      145deg,
      rgba(16,29,45,.83),
      rgba(9,18,30,.88)
    );
}

.stat-label{
  color:#71859c;
  font-size:10px;
  text-transform:uppercase;
  letter-spacing:1px;
  font-weight:800;
}

.stat-value{
  margin-top:9px;
  font-size:23px;
  font-weight:900;
}

.green{
  color:var(--green);
}

.amber{
  color:var(--amber);
}

/* BOTTOM */

.bottom-grid{
  display:grid;
  grid-template-columns:
    minmax(0,1.4fr)
    minmax(300px,.6fr);
  gap:20px;
  margin-top:20px;
}

.panel{
  padding:25px;
  border:1px solid var(--line);
  border-radius:20px;
  background:rgba(12,22,36,.78);
}

.panel h2{
  margin:0 0 18px;
  font-size:17px;
}

.transaction{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:15px 0;
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
  border-radius:10px;
  background:rgba(77,141,255,.08);
  color:#74a6ff;
}

.tx-name{
  font-size:13px;
  font-weight:750;
}

.tx-date{
  margin-top:4px;
  color:#71859c;
  font-size:10px;
}

.tx-money{
  font-weight:900;
  font-size:13px;
}

.profile-row{
  display:flex;
  justify-content:space-between;
  padding:13px 0;
  border-bottom:1px solid var(--line);
  font-size:13px;
}

.profile-row:last-child{
  border-bottom:0;
}

.profile-row span{
  color:#71859c;
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
  background:rgba(0,0,0,.7);
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
  border-radius:22px;
  background:#0c1828;
  box-shadow:0 35px 100px rgba(0,0,0,.6);
}

.modal-box h2{
  margin-top:0;
}

.modal-box p{
  color:var(--muted);
  line-height:1.7;
}

.close{
  float:right;
  border:0;
  background:none;
  color:#8396ac;
  font-size:24px;
}

/* MOBILE */

@media(max-width:1100px){

  .sidebar{
    position:relative;
    width:100%;
    height:auto;
    padding:18px;
  }

  .logo-sub,
  .nav-label,
  .sidebar-bottom{
    display:none;
  }

  .nav{
    display:none;
  }

  .top{
    left:0;
  }

  .content{
    margin-left:0;
    padding:105px 22px 40px;
  }

  .main-grid,
  .bottom-grid{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:650px){

  .top{
    padding:0 18px;
  }

  .top-title{
    display:none;
  }

  .user-name{
    display:none;
  }

  .content{
    padding-left:16px;
    padding-right:16px;
  }

  .page-title h1{
    font-size:29px;
  }

  .wallet{
    min-height:330px;
    padding:25px;
  }

  .big-number{
    font-size:39px;
    letter-spacing:-2px;
  }

  .wallet-actions{
    left:25px;
    right:25px;
    bottom:22px;
  }

  .action{
    flex:1;
    padding:11px 8px;
    font-size:11px;
  }

  .stats{
    grid-template-columns:1fr 1fr;
  }

  .notice{
    display:block;
    line-height:1.6;
  }
}

@media(max-width:430px){

  .stats{
    grid-template-columns:1fr;
  }

  .wallet-actions{
    flex-wrap:wrap;
  }

  .action{
    min-width:100%;
  }

  .auth-box{
    padding:27px;
  }
}
</style>
</head>

<body>

<!-- =========================
     AUTH
========================= -->

<section id="auth">

  <div class="auth-box">

    <div class="auth-logo">
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

      <button
        id="authBtn"
        class="primary"
        type="submit"
      >
        Create account
      </button>

    </form>

    <div class="switch">

      <span id="switchText">
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

</section>


<!-- =========================
     APPLICATION
========================= -->

<section
  id="app"
  class="app hidden"
>

  <!-- SIDEBAR -->

  <aside class="sidebar">

    <div class="logo">
      NEX<span>ORA</span>
    </div>

    <div class="logo-sub">
      Account platform
    </div>

    <div class="nav-label">
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

    <div class="nav-label" style="margin-top:25px">
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

    <div class="sidebar-bottom">

      <div class="demo-mini">

        <strong>DEMO MODE</strong><br>

        All balances and transactions shown
        here are simulated.

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


  <!-- TOP BAR -->

  <header class="top">

    <div class="top-title">
      Account overview
    </div>

    <div class="top-right">

      <div class="live">

        <span class="live-dot"></span>

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


  <!-- CONTENT -->

  <main class="content">

    <div class="content-inner">

      <div class="notice">

        <span>
          Demonstration account — no real money is processed.
        </span>

        <span>
          SIMULATED DATA
        </span>

      </div>


      <div class="page-title">

        <h1>
          Welcome back,
          <span id="welcomeName">
            User
          </span>
        </h1>

        <p>
          Here's your account at a glance.
        </p>

      </div>


      <!-- MAIN AREA -->

      <div class="main-grid">


        <!-- WALLET CARD -->

        <section class="wallet">

          <div class="wallet-top">

            <div>

              <div class="wallet-label">
                Total demo balance
              </div>

              <div class="big-number">
                $1,100,000
                <span class="currency">
                  .00
                </span>
              </div>

              <div class="wallet-note">
                Simulated account value · USD
              </div>

            </div>

            <div class="wallet-status">
              ACCOUNT ACTIVE
            </div>

          </div>


          <div class="wallet-actions">

            <button
              class="action blue"
              onclick="openModal('Demo deposit')"
            >
              + Deposit
            </button>

            <button
              class="action"
              onclick="openModal('Demo withdrawal')"
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


        <!-- PENDING CARD -->

        <section class="pending">

          <div class="panel-head">

            <h2>
              Pending activity
            </h2>

            <span class="count">
              02
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Withdrawal request
              </div>

              <div class="pending-money">
                $25,000.00
              </div>

            </div>

            <div class="pending-detail">
              Submitted today · 08:31
            </div>

            <span class="pending-state">
              Pending
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Account review
              </div>

              <div class="pending-money">
                Review
              </div>

            </div>

            <div class="pending-detail">
              Demonstration account review
            </div>

            <span class="pending-state">
              Pending
            </span>

          </div>


          <div class="pending-item">

            <div class="pending-row">

              <div class="pending-name">
                Estimated completion
              </div>

              <div class="pending-money">
                — 
              </div>

            </div>

            <div class="pending-detail">
              No real financial processing occurs.
            </div>

          </div>

        </section>

      </div>


      <!-- STAT CARDS -->

      <div class="stats">

        <div class="stat">

          <div class="stat-label">
            Demo balance
          </div>

          <div class="stat-value">
            $1.10M
          </div>

        </div>


        <div class="stat">

          <div class="stat-label">
            Pending
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


      <!-- LOWER -->

      <div class="bottom-grid">


        <!-- ACTIVITY -->

        <section class="panel">

          <h2>
            Recent activity
          </h2>


          <div class="transaction">

            <div class="transaction-left">

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

            <div class="tx-money green">
              +$50,000.00
            </div>

          </div>


          <div class="transaction">

            <div class="transaction-left">

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

            <div class="tx-money amber">
              $25,000.00
            </div>

          </div>


          <div class="transaction">

            <div class="transaction-left">

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

            <div class="tx-money green">
              +$75,000.00
            </div>

          </div>

        </section>


        <!-- ACCOUNT -->

        <section class="panel">

          <h2>
            Account overview
          </h2>


          <div class="profile-row">

           
