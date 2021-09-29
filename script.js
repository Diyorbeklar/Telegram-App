let newTime =  new Date();
let newHours = newTime.getHours();
let newMinuts = newTime.getMinutes();
let AmPm = newHours >= 12  ? 'pm' : 'am';

let ulElement = document.querySelector(".list-group")
ulElement.innerHTML = ` <li class="list-group-item"><img src="photo.jpg" alt="Not img" class="li-img"><span class="userName">Asadbek Zoirov  </span> <span class="clock">${newHours}:${newMinuts} ${AmPm}</span> </li>`
let navBar1 = document.querySelector(".Navbar1")
let navBar2 = document.querySelector(".Navbar2")
let navBar3 = document.querySelector(".Navbar3")
let liElement = document.querySelector(".list-group-item")
let chats = document.querySelector(".containers")

let chat = document.querySelector(".message")
liElement.addEventListener("click", e=> {
    navBar1.style.display = "none"
    navBar2.style.display = "none"
    ulElement.style.display = "none"
    navBar3.style.display = "block"
    chats.style.display = "block"
    chat.style.display = "block"
})
let clickIcon = document.querySelector(".IconClick")
clickIcon.addEventListener("click", e=> {
    navBar1.style.display = "block"
    navBar2.style.display = "block"
    ulElement.style.display = "block"
    navBar3.style.display = "none"
    chats.style.display = "none"
    chat.style.display = "none"
})
let messages = [

    {
        id:1,
        text: "Assalom alaykum",
        is_from_me: false,
    }
]

let input = document.querySelector(".inputBtn")
let btn = document.querySelector(".iconBtn")

btn.addEventListener("click", function(e) {

    let text = input.value;
    input.value = ""

    if(text){
        let message = {
            id: messages.length + 1,
            is_from_me: true,
            text: text,
            time: new Date().getTime()
        }
        messages.push(message)

     if(text === "Assalomu alaykum"){
         messages.push({
            
                id: messages.length + 1,
                text: "Yaxshimisiz",
                is_from_me: false,
            
         })} else if (text === "Ha yaxshi,hudoga shukur"){
            messages.push({
               
                   id: messages.length + 1,
                   text: "nima gap",
                   is_from_me: false,
               
            })}

        renderMessages() 
    }

})

function renderMessages() {
     chats.innerHTML = "";

    messages.forEach(function(message) {
        let newMessage = `<li class="${message.is_from_me ? "from_me" : "to_me"} id="${message.id}"> ${message.text}</li>`

        chats.innerHTML += newMessage
    })
}

renderMessages() 