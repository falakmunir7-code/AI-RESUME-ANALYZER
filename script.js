const button = document.querySelector("button");

const resumeInput =
  document.getElementById("resumeUpload");

resumeInput.addEventListener("change", function () {

  const fileName =
    resumeInput.files[0]?.name || "";

  document.getElementById("file-name").innerText =
    fileName;

});

button.addEventListener("click", function () {

  const fileInput =
    document.getElementById("resumeUpload");

  // Stop if no file uploaded
  if (fileInput.files.length === 0) {
    alert("Please upload a resume first!");
    return;
  }

  // Show result section
  document.querySelector(".result-box")
    .classList.remove("hidden");

  // Different skill sets
  const skillsData = [

    ["Python", "HTML"],

    ["Java", "SQL", "Excel"],

    ["Machine Learning", "Data Analysis", "Flask", "Python"],

    ["JavaScript", "React", "Node.js", "CSS", "HTML"]

  ];

  // Suggestions
  const suggestionsData = [

    ["Add more projects", "Improve formatting"],

    ["Include certifications", "Add GitHub link"],

    ["Add internships", "Improve skills section"],

    ["Use better resume design", "Add achievements"]

  ];

  // Random skills
  const randomSkills =
    skillsData[Math.floor(Math.random() * skillsData.length)];

  // Random suggestions
  const randomSuggestions =
    suggestionsData[Math.floor(Math.random() * suggestionsData.length)];

  // Score based on skills count
  const score =
    randomSkills.length * 20;

  // Update score
  document.querySelector(".score-circle")
    .innerHTML = score + "%";

  // Update skills
  const skillsContainer =
    document.querySelector(".skills");

  skillsContainer.innerHTML = "";

  randomSkills.forEach(skill => {

    skillsContainer.innerHTML +=
      `<span>${skill}</span>`;

  });

  // Update suggestions
  const ul =
    document.querySelector("ul");

  ul.innerHTML = "";

  randomSuggestions.forEach(item => {

    ul.innerHTML +=
      `<li>${item}</li>`;

  });

})