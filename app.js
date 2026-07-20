const html = document.documentElement;
const button = document.getElementById("themeBtn");
const icon = button?.querySelector("i");

function applyTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  if (icon) {
    icon.setAttribute("data-lucide", theme === "dark" ? "moon" : "sun");
    lucide.createIcons();
  }
}

button?.addEventListener("click", () => {
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") {
  applyTheme(saved);
} else {
  applyTheme("dark");
}
