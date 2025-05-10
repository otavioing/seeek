// window.onload = function() {
//     var explorarLink = document.querySelector('a[href="explorar.html"]');
//     if (explorarLink) {
//         explorarLink.classList.add('explorar-ativo');
//     }
// };

// document.addEventListener('visibilitychange', function() {
//     var explorarLink = document.querySelector('a[href="explorar.html"]');
//     if (document.hidden && explorarLink) {
//         explorarLink.classList.remove('explorar-ativo');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Remove a classe 'paginaselecionada' de todos os links inicialmente
//     document.querySelectorAll('.navsite .nav-link').forEach(tab => tab.classList.remove('paginaselecionada'));

//     // Pegue a aba selecionada do localStorage
//     const selectedTab = localStorage.getItem('selectedTab');
//     if (selectedTab) {
//         const link = document.querySelector(`.navsite .nav-link[href="${selectedTab}"]`);
//         if (link) {
//             link.classList.add('paginaselecionada');
//         }
//     }
// });

// // Adiciona evento de clique aos links de navegação
// document.querySelectorAll('.navsite .nav-link').forEach(tab => {
//     tab.addEventListener('click', event => {
//         // Remove a classe 'paginaselecionada' de todos os links
//         document.querySelectorAll('.navsite .nav-link').forEach(tab => tab.classList.remove('paginaselecionada'));

//         // Adiciona a classe 'paginaselecionada' ao link clicado
//         const tabId = event.target.getAttribute('href');
//         localStorage.setItem('selectedTab', tabId);
//         event.target.classList.add('paginaselecionada');
//     });
// });
