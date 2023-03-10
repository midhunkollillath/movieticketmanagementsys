import Controller from "../controller/Ticketcontroller.js";
const controller = new Controller();
controller.getBooking()
.then(data=>{
    console.log(data)
    console.log(data.data)
    render(data.data)
})
.catch(err=>{
    console.log(err)
})


root.innerHTML='';
function render(tickets){
    for(i=0;i<tickets.length;i++){
      const contact = document.createElement('div')  
      contact.classList.add('contact');

      const name = document.createElement('p')
      name.innerHTML = tickets[i].name
      contact.append(name)
      root.append(contact)

      const email = document.createElement('p')
      email.innerHTML = tickets[i].email
      contact.append(email)
      root.append(contact)

      const phone= document.createElement('p')
      phone.innerHTML=tickets[i].phone
      contact.append(phone)
      root.append(contact)

    }
}
