document.querySelector('.toggle').addEventListener('click',(ev)=>{
    ev.stopPropagation();

    if(document.querySelector('body').classList.contains('darkmode')){
        gsap.to('.indicator',{x: 0, duration: 0.3});
        document.querySelector('body').classList.remove('darkmode');

    }
    else{
        document.querySelector('body').classList.add('darkmode');
        gsap.to('.indicator',{x: -30, duration: 0.3});

    }
})