const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const url = 'submit-to-google-sheet'; 

        fetch(url, {
            method: 'POST',
            body: data,
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form');
        });
    });