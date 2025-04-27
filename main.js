// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                yiuno: {
                    header: '#f4f1ea',
                    body: '#fbfaf7',
                    text: '#2C2E41',
                    green: '#A6D6C3',
                    yellow: '#FBD38D',
                    coral: '#F7A69A',
                    purple: '#C6B6E0'
                }
            }
        }
    }
};

// Alpine.js Components
document.addEventListener('alpine:init', () => {
    // Navigation component
    Alpine.data('navigation', () => ({
        show: false,
        init() {
            window.addEventListener('scroll', () => {
                this.show = window.pageYOffset > 100;
            });
        }
    }));

    // Accordion component
    Alpine.data('accordion', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        }
    }));

    // Tab system
    Alpine.data('tabs', () => ({
        activeTab: null,
        setActiveTab(tabNumber) {
            this.activeTab = this.activeTab === tabNumber ? null : tabNumber;
        }
    }));
});
