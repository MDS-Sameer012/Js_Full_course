//********************************************************
// <1> fetch with async function   // --->

async function getUserData() {
  const response = fetch("https://api.github.com/users/MDS-Sameer012");
  console.log("Fetch Succesful");
  console.log(response); // --> Output : Promise { <pending> } // it will promise to give output
  setTimeout(() => {
    console.log("Set Timeout called");
    console.log(response); // --> Output : this will give some output
  }, 3000);
}

// getUserData();

async function getUserData2() {
  try {
    const response = await fetch("https://api.github.com/users/MDS-Sameer012");
    console.log(response);

    // const data = response.json(); // --->  since it also take time so we need to use await keyword here also // output : Promise { <pending> }
    const data = await response.json();
    if (data.hasOwnProperty("message")) {
      throw new Error(`Github API Error : ${data.message}`);
    }
    console.log(data); // --> Output : it will be successful even if user not found as it can get some response like this : {"message":"Not Found","documentation_url":"https://docs.github.com/rest/users/users#get-a-user"}

    console.log("FETCH SUCCESSFUL");
  } catch (error) {
    console.log(`Error : ${error}`); // --> Output : if fetch is failed it will give following output in this case i write url wrong : Error : TypeError: fetch failed
  } finally {
    console.log("Finally Called");
  }
}
// getUserData2();

//********************************************************
// <2> fetch with promise chaining   // --->

fetch(`https://api.github.com/users/MDS-Sameer012`)
  .then((response) => response.json()) // --->  then ke andar ki return statement next waale then ko value return karti hai
  .then((data) => {
    if (data.hasOwnProperty("message")) {
      throw new Error(`Github Error : ${data.message}`);
    } else {
      console.log(data);
    }
  })
  .catch((reject) => console.log(reject))
//   .catch(() => console.log("Error Succesfuly Handled")); //--> kaam ka nahi hai
