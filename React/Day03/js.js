function jumlah(satu, dua){
	var satu = document.getElementById('nilai1').value; 
	var dua = document.getElementById('nilai2').value;
	var total = parseInt(satu) + parseInt(dua);
	
	document.getElementById('isi').innerHTML = " Hasilnya adalah " +  total;
}

function kurang(satu, dua){
	var satu = document.getElementById('nilai1').value; 
	var dua = document.getElementById('nilai2').value;
	var total = parseInt(satu) - parseInt(dua);
	
	document.getElementById('isi').innerHTML = " Hasilnya adalah " +  total;
}

function kali(satu, dua){
	var satu = document.getElementById('nilai1').value; 
	var dua = document.getElementById('nilai2').value;
	var total = parseInt(satu) * parseInt(dua);
	
	document.getElementById('isi').innerHTML = " Hasilnya adalah " +  total;
}

function bagi(satu, dua){
	var satu = document.getElementById('nilai1').value; 
	var dua = document.getElementById('nilai2').value;
	var total = parseInt(satu) / parseInt(dua);
	
	document.getElementById('isi').innerHTML = " Hasilnya adalah " +  total;
}

function log(usr, pwd){
	var usr = document.getElementById('usr').value;
	var pwd = document.getElementById('pass').value;
	// document.location.href = "menu.html";
	
	document.getElementById('isi').innerHTML = " Halo " +  usr + "<br>Go to menu <a href='menu.html'>Menu</a>";
	// document.getElementById('menu').style.display = 'block';
}