const warningCookies = document.getElementById("cookies-consent-sdk");
const btnEnter = document.getElementById("btnEnter");
const botonAceptarCookies = document.getElementById(
  "cookies-accept-btn-handler"
);

const botonRejectCookies = document.getElementById(
  "cookies-reject-all-handler"
);

dataLayer = [];

if (!localStorage.getItem("cookies-accept")) {
  warningCookies.classList.add("active");
} else {
  dataLayer.push({ event: "cookies-accept" });
}

botonAceptarCookies.addEventListener("click", function () {
  //btnEnter.style.display = 'block';
  warningCookies.classList.remove("active");
  localStorage.setItem("cookies-accept", true);
  dataLayer.push({ event: "cookies-accept" });
});

botonRejectCookies.addEventListener("click", function () {
  warningCookies.classList.remove("active");
  //btnEnter.style.display = 'none';
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
});
