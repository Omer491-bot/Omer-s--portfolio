// Get the form and response elements
const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

// Add event listener to the form
form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a JSON object to send to the server
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the form data to the server using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/contact', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));

    // Show a success message
    responseDiv.innerHTML = 'Message sent successfully!';
    responseDiv.style.backgroundColor = '#dff0df';
    responseDiv.style.borderColor = '#3e8e41';
}