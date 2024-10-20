        document.addEventListener('DOMContentLoaded', () => {
            const selectedTab = localStorage.getItem('selectedTab');
            if (selectedTab) {
                const link = document.querySelector(`.navsite .nav-link[href="${selectedTab}"]`);
                if (link) {
                    link.classList.add('paginaselecionada');
                }
            }
        });

        document.querySelectorAll('.navsite .nav-link').forEach(tab => {
            tab.addEventListener('click', event => {
                document.querySelectorAll('.navsite .nav-link').forEach(tab => tab.classList.remove('paginaselecionada'));
                const tabId = event.target.getAttribute('href');
                localStorage.setItem('selectedTab', tabId);
                event.target.classList.add('paginaselecionada');
            });
        });
