// NOTE : this of nested function is reffrenced to global execution context

function setUserName(username) {
    this.username = username;
    console.log(`this : ${this}`);
    console.log(`username : ${username}`);
}

function createNewUser(username, email, password) {

    // setUserName(username); // --> createNewUser { email: 'sameer@gmail.com', password: '123' } [this will not set username]
    // why? : because setUserName() when this is called inside createNewUser() then
    //  1. setUserName() is pushed top over creatNewUser() local context in call stack
    //  2. after completion of setUserName() it is poped from call stack and its variables which is intialised also destroyed
    //  3. hence username of createNewUser() is not intialized

    //********************************************************
    // < 1 > functionName.call(this,argunment)   // ---> .call will solve our problem as
    // we passed refrence of current function to nested function and now nested function's
    // this will refere to parent function and username will set successfully
    
    // setUserName.call(username); // --->  as the reference is not passed so username is not set [output : [ this : Sameer ],  { username: undefined }
    
    setUserName.call(this, username); // --> Output : this : [object Object] ,username : Sameer 
    // the above line will set value for username
    
    this.email = email;
    this.password = password;
}

const sameer = new createNewUser('Sameer', 'sameer@gmail.com', '123');
console.log(sameer);