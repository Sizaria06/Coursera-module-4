var names=new Array();
names[0]="Kol";
names[1]="Ben";
names[2]="Rebecca";
names[3]="Nik";
names[4]="Laurance";
names[5]="Klaus";
names[6]="Elijah";
names[7]="Edward";
names[8]="Clara";
names[9]="Tim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}