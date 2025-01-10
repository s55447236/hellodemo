// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 页面加载时的动画
function initAnimations() {
    // 确保 GSAP 已经加载
    if (typeof gsap === 'undefined') return;

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
    gsap.set('.list-item', { y: 70, opacity: 0 });
    gsap.set('.footer-section', { y: 30, opacity: 0 });
    gsap.set('.footer-bottom', { y: 30, opacity: 0 });

    // 立即执行导航栏动画
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
            start: 'top 60%'
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

    // 定义课程卡片动画，添加放大效果
    featuredTimeline
    .to('.course-card', {
        y: 0, // 垂直方向移动到原始位置
        scale: 1, // 放大到原始比例
        opacity: 1, // 设置透明度为完全可见
        duration: 0.8, // 每个卡片动画时长为 0.8 秒
        stagger: 0.2, // 逐个卡片依次延迟 0.2 秒播放动画
        delay: 0.4, // 整体动画延迟 0.4 秒开始
        ease: 'power2.out' // 使用平滑的缓动效果
    });

    // 初始状态：设置卡片缩小并隐藏
    gsap.set('.course-card', {
    scale: 0.8, // 初始缩小至 80%
    opacity: 0, // 初始完全透明
    y: 50 // 初始向下偏移 50 像素
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
        delay: 0.1,
        ease: 'power2.out'
    });

    // 定义 successTimeline 动画时间轴
    const successTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.list-section', // 滚动触发器为 .list-section 区域
            start: 'top 90%' // 动画开始触发点，.list-section 顶部进入视窗的 90%
        }
    });

    // 定义 .list-item 动画效果，添加放大和位移
    successTimeline
        .to('.list-item', {
            y: 0, // 垂直方向移动到原始位置
            scale: 1, // 放大到原始比例
            opacity: 1, // 设置透明度为完全可见
            duration: 0.8, // 每个列表项动画时长为 0.8 秒
            stagger: 0.2, // 逐个列表项依次延迟 0.9 秒播放动画
            delay: 0.3, // 整体动画延迟 0.2 秒开始
            ease: 'power2.out' // 使用平滑的缓动效果
        });

    // 设置初始状态：缩小、偏移和隐藏
    gsap.set('.list-item', {
        scale: 0.8, // 初始缩小至 80%
        opacity: 0, // 初始完全透明
        y: 50 // 初始向下偏移 50 像素
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

// 确保DOM加载完成后初始化动画
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
} 