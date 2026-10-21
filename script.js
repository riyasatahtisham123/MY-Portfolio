const themeToggleBtn = document.getElementById('theme-toggle');

        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
        } else {
            document.documentElement.classList.add('dark');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                
                if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('theme', 'dark');
                    themeToggleBtn.innerHTML = '☀️';
                } else {
                    localStorage.setItem('theme', 'light');
                    themeToggleBtn.innerHTML = '🌙';
                }
            });
        }

        // --- Mobile Menu Toggle ---
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // --- Project Modal Data & Logic ---
        const projectData = {
            'DesireCart': {
                title: 'DesireCart, E-Commerce Website',
                desc: 'Developed a user-friendly e-commerce platform featuring seamless navigation, high performance, and dynamic product listings designed to boost customer engagement and satisfaction.'
            },
            'NewsApp': {
                title: 'News App',
                desc: 'Created a responsive news application delivering real-time updates from multiple sources. Integrated news APIs to efficiently fetch and display curated content with a modern UI.'
            },
            'AlertSphere': {
                title: 'AlertSphere: Disaster Tweet Detector',
                desc: 'Developed an NLP-based system in a team project to classify disaster-related tweets using machine learning. Leveraged robust data analysis and visualization libraries.'
            }
        };

        function openProjectModal(projectId) {
            const modal = document.getElementById('project-modal');
            const titleEl = document.getElementById('modal-title');
            const descEl = document.getElementById('modal-desc');

            if (projectData[projectId] && modal) {
                titleEl.textContent = projectData[projectId].title;
                descEl.textContent = projectData[projectId].desc;
                modal.classList.remove('hidden');
            }
        }

        function closeProjectModal() {
            const modal = document.getElementById('project-modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        }

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('project-modal');
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        // --- Contact Form Submission Handler ---
        function handleFormSubmit(e) {
            e.preventDefault();
            const notif = document.getElementById('notification-box');
            
            if (notif) {
                notif.classList.remove('translate-y-32', 'opacity-0');
                
                setTimeout(() => {
                    notif.classList.add('translate-y-32', 'opacity-0');
                }, 4000);
            }

            e.target.reset();
        }