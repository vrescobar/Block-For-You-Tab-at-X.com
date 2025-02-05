(function () {
    // Flag to prevent multiple simulated clicks on the "Following" tab.
    let hasSwitched = false;

    /**
     * Finds all tab elements using the precise selector.
     * The first occurrence (index 0) is assumed to be the "For You" tab,
     * and the second (index 1) is assumed to be the "Following" tab.
     */
    function updateTabs() {
        const tabs = document.querySelectorAll('a[href="/home"][role="tab"]');

        // If fewer than two matching tabs exist, there's nothing to do yet.
        if (tabs.length < 2) {
            return false;
        }

        // Hide the first tab ("For You").
        tabs[0].style.display = 'none';

        // If we're on the "For You" timeline (i.e. URL is "/home") and haven't switched yet,
        // simulate a click on the second tab ("Following").
        if (!hasSwitched && (window.location.pathname === '/home' || window.location.pathname === '/home/')) {
            tabs[1].click();
            hasSwitched = true;
        }

        return true;
    }

    /**
     * Initializes the process:
     * 1. Immediately attempts to update the tabs.
     * 2. Sets up a MutationObserver to handle any dynamic changes in the DOM.
     */
    function init() {
        // Try to update the tabs immediately.
        updateTabs();

        // Observe DOM changes to continuously check for and update the tabs.
        const observer = new MutationObserver(() => {
            updateTabs();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Run the init() function when the DOM is fully loaded.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
