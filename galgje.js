function maakTeRadenSaus() {
	var sausen = [ "cocktail", "mayonaise", "mosterd", "tartare", "vinaigrette"];
	var randomIndex = Math.floor(Math.random() * sausen.length);
	return sausen[randomIndex];
}
function maakPuntjes(saus, geradenLetters){
	var puntjes = "";
	var index;
	var letter;
	for (index = 0; index !== saus.length; index++)
	{
		letter = saus.charAt(index);
		if (geradenLetters.indexOf(letter) === -1)
			{ puntjes += ".";}
		else
			{ puntjes += letter;}
	}
	return puntjes;
}

var teRadenSaus = maakTeRadenSaus();
var viewModel = { 
	geradenLetters: "",
	letter: ko.observable(),
	puntjes: ko.observable(maakPuntjes(teRadenSaus,"")),
	aantalVerkeerdePogingen: ko.observable(0),
	boodschap: ko.observable(""),
	raden : function(){
		if (teRadenSaus.indexOf(this.letter()) === -1)
			{ this.aantalVerkeerdePogingen(this.aantalVerkeerdePogingen() + 1); }
		this.geradenLetters += this.letter();
		this.puntjes(maakPuntjes(teRadenSaus, this.geradenLetters));
		this.letter("");
		document.getElementById("Letter").focus();
		if (this.aantalVerkeerdePogingen() === 10)
			{ this.boodschap("U bent verloren, de drank was " + teRadenSaus);}
		else
			if (teRadenSaus === this.puntjes())
				{ this.boodschap("U hebt gewonnen, de drank was " + teRadenSaus);}
	}
};
ko.applyBindings(viewModel);