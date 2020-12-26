var audio = new Audio(
 "https://dl.dropbox.com/s/c6aq63o2mwuvkui/Happy-Birthday-to-you-Singing-Bell.mp3"
);
audio.oncanplaythrough = function() {
 audio.play();
}
audio.loop = true;
audio.onended = function() {
 audio.play();
}

var audio = document
 .getElementById("au");
audio.play();



function fpsObject(){
        this.fps = 60;
        this.ads = 1;
        this.lastFrame = performance.now();
    

    this.update = ()=>{
        let delT = performance.now()-this.lastFrame;
        this.fps = 1000/(delT);
        this.lastFrame = performance.now();
        this.ads = (delT/(1000/60));
    }
}


const cOb = {};
const fps = new fpsObject();

const init = ()=>{
    cOb.c = q("canvas");
    cOb.w = cOb.c.width = window.innerWidth;
    cOb.h = cOb.c.height = window.innerHeight;
    cOb.ctx = cOb.c.getContext('2d');
    loop();
    
    cOb.c.addEventListener("click", (e)=>{
        let rect = cOb.c.getBoundingClientRect();
        new fw(e.clientX-rect.left ,e.clientY-rect.top , 100);
    });
        
        
}



function loop(){
    cOb.ctx.clearRect(0,0,cOb.w,cOb.h);
    fps.update();
    window.requestAnimationFrame(loop);
}



function fw(x,y, rad){
        
        this.boom = false;
        this.cx = cOb.w*Math.random();
        this.cy = cOb.h;
        this.bx = x;
        this.by = y;
        this.rad = rad;
        this.curv = -1+2*Math.random();
    
    
    
    this.draw = ()=>{
        if(!this.boom){
            for(let i = 0; i<=3; i++){
                let x = this.cx + (-1 + 2*Math.random());
                let y = this.cy + (-5 + 10*Math.random());
                new spark(x, y, 1+Math.random());
            }
            this.update();
        }else{
            for(let i = 0; i<=300; i++){
                let a = Math.random()*2*Math.PI;
                let r = this.rad*Math.random();
                let x = this.cx + Math.cos(a)*r;
                let y = this.cy + Math.sin(a)*r;
                new spark(this.cx, this.cy, 1+Math.random(),x,y);
            }
        }
    }
    
    this.update = ()=>{
        if(dist(this.cx, this.cy, this.bx, this.by) <= 10){
            this.boom = true;
        }
        this.cx += 0.05*fps.ads*(this.bx-this.cx) + this.curv*Math.sin((this.cy-this.by)/(cOb.h-this.by)*4*Math.PI);
        this.cy += 0.05*fps.ads*(this.by-this.cy);
        
        window.requestAnimationFrame(this.draw);
    }
    
    this.draw();
}



function spark(ix,iy, r,fx,fy){
        this.x = ix;
        this.y = iy;
        this.fx = fx || false;
        this.fy = fy || false;
        this.r = 100 + 155*Math.random();
        this.g = 100 + 155*Math.random();
        this.b = 100 + 155*Math.random();
        this.a = 1
        this.d = false;
        this.rad = r;
        this.s = performance.now();
    
    this.draw = ()=>{
        let {r,g,b,a,x,y, rad} = this;

        cOb.ctx.fillStyle = `rgba(${r},${g},${b},${a}`;
        cOb.ctx.beginPath();
        cOb.ctx.arc(x,y,rad,0,2*Math.PI);
        cOb.ctx.fill();
        
        this.update();
    }
    
    this.update = ()=>{
        if(performance.now()-this.s > 1000){
            this.d = true;
        }
        if(this.fx){this.x += 0.1*fps.ads*(this.fx-this.x);}
        if(this.fy){this.y += 0.1*fps.ads*(this.fy-this.y);}
        this.x += -1 + 2*Math.random();
        this.y += 0.25*fps.ads;
        this.a -= 0.02*fps.ads;
        if(!this.d && this.a > 0){window.requestAnimationFrame(this.draw);}
    }
    
    this.draw();
}




function dist(x1, y1, x2, y2){
    return Math.hypot((x1-x2),(y1-y2));
}



const q = document.querySelector.bind(document);
window.onload = init;
