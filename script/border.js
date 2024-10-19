        document.addEventListener('DOMContentLoaded', () => {
            const selectedTab = localStorage.getItem('selectedTab');
            if (selectedTab) {
                const link = document.querySelector(`.navsite .nav-link[href="${selectedTab}"]`);
                if (link) {
                    link.classList.add('active');
                }
            }
        });

        document.querySelectorAll('.navsite .nav-link').forEach(tab => {
            tab.addEventListener('click', event => {
                document.querySelectorAll('.navsite .nav-link').forEach(tab => tab.classList.remove('active'));
                const tabId = event.target.getAttribute('href');
                localStorage.setItem('selectedTab', tabId);
                event.target.classList.add('active');
            });
        });
