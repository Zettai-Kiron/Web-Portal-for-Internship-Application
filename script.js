
// document.getElementById('search-button').addEventListener('click', searchInternships);

document.getElementById('internship-application-form').addEventListener('submit', submitApplication);

// const internshipListings = [
//     { id: 1, title: 'Frontend Developer Intern', description: 'Internship description for Frontend Developer' },
//     { id: 2, title: 'Backend Developer Intern', description: 'Internship description for Backend Developer' },
//     { id: 3, title: 'Data Analyst Intern', description: 'Internship description for Data Analyst' },
// ];

// function searchInternships() {
//     const searchInput = document.getElementById('internship-search-input').value.toLowerCase();
//     const filteredInternships = internshipListings.filter(internship => internship.title.toLowerCase().includes(searchInput));
//     displayInternships(filteredInternships);
// }

// function displayInternships(internships) {
//     const container = document.getElementById('internship-listings-container');
//     container.innerHTML = '';

//     if (internships.length === 0) {
//         container.innerHTML = '<p>No internships found</p>';
//         return;
//     }

//     internships.forEach(internship => {
//         const internshipElement = document.createElement('div');
//         internshipElement.className = 'internship-listing';
//         internshipElement.innerHTML = `<h3>${internship.title}</h3><p>${internship.description}</p>`;
//         container.appendChild(internshipElement);
//     });
// }

function submitApplication(event) {
    event.preventDefault();

    const name = document.getElementById('applicant-name').value;
    const email = document.getElementById('applicant-email').value;
    const resume = document.getElementById('resume-upload').files[0];

    if (name && email && resume) {
        alert('Application submitted successfully!');
        document.getElementById('internship-application-form').reset();
    } else {
        alert('Please fill out all fields and upload your resume.');
    }
}

// Initially display all internships
displayInternships(internshipListings);
