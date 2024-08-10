let contactCount = 0;

document.getElementById('contact-form').addEventListener
('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted');

      let name =
    document.getElementById('name') .value;
      let email =
    document.getElementById('email') .value;
      let phone =
    document.getElementById('phone') .value;

    if (name && email && phone) {
       contactCount++;
      
       let li = 
       document.createElement('li');
       li.innerHTML = `${contactCount}. ${name} (${email}, ${phone})
       <button onclick="deleteContact(this)">Delete</button>  `;

       document.getElementById('contact-list').appendChild(li);
       document.getElementById('name').value =''
       document.getElementById('email').value ='';
       document.getElementById('phone').value ='';
      }
});
function 
deleteContact(button) {
      let li =
    button.parentElement;
      li.remove();
    updateContactNumbers();
   }

function
updateContactNumbers() {
 contactCount = 0;
 let listItems =
 document.querySelectorAll('#contact-list li');
 listItems.forEach(function(li) {
    contactCount++;
    li.firstChild.nodeValue =
    `${contactCount}. ${li.firstChild.nodeValue.split('. ')[1]}`;
   });
}