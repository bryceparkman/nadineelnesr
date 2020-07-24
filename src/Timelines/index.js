import { TimelineMax as Timeline, Power1 } from 'gsap';

const getAboutTimeline = (node, delay) => {
    delay = 0.25;
    const timeline = new Timeline({ paused: true });
    const designer = node.querySelector('#designer');
    const fineArtist = node.querySelector('#fineArtist');
    const about = node.querySelector('.about')

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .staggerFrom(designer, 0.25, { autoAlpha: 0, x: -25,  delay, ease: Power1.easeIn }, 0.125)
        .staggerFrom(fineArtist, 0.25, { autoAlpha: 0, x: 25,  delay, ease: Power1.easeIn }, 0.125)
        .staggerFrom(about, 0.25, { autoAlpha: 0, x: 0,  delay, ease: Power1.easeIn }, 0.125)

    return timeline;
}

const getContactTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('.col');
    const email = node.querySelectorAll('.contactEmail');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .staggerFrom(email, 0.375, { autoAlpha: 0, x: 25, ease: Power1.easeOut }, 0.125)
        .staggerFrom(texts, 0.375, { autoAlpha: 0, x: 25, ease: Power1.easeOut }, 0.125)

    return timeline;
}

const getAdidasNikeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const title = node.querySelectorAll('.adidasNikeTitle');
    const container = node.querySelectorAll('.row')

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .staggerFrom(title, 0.375, { autoAlpha: 0, y: -50, ease: Power1.easeOut }, 0.125)
        .staggerFrom(container, 0.375, { autoAlpha: 0, y: 10, ease: Power1.easeOut }, 0.125);

    return timeline;
}

const getSmileyTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const header = node.querySelector('.smileyTimeline')

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .staggerFrom(header, 0.375, { autoAlpha: 0, y: -10, ease: Power1.easeOut }, 0.125);  

    return timeline;
}

const getArtTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    // const work = node.querySelectorAll('div');

    // timeline
    //     .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
    //     .staggerFrom(work, 0.375, { autoAlpha: 0, y: -50, ease: Power1.easeOut }, 0.125);

    return timeline;
}

const getFashionTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const work = node.querySelectorAll('img');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .staggerFrom(work, 0.375, { autoAlpha: 0, y: -50, ease: Power1.easeOut }, 0.125);

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const card = node.querySelectorAll('.cardInner > div');
    const outline = node.querySelectorAll('.card');
    const workCards = node.querySelectorAll('.pageCardOuter');
    const workTogether = node.querySelectorAll('.workTogether');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .staggerFrom(outline, 0.375, { autoAlpha: 0, x: 0, ease: Power1.easeOut }, 0.125)
        .staggerFrom(card, 0.375, { autoAlpha: 0, x: 50, ease: Power1.easeOut }, 0.125)
        .staggerFrom(workCards, 0.375, { autoAlpha: 0, y: -50, ease: Power1.easeOut }, 0.05)
        .staggerFrom(workTogether, 0.375, { autoAlpha: 0, y: -50, ease: Power1.easeOut }, 0.05)

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
        timeline = getAdidasNikeTimeline(node,delay);
    else if(pathname === '/fashion/smiley')
        timeline = getSmileyTimeline(node,delay);
    else {
        timeline = getArtTimeline(node,delay);
    }
    timeline.play()
}

export const exit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}
