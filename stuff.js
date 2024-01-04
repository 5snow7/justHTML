function rect1(){
rect(100,100,50,50);
}

function addPic(){
picChild[picTotal]=picParent.cloneNode(true);//cloned pictures 
document.getElementById("bod1").appendChild(picChild[picTotal]);	
movChild[picTotal]=new moveP(random(500),random(200),-4+random(8),3);
picTotal++;	
document.getElementById("bod1").style.border = "10px double rgb("+picTotal*20+",0,250)";
	loadList();
}

function moveto(ch1){
	if (ch1=='a') {document.getElementById("snowAt").innerHTML="it connects";} 
	if(ch1=='c'){document.getElementById("par4").innerHTML="it works";}
}

function addLine(){
	let phrase=document.getElementById("text1").value;
	let newL=document.createElement("p");
	newL.onclick=removeItem;
	newL.innerHTML=phrase;
	document.getElementById("div1").appendChild(newL);
	saveList();
	}
	
function removeItem(){
	document.getElementById("div1").removeChild(this);
    saveList();
}

function saveList(){
	localStorage.list1=document.getElementById("div1").innerHTML;
}

function loadList(){
document.getElementById("div1").innerHTML=localStorage.list1;
let list1A=document.getElementById("div1");
	for(let j=0;j<list1A.children.length;j++){
		list1A.children[j].onclick=removeItem;
	}
	
}