document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new URLSearchParams(new FormData(form));

  fetch("https://script.google.com/macros/s/AKfycbxDTOKEqUmgsvGmx3JKoFFPEGxJXUlNeTV-WkxtixD-KabeZsU8Qj3mSxW2A5UUomg/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("successMessage").style.display = "block";
    form.reset();
  })
  .catch(err => {
    alert("❌ Error! Please try again.");
    console.error(err);
  });
});


  let menuIcon = document.getElementById("menu-icon");
  let navbar = document.getElementById("navbar");

  menuIcon.onclick = () => {
      navbar.classList.toggle("active");
  };



