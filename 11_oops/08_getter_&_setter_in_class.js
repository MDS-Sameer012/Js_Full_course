// one simple use case of getter and setter let we want to give encrypted password when asked not actual password

class Student{
    static studentId = 0;
    constructor(name , rollno){

        this.name = name;
        this.rollno = rollno;
        this.password = '';
        console.log(`password : [${this._password}]`);
        Student.assignStudentId(this);
    }

    static assignStudentId(instance){
        instance.studentId = ++Student.studentId;
    }
    get password(){
        return Student.encryptedPass(this._password);
    }
    set password(userPassword){
        console.log('inside set');
        if(userPassword){
            console.log('inside set loop');
            this._password = userPassword;
        }
    }
    static encryptedPass(userPassword){
        if(!userPassword){
            return 'Password Not Set';
        }else{
           let passArray = userPassword.split('');
            passArray.forEach((char,index) => {
                passArray[index] =index%2===0? char.toUpperCase():String.fromCharCode(passArray[index].charCodeAt(0)+1);
            });
            return passArray.join('');
        }
    }
    decryptPass(userPassword){
       let passArray = userPassword.split('');
        passArray.forEach((char,index)=>{
            passArray[index] = index%2 ===0 ? char.toLowerCase() : String.fromCharCode(passArray[index].charCodeAt(0)-1);
        })
        return passArray.join('');
    }
    get  name(){
        console.log('inside getter');
        return this._name;
    }
    set name(studetnName){
        this._name = studetnName;
        console.log('inside setter : '+this._name);
    }
}


const sameer = new Student('Sameer',12);
const sohail = new Student('Sohail',15);
const hitesh = new Student('Hitesh',39);
console.log('******************************');
// sameer.name='Mohd. Sameer';
// console.log(sameer.name);
// console.log(sohail);
// console.log(hitesh);

sameer.password = 'apple3984';
// console.log(`Orignal Password : ${sameer._password}`);
// console.log(`Encrypted Password : ${sameer.password}`);
// console.log(`Decrypted Password : ${sameer.decryptPass(sameer.password)}`);

