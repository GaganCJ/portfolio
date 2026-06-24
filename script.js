document.addEventListener('DOMContentLoaded', () => {
  // Check if portfolioData is loaded
  if (typeof portfolioData === 'undefined') {
    console.error('portfolioData is not defined. Make sure data.js is loaded first.');
    return;
  }

  // ==========================================================================
  // 8-BIT AUDIO SYNTHESIZER (WEB AUDIO API)
  // ==========================================================================
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  // Sound A: Coin Bleep (standard click sound)
  function playCoinSound() {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') ctx.resume();
      
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'square'; // 8-bit sound chip waveform
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(880, now + 0.08); // A5
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio Context playback failed or blocked: ", e);
    }
  }

  // Sound B: Menu Cursor Click (hover sound)
  function playSelectSound() {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') ctx.resume();
      
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.04);
      
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      // Quiet fail if browser blocks audio
    }
  }

  // Sound C: Level-Up (Success sound)
  function playLevelUpSound() {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') ctx.resume();
      
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.setValueAtTime(329.63, now + 0.06); // E4
      osc.frequency.setValueAtTime(392.00, now + 0.12); // G4
      osc.frequency.setValueAtTime(523.25, now + 0.18); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.24); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.30); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.36); // C6
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      console.warn("Audio Context playback failed or blocked: ", e);
    }
  }

  // Event Delegation for Retro Audio Triggers
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.btn, .nav-link, .social-icon, .theme-toggle-btn, .project-link, .tab-btn');
    if (target) {
      if (target.classList.contains('project-link') && target.textContent.includes('Details')) {
        playLevelUpSound();
      } else if (target.type === 'submit') {
        playLevelUpSound();
      } else {
        playCoinSound();
      }
    }
  });

  document.body.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.btn, .nav-link, .social-icon, .theme-toggle-btn, .project-link, .tab-btn');
    if (target) {
      if (!window.lastHoverSoundTime || Date.now() - window.lastHoverSoundTime > 80) {
        playSelectSound();
        window.lastHoverSoundTime = Date.now();
      }
    }
  });

  // ==========================================================================
  // INITIAL DATA POPULATION
  // ==========================================================================
  const data = portfolioData;

  // Header Logo & Footer Name
  document.getElementById('logo-text').textContent = `${data.profile.name}.dev`;
  document.getElementById('footer-name').textContent = data.profile.name;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Hero Section
  document.getElementById('hero-name').textContent = data.profile.name;
  document.getElementById('hero-bio').textContent = data.profile.shortBio;
  document.getElementById('profile-img').src = data.profile.avatar;
  document.getElementById('profile-img').alt = data.profile.name;
  document.getElementById('resume-btn').href = data.profile.resumeUrl;

  // Hero & Contact Socials
  const heroSocials = document.getElementById('hero-socials');
  const contactSocials = document.getElementById('contact-socials');
  heroSocials.innerHTML = '';
  contactSocials.innerHTML = '';

  const socialIcons = {
    github: 'fab fa-github',
    linkedin: 'fab fa-linkedin-in',
    twitter: 'fab fa-twitter',
    email: 'fas fa-envelope'
  };

  Object.entries(data.profile.socials).forEach(([platform, url]) => {
    if (!url || url === '#' || url === '') return;
    const iconClass = socialIcons[platform] || 'fas fa-link';
    
    // Hero Social link
    const heroLink = document.createElement('a');
    heroLink.href = url;
    heroLink.className = 'social-icon';
    heroLink.target = '_blank';
    heroLink.rel = 'noopener noreferrer';
    heroLink.setAttribute('aria-label', platform);
    heroLink.innerHTML = `<i class="${iconClass}"></i>`;
    heroSocials.appendChild(heroLink);

    // Contact Social link
    const contactLink = document.createElement('a');
    contactLink.href = url;
    contactLink.className = 'social-icon';
    contactLink.target = '_blank';
    contactLink.rel = 'noopener noreferrer';
    contactLink.setAttribute('aria-label', platform);
    contactLink.innerHTML = `<i class="${iconClass}"></i>`;
    contactSocials.appendChild(contactLink);
  });

  // About Section
  document.getElementById('about-desc').textContent = data.about.description;
  const statsContainer = document.getElementById('stats-container');
  statsContainer.innerHTML = '';
  data.about.stats.forEach(stat => {
    const statCard = document.createElement('div');
    statCard.className = 'stat-card glass-card';
    statCard.innerHTML = `
      <span class="stat-label">${stat.label}</span>
      <span class="stat-number">${stat.value}</span>
    `;
    statsContainer.appendChild(statCard);
  });

  // Skills Section
  const skillsGrid = document.getElementById('skills-grid');
  
  function renderSkills(categoryFilter = 'all') {
    skillsGrid.innerHTML = '';
    const filteredSkills = categoryFilter === 'all' 
      ? data.skills 
      : data.skills.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());

    filteredSkills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card glass-card';
      skillCard.innerHTML = `
        <div class="skill-header">
          <i class="${skill.icon || 'fas fa-code'} skill-icon"></i>
          <h3 class="skill-name">${skill.name}</h3>
        </div>
        <div class="skill-bar-container">
          <div class="skill-progress" data-level="${skill.level}%"></div>
        </div>
        <span class="skill-level-text">XP: ${skill.level}%</span>
      `;
      skillsGrid.appendChild(skillCard);
    });

    // Trigger skills bar animation after small delay
    setTimeout(animateSkillBars, 100);
  }

  // Experience Section
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  data.experience.forEach((job, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    const pointsList = job.points.map(pt => `<li>${pt}</li>`).join('');

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-card">
        <span class="timeline-date">${job.duration}</span>
        <h3 class="timeline-role">${job.role}</h3>
        <span class="timeline-company">${job.company}</span>
        <p>${job.description}</p>
        <ul class="timeline-points">
          ${pointsList}
        </ul>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });

  // Projects Section
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = '';
  data.projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card glass-card';
    
    const tagsHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

    projectCard.innerHTML = `
      <div class="project-img-wrapper">
        <img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay"></div>
      </div>
      <div class="project-details-content">
        <div class="project-tags">
          ${tagsHTML}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-links">
          <a href="project-detail.html?id=${index}" class="project-link">
            <i class="fas fa-info-circle"></i> Details
          </a>
          <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });

  // Contact Info Panel
  if (data.profile.socials.email) {
    const emailLink = document.getElementById('contact-email');
    emailLink.href = data.profile.socials.email;
    // Strip "mailto:" prefix for visual presentation
    emailLink.textContent = data.profile.socials.email.replace('mailto:', '');
  }

  // ==========================================================================
  // SKILLS FILTER INTERACTION
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderSkills(e.target.dataset.category);
    });
  });

  // Initial skills load
  renderSkills('all');

  // ==========================================================================
  // TYPING EFFECT ANIMATION
  // ==========================================================================
  const typedTextSpan = document.getElementById('typed-text');
  const titles = data.profile.titles;
  const typingSpeed = 100;
  const erasingSpeed = 60;
  const newTextDelay = 2000;
  let titleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < titles[titleIndex].length) {
      typedTextSpan.textContent += titles[titleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = titles[titleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      titleIndex++;
      if (titleIndex >= titles.length) titleIndex = 0;
      setTimeout(type, typingSpeed + 500);
    }
  }

  if (titles.length) setTimeout(type, newTextDelay);

  // ==========================================================================
  // THEME SWITCHER (DARK / LIGHT)
  // ==========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });

  // ==========================================================================
  // MOBILE NAVIGATION MENU
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpened = navMenu.classList.contains('active');
    mobileMenuBtn.innerHTML = isOpened ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu on clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // ==========================================================================
  // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Animate skill progress bars
  function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level;
    });
  }
});
