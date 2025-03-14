
// Show the details of the selected program
function showProgramDetails(program) {
    const programInfo = {
        '3-month': 'The 3-month program offers 3 hours of training per day, 5 days a week, covering core digital literacy and IT skills.',
        '6-month': 'The 6-month program offers 1.5 hours per day, 5 days a week, ideal for working professionals.',
        'weekend': 'The weekend program is designed for those with busy weekdays, with 9 hours of training on Saturdays and Sundays.',
        'fast-track': 'The fast-track program is an intensive course with 9 hours of training per day for 30 days, perfect for quick learners.'
    };

    document.getElementById('program-info').textContent = programInfo[program];
    document.getElementById('program-details').classList.remove('hidden');
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been received.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
