import { Power1, gsap } from 'gsap';

export const play = (pathname, node, appears) => {
    console.log( 'play', pathname, node, appears );

    const delay = appears ? 0 : 0.5;

    //const timeline = new Timeline({ paused: true });
    var tl = gsap.timeline({ pause: true });
    const header = node.querySelector('main h2');
    const content = node.querySelector('main .content');
    const homeImg = node.querySelector('main .illustration');
    const project01 = node.querySelectorAll('main .project01');
    const project02 = node.querySelectorAll('main .project02');
    const project03 = node.querySelectorAll('main .project03');
    const project04 = node.querySelectorAll('main .project04');

    tl
        .from(node, { duration: 0.3, display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .from(header, { duration: 0.5, autoAlpha: 0, x: -25, ease: Power1.easeInOut })
        .from(content, { duration: 0.5, autoAlpha: 0, x: -25, ease: Power1.easeIn })
        .from(homeImg, { duration: 0.5, autoAlpha: 0, y: 25, ease: Power1.easeIn })
        .from(project01, { duration: 0.5, autoAlpha: 0, y: 25, ease: Power1.easeIn })
        .from(project02, { duration: 0.5, autoAlpha: 0, y: 25, ease: Power1.easeIn })
        .from(project03, { duration: 0.5, autoAlpha: 0, y: 25, ease: Power1.easeIn })
        .from(project04, { duration: 0.5, autoAlpha: 0, y: 25, ease: Power1.easeIn });

    tl.play()
}

export const exit = ( node ) => {
    console.log( 'exit', node );

    // const timeline = new Timeline({ paused: true });
    var tl = gsap.timeline({ pause: true });

    tl.to(node, { duration: 0.15, autoAlpha: 0, ease: Power1.easeOut });
    tl.play();
}