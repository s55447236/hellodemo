// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 页面加载时的动画
function initAnimations() {
    // 设置初始状态
    gsap.set('.header', { y: -50, opacity: 0 });
    gsap.set('.hero-title-line', { y: 50, opacity: 0 });
    gsap.set('.hero-subtitle', { y: 30, opacity: 0 });
    gsap.set('.hero-buttons', { y: 30, opacity: 0 });
    gsap.set('.featured-courses .section-title', { y: 50, opacity: 0 });
    gsap.set('.featured-courses .section-subtitle', { y: 30, opacity: 0 });
    gsap.set('.course-card', { y: 50, opacity: 0 });
    gsap.set('.list-section .section-title', { y: 50, opacity: 0 });
    gsap.set('.list-section .section-subtitle', { y: 30, opacity: 0 });
    gsap.set('.list-item', { y: 50, opacity: 0 });
    gsap.set('.footer-section', { y: 30, opacity: 0 });
    gsap.set('.footer-bottom', { y: 30, opacity: 0 });

    // 导航栏动画
    gsap.to('.header', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });

    // Hero 部分动画
    gsap.to('.hero-title-line', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    gsap.to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });

    gsap.to('.hero-buttons', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power2.out'
    });

    // Featured Courses 部分动画
    gsap.to('.featured-courses .section-title', {
        scrollTrigger: {
            trigger: '.featured-courses',
            start: 'top 80%'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    });

    gsap.to('.featured-courses .section-subtitle', {
        scrollTrigger: {
            trigger: '.featured-courses',
            start: 'top 80%'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });

    const featuredTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.featured-courses',
            start: 'top 80%'
        }
    });

    featuredTimeline
        .to('.course-card', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.4
        });

    // Success Stories 部分动画
    gsap.to('.list-section .section-title', {
        scrollTrigger: {
            trigger: '.list-section',
            start: 'top 80%'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    });

    gsap.to('.list-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.list-section',
            start: 'top 80%'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });

    const successTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.list-section',
            start: 'top 80%'
        }
    });

    successTimeline
        .to('.list-item', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.4
        });

    // Footer 动画
    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%'
        }
    });

    footerTimeline
        .to('.footer-section', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2
        })
        .to('.footer-bottom', {
            y: 0,
            opacity: 1,
            duration: 0.8
        }, '-=0.5');
}

// 页面加载完成后初始化动画
window.addEventListener('load', initAnimations); 