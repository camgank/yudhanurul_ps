//ini adalah plugin untuk meng export 3d model powershape ke dalam beberapa file 3d, dalam sekali export

function goExport() {
	var tanggalProject = document.getElementById("project").value;

	var lokasiFolderIGES = document.getElementById("lokasiIGES").value;
	var lokasiFolderFullIGES = lokasiFolderIGES + "\\";

	var lokasiFolderDGK = document.getElementById("lokasiDGK").value;
	var lokasiFolderFullDGK = lokasiFolderDGK + "\\";

	var lokasiFolderSTEP = document.getElementById("lokasiSTEP").value;
	var lokasiFolderFullSTEP = lokasiFolderSTEP + "\\";

	if (lokasiFolderIGES == "" && lokasiFolderDGK =="" && lokasiFolderSTEP =="") {
		alert('ANDA HARUS MENGISI MINIMAL SATU LOKASI FOLDER');
	}else{
		
	}

		// Connect to PowerShape
	var pshape = window.external;

	pshape.Exec ('LEVEL FILTER USED_OFF');
	pshape.Exec ('LEVEL FILTER NAMED_OFF');
	pshape.Exec ('LEVEL FILTER ON_ON');
	var LEVEL_ON = pshape.Evaluate('level.filtered.number');
	//alert(LEVEL_ON);


	var mulai = LEVEL_ON - 1;
	var go = pshape.Evaluate('level.filtered[' + mulai + '].index');
	
	pshape.Exec ('select clearlist');

	while (mulai >= 0) {
		//alert(mulai);
		if (lokasiFolderIGES != "") {
			
			var nama = pshape.Evaluate('level[' + go + '].name');
			var cari = nama.search(':');
			var cari = cari + 1;
			var panjang = nama.length;
			var namafix = nama.slice(cari, panjang);
			var simpan3diges = ('file export' + ' ' + lokasiFolderFullIGES + tanggalProject + ' ' + namafix + '.iges');
			//pshape.Exec ('FILTERBUTTON FILTERITEMS\nAllTypes\nAllStyles\nAllLevels\nInvertLevel\nSelectLevel ' + go + '\nALL\nACCEPT\nEVERYTHING PARTIALBOX');
			pshape.Exec ('FORMUPDATE OFF');
			pshape.Exec ('LEVEL ' + 'POPUP ' + 'RAISE ' + go);
			pshape.Exec ('Leve ' + 'Popup ' + 'SelectAll');
			var jumlah = pshape.Evaluate('selection.number');
			if (jumlah == 0){
				pshape.Exec ('TOOLBAR LEVEL OFF ' + go);
					//alert('off iges');
			}else{
				pshape.Exec ('DISPLAY BLANKEXCEPT');
				pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec (simpan3diges);
				pshape.Exec ('Dismiss');
				pshape.Exec ('Dismiss');

				pshape.Exec ('select clearlist');
				//pshape.Exec ('DISPLAY UNBLANK');
				//pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec ('select clearlist');
			}
		}else{


		}
		
		if (lokasiFolderDGK != "") {
			var go = pshape.Evaluate('level.filtered[' + mulai + '].index');
			//alert(go);
			var nama = pshape.Evaluate('level[' + go + '].name');
			var cari = nama.search(':');
			var cari = cari + 1;
			var panjang = nama.length;
			var namafix = nama.slice(cari, panjang);
			var simpan3ddgk = ('file export' + ' ' + lokasiFolderFullDGK + tanggalProject + ' ' + namafix + '.dgk');
			//pshape.Exec ('FILTERBUTTON FILTERITEMS\nAllTypes\nAllStyles\nAllLevels\nInvertLevel\nSelectLevel ' + go + '\nALL\nACCEPT\nEVERYTHING PARTIALBOX');
			pshape.Exec ('FORMUPDATE OFF');
			pshape.Exec ('LEVEL ' + 'POPUP ' + 'RAISE ' + go);
			pshape.Exec ('Leve ' + 'Popup ' + 'SelectAll');
			var jumlah = pshape.Evaluate('selection.number');
			if (jumlah == 0){
				pshape.Exec ('TOOLBAR LEVEL OFF ' + go);
				//alert('off iges');
			}else{
				pshape.Exec ('DISPLAY BLANKEXCEPT');
				pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec (simpan3ddgk);
				pshape.Exec ('Dismiss');
				pshape.Exec ('Dismiss');

				pshape.Exec ('select clearlist');
				//pshape.Exec ('DISPLAY UNBLANK');
				//pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec ('select clearlist');
			}
		}else{
			

		}
		
		if (lokasiFolderSTEP != "") {
			var go = pshape.Evaluate('level.filtered[' + mulai + '].index');
			//alert(go);
			var nama = pshape.Evaluate('level[' + go + '].name');
			var cari = nama.search(':');
			var cari = cari + 1;
			var panjang = nama.length;
			var namafix = nama.slice(cari, panjang);
			var simpan3dstep = ('file export' + ' ' + lokasiFolderFullSTEP + tanggalProject + ' ' + namafix + '.step');
			//pshape.Exec ('FILTERBUTTON FILTERITEMS\nAllTypes\nAllStyles\nAllLevels\nInvertLevel\nSelectLevel ' + go + '\nALL\nACCEPT\nEVERYTHING PARTIALBOX');
			pshape.Exec ('FORMUPDATE OFF');
			pshape.Exec ('LEVEL ' + 'POPUP ' + 'RAISE ' + go);
			pshape.Exec ('Leve ' + 'Popup ' + 'SelectAll');
			var jumlah = pshape.Evaluate('selection.number');
			if (jumlah == 0){
				pshape.Exec ('TOOLBAR LEVEL OFF ' + go);
				//alert('off iges');
			}else{
				pshape.Exec ('DISPLAY BLANKEXCEPT');
				pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec (simpan3dstep);
				pshape.Exec ('Dismiss');
				pshape.Exec ('Dismiss');

				pshape.Exec ('select clearlist');
				//pshape.Exec ('DISPLAY UNBLANK');
				//pshape.Exec ('VIEW EDIT ISO1');
				pshape.Exec ('select clearlist');
			}
		}else{
			
		}
		pshape.Exec ('DISPLAY UNBLANK');
		var mulai = mulai - 1;
		var go = pshape.Evaluate('level.filtered[' + mulai + '].index');

	}
	pshape.Exec ('FORMUPDATE ON');
	pshape.Exec ('VIEW EDIT ISO1');
	alert("SELESAI,,");
	pshape.Exec ('select clearlist');
	pshape.Exec ('RETURN');	
}
