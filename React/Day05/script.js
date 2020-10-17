let number = 3;
var app = new (function () {
  var arr = [];
  var currentPage = 1;
  var pageSize = 5;
  var skip = 0;
  var totalCount = 0;
  var totalPage = 0;

  this.el             = document.getElementById("population");
  this.staffExperince = document.getElementById("staff-experince");
  this.staffSkill     = document.getElementById("staff-skill");

  this.populationData = [
    {
      no: 1,
      username: "dendi",
      password: "200",
      nama: "Dendi",
      alamat: "jalan jalan",
      skill: [
        "Management"
      ],
      pengalaman: {
        jenisPekerjaan: "GA",
        awalKerja: "2018-02-01",
        akhirKerja: "2020-03-30"
      },
      role: "HRD"
    },
    {
      no: 2,
      username: "pradika",
      password: "300",
      nama: "Pradika",
      alamat: "jalan A",
      skill: [
        "Java",
        "Javascript"
      ],
      pengalaman: {
        jenisPekerjaan: "Backend",
        awalKerja: "2015-09-01",
        akhirKerja: "2017-05-30"
      },
      role: "Staff"
    }
  ];

  this.First = () => {
    currentPage = 1;
    skip = 0;
    app.MyFunction();
  };

  this.Next = () => {
    if (currentPage < totalPage) currentPage++;
    skip = pageSize * (currentPage - 1);
    app.MyFunction();
  };

  this.Previous = () => {
    if (currentPage > 1) currentPage--;
    skip = pageSize * (currentPage - 1);
    app.MyFunction();
  };

  this.Last = () => {
    currentPage = totalPage;
    skip = pageSize * (currentPage - 1);
    app.MyFunction();
  };

  this.HideALL = () => {
    document.getElementById("loginFom").style.display = "none";
    document.getElementById("afterLogin").style.display = "none";
    document.getElementById("staff").style.display = "none";
    document.getElementById("hrd").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("successRegist").style.display = "none";
    document.getElementById("usernameFault").style.display = "none";
  };

  this.Registration = () => {
    document.getElementById("loginFom").style.display = "none";
    document.getElementById("afterLogin").style.display = "none";
    document.getElementById("staff").style.display = "none";
    document.getElementById("hrd").style.display = "none";
    document.getElementById("usernameFault").style.display = "none";
    document.getElementById("registration").style.display = "block";
  };

  this.RegistrationBack = () => {
    document.getElementById("registration").style.display = "none";
    document.getElementById("afterLogin").style.display = "none";
    // document.getElementById("successRegist").style.display = "none";
    document.getElementById("loginFom").style.display = "block";
  };

  this.Back = () => {
    document.getElementById("duplicate").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("afterLogin").style.display = "none";
    document.getElementById("loginFom").style.display = "none";
    document.getElementById("usernameFault").style.display = "none";
    document.getElementById("staff").style.display = "none";
  
    document.getElementById("hrd").style.display = "block";
  };

  this.SeeProfileStaff = () => {

    // console.log(this.populationData.username.size);
    for (i = 0; i < this.populationData.length; i++) {
      if ((document.getElementById("SeeProfileStaffGet").value == this.populationData[i].username)) {
        console.log(document.getElementById("SeeProfileStaffGet").value + i + this.populationData[i].username);
        document.getElementById("duplicate").style.display = "none";
        document.getElementById("registration").style.display = "none";
        document.getElementById("afterLogin").style.display = "none";
        document.getElementById("loginFom").style.display = "none";
        document.getElementById("usernameFault").style.display = "none";
        document.getElementById("staff").style.display = "none";
        document.getElementById("hrd").style.display = "none";
      
        document.getElementById("hr-profile").style.display = "block";
        document.getElementById("hr-profile-welcome").innerHTML = this.populationData[i].nama;
        document.getElementById("hr-profile-username").value = this.populationData[i].username;
        document.getElementById("hr-profile-name").innerHTML = this.populationData[i].nama;
        document.getElementById("hr-profile-address").innerHTML = this.populationData[i].alamat;
      } 
      // else {
      //   console.log("asd");
      // }
    }
  };

  this.Login = () => {
    if (this.populationData.length > 0) {
      for (i = 0; i < this.populationData.length; i++) {
        if ((document.getElementById("cekUser").value == this.populationData[i].username) && (document.getElementById("cekPass").value == this.populationData[i].password)) {
            if (this.populationData[i].role == "HRD") {
              document.getElementById("usernameFault").style.display = "none";
              document.getElementById("loginFom").style.display = "none";
              document.getElementById("cekUser").value = "";
              document.getElementById("cekPass").value = "";

              document.getElementById("hrd").style.display = "block";
              // document.getElementById("after-login").style.display = "block";
              document.getElementById("hr-profile-welcome").innerHTML = this.populationData[i].nama;
              document.getElementById("hr-profile-username").innerHTML = this.populationData[i].username;
              document.getElementById("hr-profile-name").innerHTML = this.populationData[i].nama;
              document.getElementById("hr-profile-address").innerHTML = this.populationData[i].alamat;
              
              document.getElementById("SeeProfileStaffGet").value = this.populationData[i].username;

              this.MyFunction();
            } else if (this.populationData[i].role == "Staff") {
              document.getElementById("usernameFault").style.display = "none";
              document.getElementById("loginFom").style.display = "none";
              document.getElementById("cekUser").value = "";
              document.getElementById("cekPass").value = "";

              document.getElementById("staff").style.display = "block";
              document.getElementById("staff-profile-welcome").innerHTML = this.populationData[i].nama;
              document.getElementById("staff-profile-username").innerHTML = this.populationData[i].username;
              document.getElementById("staff-profile-name").innerHTML = this.populationData[i].nama;
              document.getElementById("staff-profile-address").innerHTML = this.populationData[i].alamat;

              /* Section Staff - Experince Job */
              var dataStaffExperince = '';
              // console.log(this.populationData[i].pengalaman.jenisPekerjaan[0].length)
              for (j = 0; j < this.populationData[i].pengalaman.jenisPekerjaan[i].length; j++) {
                no = j+1;
                dataStaffExperince += "<tr>";
                dataStaffExperince += "<td>" + no + "</td>";
                dataStaffExperince += "<td>" + this.populationData[i].pengalaman.jenisPekerjaan + "</td>";
                dataStaffExperince += "<td>" + this.populationData[i].pengalaman.awalKerja + "</td>";
                dataStaffExperince += "<td>" + this.populationData[i].pengalaman.akhirKerja + "</td>";
                dataStaffExperince += "</tr>";
              }

              /* Section Staff - Skill */
              var dataStaffSkill = '';
              console.log(this.populationData[i].skill.length);
              for (k = 0; k < this.populationData[i].skill.length; k++) {
                let no = k+1;
                dataStaffSkill += "<tr>";
                dataStaffSkill += "<td>" + no + "</td>";
                dataStaffSkill += "<td>" + this.populationData[i].skill[k] + "</td>";
                dataStaffSkill += "</tr>";
              }

              return this.staffExperince.innerHTML = dataStaffExperince, this.staffSkill.innerHTML = dataStaffSkill;
              // break;
            } else {
              document.getElementById("usernameFault").innerHTML ="<br>Role is unavailable";
              document.getElementById("usernameFault").style.display = "block";
            }
        } else {
          // document.getElementById("cekUser").value = "";
          // document.getElementById("cekPass").value = "";
          document.getElementById("usernameFault").innerHTML ="<br>Username and Password missmatch";
          document.getElementById("usernameFault").style.display = "block";
        }
      }
    } //TODO : Buat jika data == 0
  };

  this.Logout = () => {
    document.getElementById("registration").style.display = "none";
    document.getElementById("afterLogin").style.display = "none";
    document.getElementById("staff").style.display = "none";
    document.getElementById("hrd").style.display = "none";
    document.getElementById("hr-profile").style.display = "none";
    document.getElementById("duplicate").style.display = "none";
    document.getElementById("usernameFault").style.display = "none";

    document.getElementById("loginFom").style.display = "block";
  };

  this.MyFunction = () => {
    totalCount = this.populationData.length;
    totalPage = totalCount / pageSize;

    var data = "";

    if (this.populationData.length > 0) {
      if (this.populationData.length >= skip + pageSize) {
        for (i = skip; i < skip + pageSize; i++) {
          data += "<tr>";
          data += "<td>" + this.populationData[i].no + "</td>";
          data += "<td>" + this.populationData[i].username + "</td>";
          data += "<td>" + this.populationData[i].nama + "</td>";
          data += "<td>" + this.populationData[i].alamat + "</td>";
          data += "<td>" + this.populationData[i].role + "</td>";
          data +=
            '<td><button type="submit" class="btn btn-success btn-sm" onclick="app.Edit(' +
            i +
            ')"><i class="fa fa-plus"></i></button> <input type="submit" class="btn btn-danger btn-sm" value="Hapus Data" onclick="app.Delete(' +
            i +
            ')"></td>';
          data += "</tr>";
        }
        return (this.el.innerHTML = data);
      } else if (this.populationData.length < skip + pageSize) {
        for (i = skip; i < this.populationData.length; i++) {
          data += "<tr>";
          data += "<td>" + this.populationData[i].no + "</td>";
          data += "<td>" + this.populationData[i].username + "</td>";
          data += "<td>" + this.populationData[i].nama + "</td>";
          data += "<td>" + this.populationData[i].alamat + "</td>";
          data += "<td>" + this.populationData[i].role + "</td>";
          data +=
          '<td><button type="submit" title="Edit" class="btn btn-success btn-sm" onclick="app.Edit(' +
            i +
          ')"><i class="fa fa-edit"></i></button> <button type="submit" title="Hapus" class="btn btn-danger btn-sm" onclick="app.Delete(' +
            i +
            ')"><i class="fa fa-trash"></i></button> <button type="submit" title="Lihat Profil" class="btn btn-primary btn-sm" onclick="app.Delete(' +
            i +
            ')"><i class="fa fa-user"></i></button></td>';
          data += "</tr>";
        }
        return (this.el.innerHTML = data);
      }
    } else {
      console.log("err");
    }

    return (this.el.innerHTML = data);
  };

  this.Add = () => {
    let createObjectPopulation = {}
    let createObjectExperince = {}
    let createArraySkill = []

    createObjectExperince.jenisPekerjaan = document.getElementById("add-type-job").value;
    // createObjectExperince.awalKerja = document.getElementById("add-start-job").value;
    // createObjectExperince.akhirKerja = document.getElementById("add-end-job").value;

    // var skills = $('input[name="skill"]:checked').map(function () {
    //     return this.value;
    // }).get();
    // createArraySkill.
    // createArraySkill.push(skills.join(", "))

    createObjectPopulation.no         = number;
    createObjectPopulation.username   = document.getElementById("add-username").value;
    createObjectPopulation.password   = document.getElementById("add-password").value;
    createObjectPopulation.nama       = document.getElementById("add-name").value;
    createObjectPopulation.alamat     = document.getElementById("add-address").value;
    createObjectPopulation.skill 		  = "[Java, Mysql]"
    createObjectPopulation.pengalaman = createObjectExperince
    createObjectPopulation.role       = document.getElementById("add-role").value;

    this.populationData.push(createObjectPopulation);
      const uniqueValues = new Set(this.populationData.map((v) => v.username));

      if (uniqueValues.size < this.populationData.length) {
        this.populationData.pop();
    // for (let i = 0; i < this.populationData.length; i++) {
      // console.log("asd");
      // if ((document.getElementById("add-username").value == this.populationData[i].username)) {
        document.getElementById("duplicate").innerHTML = "Username " + createObjectPopulation.username + " sudah ada, gunakan username lain.";
        document.getElementById("duplicate").style.display = "block";
      } else {
        // this.populationData.push(createObjectPopulation);
        document.getElementById("duplicate").style.display = "none";
        document.getElementById("registration").style.display = "none";
        document.getElementById("afterLogin").style.display = "none";
        document.getElementById("loginFom").style.display = "none";
        // document.getElementById("successRegist").style.display = "block";
        document.getElementById("usernameFault").style.display = "none";
        document.getElementById("staff").style.display = "none";

        document.getElementById("hrd").style.display = "block";

        document.getElementById("add-username").value = "";
        document.getElementById("add-password").value = "";
        document.getElementById("add-name").value = "";
        document.getElementById("add-address").value = "";
        document.getElementById("add-role").value = "";
        // document.getElementById('add-hobby').checked 		= false;

        this.MyFunction();
        number++;
        // break;
      }

    // if (this.populationData.length > 0) {
      // this.populationData.push(createObjectPopulation);

      // const uniqueValues = new Set(this.populationData.map((v) => v.username));

      // if (uniqueValues.size < this.populationData.length) {
        // this.populationData.pop();
      //   document.getElementById("duplicate").innerHTML =
      //     "Username " +
      //     createObjectPopulation.username +
      //     " sudah ada, gunakan username lain.";
      //   document.getElementById("duplicate").style.display = "block";
      // } else {
      //   document.getElementById("duplicate").style.display = "none";
      //   document.getElementById("Registration").style.display = "none";
      //   document.getElementById("afterLogin").style.display = "none";
      //   document.getElementById("loginFom").style.display = "block";
      //   document.getElementById("successRegist").style.display = "block";

      //   document.getElementById("add-username").value = "";
      //   document.getElementById("add-password").value = "";
      //   document.getElementById("add-name").value = "";
      //   document.getElementById("add-address").value = "";
      //   document.getElementById("add-job").value = "";
      //   // document.getElementById('add-hobby').checked 		= false;

      //   // this.MyFunction();
      //   number++;
      // }
    // } //TODO : Buat jika data == 0
  };

  this.Edit = (item) => {
    document.getElementById("edit-no").value = this.populationData[item].no;
    document.getElementById("edit-username").value = this.populationData[item].username;
    document.getElementById("edit-name").value = this.populationData[item].nama;
    document.getElementById("edit-address").value = this.populationData[item].alamat;
    document.getElementById("edit-role").value = this.populationData[item].role;
    document.getElementById('edit-experince').value = this.populationData[item].pengalaman.jenisPekerjaan;
    // populationData[i].pengalaman.jenisPekerjaan


    document.getElementById("spoiler").style.display = "block";
    self = this;

    document.getElementById("saveEdit").onsubmit = function () {
      let editObjectPopulation = {};
      // let createArrayHobby = []

      // var hobbies = $('input[name="hobby"]:checked').map(function () {
      //     return this.value;
      // }).get();
      // createArrayHobby.push(hobbies.join(", "))

      editObjectPopulation.no = document.getElementById("edit-no").value;
      editObjectPopulation.username = document.getElementById("edit-username").value;
      editObjectPopulation.nama = document.getElementById("edit-name").value;
      editObjectPopulation.alamat = document.getElementById("edit-address").value;
      editObjectPopulation.role = document.getElementById("edit-role").value;
      // editObjectPopulation.pengalaman.jenisPekerjaan = document.getElementById('edit-experince').value;
      //  = this.populationData[item].pengalaman.jenisPekerjaan;
      // editObjectPopulation.hobi 		= createArrayHobby

      self.populationData.splice(item, 1, editObjectPopulation);
      self.MyFunction();
      CloseInput();
    };
  };

  this.Delete = (item) => {
    this.populationData.splice(item, 1);
    this.MyFunction();
  };
})();

const CloseInput = () => {
  document.getElementById("spoiler").style.display = "none";
};

// app.MyFunction();
