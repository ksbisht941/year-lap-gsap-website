'use strict';

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const year = document.querySelectorAll('main span');

var posX = 0, posY = 0, mouseX = 0, mouseY = 0;


TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

year.forEach(el => {
    console.log(el.innerHTML);
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');

    });
   
    el.addEventListener('mouseleave', () => {
        console.log('jnbjkbb');
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
});