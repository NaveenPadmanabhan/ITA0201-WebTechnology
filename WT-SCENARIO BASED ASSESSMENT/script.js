// Course data stored in a JavaScript array of objects.
const courses = [
  { code: "WT201", name: "Web Technology", credits: 4, type: "Core" },
  { code: "DS202", name: "Data Structures", credits: 4, type: "Core" },
  { code: "DB203", name: "Database Management Systems", credits: 3, type: "Core" },
  { code: "CN204", name: "Computer Networks", credits: 3, type: "Core" },
  { code: "AI205", name: "Introduction to Artificial Intelligence", credits: 3, type: "Elective" }
];

const form = document.getElementById("registrationForm");
const courseTableBody = document.getElementById("courseTableBody");
const courseOptions = document.getElementById("courseOptions");
const selectedCount = document.getElementById("selectedCount");
const selectedCredits = document.getElementById("selectedCredits");

function renderCourses() {
  courseTableBody.innerHTML = courses.map(course => `
    <tr>
      <td><strong>${course.code}</strong></td>
      <td>${course.name}</td>
      <td>${course.credits}</td>
      <td>${course.type}</td>
    </tr>
  `).join("");

  courseOptions.innerHTML = courses.map(course => `
    <label class="course-option">
      <input type="checkbox" name="courses" value="${course.code}">
      <span>
        <span class="course-name">${course.name}</span><br>
        <small>${course.code}</small>
      </span>
      <span class="course-meta">${course.credits} credit${course.credits !== 1 ? "s" : ""} · ${course.type}</span>
    </label>
  `).join("");

  document.querySelectorAll('input[name="courses"]').forEach(input => {
    input.addEventListener("change", updateSelection);
  });
}

// Reusable function: calculates selected course count and total credits.
function calculateSelection() {
  const selectedCodes = [...document.querySelectorAll('input[name="courses"]:checked')]
    .map(input => input.value);

  const selectedCourses = courses.filter(course => selectedCodes.includes(course.code));

  return {
    courses: selectedCourses,
    count: selectedCourses.length,
    credits: selectedCourses.reduce((total, course) => total + course.credits, 0)
  };
}

function updateSelection() {
  const selection = calculateSelection();
  selectedCount.textContent = selection.count;
  selectedCredits.textContent = selection.credits;
  document.getElementById("coursesError").textContent = "";
}

function setError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}Error`);
  if (field) field.classList.toggle("invalid", Boolean(message));
  if (error) error.textContent = message;
}

function clearErrors() {
  ["registerNumber", "studentName", "email", "department", "semester"].forEach(id => {
    setError(id, "");
  });
  document.getElementById("coursesError").textContent = "";
}

function validateForm() {
  clearErrors();
  let valid = true;

  const registerNumber = document.getElementById("registerNumber").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const semester = Number(document.getElementById("semester").value);
  const selection = calculateSelection();

  if (!registerNumber) {
    setError("registerNumber", "Register number is required.");
    valid = false;
  }

  if (!studentName || studentName.length < 2) {
    setError("studentName", "Enter a valid student name.");
    valid = false;
  }

  // Browser-side email validation using a practical format check.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("email", "Enter a valid email address.");
    valid = false;
  }

  if (!department) {
    setError("department", "Select your department.");
    valid = false;
  }

  // Semester must be an integer from 1 through 8.
  if (!Number.isInteger(semester) || semester < 1 || semester > 8) {
    setError("semester", "Semester must be between 1 and 8.");
    valid = false;
  }

  if (selection.count === 0) {
    document.getElementById("coursesError").textContent =
      "Select at least one course.";
    valid = false;
  }

  return valid;
}

function displaySummary() {
  const selection = calculateSelection();

  document.getElementById("summaryEmpty").classList.add("hidden");
  document.getElementById("summaryContent").classList.remove("hidden");

  document.getElementById("summaryName").textContent =
    document.getElementById("studentName").value.trim();
  document.getElementById("summaryRegister").textContent =
    document.getElementById("registerNumber").value.trim();
  document.getElementById("summaryDepartment").textContent =
    document.getElementById("department").value;
  document.getElementById("summaryCredits").textContent = selection.credits;

  document.getElementById("summaryCourses").innerHTML = selection.courses
    .map(course => `<li><strong>${course.code}</strong> — ${course.name} (${course.credits} credits)</li>`)
    .join("");
}

form.addEventListener("submit", event => {
  event.preventDefault();

  if (validateForm()) {
    displaySummary();

    // Requirement 10: debugging evidence in the browser console.
    console.log("Registration validated successfully.");
    console.log("Selected courses:", calculateSelection().courses);
    console.log("Total credits:", calculateSelection().credits);
  }
});

renderCourses();
updateSelection();
