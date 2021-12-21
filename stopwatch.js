'use strict';

const hElem = document.querySelector('.hour');
const mElem = document.querySelector('.min');
const sElem = document.querySelector('.sec');
const msElem = document.querySelector('.ms');

const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const roundBtn = document.querySelector('#round');
const stopBtn = document.querySelector('#stop');

const rounds = document.querySelector('.rounds');

let h = 0,
    m = 0,
    s = 0,
    ms = 0,
    interval,
    i=1;

function startStopwatch(){
    ms++;
    if (ms<10) {
        msElem.innerText = "0" + ms
    }
    if (ms>9) {
        msElem.innerText = ms;
    }
    if (ms>99){
        s++;
        sElem.innerText = "0" + s;
        ms = 0;
        msElem.innerText = "0" + ms;
        if(s>9){
            sElem.innerText = s;
        }
        if(s>59){
            m++;
            mElem.innerText = "0" + m;
            s=0;
            sElem.innerText = "0" + s;
            if(m>9){
                mElem.innerText = m;
            }
            if(m>59){
                h++;
                hElem.innerText = "0" + h;
                m=0;
                mElem.innerText = "0" + m;
                if(h>9){
                    hElem.innerText = h;
                }
            }
        }
    }
}

startBtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
});
pauseBtn.addEventListener('click',()=>{
    clearInterval(interval);
});
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    msElem.innerText = "00";
    sElem.innerText = "00";
    mElem.innerText = "00";
    hElem.innerText = "00";
});

const saveRound = (i, h, m, s, ms) => {
    return `
    <div class="roundelem">
    <div class="krug">Круг номер ${i}</div>
    <div class="num">${h}:${m}:${s}:${ms}</div>
    </div>`
}

roundBtn.addEventListener('click', ()=>{
    rounds.innerHTML += saveRound(i, h, m, s, ms);
    i++;
})