var flagList1 = new Array("germany","netherlands","ireland","norway","uae","japan","indonesia","australia","finland","moldova","greece","india","singapore","botswana","russia","latvia","usa","bhutan","malta","cuba","seychelles","portugal","liechtenstein","colombia","azerbaijan");
var flagList2 = new Array("belgium","luxembourg","italy","iceland","jordan","bangladesh","poland","new-zealand","sweden","romania","uruguay","niger","turkey","argentina","slovenia","austria","liberia","sri-lanka","monaco","puerto-rico","congo","belarus","haiti","ecuador","armenia");
var quizIndex = new Array(flagList1.length);
var questionListIndex = [];
var counter = -1;
var score = 0;
var correctMsg = "Thats Correct :)";
var incorrectMsg = "Sorry, thats not correct :(";

function onPageLoad() {
      
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    //document.getElementById("ques").innerHTML = "Are you ready??";
    setUpQuizFlagIndex();

}

function quizNext()
{
    document.getElementById("startButton").style.visibility = "hidden";
    if(counter ==-1){
        document.getElementById("ques").innerHTML = "On each page, please select the flag of the country whose name is spoken. Then click on the red button to move to the next question. Good Luck :)";
        document.getElementById("announce").src ="./sounds/other/engInstruction.mp3";
        document.getElementById("announce").play();
        counter++;
        setTimeout(function() {
            document.getElementById("startButton").style.visibility = "visible";
          }, 8000);
       
        return;
    }

    setAudioImage();
    
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("2").style.visibility = "visible";
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    var countryAudio1 = document.getElementById("countryAudio1");
    var countryAudio2 = document.getElementById("countryAudio2");
    document.getElementById("startButton").style.visibility = "hidden";

    
    if(quizIndex[counter]==1) {
        playAudio(countryAudio1);
        document.getElementById("ques").innerHTML = "Which flag is for "+flagList1[questionListIndex[counter]].toUpperCase();
    } else if(quizIndex[counter]==2) {
        playAudio(countryAudio2);
        document.getElementById("ques").innerHTML = "Which flag is for "+flagList2[questionListIndex[counter]].toUpperCase();
    }

    document.getElementById("centerImg").style.visibility = "visible";

}

function checkAnswer(imgId) {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;


    if(imgId==quizIndex[counter]) {
        document.getElementById("ques").innerHTML = correctMsg;
        document.getElementById("announce").src = "./sounds/correct.mp3";
        document.getElementById("announce").play();
        
        score++;
    } else {
        document.getElementById("ques").innerHTML = incorrectMsg;
        document.getElementById("announce").src = "./sounds/incorrect.mp3";
        document.getElementById("announce").play();
    }

    counter++; 
    if(counter>=questionListIndex.length) {
        document.getElementById("ques").innerHTML = "Your Score is: "+score+" out of "+counter;
        document.getElementById("cueImg").className = "bigImage";
        if(score < 3) {
            document.getElementById("centerImg").src = "./img/gifs/babyangry.gif";
        } else if(score < 5) {
            document.getElementById("centerImg").src = "./img/gifs/babyangry1.gif";
        } else if(score <= 7) {
            document.getElementById("centerImg").src = "./img/gifs/babydancing.gif";    
        } else if(score > 7) {
            document.getElementById("centerImg").src = "./img/gifs/babystrong.gif";
            document.getElementById("cueImg").src = "./img/buttons/happySpideyDance.gif";
            document.getElementById("cueImg").style.visibility = "visible";
        }
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("centerImg").className = "bigImage";
        document.getElementById("startButton").style.visibility = "hidden"; 
    } else {
        setTimeout(function() {
            document.getElementById("startButton").style.visibility = "visible";
          }, 1500);
       
    }
    
}

function playAudio(audioTag) {
    audioTag.play();
}


function setUpQuizFlagIndex() {

    for(index=0; index<flagList1.length; index++) {
        quizIndex[index]= randomIntFromInterval(1,2);
    }

    while(questionListIndex.length < 10){
        var r = Math.floor(Math.random() * (flagList1.length-1)) + 0;
        if(questionListIndex.indexOf(r) === -1) questionListIndex.push(r);
    }

 }

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function setAudioImage() {
    
    document.getElementById("cueImg").style.visibility = "hidden";
    //document.getElementById("startButton").style.visibility = "hidden";
    
    
    if (counter<questionListIndex.length) {
        setFlagImages(counter);
        setFlagAudio(counter);

    }
    
  }

  

  function setFlagImages(index) {
    document.getElementById("1").src="./img/flags/"+flagList1[questionListIndex[index]]+".png";
    document.getElementById("2").src="./img/flags/"+flagList2[questionListIndex[index]]+".png";
    
  }

  function setFlagAudio(index) {
    document.getElementById("countryAudio1").src="./sounds/"+flagList1[questionListIndex[index]]+".mp3";
    document.getElementById("countryAudio2").src="./sounds/"+flagList2[questionListIndex[index]]+".mp3";
  }