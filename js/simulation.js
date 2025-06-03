// Simulation JavaScript File for SimFlood

// Placeholder for risk map initialization
function initRiskMap() {
  const riskMapElement = document.getElementById('risk-map-container');
  
  if (!riskMapElement) return;
  
  // Remove loading indicator
  const loadingIndicator = document.querySelector('.map-loading');
  if (loadingIndicator) {
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
      
      // Add placeholder content to demonstrate the map
      const mapContent = document.createElement('div');
      mapContent.className = 'placeholder-map-content';
      mapContent.innerHTML = `
        <div class="map-overlay" style="position: relative; height: 100%;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #666;">
            <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <p>Mapa de risco seria exibido aqui com uma biblioteca de mapas real</p>
          </div>
        </div>
      `;
      riskMapElement.appendChild(mapContent);
    }, 1500); // Simulate loading time
  }
}

// Placeholder for simulation map initialization
function initSimulationMap() {
  const simulationMapElement = document.getElementById('simulation-map');
  
  if (!simulationMapElement) return;
  
  // In a real implementation, this would initialize a map for the simulation
  console.log('Simulation map ready for data');
}

// Placeholder for historical map initialization
function initHistoricalMap() {
  const historicalMapElement = document.getElementById('historical-map');
  
  if (!historicalMapElement) return;
  
  // In a real implementation, this would initialize a map for historical data
  console.log('Historical map ready for data');
}

// Placeholder for preview map initialization
function initPreviewMap() {
  const previewMapElement = document.getElementById('preview-map');
  
  if (!previewMapElement) return;
  
  // In a real implementation, this would initialize a map for alert previews
  console.log('Preview map ready for data');
}

// View selector functionality
function initViewSelector() {
  const viewOptions = document.querySelectorAll('input[name="map-view"]');
  
  if (!viewOptions.length) return;
  
  viewOptions.forEach(option => {
    option.addEventListener('change', () => {
      const viewType = option.value;
      
      // In a real implementation, this would change the map view type
      console.log(`View changed to: ${viewType}`);
      
      // Simulate changing the view
      const riskMapContainer = document.getElementById('risk-map-container');
      if (riskMapContainer) {
        // Change the map's appearance based on selected view
        switch (viewType) {
          case 'risk':
            riskMapContainer.style.backgroundColor = '#f5f5f5';
            break;
          case 'elevation':
            riskMapContainer.style.backgroundColor = '#e0e0e0';
            break;
          case 'historical':
            riskMapContainer.style.backgroundColor = '#e8f5e9';
            break;
          case 'satellite':
            riskMapContainer.style.backgroundColor = '#263238';
            break;
        }
      }
    });
  });
}

// Location search functionality
function initLocationSearch() {
  const searchButton = document.getElementById('search-location');
  const locationInput = document.getElementById('risk-location');
  
  if (!searchButton || !locationInput) return;
  
  searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    
    if (!location) {
      alert('Por favor, digite um endereço ou cidade para buscar.');
      return;
    }
    
    // In a real implementation, this would search for the location on the map
    console.log(`Searching for location: ${location}`);
    
    // Simulate success
    alert(`Localização "${location}" encontrada e centralizada no mapa.`);
  });
}

// Simulation range sliders functionality
function initSimulationRangeSliders() {
  const rainfallSlider = document.getElementById('rainfall-amount');
  const rainfallValue = document.getElementById('rainfall-value');
  
  const durationSlider = document.getElementById('rainfall-duration');
  const durationValue = document.getElementById('duration-value');
  
  const saturationSlider = document.getElementById('soil-saturation');
  const saturationValue = document.getElementById('saturation-value');
  
  const tideSlider = document.getElementById('tide-level');
  const tideValue = document.getElementById('tide-value');
  
  const riverSlider = document.getElementById('river-level');
  const riverValue = document.getElementById('river-value');
  
  const densitySlider = document.getElementById('urban-density');
  const densityValue = document.getElementById('density-value');
  
  // Update displayed values when sliders change
  if (rainfallSlider && rainfallValue) {
    rainfallSlider.addEventListener('input', () => {
      rainfallValue.textContent = rainfallSlider.value;
    });
  }
  
  if (durationSlider && durationValue) {
    durationSlider.addEventListener('input', () => {
      durationValue.textContent = durationSlider.value;
    });
  }
  
  if (saturationSlider && saturationValue) {
    saturationSlider.addEventListener('input', () => {
      saturationValue.textContent = saturationSlider.value;
    });
  }
  
  if (tideSlider && tideValue) {
    tideSlider.addEventListener('input', () => {
      tideValue.textContent = parseFloat(tideSlider.value).toFixed(1);
    });
  }
  
  if (riverSlider && riverValue) {
    riverSlider.addEventListener('input', () => {
      riverValue.textContent = riverSlider.value;
    });
  }
  
  if (densitySlider && densityValue) {
    densitySlider.addEventListener('input', () => {
      densityValue.textContent = densitySlider.value;
    });
  }
}

// Run simulation functionality
function initRunSimulation() {
  const runSimulationBtn = document.getElementById('run-simulation');
  const resetSimulationBtn = document.getElementById('reset-simulation');
  const saveScenarioBtn = document.getElementById('save-scenario');
  
  const timeSlider = document.getElementById('time-slider');
  const playBtn = document.getElementById('play-simulation');
  const pauseBtn = document.getElementById('pause-simulation');
  const resetPlaybackBtn = document.getElementById('reset-playback');
  
  if (!runSimulationBtn) return;
  
  // Run simulation
  runSimulationBtn.addEventListener('click', () => {
    // Get simulation parameters
    const location = document.getElementById('sim-location').value;
    const rainfall = document.getElementById('rainfall-amount').value;
    const duration = document.getElementById('rainfall-duration').value;
    const saturation = document.getElementById('soil-saturation').value;
    const tide = document.getElementById('tide-level').value;
    const drainage = document.querySelector('input[name="drainage"]:checked').value;
    
    if (!location) {
      alert('Por favor, insira uma localização para a simulação.');
      return;
    }
    
    // In a real implementation, this would run the simulation with the provided parameters
    console.log('Running simulation with parameters:');
    console.log({ location, rainfall, duration, saturation, tide, drainage });
    
    // Simulate running the simulation
    runSimulationBtn.disabled = true;
    runSimulationBtn.textContent = 'Processando...';
    
    setTimeout(() => {
      // Update UI to show simulation results
      runSimulationBtn.disabled = false;
      runSimulationBtn.textContent = 'Executar Simulação';
      
      // Enable playback controls
      if (timeSlider) timeSlider.disabled = false;
      if (playBtn) playBtn.disabled = false;
      if (pauseBtn) pauseBtn.disabled = false;
      if (resetPlaybackBtn) resetPlaybackBtn.disabled = false;
      
      // Update visualization tab
      const simulationMap = document.getElementById('simulation-map');
      if (simulationMap) {
        simulationMap.innerHTML = `
          <div style="height: 100%; background-color: #e3f2fd; position: relative; overflow: hidden; border-radius: 8px;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(3,169,244,0.1) 0%, rgba(3,169,244,0.4) 100%);"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #0277bd;">
              <i class="fas fa-water" style="font-size: 3rem; margin-bottom: 1rem;"></i>
              <p>Simulação de enchente calculada com sucesso</p>
            </div>
          </div>
        `;
      }
      
      // Update data tab
      const dataSummary = document.querySelector('.data-summary .data-grid');
      if (dataSummary) {
        const area = (rainfall * duration * (saturation / 100)).toFixed(2);
        const population = Math.floor(area * 250);
        const depth = (rainfall * 0.01 * (saturation / 100)).toFixed(2);
        const peakTime = Math.floor(duration * 0.4);
        
        dataSummary.innerHTML = `
          <div class="data-item">
            <h4>Área Afetada</h4>
            <div class="data-value">${area} km²</div>
          </div>
          <div class="data-item">
            <h4>População Impactada</h4>
            <div class="data-value">${population} pessoas</div>
          </div>
          <div class="data-item">
            <h4>Profundidade Máxima</h4>
            <div class="data-value">${depth} m</div>
          </div>
          <div class="data-item">
            <h4>Tempo para Pico</h4>
            <div class="data-value">${peakTime} horas</div>
          </div>
        `;
      }
      
      // Update charts
      const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
      chartPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = `
          <i class="fas fa-chart-line"></i>
          <p>Dados de simulação calculados e prontos para visualização</p>
        `;
      });
      
      // Update timeline
      const timelinePlaceholder = document.querySelector('.timeline-placeholder');
      const floodTimeline = document.querySelector('.flood-timeline');
      
      if (timelinePlaceholder && floodTimeline) {
        timelinePlaceholder.style.display = 'none';
        floodTimeline.style.display = 'block';
        floodTimeline.innerHTML = `
          <div class="timeline-event">
            <div class="event-time">0h</div>
            <div class="event-marker"></div>
            <div class="event-description">Início da precipitação</div>
          </div>
          <div class="timeline-event">
            <div class="event-time">${Math.floor(duration * 0.2)}h</div>
            <div class="event-marker"></div>
            <div class="event-description">Acumulação inicial em áreas baixas</div>
          </div>
          <div class="timeline-event">
            <div class="event-time">${Math.floor(duration * 0.4)}h</div>
            <div class="event-marker highlighted"></div>
            <div class="event-description">Ponto de máxima intensidade da chuva</div>
          </div>
          <div class="timeline-event">
            <div class="event-time">${Math.floor(duration * 0.6)}h</div>
            <div class="event-marker"></div>
            <div class="event-description">Nível máximo de água nas áreas afetadas</div>
          </div>
          <div class="timeline-event">
            <div class="event-time">${Math.floor(duration * 0.8)}h</div>
            <div class="event-marker"></div>
            <div class="event-description">Início do recuo das águas</div>
          </div>
          <div class="timeline-event">
            <div class="event-time">${duration}h</div>
            <div class="event-marker"></div>
            <div class="event-description">Estabilização e recuo significativo</div>
          </div>
        `;
      }
      
      // Show an alert to inform the user
      alert('Simulação concluída com sucesso! Você pode visualizar os resultados nos diferentes painéis.');
    }, 3000); // Simulate processing time
  });
  
  // Reset simulation
  if (resetSimulationBtn) {
    resetSimulationBtn.addEventListener('click', () => {
      // Reset all form fields to default values
      const form = resetSimulationBtn.closest('form');
      if (form) form.reset();
      
      // Reset displayed values
      document.getElementById('rainfall-value').textContent = '100';
      document.getElementById('duration-value').textContent = '24';
      document.getElementById('saturation-value').textContent = '50';
      document.getElementById('tide-value').textContent = '1.0';
      
      if (document.getElementById('river-value')) {
        document.getElementById('river-value').textContent = '50';
      }
      
      if (document.getElementById('density-value')) {
        document.getElementById('density-value').textContent = '70';
      }
      
      // Reset simulation view
      const simulationMap = document.getElementById('simulation-map');
      if (simulationMap) {
        simulationMap.innerHTML = `
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>Execute a simulação para ver os resultados no mapa</p>
          </div>
        `;
      }
      
      // Disable playback controls
      if (timeSlider) {
        timeSlider.disabled = true;
        timeSlider.value = 0;
      }
      if (playBtn) playBtn.disabled = true;
      if (pauseBtn) pauseBtn.disabled = true;
      if (resetPlaybackBtn) resetPlaybackBtn.disabled = true;
      
      // Alert the user
      alert('Simulação resetada. Todos os parâmetros foram restaurados aos valores padrão.');
    });
  }
  
  // Save scenario
  if (saveScenarioBtn) {
    saveScenarioBtn.addEventListener('click', () => {
      // In a real implementation, this would save the current scenario
      const scenarioName = prompt('Digite um nome para este cenário:');
      
      if (scenarioName) {
        // Simulate saving the scenario
        alert(`Cenário "${scenarioName}" salvo com sucesso! Você poderá carregá-lo posteriormente.`);
      }
    });
  }
  
  // Playback controls
  if (playBtn && pauseBtn && resetPlaybackBtn && timeSlider) {
    let playbackInterval;
    
    playBtn.addEventListener('click', () => {
      // Start playback
      clearInterval(playbackInterval);
      playbackInterval = setInterval(() => {
        if (timeSlider.value < timeSlider.max) {
          timeSlider.value = parseInt(timeSlider.value) + 1;
          // In a real implementation, this would update the map to show the simulation at the current time
        } else {
          clearInterval(playbackInterval);
        }
      }, 100);
    });
    
    pauseBtn.addEventListener('click', () => {
      // Pause playback
      clearInterval(playbackInterval);
    });
    
    resetPlaybackBtn.addEventListener('click', () => {
      // Reset playback
      clearInterval(playbackInterval);
      timeSlider.value = 0;
    });
    
    timeSlider.addEventListener('input', () => {
      // In a real implementation, this would update the map to show the simulation at the selected time
      console.log(`Time changed to: ${timeSlider.value}`);
    });
  }
}

// Historical data search functionality
function initHistoricalSearch() {
  const searchHistoricalBtn = document.getElementById('search-historical');
  
  if (!searchHistoricalBtn) return;
  
  searchHistoricalBtn.addEventListener('click', () => {
    // Get search parameters
    const location = document.getElementById('historical-location').value;
    const startDate = document.getElementById('date-start').value;
    const endDate = document.getElementById('date-end').value;
    const eventType = document.getElementById('event-type').value;
    
    if (!location) {
      alert('Por favor, insira uma localização para a busca.');
      return;
    }
    
    // In a real implementation, this would search for historical data with the provided parameters
    console.log('Searching for historical data with parameters:');
    console.log({ location, startDate, endDate, eventType });
    
    // Simulate searching
    searchHistoricalBtn.disabled = true;
    searchHistoricalBtn.textContent = 'Buscando...';
    
    setTimeout(() => {
      // Update UI to show search results
      searchHistoricalBtn.disabled = false;
      searchHistoricalBtn.textContent = 'Buscar Eventos';
      
      // Show some example events
      const eventList = document.querySelector('.event-list-body');
      if (eventList) {
        // Remove the "no events" message
        const noEventsMsg = eventList.querySelector('.no-events');
        if (noEventsMsg) noEventsMsg.style.display = 'none';
        
        // Show the example events
        const eventItems = eventList.querySelectorAll('.event-item');
        eventItems.forEach(item => {
          item.style.display = 'grid';
        });
        
        // Add some more events
        for (let i = 0; i < 3; i++) {
          const randomYear = 2015 + Math.floor(Math.random() * 8);
          const randomMonth = 1 + Math.floor(Math.random() * 12);
          const randomDay = 1 + Math.floor(Math.random() * 28);
          const formattedDate = `${randomDay.toString().padStart(2, '0')}/${randomMonth.toString().padStart(2, '0')}/${randomYear}`;
          
          const eventTypes = ['Enchente', 'Enxurrada', 'Inundação Costeira', 'Inundação Fluvial'];
          const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
          
          const locations = ['Rio Tietê, São Paulo', 'Rio Doce, Minas Gerais', 'Litoral de Santa Catarina', 'Vale do Itajaí, SC', 'Região Serrana, RJ'];
          const randomLocation = locations[Math.floor(Math.random() * locations.length)];
          
          const impacts = ['Alto', 'Médio', 'Baixo'];
          const randomImpact = impacts[Math.floor(Math.random() * impacts.length)];
          
          const newEvent = document.createElement('div');
          newEvent.className = 'event-item';
          newEvent.innerHTML = `
            <div class="event-date">${formattedDate}</div>
            <div class="event-type">${randomType}</div>
            <div class="event-location">${randomLocation}</div>
            <div class="event-impact">${randomImpact}</div>
            <div class="event-actions">
              <button class="view-event"><i class="fas fa-eye"></i></button>
              <button class="compare-event"><i class="fas fa-chart-line"></i></button>
            </div>
          `;
          
          eventList.appendChild(newEvent);
        }
      }
      
      // Update the historical map
      const historicalMap = document.getElementById('historical-map');
      if (historicalMap) {
        const mapPlaceholder = historicalMap.querySelector('.map-placeholder');
        if (mapPlaceholder) {
          mapPlaceholder.innerHTML = `
            <i class="fas fa-history"></i>
            <p>Eventos históricos carregados no mapa</p>
          `;
        }
      }
      
      // Alert the user
      alert(`Encontrados eventos históricos para "${location}" no período selecionado.`);
    }, 2000); // Simulate loading time
  });
}

// Generate historical chart functionality
function initGenerateChart() {
  const generateChartBtn = document.getElementById('generate-chart');
  
  if (!generateChartBtn) return;
  
  generateChartBtn.addEventListener('click', () => {
    // Get chart type
    const chartType = document.getElementById('chart-type').value;
    
    // In a real implementation, this would generate a chart of the selected type
    console.log(`Generating chart of type: ${chartType}`);
    
    // Simulate generating a chart
    const chartDisplay = document.querySelector('.chart-display');
    if (chartDisplay) {
      const placeholder = chartDisplay.querySelector('.chart-placeholder');
      if (placeholder) {
        placeholder.innerHTML = `
          <i class="fas fa-chart-line"></i>
          <p>Gráfico de ${chartType} gerado com sucesso</p>
        `;
      }
    }
  });
}

// Alert form submission
function initAlertForm() {
  const alertForm = document.getElementById('alert-form');
  
  if (!alertForm) return;
  
  alertForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get form data
    const location = document.getElementById('alert-location').value;
    const radius = document.getElementById('alert-radius').value;
    const email = document.getElementById('contact-email').value;
    
    // In a real implementation, this would submit the form data to the server
    console.log('Alert form submitted with data:');
    console.log({ location, radius, email });
    
    // Simulate success message
    alert('Alertas configurados com sucesso! Você receberá notificações conforme suas preferências.');
  });
}

// Initialize all simulation-related functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initRiskMap();
  initSimulationMap();
  initHistoricalMap();
  initPreviewMap();
  initViewSelector();
  initLocationSearch();
  initSimulationRangeSliders();
  initRunSimulation();
  initHistoricalSearch();
  initGenerateChart();
  initAlertForm();
});