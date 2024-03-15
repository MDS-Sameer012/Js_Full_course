// here is the example of getter and setter methods in constructor function

function Student(name, rollno, email, password) {
    this.name = name;
    this.rollno = rollno;
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        set: function (value) {
            this._email = value;
        },
        get: function () {
            return this._email.toUpperCase();
        }
    })


}

Student.prototype.encryptPassword = function(pass) {
    let encryptPass = pass.split('');
    (encryptPass).forEach((char, index) => {
        if (!(char.charCodeAt(0) >= 33 && char.charCodeAt(0) <= 64)) {
            encryptPass[index] = char.toUpperCase();
        }
        encryptPass[index] = String.fromCharCode(encryptPass[index].charCodeAt(0) + 1);
    })
    return encryptPass.join('');
}

// defining get & set for password outside function

Object.defineProperty(Student.prototype, 'password', {
    get: function () {
        return this.encryptPassword(this._password);
    },
    set: function (value) {
        this._password = value;
    }
})

const sameer = new Student('Sameer', 12, 'sameer@gmail.com', 'sam123');
console.log(sameer.name);
console.log(sameer.rollno);
console.log(sameer.password);
sameer.password = 'mds23d'
console.log(sameer.password);
console.log(sameer.email);
sameer.email = 'sameer@facebook.com';
console.log(sameer.email);
