(function() {
    try {
        var links = document.querySelectorAll('.back-link a');
        if (links && links.forEach) {
            links.forEach(function(a) {
                a.addEventListener('click', function(e) {
                    try {
                        if (document.referrer && new URL(document.referrer).host === window.location.host) {
                            e.preventDefault();
                            history.back();
                        }
                    } catch (err) {}
                });
            });
        }
    } catch (err) {}
})();
(function() {
    try {
        var main = document.querySelector('main.post-with-outline');
        if (!main) return;
        var outline = main.querySelector('.post-outline');
        if (!outline) return;

        var heading = document.querySelector('.post-content .page-title');
        function alignOutline() {
            if (heading && outline) {
                var top = heading.getBoundingClientRect().top;
                outline.style.top = Math.max(8, top) + 'px';
            }
        }
        if (heading) {
            alignOutline();
            window.addEventListener('resize', alignOutline);
            window.addEventListener('load', alignOutline);
        }

        var scrollThreshold = 140;
        function update() {
            if (main) main.classList.toggle('scrolled', window.scrollY > scrollThreshold);
        }
        window.addEventListener('scroll', update, { passive: true });
        update();
    } catch (err) {}
})();
