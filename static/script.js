(function() {
    document.addEventListener('click', function(e) {
        var backLink = e.target.closest ? e.target.closest('.back-link a') : null;
        if (!backLink) return;
        e.preventDefault();
        e.stopPropagation();

        if (window.history.length > 1) {
            window.history.back();
        } else {
            var fallback = '/';
            var ref = document.referrer;
            if (ref) {
                try {
                    var refUrl = new URL(ref);
                    if (refUrl.origin === window.location.origin && refUrl.pathname !== window.location.pathname) {
                        fallback = ref;
                    }
                } catch (err) {}
            }
            window.location.href = fallback;
        }
        return false;
    }, true);
})();
