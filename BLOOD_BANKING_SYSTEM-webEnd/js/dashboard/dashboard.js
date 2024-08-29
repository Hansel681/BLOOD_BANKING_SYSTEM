
// document.addEventListener('DOMContentLoaded', () => {
//     const sidebarToggle = document.getElementById('sidebarToggle');
//     const sidebar = document.querySelector('.sidebar');
    
//     const homeLink = document.getElementById('homeLink');
//     const donateLink = document.getElementById('donateLink');
//     const notificationsLink = document.getElementById('notificationsLink');
//     const mainContent = document.querySelector('.mainContent');
  
//     sidebarToggle.addEventListener('click', () => {
//       sidebar.classList.toggle('active');
//     });
  
//     function loadSection(section) {
//       fetch(`dashboard/${section}.html`)
//         .then(response => response.text())
//         .then(html => {
//           mainContent.innerHTML = html;
//           const newChart = document.querySelector('.chart');
//           if (newChart) {
//             newChart.innerHTML = '';
//             data.forEach(value => {
//               const bar = document.createElement('div');
//               bar.classList.add('bar');
//               const barHeight = (value / maxValue) * 300;
//               bar.style.height = `${barHeight}px`;
//               const label = document.createElement('span');
//               label.textContent = value.toString();
//               bar.appendChild(label);
//               newChart.appendChild(bar);
//             });
//           }
//           if (section === 'home') {
//             fetchTestData();
//           }
//         })
//         .catch(error => {
//           console.error('Error loading section:', error);
//         });
//     }
  
//     function fetchTestData( ) {
//       fetch('http://localhost:5000/student/',{})
//         .then(response => response.json())
//         .then((data) => {
//           console.log('Data from API:', data);
//           updateCard(data);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }
  
//     function updateCard(data) {
//       const card = document.querySelector('.card-container .card:nth-child(3)');
//       const value =[]
//       if (card) {
//         for(const student of data.data){
//           value.push(student.name)
//         }
//         card.innerHTML = value
//       }
//     }
  
//     homeLink.addEventListener('click', () => {
//       loadSection('home');
//       homeLink.classList.add('active');
//       donateLink.classList.remove('active');
//       notificationsLink.classList.remove('active');
//     });
  
//     donateLink.addEventListener('click', () => {
//       loadSection('students');
//       homeLink.classList.remove('active');
//       donateLink.classList.remove('active');
//       notificationsLink.classList.remove('active');
//     });
  
//     classesLink.addEventListener('click', () => {
//       loadSection('classes');
//       homeLink.classList.remove('active');
//       studentsLink.classList.remove('active');
//       classesLink.classList.add('active');
//     });
  
  
  
//     loadSection('home');
  
//     function click(){
//       const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     document.getElementById('error').innerHTML = email +' '+password;
//       console.log(email, password)
//       // fetch("https://jsonplaceholder.typicode.com/todos", {
//       //   method: "POST",
//       //   body: JSON.stringify({
//       //     email: email,
//       //     password: password
//       //   })
//       // })
//       //   .then((response) => response.json())
//       //   .then((json) => {
    
//       //     if(json.success){
    
//       //     }
    
//       //   })
    
    
      
//     }
//   });
  
  
  
  
  
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('sidebar ul li');
        const maincontent = document.querySelector('maincontent')
    });

    links.forEach(links => {
       links.addEventListener('click', function (e) {
        e.preventDefault();

        const section = links.getAttribute('id')

        links.forEach(item => item.classList.remove('active'));
        
        link.classList.add('active');
        loadSection(section);
       }) 
    });


    function loadSection(section) {
        fetch(`dashboard/${section}.html`)
          .then(response => response.text())
          .then(html => {
            maincontent.innerHTML = html;
          })
          .catch(error => {
            console.error('server loading section:',error);
          });
        }


// const ctx1 = document.getElementById('patientStatistic').getContext('2d');



// const patientStatisticChart = new Chart(ctx1, {
//     type: 'bar',
//     data: {
//         labels: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'],
//         datasets: [{
//             label: 'Patients',
//             data: [12, 19, 3, 5],
//             backgroundColor: ['rgba(75, 192, 192, 0.2)'],
//             borderColor: ['rgba(75, 192, 192, 1)'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
        //}
  //  }
//});
