class User{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
}
User.prototype.login = function()
{
    console.log(this.name, 'just Logged in')

}
User.prototype.Incscore = function()
{
    this.score++;
    return this;
}

class Admin extends User{
    constructor(username, email, title)
    {
        super(username, email);
        this.title = title;
    }
    deleteuser(user){
      users = users.filter( u => u.name !== user.name);
    }
}
const userone = new User('mario', 'mario@gmail.com');
const usertwo = new Admin('shady','chadi@lhl.uh', 'black-belt');
console.log(userone, usertwo);

userone.login();
userone.Incscore().Incscore();
console.log(userone.score);
let users = [userone, usertwo];
usertwo.deleteuser(userone);
console.log(users);