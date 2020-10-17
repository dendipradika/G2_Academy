let number = 5
var app = new function() {

	var arr 				= [];
	var currentPage = 1;
	var pageSize 		= 5;
	var skip 				= 0;
	var totalCount 	= 0;
	var totalPage 	= 0;

  this.el = document.getElementById('population');

  this.populationData = [{no:1,username:"denz",nama:"dendi",alamat:"jalan",pekerjaan:"Direksi",hobi:"Futsal"},{no:2,username:"denzz",nama:"dendip",alamat:"jalan aja",pekerjaan:"CTO",hobi:"Catur"},{no:3,username:"denzzz",nama:"dendipr",alamat:"jalan jalan",pekerjaan:"Komisaris",hobi:"Remi"},{no:4,username:"denzzzz",nama:"dendipra",alamat:"jalan kemana",pekerjaan:"Direktur",hobi:"Bulu Tangkis"}];

	this.First = function(){
		currentPage =1;
	    skip =0;
		app.MyFunction();
	}

	this.Next = function(){
		if(currentPage <totalPage) currentPage++;
		skip = pageSize * (currentPage - 1);
		app.MyFunction();
	};

	this.Previous = function(){
	    if(currentPage>1) currentPage--;
		skip = pageSize * (currentPage - 1);
		app.MyFunction();
	}
	this.Last = function(){
		currentPage = totalPage;
		skip = pageSize * (currentPage - 1);
		app.MyFunction();
	}

	this.MyFunction = function() {
 		totalCount = this.populationData.length;
 		totalPage = totalCount / pageSize;

    var data = '';
    
    if (this.populationData.length > 0) {
    	if (this.populationData.length >= (skip + pageSize)) {
      	for (i = skip; i < (skip + pageSize); i++) {
	        data += '<tr>';
	        data += '<td>' + this.populationData[i].no + '</td>';
	        data += '<td>' + this.populationData[i].username + '</td>';
	        data += '<td>' + this.populationData[i].nama + '</td>';
	        data += '<td>' + this.populationData[i].alamat + '</td>';
	        data += '<td>' + this.populationData[i].pekerjaan + '</td>';
	        data += '<td>' + this.populationData[i].hobi + '</td>';
	        data += '<td><input type="submit" class="btn btn-success btn-sm" value="Rubah Data" onclick="app.Edit(' + i + ')"> <input type="submit" class="btn btn-danger btn-sm" value="Hapus Data" onclick="app.Delete(' + i + ')"></td>';
	        data += '</tr>';
      	}
   			return this.el.innerHTML = data;
    	}else if (this.populationData.length < (skip + pageSize)){
	      for (i = skip; i < this.populationData.length; i++) {
	        data += '<tr>';
	        data += '<td>' + this.populationData[i].no + '</td>';
	        data += '<td>' + this.populationData[i].username + '</td>';
	        data += '<td>' + this.populationData[i].nama + '</td>';
	        data += '<td>' + this.populationData[i].alamat + '</td>';
	        data += '<td>' + this.populationData[i].pekerjaan + '</td>';
	        data += '<td>' + this.populationData[i].hobi + '</td>';
	        data += '<td><input type="submit" class="btn btn-success btn-sm" value="Rubah Data" onclick="app.Edit(' + i + ')"> <input type="submit" class="btn btn-danger btn-sm" value="Hapus Data" onclick="app.Delete(' + i + ')"></td>';
	        data += '</tr>';
	      }
	   		return this.el.innerHTML = data;
    	}
    }
    else {
    	console.log("err");
    }

   	return this.el.innerHTML = data;
  }

  this.Add = function () {
    let createObjectPopulation = {}
    let createArrayHobby = []

    var hobbies = $('input[name="hobby"]:checked').map(function () {
        return this.value;
    }).get();
    createArrayHobby.push(hobbies.join(", "))

    createObjectPopulation.no 			= number
    createObjectPopulation.username = document.getElementById('add-username').value
    createObjectPopulation.nama 		= document.getElementById('add-name').value
    createObjectPopulation.alamat 	= document.getElementById('add-address').value
    createObjectPopulation.pekerjaan= document.getElementById('add-job').value
    createObjectPopulation.hobi 		= createArrayHobby

    if(this.populationData.length > 0) {
      this.populationData.push(createObjectPopulation);

			const uniqueValues = new Set(this.populationData.map(v => v.username));

			if (uniqueValues.size < this.populationData.length) {
				this.populationData.pop()
				document.getElementById("duplicate").innerHTML = "Username " + createObjectPopulation.username + " sudah ada, gunakan username lain."
				document.getElementById("duplicate").style.display = "block"
			} else {
				document.getElementById("duplicate").style.display = "none"

	      document.getElementById('add-username').value = '';
	      document.getElementById('add-name').value 		= '';
	      document.getElementById('add-address').value 	= '';
	      document.getElementById('add-job').value 			= '';
	      document.getElementById('add-hobby').checked 		= false;
	      
	      this.MyFunction();
	    	number++
			}
    } //TODO : handler if == 0
  };

  this.Edit = function (item) {
    document.getElementById('edit-no').value = this.populationData[item].no;
    document.getElementById('edit-username').value = this.populationData[item].username;
    document.getElementById('edit-name').value = this.populationData[item].nama;
    document.getElementById('edit-address').value = this.populationData[item].alamat;
    document.getElementById('edit-job').value = this.populationData[item].pekerjaan;

    // TODO : find other method
	  if(this.populationData[item].hobi == "Bulu Tangkis") {
	  	document.getElementById("edit-hobby1").checked = true;
	  }
	  else {document.getElementById("edit-hobby1").checked = false;}
	  if(this.populationData[item].hobi == "Catur") {
	  	document.getElementById("edit-hobby2").checked = true;
	  }
	  else {document.getElementById("edit-hobby2").checked = false;}
	  if(this.populationData[item].hobi == "Futsal") {
	  	document.getElementById("edit-hobby3").checked = true;
	  }
	  else {document.getElementById("edit-hobby3").checked = false;}
	  if(this.populationData[item].hobi == "Remi") {
	  	document.getElementById("edit-hobby4").checked = true;
	  }
	  else {document.getElementById("edit-hobby4").checked = false;}
    
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {

      let editObjectPopulation = {}
	    let createArrayHobby = []

	    var hobbies = $('input[name="hobby"]:checked').map(function () {
	        return this.value;
	    }).get();
	    createArrayHobby.push(hobbies.join(", "))

	    editObjectPopulation.no 			= document.getElementById('edit-no').value
	    editObjectPopulation.username = document.getElementById('edit-username').value
	    editObjectPopulation.nama 		= document.getElementById('edit-name').value
	    editObjectPopulation.alamat 	= document.getElementById('edit-address').value
	    editObjectPopulation.pekerjaan= document.getElementById('edit-job').value
    	editObjectPopulation.hobi 		= createArrayHobby

      self.populationData.splice(item, 1, editObjectPopulation);
      self.MyFunction();
      CloseInput();
    }
  };

  this.Delete = function (item) {
    this.populationData.splice(item, 1);
    this.MyFunction();
  };  
}

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}

app.MyFunction();