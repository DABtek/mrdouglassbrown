
(function () {
  'use strict';

  // ── Focus Utilities ───────────────────────────────────────────────────────────

  var FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(element) {
    var focusable = Array.from(element.querySelectorAll(FOCUSABLE));
    var first = focusable[0];
    var last  = focusable[focusable.length - 1];
    function onKeydown(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    }
    element.addEventListener('keydown', onKeydown);
    return function removeTrap() { element.removeEventListener('keydown', onKeydown); };
  }

  // ── Video Modal ───────────────────────────────────────────────────────────────

  var videoModal  = document.getElementById('videoModal');
  var videoFrame  = document.getElementById('lokiVideoFrame');
  var openBtn     = document.getElementById('openVideoBtn');
  var closeBtn    = document.getElementById('closeVideoBtn');

  var _videoTrigger   = null;
  var _removeTrapFn   = null;

  function openVideo(url) {
    if (!videoModal || !videoFrame) return;
    _videoTrigger = document.activeElement;
    videoFrame.src = url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
    _removeTrapFn = trapFocus(videoModal);
  }

  function closeVideo() {
    if (!videoModal || !videoFrame) return;
    if (_removeTrapFn) { _removeTrapFn(); _removeTrapFn = null; }
    videoModal.style.display = 'none';
    videoFrame.src = '';
    document.body.style.overflow = '';
    if (_videoTrigger) { _videoTrigger.focus(); _videoTrigger = null; }
  }

  if (openBtn)  openBtn.addEventListener('click', function () { openVideo('https://www.youtube.com/embed/ilRL0i-iAY8'); });
  if (closeBtn) closeBtn.addEventListener('click', closeVideo);
  if (videoModal) {
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) closeVideo();
    });
    videoModal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeVideo();
    });
  }

  // Generic: any element with data-video-url opens the modal
  document.querySelectorAll('[data-video-url]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openVideo(el.dataset.videoUrl);
    });
  });

  // ── Lightbox ──────────────────────────────────────────────────────────────────

  var galleryImgs = document.querySelectorAll('.gallery-item img');
  if (!galleryImgs.length) return;

  var images = Array.from(galleryImgs).map(function (img) {
    return { src: img.src, alt: img.alt };
  });
  var current = 0;
  var _lbTrigger = null;
  var _removeLbTrapFn = null;

  // Build overlay
  var lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-labelledby', 'lb-title');
  lb.innerHTML =
    '<span id="lb-title" class="sr-only">Photo lightbox</span>' +
    '<button class="lb-close" aria-label="Close lightbox">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous image">&#8592;</button>' +
    '<button class="lb-next" aria-label="Next image">&#8594;</button>' +
    '<div class="lb-img-wrap"><img class="lb-img" src="" alt="" /></div>' +
    '<div class="lb-counter" aria-live="polite" aria-atomic="true"></div>';
  document.body.appendChild(lb);

  var lbImg     = lb.querySelector('.lb-img');
  var lbCounter = lb.querySelector('.lb-counter');
  var lbClose   = lb.querySelector('.lb-close');
  var lbPrev    = lb.querySelector('.lb-prev');
  var lbNext    = lb.querySelector('.lb-next');
  var lbTitle   = lb.querySelector('#lb-title');

  function updateLb() {
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = (current + 1) + ' of ' + images.length;
    lbTitle.textContent = 'Photo lightbox — image ' + (current + 1) + ' of ' + images.length;
  }

  function openLb(index) {
    current = index;
    _lbTrigger = galleryImgs[index];
    updateLb();
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
    _removeLbTrapFn = trapFocus(lb);
  }

  function closeLb() {
    if (_removeLbTrapFn) { _removeLbTrapFn(); _removeLbTrapFn = null; }
    lb.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; }, 300);
    if (_lbTrigger) { _lbTrigger.focus(); _lbTrigger = null; }
  }

  function prev() { current = (current - 1 + images.length) % images.length; updateLb(); }
  function next() { current = (current + 1) % images.length; updateLb(); }

  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('lb-img-wrap')) closeLb();
  });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

  // Swipe
  var tx = 0;
  lb.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].screenX; }, { passive: true });
  lb.addEventListener('touchend',   function (e) {
    var dx = e.changedTouches[0].screenX - tx;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  // Hide arrows when only one image
  if (images.length <= 1) { lbPrev.style.display = 'none'; lbNext.style.display = 'none'; }

  galleryImgs.forEach(function (img, i) {
    img.style.cursor = 'zoom-in';
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'View full screen: ' + (img.alt || 'image ' + (i + 1)));
    img.addEventListener('click', function () { openLb(i); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); }
    });
  });

})();
