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

// 项目卡片动画
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%',
        end: 'center center',
        scrub: 0.5
    },
    y: 50,
    opacity: 0,
    stagger: {
        amount: 0.3
    }
});

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

createFloatingShapes(); 

// 渐变动画
const gradientCanvas = document.querySelector('.gradient-canvas');
gsap.to(gradientCanvas, {
    background: 'linear-gradient(225deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 255, 0.1))',
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'none'
}); 

// 服务卡片动画
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: {
        amount: 0.6
    },
    ease: 'power2.out'
}); 

// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 立即显示第一行黑色文字
    const firstLine = document.querySelector('.hero-title-line');
    if (firstLine) {
        const firstTitle = firstLine.querySelector('.hero-title-main');
        gsap.set(firstTitle, {
            clipPath: 'inset(0 0 0 0)',
            webkitClipPath: 'inset(0 0 0 0)'
        });
    }
});

// 分行文字滚动显现效果
gsap.utils.toArray('.hero-title-line').forEach((line, index) => {
    // 跳过第一行的滚动动画
    if (index === 0) return;

    gsap.to(line.querySelector('.hero-title-main'), {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '+=800',
            scrub: 0.5,
            onUpdate: self => {
                const progress = self.progress;
                const threshold = (index - 1) * 0.25;
                const adjustedProgress = Math.max(0, (progress - threshold) * 2);
                const clipAmount = 100 - (adjustedProgress * 100);
                line.querySelector('.hero-title-main').style.clipPath = `inset(0 0 0 ${clipAmount}%)`;
                line.querySelector('.hero-title-main').style.webkitClipPath = `inset(0 0 0 ${clipAmount}%)`;
            }
        },
    });
});

// 页面加载时的初始动画
gsap.utils.toArray('.hero-title-main').forEach((title, index) => {
    // 跳过第一行
    if (index === 0) return;

    gsap.set(title, {
        clipPath: 'inset(0 0 0 100%)',
        webkitClipPath: 'inset(0 0 0 100%)'
    });
}); 