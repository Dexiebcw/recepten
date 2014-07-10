var viewModel = { afstand: ko.observable(0),
keuze: ko.observable("C"),
converteer: function(){
	if (this.keuze() == "C")
		{ return this.afstand() * 2.54; }
	else
		{ return this.afstand() / 2.54; }
}
};
ko.applyBindings(viewModel);