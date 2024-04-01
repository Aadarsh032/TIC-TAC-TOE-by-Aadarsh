var boxes = document.querySelectorAll(".box");
var resetbutton = document.getElementById("resetbutton");
var result= document.getElementById('result');
var winnerx = document.getElementById('winnerx');
var winnerxnum=0;
var winnero = document.getElementById('winnero');
var winneronum =0;
 // Variable to store the value of whose turn
let turn ="O";
var winningpattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];


 //Event Listener for the boxes ,it will check if it's O's turn or X's 
var count=0;
var counttext=0;

boxes.forEach((box)=>{
   
    box.addEventListener("click",()=>
    {
        count++;
        if(box.innerText==="")
        {
            if(turn==="O")
            {
                box.innerText="O";
                box.style.color ="red";
                box.style.backgroundColor="#ff9999";
                turn ="X";
                counttext++;
            }
            else
            {
                box.innerText="X";
                box.style.color ="green";
                box.style.backgroundColor="#DAFFD5";
                turn ="O";
                counttext++;
            }
        }
        winnercheck();
        drawcheck();
    });
});


// Function call to check the  winner at every click of the button.

function winnercheck()
{
    for(let i=0;i<winningpattern.length;i++)
    {
        if(boxes[winningpattern[i][0]].innerText != "" && boxes[winningpattern[i][1]].innerText != "" && boxes[winningpattern[i][2]].innerText != "")
        {
            if(boxes[winningpattern[i][0]].innerText == boxes[winningpattern[i][1]].innerText && boxes[winningpattern[i][0]].innerText == boxes[winningpattern[i][2]].innerText)
            {
                result.innerText =  result.innerText +" is "+ boxes[winningpattern[i][0]].innerText;
                if(boxes[winningpattern[i][0]].innerText === "X")
                {
                    winnerxnum+=1;
                    winnerx.textContent = "X : " + winnerxnum;
                }
                else
                {
                    winneronum+=1;
                    winnero.textContent ="O : "+ winneronum;
                }
                boxes.forEach((box)=>
                {
                    box.disabled=true;
                    
                })
            }
        }
    }
}
 
// Draw Check Function


function drawcheck()
{
    console.log(count);
    if(count==9 && counttext==9 &&  result.innerText=="Winner" )
    {
        result.innerText="Draw";
        count=0;
    }
}

// To Reset to a new Game


resetbutton.addEventListener("click",()=>
{
    result.innerText="Winner ";
    boxes.forEach((box)=>
    {
        box.style.backgroundColor="yellow";
        box.disabled=false;
        box.innerText="";
        turn ="O";
        count=0;
        counttext=0;
    })
});

