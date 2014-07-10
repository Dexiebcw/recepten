var viewModel = { dag: ko.observable(), maand: ko.observable(), 
dagen: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
maanden: [ 1,2,3,4,5,6,7,8,9,10,11,12],
sterrenbeeld: function() {
	if (this.dag() === undefined || this.maand() === undefined)
		{ return ""; }
    var dag = this.dag();
	switch (this.maand())
	{
		case 1 :
			if (dag <= 20)
				{ return "steenbok";}
			else
				{ return "waterman";}
		case 2 :
			if (dag <= 19)
				{ return "waterman";}
			else
				{ return "vissen";}
		case 3 :
			if (dag <= 20)
				{ return "vissen";}
			else
				{ return "ram";}
		case 4 :
			if (dag <= 20)
				{ return "ram";}
			else
				{ return "stier";}
		case 5 :
			if (dag <= 20)
				{ return "stier";}
			else
				{ return "tweeling";}
		case 6 :
			if (dag <= 21)
				{ return "tweeling";}
			else
				{ return "kreeft";}
		case 7 :
			if (dag <= 22)
				{ return "kreeft";}
			else
				{ return "leeuw";}
		case 8 :
			if (dag <= 23)
				{ return "leeuw";}
			else
				{ return "maagd";}
		case 9 :
			if (dag <= 23)
				{ return "maagd";}
			else
				{ return "weegschaal";}
		case 10 :
			if (dag <= 23)
				{ return "weegschaal";}
			else
				{ return "schorpioen";}
		case 11 :
			if (dag <= 23)
				{ return "schorpioen";}
			else
				{ return "boodschutter";}
		default :
			if (dag <= 21)
				{ return "boogschutter"; }
			else
				{ return "steenbok";}
	}
}
};
ko.applyBindings(viewModel);