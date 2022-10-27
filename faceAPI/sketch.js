let faceapi;
let video;
let faceResults;
let isMouthOpen=false;
let sound;
let song
let img;
let catPos;

// let isMouthSmile=false;

function preload(){
  song = loadSound('pumpkin.mp3');
  sound=loadSound('tomb.mp3');
  // img = loadImage('me.jpg');
  

}

function setup() {
    createCanvas(640, 480);
    video=createCapture(VIDEO);
    video.hide();
    
    
    faceapi=ml5.faceApi(video, modelLoaded);
    faceapi.detect(gotResult);


    noFill();
    strokeWeight(4);
    stroke(255,0,255);

    //  catPos = [100, height / 2];

  }
  

  function modelLoaded(){
    console.log("ready");
  }

  function gotResult(err,results){
    if(err){
        console.log(err);
        return;
    }if(results){
       console.log(results);
        faceResults=results;
        faceapi.detect(gotResult);
        let parts=faceResults[0].parts;
        let mouth=parts['mouth'];
        
let mouthTop=mouth[3];
let mouthButtom=mouth[9];
console.log(mouthTop);

// fill(255,0,0);
// ellipse(mouthTop._x, mouthTop._y,8,8);
// fill(0,255,0);
// ellipse(mouthButtom._x, mouthButtom._y,8,8);

if(mouthButtom._y-mouthTop._y>60){
  isMouthOpen=true;


  if(!sound.isplaying){
    
    sound.play();
    // textSize(32);
    // text('😻', catPos[0], catPos[1]);

    // text('😻', 90, 300);
  }

//   // const toCat = dist(mouthTop._x, mouseTop._y, catPos[0], catPos[1]);
//   //   if (toCat < 100 && !song.isPlaying) {
//   //     song.play();
//   //   }}
// }
else{
  isMouthOpen=false;
  sound.stop();
    }
  }
}
}

// let mouthleft=mouth[0];
// let mouthright=mouth[5];
// if (mouthright._x-mouthleft._x>10){
//   isMouthSmile=true;
//   console.log(smile);
// }


  
  function draw() {
    // background(220);
    image(video,0,0,width,height);

   
 if (faceResults&& faceResults.length>0){
    let face=faceResults[0].alignedRect._box;
    // rect(face._x, face._y, face._width, face._height);
    // fill(40,60,90);
    // ellipse(face._x, face._y, face._width-50, face._height-50);
    // // rect(face._x+290, face._y-80, face._width, face._height);
    // fill(30,90,80,0.6);
    // rect(face._x+130, face._y-100, face._width-100, face._height-100);
    
  
    textSize(face._width*1.3,face._height*1.3);
   
     text('🎃', face._x-30,face._y+200);
     
     textSize(face._width*0.9,face._height*0.9);
     text('🎩', face._x,face._y-45);
     if(face._width>280){
      
    
        // sound.play();
        // textSize(32);
        // text('😻', catPos[0], catPos[1]);
    
        // text('😻', 90, 300);
      
      textSize(200,200);
      text('🪦', 10,450);
     }  
      
// text('😻', 30,350);
// fill(255);
// ellipse(mouthButtom._x, mouthButtom._y,30,30);
    fill(255,0,0);
    let parts=faceResults[0].parts;
    let partNames=Object.keys(parts);
    for(let i=0; i< partNames.length; i++ ){
      
      const part=parts[partNames[i]];
      for(let j=0; j< part.length; j++ ){
       ellipse(part[j]._x, part[j]._y,5,5);
      }
    }
  }
}

//check your mouth is open
// let parts=faceResults[0].parts;
// let mouth=parts['mouth'];
// let mouthTop=mouth[4];
// let mouthButtom=mouth[9];
// fill(255,0,0);
// ellipse(mouthTop._x, mouthTop._y,8,8);
// fill(0,255,0);
// ellipse(mouthButtom._x, mouthButtom._y,8,8);

// if(mouthButtom.y-mouthTop>20){
//   isMouthOpen=true;
// }else{
//   isMouthOpen=false;
// }

//  }
