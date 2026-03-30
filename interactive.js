/* ================================================
   ARGOTRANS – Interactive Elements (shared)
   ================================================ */
(function () {
  'use strict';

  /* ---- Scroll Progress Bar ---- */
  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ---- Mobile Menu ---- */
  function initMobileMenu() {
    var toggle = document.getElementById('mobileMenuToggle');
    var menu = document.getElementById('mobileMenu');
    var close = document.getElementById('mobileMenuClose');
    var backdrop = document.getElementById('mmBackdrop');

    function openMenu() {
      menu.classList.add('open');
      toggle.classList.add('active');
      document.body.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
      if (backdrop) backdrop.classList.add('active');
    }

    function closeMenu() {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (backdrop) backdrop.classList.remove('active');
    }

    if (toggle && menu) {
      toggle.addEventListener('click', openMenu);
    }

    if (close && menu) {
      close.addEventListener('click', closeMenu);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
        closeMenu();
      }
    });

    var mobileLinks = menu ? menu.querySelectorAll('a') : [];
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---- Smooth Scroll ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---- Stats Counter Animation ---- */
  function initCounters() {
    var counters = document.querySelectorAll('.stat-counter[data-target]');
    if (!counters.length) return;
    var hasAnimated = false;

    function runCounters() {
      if (hasAnimated) return;
      hasAnimated = true;
      counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute('data-target'), 10);
        if (!target) return;
        var duration = 1800;
        var start = 0;
        var step = target / (duration / 16);
        function update() {
          start += step;
          if (start < target) {
            counter.textContent = Math.floor(start).toLocaleString('bg-BG');
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toLocaleString('bg-BG');
          }
        }
        setTimeout(update, 300);
      });
    }

    var statsSection = document.querySelector('.stats-section');
    if (statsSection && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) runCounters();
      }, { threshold: 0.3 });
      observer.observe(statsSection);
    } else {
      runCounters();
    }
  }

  /* ---- Header Scroll Effect ---- */
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 28px rgba(0,0,0,0.8)';
      } else {
        header.style.boxShadow = '0 2px 24px rgba(0,0,0,0.7)';
      }
    }, { passive: true });
  }

  /* ---- Emergency Modal (8 seconds) ---- */
  function initEmergencyModal() {
    var overlay = document.getElementById('emergencyModalOverlay');
    if (!overlay) return;

    // Don't show if already dismissed in this session
    if (sessionStorage.getItem('argo_modal_dismissed')) return;

    var dismissBtns = overlay.querySelectorAll('.emergency-modal-dismiss, .emergency-modal-close-x');

    function showModal() {
      overlay.classList.add('show');
    }

    function hideModal() {
      overlay.classList.remove('show');
      sessionStorage.setItem('argo_modal_dismissed', '1');
    }

    setTimeout(showModal, 8000);

    dismissBtns.forEach(function (btn) {
      btn.addEventListener('click', hideModal);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) hideModal();
    });
  }

  /* ---- Service Card Yellow Glow on hover (CSS handles it but we add class) ---- */
  function initServiceCardHover() {
    document.querySelectorAll('.service-card').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        this.style.willChange = 'transform, box-shadow';
      });
      card.addEventListener('mouseleave', function () {
        this.style.willChange = '';
      });
    });
  }

  /* ---- Init all ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollProgress();
    initMobileMenu();
    initSmoothScroll();
    initCounters();
    initHeaderScroll();
    initEmergencyModal();
    initServiceCardHover();
  });

})();
