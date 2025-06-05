document.addEventListener('DOMContentLoaded', function () {
  const dias = [1,2,3,4,5,6,7,8,9,10];
  const niveis = [0.8,1.1,1.5,1.9,2.3,2.7,3.0,2.6,2.1,1.4];
  const risco = 2;
  const corBarras = niveis.map(n => n > risco ? '#F44336' : '#2196F3');

  const ctx = document.getElementById('riverLevelChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dias.map(d => `Dia ${d}`),
      datasets: [{
        label: 'Nível do Rio (m)',
        data: niveis,
        fill: true,
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33,150,243,0.08)',
        pointBackgroundColor: corBarras,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4
      },
      {
        label: 'Limite de Risco (2m)',
        data: Array(dias.length).fill(risco),
        borderColor: '#F44336',
        borderDash: [8,4],
        pointRadius: 0,
        fill: false,
        type: 'line'
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Evolução do Nível do Rio Quitandinha – 10 Dias de Chuva',
          font: { size: 18 }
        },
        legend: {
          display: true
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              label += context.parsed.y + ' m';
              if(context.parsed.y > risco && context.dataset.label === 'Nível do Rio (m)') {
                label += ' (Risco de enchente)';
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          title: { display: true, text: 'Nível (m)' },
          min: 0,
          max: 3.5,
          ticks: {
            stepSize: 0.5
          },
          grid: { color: '#eee' }
        },
        x: {
          title: { display: true, text: 'Dias consecutivos de chuva' }
        }
      }
    }
  });
});