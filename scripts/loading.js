
module.exports = {
  loading1: `
<style>
  @keyframes r {
    0% { transform: rotate(0deg);
     } 100% { transform: rotate(45deg);
     }
  }
  svg.gear {
    margin-bottom: 15px;
    
    animation: r .5s infinite linear;
    
  }
</style>
<div style="position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
 flex-direction: column;
background: linear-gradient(45deg,#222428,#444856);
">
  <svg class="gear" style="width:64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path id="p" fill="#fdb" d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"></path></svg>
  <div style="color:#6c757d;
  font-size: 18px;
  ">Loading...</div>
</div>
  `.trim(),


  loading2: `
<style>
.error {
  z-index: 99999;
  
  background:#fff;
  
  position: fixed;
  
  top: 0;
  
  left: 0;
  
  right: 0;
  
  bottom: 0;
  
  overflow: hidden;
  
}
.error #totalbase {
  position: absolute;
  
  height: 10px;
  
  width: 10px;
  
  top: 50%;
  
  left: 50%;
  
  background-color: blue;
  
  transform-style: preserve-3d;
  
  perspective: 5000px;
  
  transform-origin: 0 0;
  
  transform: rotateX(60deg) rotateZ(45deg) translate(-50%, -50%);
  
}
.error #animbase {
  transform-style: preserve-3d;
  
  position: absolute;
  
  height: 700px;
  
  width: 10px;
  
  top: 50%;
  
  left: 50%;
  
  animation: anima 8s infinite linear;
  transform-origin: 0 0%;
  
}
.error #base {
  position: absolute;
  
  height: 10px;
  
  width: 10px;
  
  top: 0;
  
  left: 50%;
  
  background-color: blue;
  
  transform-style: preserve-3d;
  
  transform-origin: 0 0;
  
  transform: translate(-50%, -50%) rotateZ(90deg);
  
}
.error #baseshadow {
  position: absolute;
  
  height: 10px;
  
  width: 25px;
  
  top: 50%;
  
  left: 50%;
  
  background-color: #D3D3D3;
  
  transform-style: preserve-3d;
  
  box-shadow: 0 0 140px 27px gray;
  
  transform-origin: 0 0;
  
  transform: rotateZ(90deg) translateZ(-150px);
  
}
@keyframes anima {
  0% {
    transform: rotateZ(0deg) translate(-50%, -50%);
    
  }
  100% {
    transform: rotateZ(360deg) translate(-50%, -50%);
    
  }
}
.error .helitop {
  transform-style: preserve-3d;
  
  position: absolute;
  
  height: 39px;
  
  width: 39px;
  
  left: 50%;
  
  top: 50%;
  
  background-color: white;
  
  border: 1px solid black;
  
  transform: translate(-50%, -50%) rotateX(0deg) translateZ(20px);
  
}
.error .helifront {
  transform-style: preserve-3d;
  
  position: absolute;
  
  height: 39px;
  
  width: 39px;
  
  left: 50%;
  
  top: 50%;
  
  background-color: white;
  
  border: 1px solid black;
  
  transform: translate(-50%, -50%) rotateX(90deg) translateZ(-20px);
  
}
.error .heliback {
  transform-style: preserve-3d;
  
  position: absolute;
  
  height: 39px;
  
  width: 39px;
  
  left: 50%;
  
  top: 50%;
  
  transform: translate(-50%, -50%) rotateX(90deg) translateZ(20px);
  
}
.error .front1 {
  transform-style: preserve-3d;
  
  position: absolute;
  
  height: 19px;
  
  width: 39px;
  
  left: 50%;
  
  top: 50%;
  
  background-color: #f0f0f0;
  border: 1px solid black;
  transform: translate(-50%, -50%) translateZ(18px);
  cursor: pointer;
}.error .front2 {position: absolute;
    height: 19px;
    width: 39px;
    left: 50%;
    top: 50%;
    background-color: #f0f0f0;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(60deg) translateZ(18px);
  }.error .front3 {position: absolute;
    height: 19px;
    width: 39px;
    left: 50%;
    top: 50%;
    background-color: #f0f0f0;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(-60deg) translateZ(18px);
  }.error .front4 {border-top: 18px solid #f0f0f0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    height: 0;
    width: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotateY(90deg) rotateZ(90deg) translateZ(0px) translateX(19px) translateY(50%);
  }.error .front5 {border-top: 18px solid #f0f0f0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    height: 0;
    width: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotateY(90deg) rotateZ(90deg) translateZ(39px) translateX(1px) translateY(50%);
  }.error .helileft {position: absolute;
    height: 39px;
    width: 39px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateY(90deg) translateZ(-20px);
  }.error .heliright {position: absolute;
    height: 39px;
    width: 39px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateY(90deg) translateZ(20px);
  }.error .helibottom {position: absolute;
    height: 39px;
    width: 39px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateZ(-20px);
  }.error .wingbase {transform-style: preserve-3d;
    position: absolute;
    height: 10px;
    width: 10px;
    bottom: 00%;
    left: 50%;
    background: white;
    transform-origin: 0 0;
    transform: translate(-50%, -50%);
    animation: anim 0.5s infinite linear;
  }@keyframes anim {0% {transform: rotateZ(0deg) translate(-50%, -50%);
  }100% {transform: rotateZ(360deg) translate(-50%, -50%);
  }}.error .wing1 {z-index: 10;
    position: absolute;
    height: 4px;
    width: 100px;
    left: 50%;
    top: 50%;
    background-color: #000000;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateX(50%) translateZ(25px) rotateX(10deg);
  }.error .wing2 {z-index: 10;
    position: absolute;
    height: 4px;
    width: 100px;
    left: 50%;
    top: 50%;
    background-color: black;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateX(-50%) translateZ(25px) rotateX(-10deg);
  }.error .col1 {position: absolute;
    height: 25px;
    width: 4px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(3px);
  }.error .col2 {position: absolute;
    height: 25px;
    width: 4px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(-3px);
  }.error .col3 {position: absolute;
    height: 25px;
    width: 4px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) translateY(50%) translateZ(-3px);
  }.error .col4 {position: absolute;
    height: 25px;
    width: 4px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) translateY(50%) translateZ(3px);
  }.error .tailbase {transform-style: preserve-3d;
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }.error .tail1 {transform-style: preserve-3d;
    position: absolute;
    height: 8px;
    width: 8px;
    border: 1px solid black;
    background-color: white;
    top: 0;
    left: 50%;
    transform: translate(-50%, 100%) translateZ(-100px);
  }.error .tail21 {transform-style: preserve-3d;
    position: absolute;
    height: 100px;
    width: 8px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(5px);
  }.error .tail22 {transform-style: preserve-3d;
    position: absolute;
    height: 100px;
    width: 8px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(-5px);
  }.error .tail23 {transform-style: preserve-3d;
    position: absolute;
    height: 100px;
    width: 8px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateZ(90deg) rotateX(90deg) translateY(50%) translateZ(5px);
  }.error .tail24 {transform-style: preserve-3d;
    position: absolute;
    height: 100px;
    width: 8px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateZ(90deg) rotateX(90deg) translateY(50%) translateZ(-5px);
  }.error .tail25 {transform-style: preserve-3d;
    position: absolute;
    height: 14px;
    width: 14px;
    top: 50%;
    left: 50%;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
    border-bottom: 10px solid transparent;
    transform: translate(-50%, -11px) rotateY(90deg) rotateZ(45deg) translateZ(-5px);
  }.error .tail26 {transform-style: preserve-3d;
    position: absolute;
    height: 14px;
    width: 14px;
    top: 50%;
    left: 50%;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
    border-bottom: 10px solid transparent;
    transform: translate(-50%, -11px) rotateY(90deg) rotateZ(45deg) translateZ(5px);
  }.error .tailwingbase {transform-style: preserve-3d;
    position: absolute;
    height: 10px;
    width: 10px;
    left: 50%;
    top: 0%;
    animation: animb 0.3s infinite linear;
    transform: translate(-50%, 0) rotateX(180deg);
  }@keyframes animb {0% {transform: translate(-50%, 0) rotateX(180deg) rotateZ(0deg);
  }100% {transform: translate(-50%, 0) rotateX(180deg) rotateZ(-360deg);
  }}.error .tail221 {transform-style: preserve-3d;
    position: absolute;
    height: 3px;
    width: 3px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(2px);
  }.error .tail222 {transform-style: preserve-3d;
    position: absolute;
    height: 3px;
    width: 3px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(-2px);
  }.error .tail223 {transform-style: preserve-3d;
    position: absolute;
    height: 3px;
    width: 3px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateZ(90deg) rotateX(90deg) translateY(50%) translateZ(2px);
  }.error .tail224 {transform-style: preserve-3d;
    position: absolute;
    height: 3px;
    width: 3px;
    top: 50%;
    left: 50%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateZ(90deg) rotateX(90deg) translateY(50%) translateZ(-2px);
  }.error .tailwing1 {position: absolute;
    height: 2px;
    width: 15px;
    left: 50%;
    top: 50%;
    background-color: #000000;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateX(50%) translateZ(5px) rotateX(30deg);
  }.error .tailwing2 {position: absolute;
    height: 2px;
    width: 15px;
    left: 50%;
    top: 50%;
    background-color: black;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateX(-50%) translateZ(5px) rotateX(-30deg);
  }.error #towerbase {position: absolute;
    height: 40px;
    width: 40px;
    top: 50%;
    left: 50%;
    background-color: blue;
    box-shadow: 0 0 60px 5px black;
    transform-style: preserve-3d;
    transform-origin: 0 0;
    transform: translate(-50%, -50%) translateZ(-150px);
  }.error .tower1left {position: absolute;
    height: 40px;
    width: 200px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateY(90deg) translateX(-50%) translateZ(20px);
  }.error .tower1right {position: absolute;
    height: 200px;
    width: 40px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) rotateX(90deg) translateY(50%) translateZ(-20px);
  }.error .tower1top {transform-style: preserve-3d;
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateZ(240px);
  }.error .tower2top {transform-style: preserve-3d;
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    background-color: white;
    border: 1px solid black;
    transform: translate(-50%, -50%) translateZ(200px);
  }.error .tower2left {position: absolute;
    height: 78px;
    width: 22px;
    left: 50%;
    top: 50%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-left: 10px solid white;
    border-right: 10px solid white;
    outline: 1px solid black;
    transform: translate(-10px, -50%) rotateY(90deg) translateX(-220px) translateZ(30px);
  }.error .tower1window {position: absolute;
    height: 22px;
    width: 75px;
    left: 50%;
    top: 50%;
    background-color: #d3d3d3;
    opacity: 0.8;
    transform: translate(-50%, -50%);
  }.error .tower2window {position: absolute;
    height: 75px;
    width: 22px;
    left: 50%;
    top: 50%;
    background-color: #d3d3d3;
    opacity: 0.8;
    transform: translate(-50%, -50%);
  }.error .tower2right {position: absolute;
    height: 22px;
    width: 78px;
    left: 50%;
    top: 50%;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    outline: 1px solid black;
    transform: translate(-50%, -11px) rotateX(90deg) translateY(220px) translateZ(-30px);
  }</style>

<section class="error"><div id="totalbase"><div id="animbase"v-pre><div id="base"><div id="baseshadow"></div><div class="helitop"><div class="wingbase"><div class="col1"></div><div class="col2"></div><div class="col3"></div><div class="col4"></div><div class="wing1"></div><div class="wing2"></div></div></div><div class="helifront"><div class="tailbase"><div class="tail1"><div class="tail21"></div><div class="tail22"></div><div class="tail23"></div><div class="tail24"><div class="tailwingbase"><div class="tail221"></div><div class="tail222"></div><div class="tail223"></div><div class="tail224"></div><div class="tailwing1"></div><div class="tailwing2"></div></div></div></div><div class="tail25"></div><div class="tail26"></div></div></div><div class="heliback"><div class="front1"></div><div class="front2"></div><div class="front3"></div><div class="front4"></div><div class="front5"></div></div><div class="helileft"></div><div class="heliright"></div><div class="helibottom"></div></div></div><div id="towerbase"><div class="tower1left"></div><div class="tower1right"></div><div class="tower2right"><div class="tower1window"></div></div><div class="tower1top"><div class="front1"@click="goHome"><div class="col1"></div><div class="col2"></div><div class="col3"></div><div class="col4"></div></div><div class="front2"></div><div class="front3"></div></div><div class="tower2top"></div><div class="tower2left"><div class="tower2window"></div></div></div></div></section>  
`.trim(),

  loading3: `
<style>.l__1{z-index:999;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}.l__2{width:200px;
  height:200px;
  background:url("https://cdn.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/0020f4d5-9f70-4b7f-87d4-61310d1db8d1.svg");
background-repeat:repeat;
}.l__3{font-size:18px;
margin-top:15px;
font-weight:bold;
color:#000;
}</style>
<div class="l__1"><div class="l__2"></div><div class="l__3">......</div></div>  
`.trim(),

  loading4: `
<style>
  @keyframes my-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes loading-dash{0%{stroke-dasharray:1,200;
    stroke-dashoffset:0}50%{stroke-dasharray:90,150;
    stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;
    stroke-dashoffset:-120px}}.g-loading{z-index:999;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }.circular{width:30px;
    height:30px;
    animation:my-rotate 2s linear infinite;
  }.path{stroke-dasharray:90,150;
    stroke-dashoffset:0;
    stroke-width:5;
    stroke:#409eff;
    stroke-linecap:round;
    animation:loading-dash 1.5s ease-in-out infinite}
</style><div class="g-loading">
    <svg viewBox="25 25 50 50" class="circular">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>
  </div>  
`
}
