function signup() {
    var Sname = document.getElementById('Sname').value;
    var Seducation = document.getElementById('Seducation').value;
    var Scityname = document.getElementById('Scityname').value;
    var Semail = document.getElementById('Semail').value;
    var Spassword = document.getElementById('Spassword').value;
    var gender = document.getElementById('genderSelect').value;
    var Contact = document.getElementById('Contact').value;
    let file = document.getElementById('profile').files[0];

    var NameReg = /^([a-zA-Z])/;
    var CityReg = /^([a-zA-Z])/;
    var EducationReg = /^([a-zA-Z])/;
    var EmailReg = /([a-z\d_-]+)@([a-z\d_-]+)\.[a-z]{2,4}/;
    var PasswordReg = /^([a-zA-Z0-9]{6,10})/;
    var ContactReg = /^([0-9]{11})/;

    if (Sname.match(NameReg)) {
        document.getElementById("SnameEror").innerText = "";
        
    } else {
        document.getElementById("SnameEror").innerText = "Please Enter Your Name";
        document.getElementById('SnameEror').setAttribute('class', "text-danger");
        return false;
    }
    
    if (Seducation.match(EducationReg)) {
        document.getElementById("SeducationEror").innerText = "";
        
    } else {
        document.getElementById("SeducationEror").innerText = "Please Enter Your City Name";
        document.getElementById('SeducationEror').setAttribute('class', "text-danger");
        return false;
    }
    if (Scityname.match(CityReg)) {
        document.getElementById("ScitynameEror").innerText = "";
        
    } else {
        document.getElementById("ScitynameEror").innerText = "Please Enter Your City Name";
        document.getElementById('ScitynameEror').setAttribute('class', "text-danger");
        return false;
    }

    if (Semail.match(EmailReg)) {
        document.getElementById("SemailEror").innerText = "";
        
    } else {
        document.getElementById("SemailEror").innerText = "Please Correct Email Address";
        document.getElementById('SemailEror').setAttribute('class', "text-danger");
        return false;
    }
    if (Contact.match(ContactReg)) {
        document.getElementById("ScontactEror").innerText = "";
        
    } else {
        document.getElementById("ScontactEror").innerText = "Please Enter Your CONTACT NUMBER";
        document.getElementById('ScontactEror').setAttribute('class', "text-danger");
        return false;
    }
    if (Spassword.match(PasswordReg)) {
        document.getElementById("SpasswordEror").innerText = "";
    } else {
        document.getElementById("SpasswordEror").innerText = "Password Must be Between 6 - 10 contains A-Z, a-z & 0-9 only";
        document.getElementById('SpasswordEror').setAttribute('class', "text-danger");
        return false;
    }
    if (gender == "Select Gender") {
        document.getElementById('errselect').innerHTML = "Please Select Gender";
        return false
    }
    if (profile == "") {
        document.getElementById('picerr').innerHTML = "Please Select Your Picture";
        return false
    }
    // if(Sname.match(NameReg) && Seducation.match(EducationReg) && Scityname.match(CityReg) && Semail.match(EmailReg)&& Spassword.match(PasswordReg)){

            let userObj = {
                Sname,
                Scityname,
                Semail,
                Contact,
                Seducation,
                gender,
                // createTime: firebase.database.ServerValue.TIMESTAMP
            }
            document.getElementById('load').style.display = 'inline-block';
            firebase.auth().createUserWithEmailAndPassword(Semail,Spassword)
                .then((success) => {
                    let storageRef = firebase.storage().ref().child(`profile/${file.name}`)
                    storageRef.put(file).then((url) => {
                        url.ref.getDownloadURL().then((urlref) => {
                            userObj.profile = urlref;
                            let userId = firebase.auth().currentUser.uid;
        
                            firebase.database().ref("userObj/" + userId).set(userObj).then(() => {
                                swal({
                                    title: "Success",
                                    text: "Your Account Has Been Created Successfully!",
                                    icon: "success",
                                    button: "ok",
                                });
                                document.getElementById('load').style.display = 'none';
                                window.location = 'login.html'
                            })
        
                        }).catch((err) => {
                            document.getElementById('load').style.display = 'none';
                            console.error(err.message)
                            console.log(err)
                            swal({
                                title: "Error",
                                text: err.message,
                                icon: "error",
                                button: "ok",
                            });
                        })
        
                    }).catch((err) => {
                        document.getElementById('load').style.display = 'none';
                        console.error(err.message)
                        console.log(err)
                        swal({
                            title: "Error",
                            text: err.message,
                            icon: "error",
                            button: "ok",
                        });
                    })
                }).catch((err) => {
                    document.getElementById('load').style.display = 'none';
                    console.error(err.message)
                    console.log(err)
                    swal({
                        title: "Error",
                        text: err.message,
                        icon: "error",
                        button: "ok",
                    });
                })
        }

    
function Login() {
    let email = document.getElementById("Lemail").value;
    let password = document.getElementById("Lpassword").value;
    document.getElementById('load').style.display = 'inline-block'

    firebase.auth().signInWithEmailAndPassword(email,password)
        .then((success) => {
            //   console.log(success.user.uid)
              let db=firebase.database().ref('/')
              db.child('userObj/'+ success.user.uid).on('value',
              (snap)=>{
                  // currentUser.key = user.uid
                  
                  let value =snap.val()
                  value.id = snap.key
                  localStorage.setItem("userAuth", JSON.stringify(value))
                console.log(value.contact)
            })
            setTimeout(function(){

            window.location = 'Welcome.html'
        
            }, 2000);
                    swal({
                        title: "Welcome",
                        text: "Successfuly Login",
                        type: "success",
                        button: "Ok",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    
                        })
        })
        .catch(function (error) {
            document.getElementById('load').style.display = 'none';

            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Authentication Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
            
        });
}




