const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const hexValue = formData.get("hex-value").slice(1);
  const mode = formData.get("mode");
  fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}`)
    .then((res) => res.json())
    .then((data) => renderColors(data));
});

function renderColors(data) {
  const html = data.colors
    .map(function (color) {
      return `<div class="color-container">
        <div class="color" style="background-color: ${color.hex.value}"></div>
        <p class="hex-value">${color.hex.value}</p>
    </div>`;
    })
    .join("");
  document.querySelector(".scheme-container").innerHTML = html;
}
