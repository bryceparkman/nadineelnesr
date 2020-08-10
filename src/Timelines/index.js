import { gsap, Power1 } from 'gsap'

const getAboutTimeline = (node, delay) => {
    delay = 0.25;
    const timeline = gsap.timeline({paused: true, delay})

    timeline.from('#designer', {duration: 0.25, x: -25, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});
    timeline.from('#fineArtist', {duration: 0.25, x: 25, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});
    timeline.from('.about', {duration: 0.25, x: 0, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});

    return timeline;
}

const getContactTimeline = (node, delay) => {
    const timeline = gsap.timeline({paused: true, delay})

    timeline.from('.contactEmail', {duration: 0.375, x: 0, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});
    timeline.from('.col', {duration: 0.375, x: 25, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});

    return timeline;
}


const getSmileyTimeline = (node, delay) => {
    const timeline = gsap.timeline({paused: true, delay})

    timeline.from('.smileyTimeline', {duration: 0.375, y: -10, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0})

    return timeline;
}

const getFashionRowsTimeline = (node, delay) => {
    const timeline = gsap.timeline({paused: true, delay});

    timeline.from('.row', {duration: 0.375, y: -10, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0})

    return timeline;
}

const getBlankTimeline = (node, delay) => {
    return gsap.timeline({paused: true, delay});
}

const getFashionTimeline = (node, delay) => {
    const timeline = gsap.timeline({paused: true, delay});

    timeline.from('img', {duration: 0.375, y: -50, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0})

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = gsap.timeline({paused: true, delay});

    timeline.from('.card', {duration: 0.375, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});
    timeline.from('.cardInner > div', {duration: 0.375, x:50, ease: Power1.easeIn, stagger: 0.125, autoAlpha: 0});
    timeline.from('.pageCardOuter', {duration: 0.375, y:-50, ease: Power1.easeIn, stagger: 0.05, autoAlpha: 0});
    timeline.from('.workTogether', {duration: 0.375, y:-50, ease: Power1.easeIn, stagger: 0.05, autoAlpha: 0});

    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = 0.5
    let timeline

    if (pathname === '/contact')
        timeline = getContactTimeline(node, delay);
    else if (pathname === '/about')
        timeline = getAboutTimeline(node, delay);
    else if (pathname === '/')
        timeline = getHomeTimeline(node, delay);
    else if(pathname === '/fashion')
        timeline = getFashionTimeline(node,delay);
    else if(pathname === '/fashion/adidasnike')
        timeline = getFashionRowsTimeline(node,delay);
    else if(pathname === '/fashion/smiley')
        timeline = getSmileyTimeline(node,delay);
    else if(pathname === '/fashion/onesixe')
        timeline = getFashionRowsTimeline(node,delay);
    else if(pathname === '/fashion/gold')
        timeline = getFashionRowsTimeline(node,delay);
    else {
        timeline = getBlankTimeline(node,delay);
    }
    timeline.play()
}

export const exit = (node) => {
    const timeline = gsap.timeline({paused: true});

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}
