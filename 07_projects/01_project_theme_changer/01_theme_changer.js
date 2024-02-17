function themes() {
  const themes = document.getElementById("themes");
  if (themes.style.display == "grid") {
    themes.style.display = "none";
  } else {
    themes.style.display = "grid";
  }
}

function changeTheme() {
  const themes = document.querySelectorAll(".inner-theme-color-box");

  themes.forEach((theme) => {
    theme.addEventListener("click", (e) => {
      const secondaryColor = window
        .getComputedStyle(e.target)
        .getPropertyValue("background-color");

      console.log(secondaryColor);

      const primaryColor = window
        .getComputedStyle(e.target.parentElement)
        .getPropertyValue("background-color");

      // changing colors
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        secondaryColor
      );
    });
  });
}
changeTheme();
