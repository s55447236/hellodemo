// 导入 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 页面滚动动画
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5
        },
        opacity: 0,
        y: 30
    });
});

// 副标题动画
gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.from(subtitle, {
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5
        },
        opacity: 0,
        y: 20,
        delay: 0.2
    });
});

// 注释掉与 .project-card 和 .project-grid 相关的动画代码
// gsap.from('.project-card', {
//     scrollTrigger: {
//         trigger: '.project-grid',
//         start: 'top 60%',
//         end: 'center center',
//         scrub: 0.5
//     },
//     y: 50,
//     opacity: 0,
//     stagger: {
//         amount: 0.3
//     }
// });

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 检查 .floating-shapes 元素是否存在
const floatingShapesContainer = document.querySelector('.floating-shapes');
if (floatingShapesContainer) {
    createFloatingShapes();
}

// 随机生成浮动形状
function createFloatingShapes() {
    const container = document.querySelector('.floating-shapes');
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.left = Math.random() * 100 + 'vw';
        shape.style.top = Math.random() * 100 + 'vh';
        shape.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(shape);
    }
}

// 渐变动画
const gradientCanvas = document.querySelector('.gradient-canvas');
gsap.to(gradientCanvas, {
    background: 'linear-gradient(225deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 255, 0.1))',
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'none'
}); 

// 初始化文字动画
function initTextAnimation() {
    // 获取所有标题行
    const titleLines = document.querySelectorAll('.hero-title-line');
    
    // 设置初始状态
    titleLines.forEach((line, index) => {
        const mainTitle = line.querySelector('.hero-title-main');
        const shadowTitle = line.querySelector('.hero-title-shadow');
        
        // 设置初始状态
        gsap.set(mainTitle, {
            clipPath: 'inset(0 100% 0 0)',
            color: '#000'
        });
        gsap.set(shadowTitle, {
            opacity: 1
        });

        // 创建滚动动画
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top top',
            end: '+=400',
            scrub: 0.1,
            onUpdate: (self) => {
                const progress = self.progress;
                const threshold = index * 0.25;
                const adjustedProgress = Math.max(0, (progress - threshold) * 2);
                
                if (adjustedProgress <= 1) {
                    gsap.to(mainTitle, {
                        clipPath: `inset(0 ${100 - (adjustedProgress * 100)}% 0 0)`,
                        duration: 0.02,
                        ease: 'none'
                    });
                    gsap.set(shadowTitle, {
                        opacity: 1
                    });
                }
            }
        });
    });
}

// 页面加载时的初始动画
function initLoadAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const gradientCanvas = document.querySelector('.gradient-canvas');

    gsap.timeline()
        .from(heroSubtitle, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
        })
        .from(heroButtons, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from(gradientCanvas, {
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=0.8');
}

// 服务卡片逐个放大动画
function initServiceCards() {
    gsap.to('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 1, // 放大到正常大小
        opacity: 1, // 显示
        duration: 0.8,
        stagger: {
            amount: 0.6
        },
        ease: 'power2.out',
        delay: 0.5
    });
}

// 初始化列表动画
function initListAnimation() {
    const listItems = gsap.utils.toArray('.list-item');
    
    listItems.forEach((item, index) => {
        // 设置初始状态
        gsap.set(item, {
            opacity: 0,
            y: 100
        });

        // 创建动画
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2
        });
    });
}

// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initTextAnimation();
    initLoadAnimation();
    initServiceCards();
    initListAnimation();
}); 