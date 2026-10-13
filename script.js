 
        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Project Modal Data
        const projectData = {
            'DesireCart': {
                title: 'DesireCart, E-Commerce Website',
                desc: 'A comprehensive user-friendly e-commerce platform built with HTML, CSS, JavaScript, Python, and Django. Features seamless user navigation, dynamic product listings, cart management, and robust full-stack architecture.'
            },
            'NewsApp': {
                title: 'News App',
                desc: 'A responsive news application engineered with HTML, CSS, Tailwind CSS, and React.js. It integrates external news APIs to fetch and present real-time updates across multiple categories with a lightning-fast UI.'
            },
            'AlertSphere': {
                title: 'AlertSphere: Disaster Tweet Detector',
                desc: 'An intelligent team project leveraging Natural Language Processing (NLP) to classify disaster-related tweets using Machine Learning. Developed with Python, Scikit-learn, pandas, and matplotlib for deep data analysis and visualization.'
            }
        };

        function openProjectModal(projectId) {
            const modal = document.getElementById('project-modal');
            const titleEl = document.getElementById('modal-title');
            const descEl = document.getElementById('modal-desc');

            if(projectData[projectId]) {
                titleEl.textContent = projectData[projectId].title;
                descEl.textContent = projectData[projectId].desc;
                modal.classList.remove('hidden');
            }
        }

        function closeProjectModal() {
            document.getElementById('project-modal').classList.add('hidden');
        }

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('project-modal');
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        // Form submission notification handler
        function handleFormSubmit(e) {
            e.preventDefault();
            const notif = document.getElementById('notification-box');
            notif.classList.remove('translate-y-32', 'opacity-0');
            
            setTimeout(() => {
                notif.classList.add('translate-y-32', 'opacity-0');
            }, 4000);

            e.target.reset();
        }