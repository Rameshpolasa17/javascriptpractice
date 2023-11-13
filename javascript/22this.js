function setUsername(username){
    this.username=username
}
function getUsername(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
let chai = new getUsername("Chai","Google.com","123")
console.log(chai)