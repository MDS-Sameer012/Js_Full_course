const sameer = {
    name:"Sameer",
    age : 20,
    email : 'sameer@gmail.com',
    _password : '',

    set password(userPass){
        this._password = userPass;
    },
    get password(){
        if(!(this._password)){
            return 'Password not Set';
        }else{
            
            return  `${this._password}sameer`;
        }
    }

}

console.log(sameer.password); //--> Output : Password not Set
sameer.password = 'sam123_';
console.log(sameer.password); //--> Output : sam123_sameer