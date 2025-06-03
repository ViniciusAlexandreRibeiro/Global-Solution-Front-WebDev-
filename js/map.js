// Map JavaScript File for InfraCheck

// Placeholder for map initialization (will use a mapping library in production)
function initMap() {
  const mapElement = document.getElementById('interactive-map');
  
  if (!mapElement) return;
  
  // Remove loading indicator
  const loadingIndicator = document.querySelector('.map-loading');
  if (loadingIndicator) {
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
    }, 1500); // Simulate loading time
  }
  
  // In a real implementation, this would initialize a map using a library like Leaflet or Google Maps
  console.log('Map initialized');
  
  // Example of how to create a basic map with Leaflet (commented out)
  /*
  const map = L.map('interactive-map').setView([-23.5505, -46.6333], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add some markers for demonstration
  const roadMarker = L.marker([-23.5505, -46.6333], {
    icon: L.divIcon({
      className: 'custom-marker road-marker',
      html: '<i class="fas fa-road"></i>',
      iconSize: [30, 30]
    })
  }).addTo(map);
  
  roadMarker.bindPopup(`
    <div class="map-popup">
      <h3>Alagamento na Av. Paulista</h3>
      <p>Trecho completamente submerso próximo ao número 1500.</p>
      <div class="popup-meta">
        <span class="severity high">Alta Gravidade</span>
        <span class="status in-progress">Em Andamento</span>
      </div>
      <a href="#" class="popup-details">Ver Detalhes</a>
    </div>
  `);
  */
}

// Placeholder for route map initialization
function initRouteMap() {
  const routeMapElement = document.getElementById('route-map');
  
  if (!routeMapElement) return;
  
  // In a real implementation, this would initialize a map for the route planner
  console.log('Route map initialized');
}

// Placeholder for location picker map initialization
function initLocationPicker() {
  const locationPickerElement = document.getElementById('location-picker-map');
  
  if (!locationPickerElement) return;
  
  // In a real implementation, this would initialize a map for selecting a location
  console.log('Location picker initialized');
}

// Filter controls functionality
function initMapFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
  
  if (!filterCheckboxes.length) return;
  
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // In a real implementation, this would filter the markers on the map
      console.log(`Filter changed: ${checkbox.name} = ${checkbox.checked}`);
    });
  });
}

// Route calculation functionality
function initRouteCalculation() {
  const calculateRouteBtn = document.getElementById('calculate-route');
  
  if (!calculateRouteBtn) return;
  
  calculateRouteBtn.addEventListener('click', () => {
    // Get route parameters
    const startLocation = document.getElementById('route-start').value;
    const endLocation = document.getElementById('route-end').value;
    const routeType = document.querySelector('input[name="route-type"]:checked').value;
    const vehicleType = document.querySelector('input[name="vehicle-type"]:checked').value;
    
    if (!startLocation || !endLocation) {
      alert('Por favor, insira os endereços de origem e destino.');
      return;
    }
    
    // Simulate route calculation
    console.log(`Calculating route from ${startLocation} to ${endLocation}`);
    console.log(`Route type: ${routeType}, Vehicle type: ${vehicleType}`);
    
    // Simulate route results
    document.getElementById('route-distance').textContent = '12.5 km';
    document.getElementById('route-time').textContent = '28 min';
    document.getElementById('route-warnings').textContent = '3 alertas';
    
    // Add route steps
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

// Current location functionality
function initCurrentLocation() {
  const useCurrentLocationBtn = document.getElementById('use-current-location');
  
  if (!useCurrentLocationBtn) return;
  
  useCurrentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          // In a real implementation, this would center the map on the user's location
          console.log(`Got current location: ${lat}, ${lng}`);
          
          // Simulate setting the location
          alert(`Localização obtida com sucesso: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
        },
        error => {
          console.error('Error getting location:', error);
          alert('Não foi possível obter sua localização. Por favor, verifique as permissões do navegador.');
        }
      );
    } else {
      alert('Geolocalização não é suportada por este navegador.');
    }
  });
}

// Load more reports functionality
function initLoadMoreReports() {
  const loadMoreBtn = document.getElementById('load-more-reports');
  
  if (!loadMoreBtn) return;
  
  loadMoreBtn.addEventListener('click', () => {
    // Simulate loading more reports
    const reportsList = document.querySelector('.reports-list');
    
    // Clone existing reports to simulate loading more
    const existingReports = document.querySelectorAll('.report-card');
    if (existingReports.length === 0) return;
    
    const reportTypesArray = ['road', 'bridge', 'building', 'power', 'water'];
    const severityArray = ['low', 'medium', 'high', 'critical'];
    
    // Add 4 more reports
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
    
    // Update shown count
    const shownCountElement = document.getElementById('shown-count');
    if (shownCountElement) {
      const currentCount = parseInt(shownCountElement.textContent);
      shownCountElement.textContent = currentCount + 4;
    }
  });
}

// Report form submission
function initReportForm() {
  const reportForm = document.getElementById('damage-report-form');
  
  if (!reportForm) return;
  
  reportForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // In a real implementation, this would submit the form data to the server
    console.log('Report form submitted');
    
    // Simulate success message
    alert('Relatório enviado com sucesso! Obrigado por contribuir para a segurança de todos.');
    
    // Reset the form
    reportForm.reset();
  });
}

// Initialize all map-related functions when DOM is loaded
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