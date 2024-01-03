class moveP{
	
constructor(x,y,xs,ys){
this.x=x;this.y=y;this.xs=xs;this.ys=ys;
}

move(){
this.x=this.x+this.xs;
this.y=this.y+this.ys;
}	
	
chbdd(){
if(this.x<-5||this.x>860){this.xs=-1*this.xs;}
if(this.y<-5||this.y>470){this.ys=-1*this.ys;}
}	
}

class bullets{

constructor(x,y,ys){
this.pB=pBull.cloneNode(true);
document.getElementById("bod1").appendChild(this.pB);
//this.pB=document.getElementById("img7");
this.x=x;this.y=y;this.ys=ys;
}	
move(){this.y=this.y-this.ys;}

display(){
this.pB.style.left=this.x+"px";
this.pB.style.top=this.y+"px";
}	
}