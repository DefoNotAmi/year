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
        text:"The Love of My Life",
        color:"#FFD700"
    }

];


const roleText = document.getElementById("changing-role");

const intro = document.getElementById("intro");

const website = document.getElementById("website");


let index = 0;


function changeRole(){

    roleText.style.opacity = 0;


    setTimeout(()=>{


        roleText.innerHTML = roles[index].text;

        roleText.style.color = roles[index].color;

        roleText.style.opacity = 1;


        index++;


        if(index < roles.length){

            setTimeout(changeRole,1200);

        }

        else{

            setTimeout(endIntro,2000);

        }


    },300);


}



function endIntro(){


    // disparition du texte

    intro.style.opacity="0";


    setTimeout(()=>{


        intro.style.display="none";


        website.style.opacity="1";

        website.style.pointerEvents="all";


        document.body.style.overflow="auto";


    },2000);


}



window.addEventListener("load",()=>{

    changeRole();

});
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
const letterSection=document.getElementById("loveLetter");

const letter=`My dearest love,

One whole year.

Three hundred and sixty-five days of loving you.

Three hundred and sixty-five days of laughing with you, missing you, dreaming about our future and finding comfort in your voice.

If someone had told me a year ago that one person could become my favorite place in the world...

I probably wouldn't have believed them.

But then I met you.

You became the first person I want to tell everything to.

The first person I think about when I wake up.

The last person I think about before falling asleep.

You have given me memories I'll treasure forever.

Even on difficult days...

Even when distance feels unfair...

Even when life gets complicated...

I still choose you.

Again.

And again.

And again.

Thank you for loving me.

Thank you for staying.

Thank you for making my world brighter than it has ever been.

One year has already passed...

Yet somehow,

I feel like we're only reading the very first chapter of our story.

Happy one year, my love.

Here's to countless more adventures together. ❤️`;

document.getElementById("continueButton").addEventListener("click",()=>{

    caseFile.style.display="none";

    letterSection.style.display="flex";
    const timeline=document.getElementById("timeline");
    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    const target=document.getElementById("typedLetter");

    target.innerHTML="";

    let i=0;

    function type(){

        if(i<letter.length){

            target.innerHTML+=letter.charAt(i);

            i++;

            setTimeout(type,22);

        }

    }

    type();function type(){

    if(i<letter.length){

        target.innerHTML+=letter.charAt(i);

        i++;

        setTimeout(type,22);

    }

    else{

        setTimeout(()=>{

            timeline.style.display="block";

            timeline.scrollIntoView({

                behavior:"smooth"

            });
            
            setTimeout(()=>{
    
                evidence.style.display="block";
    
            },2500);

    }

}
const evidence=document.getElementById("evidence");

document.querySelectorAll(".evidenceCard").forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flipped");

    });

});
const finalScene=document.getElementById("finalScene");

function showFinalScene(){

    document.body.style.background="black";

    document.querySelectorAll("section").forEach(section=>{

        if(section.id!="finalScene"){

            section.style.transition="1.5s";
            section.style.opacity="0";

        }

    });

    setTimeout(()=>{

        document.querySelectorAll("section").forEach(section=>{

            if(section.id!="finalScene"){

                section.style.display="none";

            }

        });

        finalScene.style.display="flex";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1500);

}
        const evidenceCards=document.querySelectorAll(".evidenceCard");

let openedCards=0;

evidenceCards.forEach(card=>{

    card.addEventListener("click",()=>{

        if(!card.classList.contains("done")){

            card.classList.add("done");

            openedCards++;

        }

        if(openedCards===evidenceCards.length){

            setTimeout(showFinalScene,2500);

        }

    });

});
