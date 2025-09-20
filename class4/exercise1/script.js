document.addEventListener("DOMContentLoaded", animation);

const donutEmoji = document.getElementById('donut');
function animation() {
    gsap.to('#donut', {
        scale: 2,
        delay: 1,
        onComplete: function(){
            console.log('animation completed!')
        }
    });

    gsap.to('#frog', {
        rotation: 360,
        repeat: -1,
    })

    gsap.to ('#taco', {
        opacity: 0,
        easein: 'power1,out',
        duration: 5,
        repeat: -1,
    })

    gsap.to('#flower', {
        rotation: 360 + 360,
        duration: 2,
        repeat: -1,
    })
    
    /*gsap.to('#ball', {
        y: 20,
        ease: 'bounce.out',
        duration: 2,
        repeat: -1,
    })*/

    gsap.from('#ball', {
        y:-20,
        repeat: -1,
        ease: 'bounce.out',
        duration: 2,
    })

    /*gsap.to('#tongue', {
        scale: 2,
        onComplete: function(){
            gsap.to('#tongue', {
                y:-20,

            })
        }
    })*/
   let timeline = gsap.timeline({
    repeat: -1,
    delay: 1,
    });
   timeline.to('#tongue', {scale: 2});
   timeline.to('#tongue', {y: -20});
   timeline.to('#tongue', {y: 0, scale: 1});
   timeline.to('#tongue', {delay: 1})
   timeline.to('#tongue', {opacity: 0,})
   timeline.to('#tongue', {duration: 2,})

}