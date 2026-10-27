/**
 * INTEKHAB ALAM CHOWDHURY - PORTFOLIO INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Particle / Constellation Canvas Background
  initAmbientCanvas();

  // 2. Theme Toggle (Dark / Light)
  initThemeToggle();

  // 3. Navigation & Scroll Spy
  initNavigation();

  // 4. Project Category Filtering
  initProjectFilters();

  // 5. 3D Tilt Effect on Cards
  initTiltEffect();

  // 6. Animated Skill Bars Observer
  initSkillBars();

  // 7. Resume Modal Controls
  initResumeModal();

  // 8. Contact Form & Email Copy
  initContactFeatures();
});

/* ===================================================================
   1. AMBIENT PARTICLES CANVAS
   =================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle configuration
  const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
  const particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.speedX = (Math.random() - 0.5) * 0.7;
      this.speedY = (Math.random() - 0.5) * 0.7;
      this.density = Math.random() * 20 + 5;
    }

    draw() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.fillStyle = isLight ? 'rgba(79, 70, 229, 0.45)' : 'rgba(99, 102, 241, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX * 0.4;
          this.y -= directionY * 0.4;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const lineColor = isLight ? 'rgba(79, 70, 229,' : 'rgba(99, 102, 241,';

    // Draw connecting lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 110) {
          const opacity = (1 - dist / 110) * 0.18;
          ctx.strokeStyle = `${lineColor}${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================================================================
   2. THEME TOGGLE
   =================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    toggleBtn.innerHTML = theme === 'light' 
      ? '<i class="fa-solid fa-moon"></i>' 
      : '<i class="fa-solid fa-sun"></i>';
    toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`);
  }
}

/* ===================================================================
   3. NAVIGATION, SCROLL SPY & PROGRESS
   =================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.scroll-progress-bar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
      const isOpen = navLinksContainer.classList.contains('mobile-open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar
    if (progressBar && docHeight > 0) {
      const scrollPercent = (scrollPos / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Sticky Navbar style
    if (navbar) {
      if (scrollPos > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll Spy active state
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   4. PROJECT FILTERING
   =================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category') || '';
        const categories = cardCategory.trim().split(/\s+/);
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ===================================================================
   5. 3D TILT EFFECT ON CARDS
   =================================================================== */
function initTiltEffect() {
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ===================================================================
   6. ANIMATED SKILL BARS
   =================================================================== */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (!skillBars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetWidth = target.getAttribute('data-width');
          target.style.width = targetWidth;
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

/* ===================================================================
   7. RESUME MODAL
   =================================================================== */
function initResumeModal() {
  const openButtons = document.querySelectorAll('.open-resume-modal');
  const modalOverlay = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const printBtn = document.getElementById('print-resume-btn');

  if (!modalOverlay) return;

  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ===================================================================
   8. CONTACT FORM & INTERACTIVE ACTIONS
   =================================================================== */
function initContactFeatures() {
  // Toast Helper
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'intekhab@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied to clipboard!';
        showToast('Email address copied to clipboard!');
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Click to copy';
        }, 3000);
      }).catch(() => {
        showToast('Direct email: intekhab@gmail.com');
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        showToast('Message sent successfully! Intekhab will get back to you shortly.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
