const clock = document.getElementById("clock");

// setInterval(() => {
//     const time = new Date();
//     clock.innerText = time.toLocaleTimeString(undefined,{
//         hours : '2-digit'
//     });
// }, 1000);

// More optimize approach
function updateClock() {
  const time = new Date();

  const option = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // hour12:false it will force to show 24 hour format
  };

  clock.textContent = time.toLocaleTimeString(undefined, option); // ---> here undefined means default behavior(date) of the browser;
  // if we want to display the time in the format of a particular region,
  // then we can explicitly define the locale, like for India: 'en-IN'

  requestAnimationFrame(updateClock);
}

updateClock();
