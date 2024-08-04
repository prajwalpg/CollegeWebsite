document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form data (simple validation)
    if (username && email && password) {
        // Create an object to hold the form data
        const formData = {
            username: username,
            email: email,
            password: password
        };

        // Log form data to the console (for demonstration purposes)
        console.log('Form Data Submitted:', formData);

        // You can send form data to the server using fetch() or XMLHttpRequest
        // Here is an example using fetch():
        fetch('https://your-server-endpoint.com/api/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Account created successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error creating your account. Please try again.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});
