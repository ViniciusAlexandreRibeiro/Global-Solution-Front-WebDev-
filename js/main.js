// Script principal do site AquaCore

// Elementos principais do DOM
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainMenu = document.getElementById('main-menu');
const header = document.getElementById('main-header');
const backToTopBtn = document.getElementById('back-to-top');

// Alterna o menu mobile (hambúrguer)
if (mobileMenuBtn && mainMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isActive = mainMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
  // Fecha o menu ao clicar em um link (opcional)
  mainMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainMenu.classList.contains('active')) {
        mainMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Efeito de rolagem no cabeçalho e botão de voltar ao topo
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Ação do botão de voltar ao topo
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.getAttribute('href') === '#') return;
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        mainMenu.classList.remove('active');
      }
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Animação dos contadores de estatísticas
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number, .card-count');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const updateCounter = () => {
      current += step;
      if (current > target) current = target;
      counter.innerText = current.toLocaleString();
      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  });
}

// Inicia animação dos contadores ao entrar na tela
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number, .card-count');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  observer.observe(counters[0]);
}

// Slider de depoimentos
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  if (!testimonials.length || !prevBtn || !nextBtn) return;
  let currentIndex = 0;
  testimonials.forEach((testimonial, index) => {
    if (index !== 0) {
      testimonial.style.display = 'none';
    }
  });
  prevBtn.addEventListener('click', () => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  });
  nextBtn.addEventListener('click', () => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  });
  setInterval(() => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  }, 5000);
}

// Abas de cadastro (LifeHub)
function initRegistrationTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  if (!tabButtons.length) return;
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Abas do dashboard
function initDashboardTabs() {
  const dashTabs = document.querySelectorAll('.dash-tab');
  if (!dashTabs.length) return;
  dashTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      document.querySelectorAll('.dash-tab').forEach(t => {
        t.classList.remove('active');
      });
      document.querySelectorAll('.dash-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      tab.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// Abas de resultados (SimFlood)
function initResultTabs() {
  const resultTabs = document.querySelectorAll('.result-tab');
  if (!resultTabs.length) return;
  resultTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const paneId = tab.getAttribute('data-result');
      document.querySelectorAll('.result-tab').forEach(t => {
        t.classList.remove('active');
      });
      document.querySelectorAll('.result-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      tab.classList.add('active');
      document.getElementById(`historical-${paneId}`).classList.add('active');
    });
  });
}

// Abas da simulação (SimFlood)
function initSimulationTabs() {
  const tabButtons = document.querySelectorAll('.tab-button[data-tab]');
  if (!tabButtons.length) return;
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      button.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// Alterna opções avançadas da simulação
function initAdvancedOptions() {
  const toggleBtn = document.getElementById('toggle-advanced');
  const advancedPanel = document.querySelector('.advanced-panel');
  if (!toggleBtn || !advancedPanel) return;
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    advancedPanel.classList.toggle('active');
    if (advancedPanel.classList.contains('active')) {
      advancedPanel.style.display = 'block';
    } else {
      advancedPanel.style.display = 'none';
    }
  });
}

// Exibe valor dos sliders de faixa (range)
function initRangeSliders() {
  const rangeSliders = document.querySelectorAll('input[type="range"]');
  if (!rangeSliders.length) return;
  rangeSliders.forEach(slider => {
    const valueDisplay = document.getElementById(`${slider.id}-value`);
    if (!valueDisplay) return;
    slider.addEventListener('input', () => {
      valueDisplay.textContent = slider.value;
    });
  });
}

// Seleção do tipo de doação
function initDonationTypeSelector() {
  const donationTypeBtns = document.querySelectorAll('.donation-type-btn');
  if (!donationTypeBtns.length) return;
  donationTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const donationType = btn.getAttribute('data-type');
      donationTypeBtns.forEach(b => {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      document.querySelectorAll('.donation-details').forEach(details => {
        details.style.display = 'none';
      });
      document.getElementById(`${donationType}-donation`).style.display = 'block';
    });
  });
}

// Seleção do tipo de doador
function initDonorTypeSelector() {
  const donorTypeRadios = document.querySelectorAll('input[name="donor-type"]');
  if (!donorTypeRadios.length) return;
  donorTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const donorType = radio.value;
      if (donorType === 'individual') {
        document.getElementById('individual-fields').style.display = 'block';
        document.getElementById('company-fields').style.display = 'none';
      } else if (donorType === 'company') {
        document.getElementById('individual-fields').style.display = 'none';
        document.getElementById('company-fields').style.display = 'block';
      } else if (donorType === 'anonymous') {
        document.getElementById('individual-fields').style.display = 'none';
        document.getElementById('company-fields').style.display = 'none';
      }
    });
  });
}

// Seleção do método de entrega da doação
function initDeliveryMethodSelector() {
  const deliveryMethodRadios = document.querySelectorAll('input[name="delivery-method"]');
  if (!deliveryMethodRadios.length) return;
  deliveryMethodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = radio.value;
      if (method === 'pickup') {
        document.getElementById('pickup-details').style.display = 'block';
      } else {
        document.getElementById('pickup-details').style.display = 'none';
      }
    });
  });
}

// Preferência geográfica para doação
function initGeographicPreferenceSelector() {
  const geoPreferenceSelect = document.getElementById('geographic-preference');
  if (!geoPreferenceSelect) return;
  geoPreferenceSelect.addEventListener('change', () => {
    const preference = geoPreferenceSelect.value;
    if (preference === 'specific') {
      document.getElementById('specific-region').style.display = 'block';
    } else {
      document.getElementById('specific-region').style.display = 'none';
    }
  });
}

// Preview de upload de arquivos (fotos)
function initFileUpload() {
  const fileInput = document.getElementById('damage-photos');
  const filePreview = document.getElementById('file-preview');
  if (!fileInput || !filePreview) return;
  fileInput.addEventListener('change', () => {
    filePreview.innerHTML = '';
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        if (!file.type.startsWith('image/')) continue;
        const reader = new FileReader();
        reader.onload = (e) => {
          const preview = document.createElement('div');
          preview.className = 'file-preview-item';
          preview.innerHTML = `
            <img src="${e.target.result}" alt="Preview">
            <span>${file.name}</span>
          `;
          filePreview.appendChild(preview);
        };
        reader.readAsDataURL(file);
      }
    }
  });
}

// Slideshow simples para seção problema
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slideshow .slide');
  const prevBtn = document.querySelector('.slideshow-btn.prev');
  const nextBtn = document.querySelector('.slideshow-btn.next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    setInterval(nextSlide, 5000); // Troca automática a cada 5s
  }
});

// Quiz interativo sobre enchentes
const quizQuestions = [
  {
    q: "O que é uma enchente?",
    a: ["Acúmulo de água em áreas normalmente secas", "Falta de água em rios", "Tempestade de areia", "Deslizamento de terra"],
    c: 0
  },
  {
    q: "Qual órgão brasileiro é responsável por alertas de desastres naturais?",
    a: ["INMET", "Defesa Civil", "IBGE", "CETESB"],
    c: 1
  },
  {
    q: "Qual destes NÃO é um risco associado a enchentes?",
    a: ["Contaminação da água", "Desabamento de casas", "Aumento da biodiversidade", "Interrupção de energia"],
    c: 2
  },
  {
    q: "O que fazer ao receber um alerta de enchente?",
    a: ["Ignorar", "Buscar abrigo seguro", "Ficar em casa", "Nadar na rua"],
    c: 1
  },
  {
    q: "Qual atitude ajuda a prevenir enchentes urbanas?",
    a: ["Jogar lixo nas ruas", "Desmatar margens de rios", "Preservar áreas verdes", "Construir em áreas de risco"],
    c: 2
  },
  {
    q: "O que é um abrigo temporário?",
    a: ["Casa de veraneio", "Local seguro para afetados", "Hotel de luxo", "Escola particular"],
    c: 1
  },
  {
    q: "Qual destes é um sinal de risco iminente de enchente?",
    a: ["Chuva forte prolongada", "Céu limpo", "Vento fraco", "Sol forte"],
    c: 0
  },
  {
    q: "Por que não se deve atravessar áreas alagadas?",
    a: ["Pode ser divertido", "Risco de doenças e afogamento", "Água é limpa", "Ajuda a refrescar"],
    c: 1
  },
  {
    q: "Qual destes é um recurso importante em situações de enchente?",
    a: ["Água potável", "Fones de ouvido", "Bicicleta", "Câmera fotográfica"],
    c: 0
  },
  {
    q: "O que fazer após uma enchente?",
    a: ["Beber água da rua", "Limpar e desinfetar objetos", "Voltar imediatamente para casa", "Ignorar recomendações"],
    c: 1
  }
];

function startQuiz() {
  let current = 0;
  let score = 0;
  const quizModal = document.getElementById('quiz-modal');
  const quizContent = document.getElementById('quiz-content');
  const closeBtn = document.getElementById('close-quiz');

  function showQuestion() {
    const q = quizQuestions[current];
    quizContent.innerHTML = `
      <h3>Pergunta ${current + 1} de ${quizQuestions.length}</h3>
      <p style="margin-bottom:1rem;">${q.q}</p>
      <div>
        ${q.a.map((alt, i) => `<button class="quiz-alt" style="display:block;width:100%;margin-bottom:8px;padding:8px;border-radius:5px;border:1px solid #0077b6;background:#f1f1f1;cursor:pointer;" data-i="${i}">${alt}</button>`).join('')}
      </div>
    `;
    document.querySelectorAll('.quiz-alt').forEach(btn => {
      btn.onclick = () => {
        if (parseInt(btn.dataset.i) === q.c) score++;
        current++;
        if (current < quizQuestions.length) {
          showQuestion();
        } else {
          showResult();
        }
      };
    });
  }

  function showResult() {
    quizContent.innerHTML = `
      <h3>Resultado do Quiz</h3>
      <p>Você acertou <strong>${score}</strong> de <strong>${quizQuestions.length}</strong> perguntas!</p>
      <button id="restart-quiz" style="margin-top:1rem;padding:8px 16px;border-radius:5px;border:none;background:#0077b6;color:#fff;cursor:pointer;">Tentar Novamente</button>
    `;
    document.getElementById('restart-quiz').onclick = () => {
      current = 0;
      score = 0;
      showQuestion();
    };
  }

  quizModal.style.display = 'flex';
  showQuestion();

  closeBtn.onclick = () => {
    quizModal.style.display = 'none';
  };
}

// Ativa o quiz ao clicar no botão
document.addEventListener('DOMContentLoaded', () => {
  const quizBtn = document.getElementById('quiz-btn');
  if (quizBtn) {
    quizBtn.addEventListener('click', startQuiz);
  }
});

// Botão de modo noturno/alto contraste
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('toggle-theme-btn');
  const themeIcon = document.getElementById('theme-icon');
  let mode = 0; // 0: normal, 1: night, 2: high contrast

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      mode = (mode + 1) % 3;
      document.body.classList.remove('night-mode', 'high-contrast');
      if (mode === 1) {
        document.body.classList.add('night-mode');
        themeIcon.className = 'fas fa-lightbulb';
        themeBtn.title = 'Ativar alto contraste';
      } else if (mode === 2) {
        document.body.classList.add('high-contrast');
        themeIcon.className = 'fas fa-adjust';
        themeBtn.title = 'Voltar ao modo padrão';
      } else {
        themeIcon.className = 'fas fa-moon';
        themeBtn.title = 'Ativar modo noturno';
      }
    });
  }
});

// Inicializa todas as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  initCounterAnimations();
  initTestimonialSlider();
  initRegistrationTabs();
  initDashboardTabs();
  initResultTabs();
  initSimulationTabs();
  initAdvancedOptions();
  initRangeSliders();
  initDonationTypeSelector();
  initDonorTypeSelector();
  initDeliveryMethodSelector();
  initGeographicPreferenceSelector();
  initFileUpload();
});