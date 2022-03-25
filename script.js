const avisoCookies = document.getElementById("cookies-consent-sdk");
const btnEnter = document.getElementById("btnEnter");
const botonAceptarCookies = document.getElementById(
  "cookies-accept-btn-handler"
);

const botonRejectCookies = document.getElementById(
  "cookies-reject-all-handler"
);

dataLayer = [];

if (!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
} else {
  dataLayer.push({ event: "cookies-aceptadas" });
}

botonAceptarCookies.addEventListener("click", () => {
  btnEnter.style.display = "block";
  avisoCookies.classList.remove("activo");
  localStorage.setItem("cookies-aceptadas", true);
  dataLayer.push({ event: "cookies-aceptadas" });
});

botonRejectCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  btnEnter.style.display = "none";
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
});
