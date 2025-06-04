// Funções de formulários para o LifeHub

// Inicializa as abas de cadastro (afetado, voluntário, doador)
function initRegistrationTabs() {
  const affectedTab = document.getElementById('affected-tab');
  const volunteerTab = document.getElementById('volunteer-tab');
  const donorTab = document.getElementById('donor-tab');
  const affectedPane = document.getElementById('affected');
  const volunteerPane = document.getElementById('volunteer');
  const donorPane = document.getElementById('donor');
  if (!affectedTab || !volunteerTab || !donorTab || !affectedPane || !volunteerPane || !donorPane) return;

  // Mostra a aba correta conforme o hash da URL
  const showTabFromHash = () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'volunteer') {
      showVolunteerTab();
    } else if (hash === 'donor') {
      showDonorTab();
    } else {
      showAffectedTab();
    }
  };

  // Exibe aba de afetado
  const showAffectedTab = () => {
    affectedTab.classList.add('active');
    volunteerTab.classList.remove('active');
    donorTab.classList.remove('active');
    affectedPane.classList.add('active');
    volunteerPane.classList.remove('active');
    donorPane.classList.remove('active');
    window.location.hash = 'affected';
  };

  // Exibe aba de voluntário
  const showVolunteerTab = () => {
    affectedTab.classList.remove('active');
    volunteerTab.classList.add('active');
    donorTab.classList.remove('active');
    affectedPane.classList.remove('active');
    volunteerPane.classList.add('active');
    donorPane.classList.remove('active');
    window.location.hash = 'volunteer';
  };

  // Exibe aba de doador
  const showDonorTab = () => {
    affectedTab.classList.remove('active');
    volunteerTab.classList.remove('active');
    donorTab.classList.add('active');
    affectedPane.classList.remove('active');
    volunteerPane.classList.remove('active');
    donorPane.classList.add('active');
    window.location.hash = 'donor';
  };

  // Eventos de clique nas abas
  affectedTab.addEventListener('click', showAffectedTab);
  volunteerTab.addEventListener('click', showVolunteerTab);
  donorTab.addEventListener('click', showDonorTab);

  // Mostra aba conforme hash da URL
  showTabFromHash();
  window.addEventListener('hashchange', showTabFromHash);
}

// Validação dos formulários de cadastro
function initFormValidation() {
  const affectedForm = document.getElementById('affected-form');
  const volunteerForm = document.getElementById('volunteer-form');
  const donorForm = document.getElementById('donor-form');

  // Validação do formulário de afetado
  if (affectedForm) {
    affectedForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const requiredFields = affectedForm.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('invalid');
          isValid = false;
        } else {
          field.classList.remove('invalid');
        }
      });
      const needsCheckboxes = affectedForm.querySelectorAll('input[name="needs"]');
      let needSelected = false;
      needsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          needSelected = true;
        }
      });
      if (!needSelected) {
        alert('Por favor, selecione pelo menos uma necessidade.');
        isValid = false;
      }
      if (isValid) {
        console.log('Cadastro de afetado enviado');
        alert('Cadastro de família afetada realizado com sucesso! Em breve entraremos em contato.');
        affectedForm.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }

  // Validação do formulário de voluntário
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const requiredFields = volunteerForm.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('invalid');
          isValid = false;
        } else {
          field.classList.remove('invalid');
        }
      });
      const skillsCheckboxes = volunteerForm.querySelectorAll('input[name="skills"]');
      let skillSelected = false;
      skillsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          skillSelected = true;
        }
      });
      if (!skillSelected) {
        alert('Por favor, selecione pelo menos uma habilidade.');
        isValid = false;
      }
      const availabilityCheckboxes = volunteerForm.querySelectorAll('input[name="availability"]');
      let availabilitySelected = false;
      availabilityCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          availabilitySelected = true;
        }
      });
      if (!availabilitySelected) {
        alert('Por favor, selecione pelo menos um horário de disponibilidade.');
        isValid = false;
      }
      if (isValid) {
        console.log('Cadastro de voluntário enviado');
        alert('Cadastro de voluntário realizado com sucesso! Em breve entraremos em contato com mais informações.');
        volunteerForm.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }

  // Validação do formulário de doador
  if (donorForm) {
    donorForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const donorType = document.querySelector('input[name="donor-type"]:checked').value;
      let isValid = true;
      if (donorType === 'individual') {
        const name = document.getElementById('donor-name').value.trim();
        const cpf = document.getElementById('donor-cpf').value.trim();
        if (!name || !cpf) {
          isValid = false;
          alert('Por favor, preencha seu nome e CPF.');
        }
      } else if (donorType === 'company') {
        const companyName = document.getElementById('company-name').value.trim();
        const cnpj = document.getElementById('company-cnpj').value.trim();
        if (!companyName || !cnpj) {
          isValid = false;
          alert('Por favor, preencha o nome da empresa e CNPJ.');
        }
      }
      const donationTypeBtn = document.querySelector('.donation-type-btn.active');
      if (!donationTypeBtn) {
        isValid = false;
        alert('Por favor, selecione um tipo de doação.');
      } else {
        const donationType = donationTypeBtn.getAttribute('data-type');
        if (donationType === 'items') {
          const itemCategories = document.querySelectorAll('input[name="item-categories"]');
          let itemSelected = false;
          itemCategories.forEach(checkbox => {
            if (checkbox.checked) {
              itemSelected = true;
            }
          });
          if (!itemSelected) {
            isValid = false;
            alert('Por favor, selecione pelo menos uma categoria de itens para doação.');
          }
        } else if (donationType === 'money') {
          const amount = document.getElementById('donation-amount').value.trim();
          if (!amount) {
            isValid = false;
            alert('Por favor, informe o valor da doação.');
          }
        } else if (donationType === 'services') {
          const serviceType = document.getElementById('service-type').value;
          const serviceDescription = document.getElementById('service-description').value.trim();
          if (!serviceType || !serviceDescription) {
            isValid = false;
            alert('Por favor, selecione um tipo de serviço e forneça uma descrição.');
          }
        }
      }
      const termsCheckbox = document.querySelector('input[name="donor-terms"]');
      if (!termsCheckbox.checked) {
        isValid = false;
        alert('Por favor, aceite os termos e condições.');
      }
      if (isValid) {
        console.log('Cadastro de doador enviado');
        alert('Doação registrada com sucesso! Agradecemos sua contribuição.');
        donorForm.reset();
        document.querySelectorAll('.donation-type-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        document.querySelectorAll('.donation-details').forEach(details => {
          details.style.display = 'none';
        });
        document.querySelector('.donation-type-btn[data-type="items"]').classList.add('active');
        document.getElementById('items-donation').style.display = 'block';
      }
    });
  }
}

// Seleciona o tipo de doação
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

// Seleciona o tipo de doador
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

// Seleciona o método de entrega da doação
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

// Seleciona preferência geográfica para doação
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

// Botão de ajudar nas necessidades (matching)
function initHelpButtons() {
  const helpButtons = document.querySelectorAll('.help-button');
  if (!helpButtons.length) return;
  helpButtons.forEach(button => {
    button.addEventListener('click', () => {
      const needCard = button.closest('.need-card');
      const needTitle = needCard.querySelector('.need-title').textContent;
      const needType = needCard.querySelector('.need-type').textContent;
      const needLocation = needCard.querySelector('.need-location span').textContent;
      const confirmed = confirm(`Você deseja ajudar com a necessidade: "${needTitle}" (${needType}) em ${needLocation}?`);
      if (confirmed) {
        let tabToShow;
        if (needType === 'Alimentos' || needType === 'Água' || needType === 'Roupas' || needType === 'Higiene') {
          tabToShow = 'donor';
        } else if (needType === 'Limpeza' || needType === 'Transporte') {
          tabToShow = 'volunteer';
        } else {
          tabToShow = 'donor';
        }
        const registrationSection = document.getElementById('registration');
        if (registrationSection) {
          registrationSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            document.getElementById(`${tabToShow}-tab`).click();
          }, 1000);
        }
      }
    });
  });
}

// Aplica filtros nas necessidades do sistema de matching
function initApplyFilters() {
  const applyFiltersBtn = document.getElementById('apply-filters');
  if (!applyFiltersBtn) return;
  applyFiltersBtn.addEventListener('click', () => {
    const needTypeCheckboxes = document.querySelectorAll('input[name="need-type"]');
    const selectedNeedTypes = Array.from(needTypeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    const locationFilter = document.getElementById('location-filter').value;
    const urgencyFilter = document.querySelector('input[name="urgency-filter"]:checked').value;
    console.log('Aplicando filtros:');
    console.log({
      needTypes: selectedNeedTypes,
      location: locationFilter,
      urgency: urgencyFilter
    });
    const needCards = document.querySelectorAll('.need-card');
    let visibleCount = 0;
    needCards.forEach(card => {
      const shouldShow = Math.random() > 0.3;
      if (shouldShow) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    const shownCount = document.getElementById('shown-count');
    if (shownCount) {
      shownCount.textContent = visibleCount;
    }
    alert(`Filtros aplicados! Mostrando ${visibleCount} necessidades que correspondem aos critérios selecionados.`);
  });
}

// Paginação dos resultados do sistema de matching
function initPagination() {
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  if (!paginationButtons.length) return;
  paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
      paginationButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      console.log(`Carregando página ${button.textContent}`);
      const matchingResults = document.querySelector('.matching-results');
      if (matchingResults) {
        matchingResults.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Máscaras para CPF, CNPJ, telefone e CEP nos formulários
function initDocumentMasks() {
  const cpfInputs = document.querySelectorAll('#affected-cpf, #volunteer-cpf, #donor-cpf');
  const cnpjInput = document.getElementById('company-cnpj');
  const phoneInputs = document.querySelectorAll('#affected-phone, #volunteer-phone, #donor-phone');
  const cepInputs = document.querySelectorAll('#affected-cep, #volunteer-cep');

  // Máscara de CPF
  cpfInputs.forEach(input => {
    if (!input) return;
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
      } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
      } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
      }
      event.target.value = value;
    });
  });

  // Máscara de CNPJ
  if (cnpjInput) {
    cnpjInput.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 14) value = value.slice(0, 14);
      if (value.length > 12) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
      } else if (value.length > 8) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, '$1.$2.$3/$4');
      } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,3}).*/, '$1.$2');
      }
      event.target.value = value;
    });
  }

  // Máscara de telefone
  phoneInputs.forEach(input => {
    if (!input) return;
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
      } else if (value.length > 0) {
        value = value.replace(/^(\d{0,2}).*/, '($1');
      }
      event.target.value = value;
    });
  });

  // Máscara de CEP
  cepInputs.forEach(input => {
    if (!input) return;
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 8) value = value.slice(0, 8);
      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
      }
      event.target.value = value;
    });
  });
}

// Submissão dos formulários de cadastro
function initFormSubmission() {
  const forms = document.querySelectorAll('.registration-form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formId = form.id;
      let successMessage;
      switch (formId) {
        case 'affected-form':
          successMessage = 'Cadastro de família afetada realizado com sucesso! Em breve entraremos em contato com mais informações.';
          break;
        case 'volunteer-form':
          successMessage = 'Cadastro de voluntário realizado com sucesso! Em breve entraremos em contato com oportunidades de ajuda.';
          break;
        case 'donor-form':
          successMessage = 'Doação registrada com sucesso! Agradecemos sua contribuição para ajudar as famílias afetadas.';
          break;
        default:
          successMessage = 'Formulário enviado com sucesso!';
      }
      console.log(`Formulário ${formId} enviado`);
      alert(successMessage);
      form.reset();
    });
  });
}

// Inicializa todas as funções de formulários ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  initRegistrationTabs();
  initFormValidation();
  initDonationTypeSelector();
  initDonorTypeSelector();
  initDeliveryMethodSelector();
  initGeographicPreferenceSelector();
  initHelpButtons();
  initApplyFilters();
  initPagination();
  initDocumentMasks();
  initFormSubmission();
});