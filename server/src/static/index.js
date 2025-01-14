document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const username = formData.get('username');
            const password = formData.get('password');

            // Create a request payload
            const payload = {
                username,
                password
            };

            try {
                // Send a POST request to the auth endpoint
                const response = await fetch('http://localhost:4200/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.text(); // Handle text response

                if (result.trim() === "true") {
                    // Redirect to the dashboard if authentication is successful
                    window.location.href = './home/dash.html';
                } else {
                    // Optionally, you can display an error message or keep the form as is
                    alert('Authentication failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during authentication:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
});
