var viewModel = { lengte:1.73, gewicht: ko.observable(53), 
bmi: function() { return this.gewicht() / (this.lengte * this.lengte)},
boodschap: function () {
	if (this.bmi() < 18.5)
		return "ondergewicht";
	else if (this.bmi() < 25)
			return "normaal gewicht";
		 else if (this.bmi() < 27)
				return "licht overgewicht";
			  else if (this.bmi() < 30)
					return "matig overgewicht";
				   else if (this.bmi() < 40)
						return "ernstig overgewicht";
						else return "fel overgewicht";
},
verhoog: function() { this.gewicht(this.gewicht()+1) },
verlaag: function() { this.gewicht(this.gewicht()-1) }
};
ko.applyBindings(viewModel);