// Map JavaScript File for InfraCheck

// Função para inicializar o mapa interativo de danos
function initMap() {
  const mapElement = document.getElementById('interactive-map');
  if (!mapElement) return;

  // Remove indicador de carregamento do mapa
  const loadingIndicator = document.querySelector('.map-loading');
  if (loadingIndicator) {
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
    }, 1500); // Simula tempo de carregamento
  }

  // Aqui seria feita a inicialização real do mapa com biblioteca de mapas
  console.log('Mapa interativo inicializado');
}

// Função para inicializar o mapa de rotas
function initRouteMap() {
  const routeMapElement = document.getElementById('route-map');
  if (!routeMapElement) return;

  // Aqui seria feita a inicialização real do mapa de rotas
  console.log('Mapa de rotas inicializado');
}

// Função para inicializar o mapa de seleção de localização
function initLocationPicker() {
  const locationPickerElement = document.getElementById('location-picker-map');
  if (!locationPickerElement) return;

  // Aqui seria feita a inicialização real do mapa de seleção de localização
  console.log('Mapa de seleção de localização inicializado');
}

// Função para ativar filtros do mapa
function initMapFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
  if (!filterCheckboxes.length) return;

  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Aqui seria feita a filtragem dos marcadores no mapa
      console.log(`Filtro alterado: ${checkbox.name} = ${checkbox.checked}`);
    });
  });
}

// Função para cálculo de rotas
function initRouteCalculation() {
  const calculateRouteBtn = document.getElementById('calculate-route');
  if (!calculateRouteBtn) return;

  calculateRouteBtn.addEventListener('click', () => {
    // Obtém parâmetros da rota
    const startLocation = document.getElementById('route-start').value;
    const endLocation = document.getElementById('route-end').value;
    const routeType = document.querySelector('input[name="route-type"]:checked').value;
    const vehicleType = document.querySelector('input[name="vehicle-type"]:checked').value;

    if (!startLocation || !endLocation) {
      alert('Por favor, insira os endereços de origem e destino.');
      return;
    }

    // Simula cálculo de rota
    console.log(`Calculando rota de ${startLocation} para ${endLocation}`);
    console.log(`Tipo de rota: ${routeType}, Veículo: ${vehicleType}`);

    // Simula exibição dos resultados da rota
    document.getElementById('route-distance').textContent = '12.5 km';
    document.getElementById('route-time').textContent = '28 min';
    document.getElementById('route-warnings').textContent = '3 alertas';

    // Adiciona etapas da rota
    const routeSteps = document.getElementById('route-steps');
    routeSteps.innerHTML = `
      <div class="route-step">
        <div class="step-number">1</div>
        <div class="step-instruction">Siga em direção à Av. Paulista por 2 km</div>
      </div>
      <div class="route-step warning">
        <div class="step-number"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="step-instruction">ALERTA: Alagamento reportado! Desvie pela R. Augusta</div>
      </div>
      <div class="route-step">
        <div class="step-number">2</div>
        <div class="step-instruction">Vire à direita na R. Augusta e continue por 1.5 km</div>
      </div>
      <div class="route-step">
        <div class="step-number">3</div>
        <div class="step-instruction">Vire à esquerda na Av. Rebouças e continue por 3 km</div>
      </div>
      <div class="route-step warning">
        <div class="step-number"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="step-instruction">ALERTA: Ponte com estrutura comprometida. Velocidade reduzida</div>
      </div>
      <div class="route-step">
        <div class="step-number">4</div>
        <div class="step-instruction">Continue na Av. Brigadeiro Faria Lima por 4 km</div>
      </div>
      <div class="route-step">
        <div class="step-number">5</div>
        <div class="step-instruction">Vire à direita na R. dos Pinheiros e continue por 2 km</div>
      </div>
      <div class="route-step warning">
        <div class="step-number"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="step-instruction">ALERTA: Área com risco de alagamento em caso de chuva forte</div>
      </div>
      <div class="route-step">
        <div class="step-number">6</div>
        <div class="step-instruction">Você chegou ao seu destino</div>
      </div>
    `;
  });
}

// Função para usar localização atual do usuário
function initCurrentLocation() {
  const useCurrentLocationBtn = document.getElementById('use-current-location');
  if (!useCurrentLocationBtn) return;

  useCurrentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          // Aqui seria feito o centramento do mapa na localização do usuário
          console.log(`Localização atual obtida: ${lat}, ${lng}`);
          alert(`Localização obtida com sucesso: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
        },
        error => {
          console.error('Erro ao obter localização:', error);
          alert('Não foi possível obter sua localização. Por favor, verifique as permissões do navegador.');
        }
      );
    } else {
      alert('Geolocalização não é suportada por este navegador.');
    }
  });
}

// Função para carregar mais relatórios na lista
function initLoadMoreReports() {
  const loadMoreBtn = document.getElementById('load-more-reports');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    // Simula carregamento de mais relatórios
    const reportsList = document.querySelector('.reports-list');
    const existingReports = document.querySelectorAll('.report-card');
    if (existingReports.length === 0) return;

    const reportTypesArray = ['road', 'bridge', 'building', 'power', 'water'];
    const severityArray = ['low', 'medium', 'high', 'critical'];

    // Adiciona 4 novos relatórios simulados
    for (let i = 0; i < 4; i++) {
      const newReport = document.createElement('div');
      newReport.className = 'report-card';

      const randomType = reportTypesArray[Math.floor(Math.random() * reportTypesArray.length)];
      const randomSeverity = severityArray[Math.floor(Math.random() * severityArray.length)];

      newReport.innerHTML = `
        <div class="report-header">
          <span class="report-type ${randomType}">${randomType.charAt(0).toUpperCase() + randomType.slice(1)}</span>
          <span class="report-time">Há ${Math.floor(Math.random() * 48)} horas</span>
        </div>
        <h3 class="report-title">Novo relatório de dano</h3>
        <p class="report-description">Descrição do dano reportado recentemente na região afetada.</p>
        <div class="report-footer">
          <span class="report-severity ${randomSeverity}">${randomSeverity.charAt(0).toUpperCase() + randomSeverity.slice(1)}</span>
          <a href="#" class="report-details">Ver Detalhes</a>
        </div>
      `;

      reportsList.appendChild(newReport);
    }

    // Atualiza contador de relatórios exibidos (se existir)
    const shownCountElement = document.getElementById('shown-count');
    if (shownCountElement) {
      const currentCount = parseInt(shownCountElement.textContent);
      shownCountElement.textContent = currentCount + 4;
    }
  });
}

// Função para envio do formulário de relatório de dano
function initReportForm() {
  const reportForm = document.getElementById('damage-report-form');
  if (!reportForm) return;

  reportForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aqui seria feito o envio real dos dados para o servidor
    console.log('Formulário de relatório enviado');
    alert('Relatório enviado com sucesso! Obrigado por contribuir para a segurança de todos.');
    reportForm.reset();
  });
}

// Inicializa todas as funções relacionadas ao mapa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initRouteMap();
  initLocationPicker();
  initMapFilters();
  initRouteCalculation();
  initCurrentLocation();
  initLoadMoreReports();
  initReportForm();
});