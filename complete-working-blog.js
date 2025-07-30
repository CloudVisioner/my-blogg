// Enhanced Blog JavaScript - Complete Working Version
class EnhancedBlog {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: "Berish va olish haqida",
                excerpt: "Odatda ko'pchiligimiz olishni xoxlaymiz, lekin berish haqida o'ylaymizmi?",
                content: `<p>Odatda ko'pchiligimiz olishni xoxlaymiz, bu ta'biy albatta, lekin berishnichi?</p>
<p>Biz boy bo'lishni, yaxshi yahsashni, eng yaxhsi daromad qilishni, hullas iqtisodiy erkinlikka erishishni xoxlaymiz. Qanchonki biz bir narsa sotsak, barcha uni olishini xoxlaymiz, odamlar ichida bo'lsak hamma bizni hurmat qilishini xoxlaymiz, hamma odam bizga yaxhsi munosabatda bo'lishi xoxlaymiz, bizni eslab turishlarni xoxlaymiz va bizga foyda berishlarini xoxlaymiz. Lekin, biz shuni terskarisini qilamizmi, ya'ni beramizmi? Blogni shu yerigacha o'qib odam hulosa qilib olsa bo'ladi, kelinglar davom etamiz.</p>
<p>Magazinga kirasiz, xoxlagan narsangizni olasiz, biroq nimani evaziga, pulni evaziga. Agar bermasangiz, hech nima ololmaysiz. Ishxonada birinchi aytilgan vazifani bacharasiz, keyin pulni olasiz. Loyiha yoki kampaniya boshlasangiz, boringizni berasiz, keyin ko'tarilasiz, o'sasiz. Ilim olishda vaqtingizni, kuchungizni, boringizni berasiz, keyin bir nima yuqadi sizga, ilimli bo'lasiz. Birovga yaxhi munosabatda bo'lasiz, sizga yaxhsi munosabatda bo'lishadi. Ota-onani hurmat qilasiz, kuni kelib farzandlariz sizni hurmat qiladi. Birovni og'irini yengil qilasiz, og'iriz yengil bo'ladi, xizmat haqqini to'laysiz, xizmat ko'rsatishadi, qisqacha qilib aytganda avval berasiz, keyin olasiz.</p>
<p>Islom dinimizda ham, avval berasiz (ehson qilasiz), keyin ko'paytirib beriladi.</p>
<p>Ishlarimiz yurishmasligi, odamlar bizga yomon munosabatda bo'layotganligi, bizga hech kimni foydasi tegmayotganligi, birovlar habar olmayotganligi, tapada ta'kidlab o'tilganlarni teskarisini qilayotganligimiz emasmikan? Nimani eksang, o'rasan deyishar ediku.</p>
<p>Demak vaqtimizdan, pulimizdan, e'tiborimizdan, kuchimizdan, ilmimizdan ajratib hech nima bermayotgan ekanmiz, nimani kutish mumkin? Hech narsani. Agar nimadirlarni kutayotgan bo'lsak, barchasi hom hayol. Hom hayollar bilan yashashchalik achchiq narsa bo'masa kerak.</p>
<p>Endi savol o'zgaradi, manga nima berishdi emas, man nima berdim.</p>
<p>O'zimizda bor hurmat, obro'-e'tibor, pul, tanishlar, qo'yinki bizda nima bo'lsa, berganimizchalik o'lchab qo'ysak bo'ladi.</p>`,
                date: "2025-07-30",
                category: ""
            },

            {
                id: 2,
                title: "Kompound Effekti",
                excerpt: "Odatda ko'pchiligimiz olishni xoxlaymiz, lekin berish haqida o'ylaymizmi?",
                content: `<p><strong>“Murakkab foiz — bu dunyoning sakkizinchi mo‘jizasi. Uni tushungan odam — daromad qiladi, tushunmagan esa — to‘laydi”</strong> deydi Albert Eynshteyn.</p>

<p><strong>Compound interest</strong> (murakkab foizlar), bu qachon siz bir harakatni doimiy qilasiz va u ustma-ust o'sib boradi, buni geometrik o'sish desa ham bo'ladi. Oddiy o'sish quyidagicha bo'ladi: 1, 2, 3, 4, 5 ... va o'sish arifmetik o'sish deyiladi. <strong>Compound</strong> o'sishi esa 1, 2, 4, 8, 16 ... , ya'ni ko'proq foyda ustiga foyda. Agar ikkalasi doimiy holda o'sib borsa, compound interest yuqori natija ko'rsatadi. Natijasi faqat doimiy takrorlanganda ko'rinadi.</p>

<p>Shunga o'xshab bizning ba'zi bir compound interest ga ega bo'lgan ishlarimiz bor, agar compound interestni yaxshilab tushunib, uni amalda doimiy qo'llasak, juda ham kuchli natijalarga olib keladi.</p>

<h3>Compound interest ga ega bo'lgan harakatlar:</h3>

<h4>O'rganish</h4>
<p>Agar inson doimiy o'rganib borar ekan, uning bilimi plyus "+" kabi qo'shilmaydi, balki karra kabi ko'payadi. Va qachon u bir narsani o'rgansa, qolgan 10 ta narsaga ham aql yetib qoladi. Natijada, qaysi sohani odammi bo'lmasin, u bilan soatlab suhbat qura oladi, chunki unda compoundlashgan bilim bor. Lekin inson bunda to'xtab qolmasligi kerak, chunki to'xtasa pastga qulaydi. Naval Ravikant aytadi: <em>“Agar siz o‘rganmayotgan bo‘lsangiz, demak, yemirilyapsiz.”</em></p>

<h4>Odatlar</h4>
<p>Hozir qilayotgan har bir ishimiz, kelajakdagi bizdan dalolat beradi. Siz nima qilsangiz, siz o'sha siz (<em>you are what you do</em>). <strong>Atomic Habits</strong> kitobida keltiriladi: <em>“Maqsadingiz qanchalik yuksak bo‘lmasin, siz baribir o‘zingiz yaratgan odatlar va tizimlar darajasida harakat qilasiz.”</em> Agar bizning yomon odatlar doimiy qilinib kelinarkan, hozir natija bermas, lekin 5-10 yilda og'rig'i seziladi. Lekin agar kunda oz bo‘lsa ham 10 bet kitob, 10 daqiqa yozish, 20 daqiqa shug'ullanish, 5$ saqlab qo‘yish, 5 ta so‘z yodlash — 1 yilda natija ko‘rinishni boshlaydi, agar 3-5, mayli deylik 10 yil davom etsa, siz shunchaki ajralib chiqishni boshlaysiz. Bu esa boshqalar erishmagan natijalarga olib keladi. Suv tomib-tomib toshni yoradi dermidi?</p>

<h4>Investitsiya</h4>
<p>Ko‘pchilik investitsiya deganda faqat treyding yoki kriptani tushunadi. Ha, bu ham compound, lekin natija kafolatlanmagan, shunchaki 50/50. Biz esa o‘ziga investitsiya qilish haqida gaplashamiz. Siz investitsiyani, pullik kurslarga, til o‘rganishga, qimmat kitoblarga, book clublarga, networking meetinglarga, sog‘ligingizga, biznesga (biznes ham 50/50, yutqazsangiz ham kamida tajriba bilan chiqasiz, baribir foyda), va kerakli resurslarga qiling. Bu investitsiya shunaqa natijasini beradiki, shunchaki sizi hali hayolingizga kelmagan bo‘ladi.</p>

<h4>Munosabatlarda</h4>
<p>Har inson bilan qilayotgan muomalamiz, o‘z natijasini ko‘rsatmay qolmaydi. Siz qo‘lingizdan kelgancha odamlarga yordam berasiz, tabassum qilasiz va qo‘llab-quvvatlaysiz. Kuni kelib, sizga bir ishingizni hal qilish kerak bo‘lib qoladi, sizga tekinga xizmat ko‘rsatishadi, ish taklif qilib qolishadi va umuman hayolingizga kelmagan imkoniyatlar va yo‘llar ochila boshlaydi (<em>buni serendipity deydi</em>). Bir akamizni bilaman, pulsiz biznes boshlagan, sababi networkingi kuchli bo‘lgan. Lekin networking munosabatlarimiz orqali quriladi. Networkingni darajasi va sifati ham bor, shuni unutmaslik kerak.</p>

<h4>Yozish</h4>
<p>Qisqacha, yozish fikrni tiniq qiladi, doimiy yozib yurgan odam fikrini og‘zaki ravon yetkazadi va aniq fikrlaydi. Yozish sog‘liqqa ham foyda: stressdan olib chiqadi, tinchlantiradi, immunitetni yaxshilaydi va qon bosimini meyorida saqlaydi. Doimiy yozib yurgan odamning xotirasi kuchli bo‘ladi va yozgan bilimi miyyasiga tatuirovka bo‘lib qoladi (<em>writing is a tattoo on your brain</em>). Qisqacha deb, ancha yozvordim a?</p>

<h3>Xulosa</h3>
<p><strong>Compound interest</strong> odamni muvofaqqiyatga yetaklovchi asosiy omil hisoblanadi. Busiz umuman iloji yo‘q. “Allohga eng mahbub amal — oz bo‘lsa ham, doimiy qilinadigan amal.” (Imom Buxoriy va Muslim rivoyati).</p>
`,
                date: "2025-07-30",
                category: ""
            },

        ];
        this.filteredPosts = [...this.posts];
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.currentTheme = 'light';
        this.init();
    }

    init() {
        // Only loadPosts and setupEventListeners kept
        this.loadPosts();
        this.setupEventListeners();
        this.loadTheme();
    }

    // Utility: Generate a title if missing
    generateTitle(content) {
        // Simple: Use first sentence or up to 8 words
        if (!content) return "Untitled Post";
        const text = content.replace(/<[^>]+>/g, '').trim();
        const firstSentence = text.split(/[.!?]/)[0];
        if (firstSentence) {
            return firstSentence.split(' ').slice(0, 8).join(' ') + (firstSentence.split(' ').length > 8 ? '...' : '');
        }
        return text.slice(0, 40) + (text.length > 40 ? '...' : '');
    }

    loadPosts() {
        // Simulate fetching posts from a data source (could be replaced with fetch/ajax)
        // If a post is missing a title, generate it
        this.posts = (this.posts || []).map(post => ({
            ...post,
            title: post.title || this.generateTitle(post.content)
        }));
        this.filteredPosts = [...this.posts];
        this.renderPosts();
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                // FILTER *as you type*, immediately!
                this.filterPosts();
            });
        }

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                }
                this.searchQuery = '';
                this.filterPosts();
            });
        }



        // CRITICAL: Setup sidebar navigation links to show individual posts
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postTitle = link.dataset.title;
                if (postTitle) {
                    this.showSinglePostByTitle(postTitle);
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextPage());
        }

        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.showPostsList());
        }

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');

        if (mobileToggle && sidebar) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                sidebar.classList.toggle('mobile-hidden');
            });

            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                    mobileToggle.classList.remove('active');
                    sidebar.classList.add('mobile-hidden');
                }
            });
        }
    }

    setupBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            }

            if (e.key === 'Escape') {
                const searchInput = document.getElementById('searchInput');
                if (document.activeElement === searchInput && searchInput) {
                    searchInput.value = '';
                    this.searchQuery = '';
                    this.filterPosts();
                }
            }
        });
    }

    setActiveCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1;
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const categoryLink = document.querySelector(`[data-category="${category}"]`);
        if (categoryLink) {
            categoryLink.classList.add('active');
        }
        this.filterPosts();
    }

    filterPosts() {
        this.filteredPosts = this.posts.filter(post => {
            const query = this.searchQuery.trim().toLowerCase();
            if (query.length < 1) return true;
            const titleMatch = (post.title || '').toLowerCase().includes(query);
            const excerptMatch = (post.excerpt || '').toLowerCase().includes(query);
            const contentMatch = (post.content || '').toLowerCase().includes(query);
            return titleMatch || excerptMatch || contentMatch;
        });
        this.updateSearchUI();
        this.renderPosts();
    }

    updateSearchUI() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const filterInfo = document.getElementById('filterInfo');

        if (this.searchQuery && searchClear) {
            searchClear.style.display = 'block';
        } else if (searchClear) {
            searchClear.style.display = 'none';
        }

        if (filterInfo) {
            filterInfo.textContent = this.searchQuery ? `Searching for "${this.searchQuery}"` : '';
        }
    }

    renderSidebar() {
        const categoryList = document.getElementById('categoryList');
        if (!categoryList) return;
        categoryList.innerHTML = this.posts.map(post =>
            `<li><a href="#" class="nav-link" data-title="${post.title}">${post.title}</a></li>`
        ).join('');
        // Add click event listeners
        categoryList.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postTitle = link.dataset.title;
                const post = this.posts.find(p => p.title === postTitle);
                if (post) this.showSinglePost(post.id);
            });
        });
    }

    renderPosts() {
        const postsGrid = document.getElementById('postsGrid');
        const postsCount = document.getElementById('postsCount');
        const pagination = document.getElementById('pagination');
        if (!postsGrid) return;

        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const currentPosts = this.filteredPosts.slice(startIndex, endIndex);

        if (postsCount) {
            postsCount.textContent = `${this.filteredPosts.length} post${this.filteredPosts.length !== 1 ? 's' : ''}`;
        }

        postsGrid.innerHTML = currentPosts.map(post => `
            <article class="post-card" data-post-id="${post.id}">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span>${this.formatDate(post.date)}</span>
                    <span>${post.category || ''}</span>
                </div>
            </article>
        `).join('');

        postsGrid.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', () => {
                const postId = parseInt(card.dataset.postId);
                this.showSinglePost(postId);
            });
        });

        this.updatePagination();
        this.renderSidebar();
    }

    updatePagination() {
        const pagination = document.getElementById('pagination');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const paginationInfo = document.getElementById('paginationInfo');
        if (!pagination) return;

        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);

        if (totalPages <= 1) {
            pagination.style.display = 'none';
            return;
        }

        pagination.style.display = 'flex';

        if (prevBtn) prevBtn.disabled = this.currentPage === 1;
        if (nextBtn) nextBtn.disabled = this.currentPage === totalPages;

        if (paginationInfo) {
            paginationInfo.textContent = `Page ${this.currentPage} of ${totalPages}`;
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderPosts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderPosts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // CRITICAL: Method to show post by title (for sidebar navigation)
    showSinglePostByTitle(title) {
        const post = this.posts.find(p => p.title === title);
        if (post) {
            this.showSinglePost(post.id);
        }
    }

    showSinglePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const postsContainer = document.getElementById('postsContainer');
        const singlePost = document.getElementById('singlePost');
        if (postsContainer) postsContainer.style.display = 'none';
        if (singlePost) singlePost.style.display = 'block';

        const essayTitle = document.getElementById('essayTitle');
        const essayDate = document.getElementById('essayDate');
        const essayCategory = document.getElementById('essayCategory');
        const essayStats = document.getElementById('essayStats');
        const essayContent = document.getElementById('essayContent');

        if (essayTitle) essayTitle.textContent = post.title;
        if (essayDate) essayDate.textContent = this.formatDate(post.date);
        if (essayCategory) essayCategory.textContent = '';
        if (essayStats) essayStats.textContent = '';
        if (essayContent) essayContent.innerHTML = post.content;

        window.history.pushState({ postId }, '', `#post-${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showPostsList() {
        const singlePost = document.getElementById('singlePost');
        const postsContainer = document.getElementById('postsContainer');
        if (singlePost) singlePost.style.display = 'none';
        if (postsContainer) postsContainer.style.display = 'block';
        
        // Clear active state from sidebar links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        window.history.pushState({}, '', window.location.pathname);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showLoading() {
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'flex';
        }
    }

    hideLoading() {
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Initialize the blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.blogInstance = new EnhancedBlog();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    const blog = window.blogInstance;
    if (event.state && event.state.postId) {
        blog?.showSinglePost(event.state.postId);
    } else {
        blog?.showPostsList();
    }
});
