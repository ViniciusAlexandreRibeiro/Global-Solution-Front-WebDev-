// Forms JavaScript File for LifeHub

// Registration tabs functionality
function initRegistrationTabs() {
  const affectedTab = document.getElementById('affected-tab');
  const volunteerTab = document.getElementById('volunteer-tab');
  const donorTab = document.getElementById('donor-tab');
  
  const affectedPane = document.getElementById('affected');
  const volunteerPane = document.getElementById('volunteer');
  const donorPane = document.getElementById('donor');
  
  if (!affectedTab || !volunteerTab || !donorTab || !affectedPane || !volunteerPane || !donorPane) return;
  
  // Handle URL hash to show specific tab
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
  
  // Show affected tab
  const showAffectedTab = () => {
    affectedTab.classList.add('active');
    volunteerTab.classList.remove('active');
    donorTab.classList.remove('active');
    
    affectedPane.classList.add('active');
    volunteerPane.classList.remove('active');
    donorPane.classList.remove('active');
    
    window.location.hash = 'affected';
  };
  
  // Show volunteer tab
  const showVolunteerTab = () => {
    affectedTab.classList.remove('active');
    volunteerTab.classList.add('active');
    donorTab.classList.remove('active');
    
    affectedPane.classList.remove('active');
    volunteerPane.classList.add('active');
    donorPane.classList.remove('active');
    
    window.location.hash = 'volunteer';
  };
  
  // Show donor tab
  const showDonorTab = () => {
    affectedTab.classList.remove('active');
    volunteerTab.classList.remove('active');
    donorTab.classList.add('active');
    
    affectedPane.classList.remove('active');
    volunteerPane.classList.remove('active');
    donorPane.classList.add('active');
    
    window.location.hash = 'donor';
  };
  
  // Add click event listeners
  affectedTab.addEventListener('click', showAffectedTab);
  volunteerTab.addEventListener('click', showVolunteerTab);
  donorTab.addEventListener('click', showDonorTab);
  
  // Show tab based on URL hash
  showTabFromHash();
  
  // Listen for hash changes
  window.addEventListener('hashchange', showTabFromHash);
}

// Form validation
function initFormValidation() {
  const affectedForm = document.getElementById('affected-form');
  const volunteerForm = document.getElementById('volunteer-form');
  const donorForm = document.getElementById('donor-form');
  
  // Validate affected form
  if (affectedForm) {
    affectedForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Check required fields
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
      
      // Check if at least one need is selected
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
      
      // If form is valid, submit it
      if (isValid) {
        // In a real implementation, this would submit the form data to the server
        console.log('Affected form submitted');
        
        // Simulate success message
        alert('Cadastro de família afetada realizado com sucesso! Em breve entraremos em contato.');
        
        // Reset the form
        affectedForm.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }
  
  // Validate volunteer form
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Check required fields
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
      
      // Check if at least one skill is selected
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
      
      // Check if at least one availability is selected
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
      
      // If form is valid, submit it
      if (isValid) {
        // In a real implementation, this would submit the form data to the server
        console.log('Volunteer form submitted');
        
        // Simulate success message
        alert('Cadastro de voluntário realizado com sucesso! Em breve entraremos em contato com mais informações.');
        
        // Reset the form
        volunteerForm.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }
  
  // Validate donor form
  if (donorForm) {
    donorForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Check donor type
      const donorType = document.querySelector('input[name="donor-type"]:checked').value;
      let isValid = true;
      
      if (donorType === 'individual') {
        // Validate individual fields
        const name = document.getElementById('donor-name').value.trim();
        const cpf = document.getElementById('donor-cpf').value.trim();
        
        if (!name || !cpf) {
          isValid = false;
          alert('Por favor, preencha seu nome e CPF.');
        }
      } else if (donorType === 'company') {
        // Validate company fields
        const companyName = document.getElementById('company-name').value.trim();
        const cnpj = document.getElementById('company-cnpj').value.trim();
        
        if (!companyName || !cnpj) {
          isValid = false;
          alert('Por favor, preencha o nome da empresa e CNPJ.');
        }
      }
      
      // Check donation type
      const donationTypeBtn = document.querySelector('.donation-type-btn.active');
      if (!donationTypeBtn) {
        isValid = false;
        alert('Por favor, selecione um tipo de doação.');
      } else {
        const donationType = donationTypeBtn.getAttribute('data-type');
        
        if (donationType === 'items') {
          // Check if at least one item category is selected
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
          // Check donation amount
          const amount = document.getElementById('donation-amount').value.trim();
          
          if (!amount) {
            isValid = false;
            alert('Por favor, informe o valor da doação.');
          }
        } else if (donationType === 'services') {
          // Check service type
          const serviceType = document.getElementById('service-type').value;
          const serviceDescription = document.getElementById('service-description').value.trim();
          
          if (!serviceType || !serviceDescription) {
            isValid = false;
            alert('Por favor, selecione um tipo de serviço e forneça uma descrição.');
          }
        }
      }
      
      // Check terms
      const termsCheckbox = document.querySelector('input[name="donor-terms"]');
      if (!termsCheckbox.checked) {
        isValid = false;
        alert('Por favor, aceite os termos e condições.');
      }
      
      // If form is valid, submit it
      if (isValid) {
        // In a real implementation, this would submit the form data to the server
        console.log('Donor form submitted');
        
        // Simulate success message
        alert('Doação registrada com sucesso! Agradecemos sua contribuição.');
        
        // Reset the form
        donorForm.reset();
        
        // Reset donation type buttons
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

// Donation type selector
function initDonationTypeSelector() {
  const donationTypeBtns = document.querySelectorAll('.donation-type-btn');
  
  if (!donationTypeBtns.length) return;
  
  donationTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get donation type
      const donationType = btn.getAttribute('data-type');
      
      // Remove active class from all buttons
      donationTypeBtns.forEach(b => {
        b.classList.remove('active');
      });
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Hide all donation details
      document.querySelectorAll('.donation-details').forEach(details => {
        details.style.display = 'none';
      });
      
      // Show selected donation details
      document.getElementById(`${donationType}-donation`).style.display = 'block';
    });
  });
}

// Donor type selector
function initDonorTypeSelector() {
  const donorTypeRadios = document.querySelectorAll('input[name="donor-type"]');
  
  if (!donorTypeRadios.length) return;
  
  donorTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const donorType = radio.value;
      
      // Toggle visibility of fields based on donor type
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

// Delivery method selector
function initDeliveryMethodSelector() {
  const deliveryMethodRadios = document.querySelectorAll('input[name="delivery-method"]');
  
  if (!deliveryMethodRadios.length) return;
  
  deliveryMethodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = radio.value;
      
      // Toggle visibility of pickup details
      if (method === 'pickup') {
        document.getElementById('pickup-details').style.display = 'block';
      } else {
        document.getElementById('pickup-details').style.display = 'none';
      }
    });
  });
}

// Geographic preference selector
function initGeographicPreferenceSelector() {
  const geoPreferenceSelect = document.getElementById('geographic-preference');
  
  if (!geoPreferenceSelect) return;
  
  geoPreferenceSelect.addEventListener('change', () => {
    const preference = geoPreferenceSelect.value;
    
    // Toggle visibility of specific region field
    if (preference === 'specific') {
      document.getElementById('specific-region').style.display = 'block';
    } else {
      document.getElementById('specific-region').style.display = 'none';
    }
  });
}

// Help button functionality
function initHelpButtons() {
  const helpButtons = document.querySelectorAll('.help-button');
  
  if (!helpButtons.length) return;
  
  helpButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the need information
      const needCard = button.closest('.need-card');
      const needTitle = needCard.querySelector('.need-title').textContent;
      const needType = needCard.querySelector('.need-type').textContent;
      const needLocation = needCard.querySelector('.need-location span').textContent;
      
      // Show a confirmation dialog
      const confirmed = confirm(`Você deseja ajudar com a necessidade: "${needTitle}" (${needType}) em ${needLocation}?`);
      
      if (confirmed) {
        // Determine which tab to show based on the need type
        let tabToShow;
        
        if (needType === 'Alimentos' || needType === 'Água' || needType === 'Roupas' || needType === 'Higiene') {
          tabToShow = 'donor';
        } else if (needType === 'Limpeza' || needType === 'Transporte') {
          tabToShow = 'volunteer';
        } else {
          tabToShow = 'donor';
        }
        
        // Scroll to the registration section and show the appropriate tab
        const registrationSection = document.getElementById('registration');
        if (registrationSection) {
          registrationSection.scrollIntoView({ behavior: 'smooth' });
          
          // After scrolling, switch to the appropriate tab
          setTimeout(() => {
            document.getElementById(`${tabToShow}-tab`).click();
          }, 1000);
        }
      }
    });
  });
}

// Apply filters functionality
function initApplyFilters() {
  const applyFiltersBtn = document.getElementById('apply-filters');
  
  if (!applyFiltersBtn) return;
  
  applyFiltersBtn.addEventListener('click', () => {
    // Get filter values
    const needTypeCheckboxes = document.querySelectorAll('input[name="need-type"]');
    const selectedNeedTypes = Array.from(needTypeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    const locationFilter = document.getElementById('location-filter').value;
    const urgencyFilter = document.querySelector('input[name="urgency-filter"]:checked').value;
    
    // In a real implementation, this would filter the needs based on the selected filters
    console.log('Applying filters:');
    console.log({
      needTypes: selectedNeedTypes,
      location: locationFilter,
      urgency: urgencyFilter
    });
    
    // Simulate filtering
    const needCards = document.querySelectorAll('.need-card');
    let visibleCount = 0;
    
    needCards.forEach(card => {
      // In a real implementation, this would check if the card matches the selected filters
      // For this demo, we'll just randomly show/hide cards
      const shouldShow = Math.random() > 0.3; // 70% chance of showing each card
      
      if (shouldShow) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update the shown count
    const shownCount = document.getElementById('shown-count');
    if (shownCount) {
      shownCount.textContent = visibleCount;
    }
    
    // Alert the user
    alert(`Filtros aplicados! Mostrando ${visibleCount} necessidades que correspondem aos critérios selecionados.`);
  });
}

// Pagination functionality
function initPagination() {
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  
  if (!paginationButtons.length) return;
  
  paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      paginationButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // In a real implementation, this would load the corresponding page of results
      console.log(`Loading page ${button.textContent}`);
      
      // Simulate loading a different page
      // For this demo, we'll just scroll back to the top of the results
      const matchingResults = document.querySelector('.matching-results');
      if (matchingResults) {
        matchingResults.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// CPF/CNPJ mask
function initDocumentMasks() {
  const cpfInputs = document.querySelectorAll('#affected-cpf, #volunteer-cpf, #donor-cpf');
  const cnpjInput = document.getElementById('company-cnpj');
  const phoneInputs = document.querySelectorAll('#affected-phone, #volunteer-phone, #donor-phone');
  const cepInputs = document.querySelectorAll('#affected-cep, #volunteer-cep');
  
  // CPF mask (000.000.000-00)
  cpfInputs.forEach(input => {
    if (!input) return;
    
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      
      if (value.length > 11) {
        value = value.slice(0, 11);
      }
      
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
  
  // CNPJ mask (00.000.000/0000-00)
  if (cnpjInput) {
    cnpjInput.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      
      if (value.length > 14) {
        value = value.slice(0, 14);
      }
      
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
  
  // Phone mask ((00) 00000-0000)
  phoneInputs.forEach(input => {
    if (!input) return;
    
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      
      if (value.length > 11) {
        value = value.slice(0, 11);
      }
      
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
  
  // CEP mask (00000-000)
  cepInputs.forEach(input => {
    if (!input) return;
    
    input.addEventListener('input', event => {
      let value = event.target.value.replace(/\D/g, '');
      
      if (value.length > 8) {
        value = value.slice(0, 8);
      }
      
      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
      }
      
      event.target.value = value;
    });
  });
}

// Form submission
function initFormSubmission() {
  const forms = document.querySelectorAll('.registration-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Get form ID
      const formId = form.id;
      
      // Show different success messages based on form type
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
      
      // In a real implementation, this would submit the form data to the server
      console.log(`Form ${formId} submitted`);
      
      // Simulate success message
      alert(successMessage);
      
      // Reset the form
      form.reset();
    });
  });
}

// Initialize all form-related functions when DOM is loaded
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