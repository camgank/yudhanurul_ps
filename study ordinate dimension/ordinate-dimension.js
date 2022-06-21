// Connect to PowerShape
var pshape = window.external;

//kumpulkan nama2 garis kedalam variabel lines
//var mulai = jumlah - 1;
//while (mulai >= 0) {
//	var l_name = pshape.Evaluate('selection.name[' + mulai + ']');
//	lines.push(l_name);
//	var mulai = mulai - 1;
//}

var jumlah = pshape.Evaluate('selection.number'); //identification of selected center lines
var lines = [];
for (mulai = 0; jumlah > mulai ; mulai++){
	var l_name = pshape.Evaluate('selection.name[' + mulai + ']');
	lines.push(l_name);
}



alert (lines * 10);


var view2 = pshape.Evaluate('SELECTION.NAMES');
//alert('selection name adalah ' + view2);

pshape.Exec ('RETURN');