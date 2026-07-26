const roles = [

    {
        text:"A Stranger",
        color:"#8E8E8E"
    },

    {
        text:"A Classmate",
        color:"#5DADE2"
    },

    {
        text:"A Childhood Love",
        color:"#FF9FF3"
    },

    {
        text:"My Best Friend",
        color:"#58D68D"
    },

    {
        text:"My Partner",
        color:"#F5B041"
    },

    {
        text:"My Safe Place",
        color:"#C39BD3"
    },

    {
        text:"The Love of my Life",
        color:"#FFD700"
    }

];

const role = document.getElementById("changing-role");

let i = 0;

function showRole(){

    role.style.opacity = 0;

    setTimeout(()=>{

        role.innerText = roles[i].text;

        role.style.color = roles[i].color;

        role.style.opacity = 1;

        i++;

        if(i < roles.length){

            setTimeout(showRole,1200);

        }

        else{

            setTimeout(finishIntro,1800);

        }

    },300);

}

showRole();

function finishIntro(){

    document.getElementById("intro").style.opacity = "0";

    setTimeout(()=>{

        document.getElementById("intro").style.display = "none";

    },2000);

    setTimeout(()=>{

        document.body.style.overflow = "auto";

        document.body.style.background = "#111";

        document.getElementById("website").style.opacity = "1";
        document.getElementById("website").style.pointerEvents = "all";

    },7000);

}
const particles = document.querySelector(".floating-particles");

for(let i=0;i<70;i++){

    const p=document.createElement("span");

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=8+Math.random()*12+"s";

    p.style.animationDelay=Math.random()*10+"s";

    p.style.opacity=Math.random();

    p.style.transform=`scale(${Math.random()*2})`;

    particles.appendChild(p);

}
const hero=document.querySelector(".hero");
const caseFile=document.getElementById("caseFile");

document.getElementById("beginButton").addEventListener("click",()=>{

    hero.style.opacity="0";
    hero.style.pointerEvents="none";

    setTimeout(()=>{

        hero.style.display="none";

        caseFile.style.display="flex";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },900);

});
