function reset() {
  document.querySelector("#bmi-result").innerHTML = "";
  document.querySelector("#bmi-message").innerHTML = "";
  document
    .querySelector("#bmi-result")
    .appendChild(document.createTextNode("Your BMI is : "));
  document
    .querySelector("#bmi-message")
    .appendChild(document.createTextNode("You are "));
}

function calculateBmi() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const resultSection = document.querySelector("#result-section");

    document.querySelector("#error-height")?.remove();
    document.querySelector("#error-weight")?.remove();
    reset();

    if (height === "" || height <= 0 || isNaN(height)) {
      if (!document.getElementById("error-height")) {
        const errorMessage = document.createElement("h3");
        errorMessage.setAttribute("id", "error-height");
        errorMessage.style.color = "red";
        errorMessage.appendChild(
          document.createTextNode("Please Enter Valid Height")
        );

        resultSection.appendChild(errorMessage);
      }
    } else {
      document.querySelector("#error-height")?.remove();
    }

    if (weight === "" || weight <= 0 || isNaN(weight)) {
      if (!document.getElementById("error-weight")) {
        const errorMessage = document.createElement("h3");

        errorMessage.setAttribute("id", "error-weight");
        errorMessage.style.color = "red";
        errorMessage.appendChild(
          document.createTextNode("Please Enter Valid Weight")
        );

        resultSection.appendChild(errorMessage);
      }
    } else {
      document.querySelector("#error-weight")?.remove();

      if (!document.getElementById("error-height")) {
        const bmi = (weight / Math.pow((height/100), 2)).toFixed(2);

        const result = document.createElement("span");
        //   result.setAttribute("id", "bmi-result");

        const resultMessage = document.createElement("span");
        //   resultMessage.setAttribute("id", "bmi-message");

        result.appendChild(document.createTextNode(`${bmi}`));

        if (bmi < 18.6) {
          result.style.color = "red";
          resultMessage.style.color = "red";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Under Weight"));
          document.querySelector('body').style.backgroundColor = '#ffd1d1';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
          result.style.color = "green";
          resultMessage.style.color = "green";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Healthy"));
          document.querySelector('body').style.backgroundColor = 'lightgreen';
        } else {
          result.style.color = "orange";
          resultMessage.style.color = "orange";
          resultMessage.style.textDecoration = "underline";
          resultMessage.appendChild(document.createTextNode("Over Weight"));
          document.querySelector('body').style.backgroundColor = '#ffcbc5';
        }
        reset();
        document.querySelector("#bmi-result").appendChild(result);
        document.querySelector("#bmi-message").appendChild(resultMessage);
      }
    }
  });
}

calculateBmi();
