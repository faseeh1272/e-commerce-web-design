
  function signup() {
    preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const fullName = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (!fullName || !email || !password) {
      alert("Please fill in all fields.");
      return false;
    }

    // Simulate successful sign-up
    alert("Sign-up successful!");
    // Redirect to the home page
    window.location.href = "login.html";
    return false;
  }

//   login form


  function login() {
    preventDefault(); // Prevent form from refreshing the page  

    // Get input values
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;

    // Basic validation
    if (!email || !password) {
      alert("Please fill in both fields.");
      return false;
    }

    // Simulate login success
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect to the home page
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }

    return false;
  }


  