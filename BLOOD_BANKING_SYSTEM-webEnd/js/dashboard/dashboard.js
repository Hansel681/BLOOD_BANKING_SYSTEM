document.getElementById('modeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

const ctx1 = document.getElementById('patientStatistic').getContext('2d');


const patientStatisticChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'],
        datasets: [{
            label: 'Patients',
            data: [12, 19, 3, 5],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
