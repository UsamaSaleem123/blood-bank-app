// window.addEventListener('load', async()=>{
//     await authCheck()
// })
// const currentUser = {};
// async function authCheck(){
//     // let data = JSON.parse (localStorage.getItem("userAuth"))
//     // // let auths = JSON.parse(data)
//     // console.log(data.Semail)
//     // let db=firebase.database().ref('/')
//     //           db.child('userObj/'+ auths.user.uid).on('value',
//     //           (snap)=>{
//     //               // currentUser.key = user.uid
                  
//     //               let value =snap.val()
//     //               value.id = snap.key
//     //               localStorage.setItem("userAuth", JSON.stringify(value))
//     //             console.log(value.Semail,value.Sname)
//     //         })
    
// //     if(auths.user !== "null"){        
// //         let db=firebase.database().ref('/')
// //         db.child('userObj/').on('value',
// //         (snap)=>{
// //             // currentUser.key = user.uid
            
// //             let value =snap.val()
// //             value.id = snap.key
// //             localStorage.setItem("userAuth", JSON.stringify(value))
// //           console.log(value.Semail)
        
// // //         
// //         })
// //     }
// //     else{
// //         console.log("sorry")
// //     }
//         // console.log(value.Scityname)
// }
// function Login(){
//     //     firebase.database().ref('userObj/').on('child_added', function(data){
//         //         // var row1=document.createElement("tr");
//         //         // var col1= document.createElement("td");
//         //         console.log(data.val().Semail)
//         //         // col1.appendChild(text1);
//         //         // row1.appendChild(col1);
//         // // var body=document.getElementById("tbody");
//         let value = JSON.parse (localStorage.getItem("userAuth"))
//         // let auths = JSON.parse(data)
//         // console.log(value.Semail,value.Scityname)
//        var email = document.getElementById("email").innerHTML= "<span>"+value.Semail+"</span>"
// //     })
// }
window.addEventListener('load', async()=>{
    await newCheck()
})

async function newCheck(){
    let data = await localStorage.getItem("userAuth")
    let auths = JSON.parse(data)
    
    // console.log(auths)
    if(auths.user !== "null"){
    document.getElementById("name").innerHTML= "<span>"+"NAME:"+""+auths.Sname+"</span>"
    document.getElementById("cityname").innerHTML= "<span>"+"CITYNAME:"+""+auths.Scityname+"</span>"
    document.getElementById("email").innerHTML= "<span>"+"EMAIL:"+""+auths.Semail+"</span>"
    document.getElementById("education").innerHTML= "<span>"+"EDUCATION:"+""+auths.Seducation+"</span>"
    document.getElementById("contact").innerHTML= "<span>"+"CONTACT:"+""+auths.Contact+"</span>"
    document.getElementById("gender").innerHTML= "<span>"+"GENDER:"+""+auths.gender+"</span>"
    

    }
    else{
        document.getElementById("first").innerHTML = "<span>"+"Please Login First"+"</span>"
    }
}
function back(){
    location = "welcome.html"
}