let p,p1;let m,m1;let letter2='c';
let letter='b';let pBull;let ch1='a';
let rot,rotsp;let xpos,pic1;
let bullAr=[];
let picParent;let picChild=[];
let movParent;let movChild=[];
let picTotal=10;

function setup(){
pBull=document.getElementById("img7");//parent for cloning bullets

p=document.getElementById("par1");//first "help" paragraph
p1=p.cloneNode(true);//cloned "help" paragraph
document.getElementById("bod1").appendChild(p1);

movParent=new moveP(300,400,4,3);//move object for the parent picture
for(let j=0;j<picTotal;j=j+1){
movChild[j]=new moveP(random(500),random(200),-4+random(8),3);
}
picParent=document.getElementById("img5");//parent picture
for(let j=0;j<picTotal;j=j+1){
picChild[j]=picParent.cloneNode(true);//cloned pictures 
document.getElementById("bod1").appendChild(picChild[j]);
}
rot=0;rotsp=5;
m=new moveP(100,100,3,5);//move first "help" paragaph
m1=new moveP(300,200,-4,4);//move cloned "help" par..
xpos=300;
pic1=document.getElementById("img1");//the gun
frameRate(30);
bullAr.push(new bullets(xpos+40,500,5));//first bullet
obj=document.getElementById("img5");//first moving picture
//for(let j=0;j<10;j=j+1){
	//objectAr[j]=obj.cloneNode(true);
	//document.getElementById("bod1").appendChild(objectAr[j]);
}//the cloned pictures.

function draw() {

m.move();m.chbdd();//help paragraph
p.style.left=m.x+"px";
p.style.top=m.y+"px";
let rt=rot+"deg";
rot=rot+rotsp;
p.style.transform="rotate("+rt+")";

m1.move();m1.chbdd();
p1.style.left=m1.x+"px";// cloned help paragraph
p1.style.top=m1.y+"px";

if(letter=='a'){rotsp=-1*rotsp;letter='e';}
if(letter=='o'){xpos=xpos-5;letter='e';}//to move the gun
if(letter=='b'){xpos=xpos+5;letter='e';}

pic1.style.left=xpos+"px";//moving the gun
pic1.style.top=400+"px";
//below is moving the shot bullets
for(let j=0;j<bullAr.length;j++){
bullAr[j].move();bullAr[j].display();
if(bullAr[j].y<-140){bullAr.splice(j,1);}
	}

movParent.move();movParent.chbdd();

for(let j=0;j<picTotal;j=j+1){
movChild[j].move();movChild[j].chbdd();
}
picParent.style.left=movParent.x+"px";
picParent.style.top=movParent.y+"px";
for(let j=0;j<picTotal;j++){
picChild[j].style.left=movChild[j].x+"px";
picChild[j].style.top=movChild[j].y+"px";
}
}

function func1(){
letter=event.key;
document.getElementById("par2").innerHTML="you pressed the key  "+letter;
if(letter=='r'){bullAr.push(new bullets(xpos+40,400,4));}
if(letter=="ArrowLeft"){
bullAr.push(new bullets(xpos+40,400,4));}	
}

function func2(){
let newpic=document.getElementById("par3");
newpic.style.left=xpos+"px";
document.getElementById("par3").style.top="300px";	
}