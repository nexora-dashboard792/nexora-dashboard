/* =========================================================
   NEXORA AUTHENTICATION
   Login / Signup / Session / Logout
   ========================================================= */

const Auth = {

  async signup(name, email, password) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to create account");
    }

    return data;
  },


  async login(email, password) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Invalid email or password");
    }

    return data;
  },


  async session() {
    const response = await fetch("/api/auth/session", {
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  },


  async logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include"
    });

    window.location.href = "/";
  }
};


/* =========================================================
   LOGIN
   ========================================================= */

async function loginUser() {

  const email = document
    .getElementById("loginEmail")
    .value
    .trim();

  const password = document
    .getElementById("loginPassword")
    .value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {

    await Auth.login(email, password);

    window.location.href = "/dashboard";

  } catch (error) {

    alert(error.message);

  }
}


/* =========================================================
   CREATE ACCOUNT
   ========================================================= */

async function createAccount() {

  const name = document
    .getElementById("signupName")
    .value
    .trim();

  const email = document
    .getElementById("signupEmail")
    .value
    .trim();

  const password = document
    .getElementById("signupPassword")
    .value;

  const confirmPassword = document
    .getElementById("signupConfirmPassword")
    .value;


  if (!name || !email || !password) {
    alert("Please complete all fields.");
    return;
  }


  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }


  if (password.length < 8) {
    alert("Password must contain at least 8 characters.");
    return;
  }


  try {

    await Auth.signup(
      name,
      email,
      password
    );

    alert("Account created successfully.");

    window.location.href = "/";

  } catch (error) {

    alert(error.message);

  }
}


/* =========================================================
   PROTECT DASHBOARD
   ========================================================= */

async function protectDashboard() {

  const user = await Auth.session();

  if (!user) {
    window.location.href = "/";
    return;
  }


  /* Put the real user's information into the dashboard */

  const nameElement =
    document.getElementById("userName");

  const emailElement =
    document.getElementById("userEmail");


  if (nameElement) {
    nameElement.textContent =
      user.name || "User";
  }


  if (emailElement) {
    emailElement.textContent =
      user.email || "";
  }
}


/* =========================================================
   LOGOUT BUTTON
   ========================================================= */

function setupLogout() {

  const logoutButton =
    document.getElementById("logoutBtn");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener(
    "click",
    async () => {

      logoutButton.disabled = true;

      try {

        await Auth.logout();

      } catch (error) {

        logoutButton.disabled = false;

        alert("Unable to logout.");

      }

    }
  );
}


/* =========================================================
   AUTO INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    setupLogout();

    /*
      If this page is the dashboard,
      make sure the user is authenticated.
    */

    if (
      window.location.pathname === "/dashboard" ||
      document.body.dataset.page === "dashboard"
    ) {

      await protectDashboard();

    }

  }
);