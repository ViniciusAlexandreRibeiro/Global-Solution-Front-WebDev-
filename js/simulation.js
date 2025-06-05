// Simulation JavaScript File for SimFlood

// Função para inicializar o mapa de risco
function initRiskMap() {
  const riskMapElement = document.getElementById('risk-map-container');
  if (!riskMapElement) return;
  const loadingIndicator = document.querySelector('.map-loading');
  if (loadingIndicator) {
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
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
    }, 1500);
  }
}

// Função para inicializar o mapa da simulação
function initSimulationMap() {
  const simulationMapElement = document.getElementById('simulation-map');
  if (!simulationMapElement) return;
  console.log('Mapa de simulação pronto para receber dados');
}

// Função para inicializar o mapa histórico
function initHistoricalMap() {
  const historicalMapElement = document.getElementById('historical-map');
  if (!historicalMapElement) return;
  console.log('Mapa histórico pronto para receber dados');
}

// Função para inicializar o mapa de previsão de alertas
function initPreviewMap() {
  const previewMapElement = document.getElementById('preview-map');
  if (!previewMapElement) return;
  console.log('Mapa de previsão pronto para receber dados');
}

// Função para alternar visualizações do mapa
function initViewSelector() {
  const viewOptions = document.querySelectorAll('input[name="map-view"]');
  if (!viewOptions.length) return;
  viewOptions.forEach(option => {
    option.addEventListener('change', () => {
      const viewType = option.value;
      console.log(`Visualização alterada para: ${viewType}`);
      const riskMapContainer = document.getElementById('risk-map-container');
      if (riskMapContainer) {
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

// Função para busca de localização no mapa de risco
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
    console.log(`Buscando localização: ${location}`);
    alert(`Localização "${location}" encontrada e centralizada no mapa.`);
  });
}

// Função para atualizar valores dos sliders da simulação
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

// Função para executar, resetar e salvar simulação
function initRunSimulation() {
  const runSimulationBtn = document.getElementById('run-simulation');
  const resetSimulationBtn = document.getElementById('reset-simulation');
  const saveScenarioBtn = document.getElementById('save-scenario');
  const timeSlider = document.getElementById('time-slider');
  const playBtn = document.getElementById('play-simulation');
  const pauseBtn = document.getElementById('pause-simulation');
  const resetPlaybackBtn = document.getElementById('reset-playback');
  if (!runSimulationBtn) return;

  // Executar simulação
  runSimulationBtn.addEventListener('click', () => {
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
    console.log('Executando simulação com os parâmetros:');
    console.log({ location, rainfall, duration, saturation, tide, drainage });
    runSimulationBtn.disabled = true;
    runSimulationBtn.textContent = 'Processando...';
    setTimeout(() => {
      runSimulationBtn.disabled = false;
      runSimulationBtn.textContent = 'Executar Simulação';
      if (timeSlider) timeSlider.disabled = false;
      if (playBtn) playBtn.disabled = false;
      if (pauseBtn) pauseBtn.disabled = false;
      if (resetPlaybackBtn) resetPlaybackBtn.disabled = false;
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
      const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
      chartPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = `
          <i class="fas fa-chart-line"></i>
          <p>Dados de simulação calculados e prontos para visualização</p>
        `;
      });
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
      alert('Simulação concluída com sucesso! Você pode visualizar os resultados nos diferentes painéis.');
    }, 3000);
  });

  // Resetar simulação
  if (resetSimulationBtn) {
    resetSimulationBtn.addEventListener('click', () => {
      const form = resetSimulationBtn.closest('form');
      if (form) form.reset();
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
      const simulationMap = document.getElementById('simulation-map');
      if (simulationMap) {
        simulationMap.innerHTML = `
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>Execute a simulação para ver os resultados no mapa</p>
          </div>
        `;
      }
      if (timeSlider) {
        timeSlider.disabled = true;
        timeSlider.value = 0;
      }
      if (playBtn) playBtn.disabled = true;
      if (pauseBtn) pauseBtn.disabled = true;
      if (resetPlaybackBtn) resetPlaybackBtn.disabled = true;
      alert('Simulação resetada. Todos os parâmetros foram restaurados aos valores padrão.');
    });
  }

  // Salvar cenário da simulação
  if (saveScenarioBtn) {
    saveScenarioBtn.addEventListener('click', () => {
      const scenarioName = prompt('Digite um nome para este cenário:');
      if (scenarioName) {
        alert(`Cenário "${scenarioName}" salvo com sucesso! Você poderá carregá-lo posteriormente.`);
      }
    });
  }

  // Controles de reprodução da simulação
  if (playBtn && pauseBtn && resetPlaybackBtn && timeSlider) {
    let playbackInterval;
    playBtn.addEventListener('click', () => {
      clearInterval(playbackInterval);
      playbackInterval = setInterval(() => {
        if (timeSlider.value < timeSlider.max) {
          timeSlider.value = parseInt(timeSlider.value) + 1;
        } else {
          clearInterval(playbackInterval);
        }
      }, 100);
    });
    pauseBtn.addEventListener('click', () => {
      clearInterval(playbackInterval);
    });
    resetPlaybackBtn.addEventListener('click', () => {
      clearInterval(playbackInterval);
      timeSlider.value = 0;
    });
    timeSlider.addEventListener('input', () => {
      console.log(`Tempo alterado para: ${timeSlider.value}`);
    });
  }
}

// Função para busca de dados históricos de enchentes
function initHistoricalSearch() {
  const searchHistoricalBtn = document.getElementById('search-historical');
  if (!searchHistoricalBtn) return;
  searchHistoricalBtn.addEventListener('click', () => {
    const location = document.getElementById('historical-location').value;
    const startDate = document.getElementById('date-start').value;
    const endDate = document.getElementById('date-end').value;
    const eventType = document.getElementById('event-type').value;
    if (!location) {
      alert('Por favor, insira uma localização para a busca.');
      return;
    }
    console.log('Buscando dados históricos com os parâmetros:');
    console.log({ location, startDate, endDate, eventType });
    searchHistoricalBtn.disabled = true;
    searchHistoricalBtn.textContent = 'Buscando...';
    setTimeout(() => {
      searchHistoricalBtn.disabled = false;
      searchHistoricalBtn.textContent = 'Buscar Eventos';
      const eventList = document.querySelector('.event-list-body');
      if (eventList) {
        const noEventsMsg = eventList.querySelector('.no-events');
        if (noEventsMsg) noEventsMsg.style.display = 'none';
        const eventItems = eventList.querySelectorAll('.event-item');
        eventItems.forEach(item => {
          item.style.display = 'grid';
        });
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
      alert(`Encontrados eventos históricos para "${location}" no período selecionado.`);
    }, 2000);
  });
}

// Função para gerar gráficos de dados históricos
function initGenerateChart() {
  const generateChartBtn = document.getElementById('generate-chart');
  if (!generateChartBtn) return;
  generateChartBtn.addEventListener('click', () => {
    const chartType = document.getElementById('chart-type').value;
    console.log(`Gerando gráfico do tipo: ${chartType}`);
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

// Função para envio do formulário de alertas
function initAlertForm() {
  const alertForm = document.getElementById('alert-form');
  if (!alertForm) return;
  alertForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.getElementById('alert-location').value;
    const radius = document.getElementById('alert-radius').value;
    const email = document.getElementById('contact-email').value;
    console.log('Formulário de alerta enviado com os dados:');
    console.log({ location, radius, email });
    alert('Alertas configurados com sucesso! Você receberá notificações conforme suas preferências.');
  });
}

// Inicialização de todas as funções ao carregar a página
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