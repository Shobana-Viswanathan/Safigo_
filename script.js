let generatedOTP = "";

// Generate OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Send OTP
document.getElementById("sendOtpBtn").addEventListener("click", function () {
    const phoneInput = document.getElementById('phone').value;
    const username = document.getElementById('username').value;

    if (!username) {
        alert("Please enter your username.");
        return;
    }

    if (!phoneInput || phoneInput.length !== 10 || isNaN(phoneInput)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    generatedOTP = generateOTP();
    alert(`[Test Mode] Your OTP is: ${generatedOTP}`); // Display OTP for testing
    document.getElementById('otp').removeAttribute('disabled');
});

// OTP Verification
document.getElementById('otp').addEventListener("input", function () {
    const enteredOTP = document.getElementById('otp').value;
    const loginBtn = document.getElementById('loginBtn');

    if (enteredOTP === generatedOTP) {
        alert("✅ OTP Verified Successfully!");
        loginBtn.style.display = "block";  // Show Register Button
    } else {
        loginBtn.style.display = "none";   // Hide Register Button
    }
});

// Login Redirection
function handleLogin() {
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    // Save username and phone to localStorage for later use
    localStorage.setItem("userName", username);
    localStorage.setItem("userPhone", `+91 ${phone}`);

    window.location.href = "main.html";  // Redirect to main.html
}

