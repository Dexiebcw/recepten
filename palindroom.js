
var viewModel = { woord:ko.observable(""), hoofdletters:ko.observable(false),
boodschap: function(){
	var woordje = this.woord();
	if (!this.hoofdletters())
		{ woordje = woordje.toLowerCase();}
    if (woordje.length > 1)
	{
		if ( woordje.split("").reverse().join("") === woordje)
			{ return "Dit is een palindroom";}
		else
			{ return "Dit is geen palindroom";}
	}
	else
		return "";
}
};
ko.applyBindings(viewModel);