window.addEventListener('load', async()=>{
    await authCheck()
})

async function authCheck(){
    let data = await localStorage.getItem("userAuth")
    let auths = JSON.parse(data)
    
    // console.log(auths)
    if(auths.user !== "null"){
        document.getElementById("username").innerHTML = "<span>"+auths.Semail+"</span>"
    }else{
        document.getElementById("loginfirst").innerHTML = "<span>"+"Please Login First"+"</span>"
    }
}

const currentUser = {};

// console.log(currentUser)
let ifLoggedOut = () => {
        
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            currentUser.key = user.uid;
 return firebase.database().ref('/user/' + currentUser.key).once('value').then(function(snapshot) {
                currentUser.data = snapshot.val();

                // console.log(snapshot.val())
              });
        }
        else{
           
            location = 'home.html';
        }
      });
}
                                 // *********Logout ********
function Logout() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
        // Sign-out successful.
        setTimeout(function(){

            window.location = "home.html"
    
        }, 2000);
                swal({
                
                    title: "BYE BYE!",
                    text: "Successfuly LogOut",
                    type: "success",
                    button: "Ok",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                
                    })

    })
    .catch(function (error) {
        // An error happened.
        var errorMessage = error.message;
        swal({
            title: "Internet Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
        });
    });
}
// ifLoggedOut();


    
