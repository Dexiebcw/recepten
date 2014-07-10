var viewModel = { tijdstip: function(){ 
	switch (new Date().getHours()) {
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			return "morgen";
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			return "middag";
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
			return "avond";
		default:
			return "nacht";
}}, uur: function(){ var nu = new Date();
return  nu.toLocaleTimeString();
}
};
ko.applyBindings(viewModel);