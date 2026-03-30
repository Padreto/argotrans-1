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

  /* ---- Lightbox with prev/next navigation ---- */
  function initLightbox() {
    var allItems = [];
    var currentIdx = 0;

    // Build overlay
    var overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Затвори">&times;</button>' +
      '<button class="lb-nav lb-prev" aria-label="Предишна">&#9664;</button>' +
      '<img src="" alt="" />' +
      '<button class="lb-nav lb-next" aria-label="Следваща">&#9654;</button>' +
      '<div class="lb-counter"></div>';
    document.body.appendChild(overlay);

    var lbImg = overlay.querySelector('img');
    var lbClose = overlay.querySelector('.lb-close');
    var lbPrev = overlay.querySelector('.lb-prev');
    var lbNext = overlay.querySelector('.lb-next');
    var lbCounter = overlay.querySelector('.lb-counter');

    function collectItems() {
      allItems = Array.prototype.slice.call(document.querySelectorAll('.bento-item[data-lb]'));
    }

    function showImage(idx) {
      if (!allItems.length) return;
      currentIdx = (idx + allItems.length) % allItems.length;
      var item = allItems[currentIdx];
      var src = item.getAttribute('data-lb');
      var alt = item.querySelector('img') ? item.querySelector('img').alt : '';
      lbImg.src = src;
      lbImg.alt = alt;
      lbCounter.textContent = (currentIdx + 1) + ' / ' + allItems.length;
    }

    function openLightbox(idx) {
      collectItems();
      showImage(idx);
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(function () { lbImg.src = ''; }, 300);
    }

    // Delegate click on bento items
    document.addEventListener('click', function (e) {
      var item = e.target.closest('.bento-item[data-lb]');
      if (!item) return;
      e.preventDefault();
      collectItems();
      var idx = allItems.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', function () { showImage(currentIdx - 1); });
    lbNext.addEventListener('click', function () { showImage(currentIdx + 1); });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });

    // Keyboard nav
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(currentIdx - 1);
      if (e.key === 'ArrowRight') showImage(currentIdx + 1);
    });

    // Touch swipe
    var touchStartX = 0;
    overlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    overlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) showImage(currentIdx + 1);
        else showImage(currentIdx - 1);
      }
    }, { passive: true });
  }

  /* ---- Bento gallery scroll animation ---- */
  function initBentoReveal() {
    var items = document.querySelectorAll('.bento-item');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = Array.prototype.indexOf.call(items, entry.target) % 8 * 60;
          setTimeout(function () { entry.target.classList.add('in-view'); }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (item) { observer.observe(item); });
  }

  /* ---- Scroll reveal for .reveal elements ---- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Init all ---- */
  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js-ready');
    initScrollProgress();
    initMobileMenu();
    initSmoothScroll();
    initCounters();
    initHeaderScroll();
    initEmergencyModal();
    initServiceCardHover();
    initLightbox();
    initBentoReveal();
    initReveal();
  });

})();
