// Contact form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert(`Thanks, ${name}! Your message has been sent.`);
        // You can add further logic to handle form submission here.
    } else {
        alert('Please fill out all fields.');
    }
});
