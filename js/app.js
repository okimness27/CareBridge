// ==============================
// NAVIGATION FUNCTIONS
// ==============================

// Go to Login page
function goToLogin() {
    window.location.href = "login.html";
}

// Go to Register (index)
function goToRegister() {
    window.location.href = "index.html";
}

// Go to Profile Setup
function goToProfile() {
    window.location.href = "profile-setup.html";
}

// Go to Dashboard
function goToDashboard() {
    window.location.href = "dashboard.html";
}

// Go to Resources
function goToResources() {
    window.location.href = "resources.html";
}

// Go to Content Page
function goToContent() {
    window.location.href = "content.html";
}

// Go to AI Assistant
function goToAI() {
    window.location.href = "ai-assistant.html";
}

// Go to Booking
function goToBooking() {
    window.location.href = "subscription.html";
}

// Go to Payment
function goToPayment() {
    window.location.href = "payment.html";
}

// Go to Confirmation
function goToConfirmation() {
    window.location.href = "confirmation.html";
}

function goToMyBookings() {
    window.location.href = "confirmation.html";
}


// ==============================
// UI FUNCTIONS (OPTIONAL BUT NICE)
// ==============================

// Toggle password visibility
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        icon.innerText = "🙈";
    } else {
        input.type = "password";
        icon.innerText = "👁";
    }
}


// ==============================
// SIMPLE VALIDATION (OPTIONAL)
// ==============================

function simpleLogin() {
    alert("Login successful (demo only)");
    goToDashboard();
}

function simpleRegister() {
    alert("Account created (demo only)");
    goToProfile();
}

function goToResources() {
    window.location.href = "resources.html";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userText = input.value.trim();
    if (userText === "") return;

    // USER MESSAGE
    chatBox.innerHTML += `
        <div class="message user">
            <p>${userText}</p>
        </div>
    `;

    input.value = "";

    // THINKING MESSAGE
    const thinkingId = "thinking" + Date.now();

    chatBox.innerHTML += `
        <div class="message ai" id="${thinkingId}">
            <p>AI is thinking...</p>
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    // DELAY (SIMULATE AI)
    setTimeout(() => {
      let answer = "";

// ==============================
// DOCTOR RELATED (ADD THIS FIRST)
// ==============================

// OB-GYNE
if (userText.toLowerCase().includes("ob") || userText.toLowerCase().includes("gyne")) {
    answer = `
    <strong>OB-GYNE Consultation</strong><br><br>

    An OB-GYNE specializes in women's reproductive health, pregnancy care, prenatal checkups, and safe delivery.<br><br>

    You should consult an OB-GYNE if you are pregnant, planning to get pregnant, or experiencing concerns related to your reproductive health.
    `;
}

// PSYCHIATRIST
else if (userText.toLowerCase().includes("psychiatrist") || userText.toLowerCase().includes("mental")) {
    answer = `
    <strong>Psychiatrist Consultation</strong><br><br>

    A psychiatrist focuses on mental health, including stress, anxiety, and postpartum depression.<br><br>

    Parents, especially mothers, should consult a psychiatrist if they feel overwhelmed, emotionally drained, or experience mood changes after childbirth.
    `;
}

// PEDIATRICIAN
else if (userText.toLowerCase().includes("pediatric") || userText.toLowerCase().includes("baby")) {
    answer = `
    <strong>Pediatric Consultation</strong><br><br>

    A pediatrician is responsible for a child's health, growth, and development.<br><br>

    You should bring your baby for regular checkups, vaccinations, or if you notice symptoms like fever, poor feeding, or unusual behavior.
    `;
}


// ==============================
// YOUR ORIGINAL CODE (UNCHANGED)
// ==============================

else if (userText.toLowerCase().includes("newborn")) {
    answer = `
    <strong>Newborn Care Guide</strong><br><br>

    Taking care of a newborn can feel overwhelming, but focusing on the basics will help you build confidence as a parent.<br><br>

    <strong>1. Feeding:</strong><br>
    Newborns need to be fed every 2–3 hours. Breastfeeding is recommended, but formula feeding is also a valid option depending on your situation.<br><br>

    <strong>2. Sleep:</strong><br>
    Babies sleep most of the day, usually 16–18 hours. Always place your baby on their back to sleep to reduce the risk of sudden infant death syndrome (SIDS).<br><br>

    <strong>3. Hygiene:</strong><br>
    Keep your baby clean by bathing them 2–3 times a week. Always keep the umbilical cord area dry until it naturally falls off.<br><br>

    <strong>4. Health Monitoring:</strong><br>
    Watch for signs such as fever, poor feeding, or unusual crying. If you notice anything concerning, consult a doctor immediately.<br><br>

    Remember: It’s normal to feel unsure at first—learning comes with time and experience.
    `;
} 

else if (userText.toLowerCase().includes("pregnancy")) {
    answer = `
    <strong>Pregnancy Care Tips</strong><br><br>

    Maintaining a healthy lifestyle during pregnancy is important for both the mother and the baby.<br><br>

    <strong>1. Eat a Balanced Diet:</strong><br>
    Include fruits, vegetables, protein, and whole grains in your meals. Avoid processed foods and excessive sugar intake.<br><br>

    <strong>2. Stay Hydrated:</strong><br>
    Drinking enough water supports your baby’s development and helps maintain your energy levels.<br><br>

    <strong>3. Regular Checkups:</strong><br>
    Visit your doctor regularly to monitor your baby’s growth and detect any issues early.<br><br>

    <strong>4. Rest and Relaxation:</strong><br>
    Pregnancy can be physically demanding. Make sure to get enough sleep and avoid stress whenever possible.<br><br>

    <strong>5. Avoid Harmful Substances:</strong><br>
    Stay away from alcohol, smoking, and excessive caffeine to ensure a safe pregnancy.<br><br>

    Taking care of yourself is the first step in taking care of your baby.
    `;
} 

else {
    answer = `
    <strong>I'm here to help!</strong><br><br>

    You can ask questions like:<br>
    • "How do I take care of a newborn?"<br>
    • "What should I do during pregnancy?"<br>
    • "What does an OB-GYNE do?"<br>
    • "When should I consult a psychiatrist?"<br>
    • "When should I bring my baby to a pediatrician?"<br><br>

    I’ll provide helpful guidance based on your question.
    `;
}


// REPLACE THINKING WITH ANSWER
document.getElementById(thinkingId).innerHTML = `
    <p>${answer}</p>
`;

chatBox.scrollTop = chatBox.scrollHeight;

    }, 1500);
}

let selectedDoctorName = "";
let selectedPlanName = "";
let selectedPrice = "";

// SELECT PLAN
function selectPlan(plan, price) {
    selectedPlanName = plan;
    selectedPrice = price;

    document.getElementById("selectedPlan").innerText =
        "Selected Plan: " + plan + " (" + price + ")";

    // Show badge on all doctor cards
    const badges = document.querySelectorAll(".badge");
    badges.forEach(badge => {
        badge.style.display = "inline-block";
        badge.innerText = plan;
    });
}

// SELECT DOCTOR
function selectDoctor(name) {
    selectedDoctorName = name;
    document.getElementById("selectedDoctor").innerText =
        "Selected: " + name;
}

// CONFIRM
function confirmBooking() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!selectedPlanName || !selectedDoctorName || !date || !time) {
        alert("Please complete all fields!");
        return;
    }

    const booking = {
        doctor: selectedDoctorName,
        plan: selectedPlanName,
        price: selectedPrice,
        date: date,
        time: time
    };

    // SAVE latest (for confirmation page)
    localStorage.setItem("latestBooking", JSON.stringify(booking));

    // SAVE to inbox list
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // ALERT FIRST
    alert(
        "Booking Confirmed!\n\n" +
        "Doctor: " + selectedDoctorName + "\n" +
        "Plan: " + selectedPlanName + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

    // THEN REDIRECT
    window.location.href = "confirmation.html";
}

function toggleDoctor(card, name) {
    // select doctor
    selectedDoctorName = name;
    document.getElementById("selectedDoctor").innerText =
        "Selected: " + name;

    // toggle description
    const desc = card.querySelector(".doctor-desc");

    if (desc.style.display === "block") {
        desc.style.display = "none";
        card.classList.remove("active");
    } else {
        desc.style.display = "block";
        card.classList.add("active");
    }
}

function cancelBooking(btn) {
    const card = btn.closest(".booking-card");
    card.style.opacity = "0";

    setTimeout(() => {
        card.remove();
        document.getElementById("bookAgainBtn").style.display = "inline-block";
    }, 300);
}

/* OPEN MODAL */
function openModal() {
    document.getElementById("bookingModal").style.display = "flex";
}

/* CLOSE MODAL */
function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

/* SUBMIT FINAL BOOKING */
function submitBooking() {
    const name = document.getElementById("name").value;
    const spouse = document.getElementById("spouse").value;
    const baby = document.getElementById("baby").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const date = document.getElementById("modalDate").value;
    const time = document.getElementById("modalTime").value;

    if (!name || !baby || !email || !contact || !date || !time) {
        alert("Please complete required fields!");
        return;
    }

    const booking = {
        doctor: selectedDoctorName,
        plan: selectedPlanName,
        price: selectedPrice,
        name,
        spouse,
        baby,
        email,
        contact,
        date,
        time
    };

    localStorage.setItem("latestBooking", JSON.stringify(booking));

    alert("Booking Confirmed!");

    window.location.href = "confirmation.html";
}

/* SHOW AVAILABLE DATES */
function showSchedule(card) {

    // 🔥 REMOVE all other schedules first
    document.querySelectorAll(".schedule").forEach(s => s.innerHTML = "");

    const scheduleDiv = card.querySelector(".schedule");

    // add label first
    scheduleDiv.innerHTML = `<p style="font-size:12px; color:#888; margin-bottom:5px;">Available Schedule:</p>`;

    // generate next 7 days
    for (let i = 1; i <= 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);

        let formatted = date.toISOString().split("T")[0];

        scheduleDiv.innerHTML += `
            <span onclick="selectDate('${formatted}')">
                ${formatted}
            </span>
        `;
    }
}

function handleDoctorClick(event, card, name) {
    event.stopPropagation(); // 🔥 prevent global reaction

    toggleDoctor(card, name);
    showSchedule(card);
}

/* SELECT DATE → OPEN MODAL */
function selectDate(date) {
    document.getElementById("modalDate").value = date;

    openModal();
}

function subscribePremium() {
    localStorage.setItem("isPremium", "true");

    alert("Subscription successful!");

    window.location.href = "booking.html"; // 🔥 direct to booking
}