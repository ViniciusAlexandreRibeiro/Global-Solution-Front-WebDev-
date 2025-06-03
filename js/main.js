// Main JavaScript File

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainMenu = document.getElementById('main-menu');
const header = document.getElementById('main-header');
const backToTopBtn = document.getElementById('back-to-top');

// Mobile Menu Toggle
if (mobileMenuBtn && mainMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Back to Top Button
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Back to Top Button
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (this.getAttribute('href') === '#') return;
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Close mobile menu if open
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

// Animate counter statistics
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number, .card-count');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // Animation duration in milliseconds
    const step = Math.ceil(target / (duration / 16)); // 60fps
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

// Initialize counter animations when they come into view
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number, .card-count');
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect(); // Only animate once
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(counters[0]);
}

// Testimonial slider
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  if (!testimonials.length || !prevBtn || !nextBtn) return;
  
  let currentIndex = 0;
  
  // Hide all testimonials except the first one
  testimonials.forEach((testimonial, index) => {
    if (index !== 0) {
      testimonial.style.display = 'none';
    }
  });
  
  // Previous button
  prevBtn.addEventListener('click', () => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  });
  
  // Next button
  nextBtn.addEventListener('click', () => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  });
  
  // Auto rotate testimonials
  setInterval(() => {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
  }, 5000);
}

// Registration tabs
function initRegistrationTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  if (!tabButtons.length) return;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the tab ID from the data-tab attribute
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all tab buttons and panels
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      
      // Add active class to current tab button and panel
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Dashboard tabs
function initDashboardTabs() {
  const dashTabs = document.querySelectorAll('.dash-tab');
  
  if (!dashTabs.length) return;
  
  dashTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the tab ID from the data-tab attribute
      const tabId = tab.getAttribute('data-tab');
      
      // Remove active class from all tab buttons and panels
      document.querySelectorAll('.dash-tab').forEach(t => {
        t.classList.remove('active');
      });
      document.querySelectorAll('.dash-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      
      // Add active class to current tab button and panel
      tab.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// Result tabs
function initResultTabs() {
  const resultTabs = document.querySelectorAll('.result-tab');
  
  if (!resultTabs.length) return;
  
  resultTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the pane ID from the data-result attribute
      const paneId = tab.getAttribute('data-result');
      
      // Remove active class from all tab buttons and panes
      document.querySelectorAll('.result-tab').forEach(t => {
        t.classList.remove('active');
      });
      document.querySelectorAll('.result-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      
      // Add active class to current tab button and pane
      tab.classList.add('active');
      document.getElementById(`historical-${paneId}`).classList.add('active');
    });
  });
}

// Simulation Tabs
function initSimulationTabs() {
  const tabButtons = document.querySelectorAll('.tab-button[data-tab]');
  
  if (!tabButtons.length) return;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the tab ID from the data-tab attribute
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all tab buttons and panels
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      
      // Add active class to current tab button and panel
      button.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// Advanced options toggle
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

// Range slider value display
function initRangeSliders() {
  const rangeSliders = document.querySelectorAll('input[type="range"]');
  
  if (!rangeSliders.length) return;
  
  rangeSliders.forEach(slider => {
    const valueDisplay = document.getElementById(`${slider.id}-value`);
    
    if (!valueDisplay) return;
    
    // Update value display on input
    slider.addEventListener('input', () => {
      valueDisplay.textContent = slider.value;
    });
  });
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

// File upload preview
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

// Initialize all functions when DOM is loaded
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