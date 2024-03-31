var names=new Array();
names[0]="Yaakov <br>";
names[1]="John <br>";
names[2]="Jen <br>";
names[3]="jason <br>";
names[4]="paul <br>";
names[5]="frank <br>";
names[6]="larry <br>";
names[7]="paula <br>";
names[8]="laura <br>";
names[9]="jim <br>";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        document.write("Goodbye "+ names[i]);
	}
	else{
		document.write("Hello "+ names[i]);
	}
}