import React, { Component } from 'react';
import RowInput from "./components/rowInput"
import Table from "./components/table"
import Tr from "./components/table/tr"
import Tr5 from "./components/table/tr/tr5"
import Td from "./components/table/tr/td"
// import Td5 from "./components/table/tr/td/td5"

import './style.css';

class App extends Component {
  

/* 
	Hanya tampilan, belum ada fungsi
	Untuk mengecek tampilan bisa comment/uncomment per blok
*/
  render() { 
    return ( 
      <>
        <div id="loginFom">
          <div class="logo"></div>
          <div className="login-block">
            <h1>Please Input Your Account</h1>
            <RowInput labelInput="Username" placeHolder="Input Username" type="text" className="username"/>
            <RowInput labelInput="Password" placeHolder="**************" type="password" className="password"/>
            <RowInput type="submit"/>
          </div>
      </div>


      
			{/* <div id="staff">
    		<div class="logo"></div>
    		<div class="staff">
	        <center><h3>Selamat Datang, <p id="staff-profile-welcome"></p></h3></center>
	        <table align="center" width="80%">
	          <Tr tdValign="top" tdWidth="30%" tdLabel="Username" tdValign2="top" tdWidth2="1%" tdLabel2=":" tdLabel3="dendi" />
	          <Tr tdValign="top" tdWidth="30%" tdLabel="Name" tdValign2="top" tdWidth2="1%" tdLabel2=":" tdLabel3="Dendi Pradika" />
	          <Tr tdValign="top" tdWidth="30%" tdLabel="Alamat" tdValign2="top" tdWidth2="1%" tdLabel2=":" tdLabel3="Jalan jalan yuk" />
	          <Tr tdColspan="3" tdHeight="100" />
	          <Tr tdColspan="3" tdAlign="center" tdLabel="Riwayat Pekerjaan"/>
	          <tr>
	          <td colSpan="3">
	            <table width="80%" align="center" rules="rows">
	              <thead>
	              	<tr>
                  	<th width="3%">No.</th>
                    <th>Pekerjaan</th>
                    <th>Awal Kerja</th>
                    <th>Akhir Kerja</th>
                  </tr>
                </thead>
                <tr>
                	<td width="3%">1</td>
                  <td align="center">Backend</td>
                  <td align="center">2018-02-01</td>
                  <td align="center">2020-03-30</td>
                </tr>
                <tr>
                	<td width="3%">2</td>
                  <td align="center">Backend</td>
                  <td align="center">2018-02-01</td>
                  <td align="center">2020-03-30</td>
                </tr>
              </table>  
            </td>
          </tr>
          <Tr tdColspan="3" tdAlign="center" tdLabel="Keahlian"/>
            <tr>
              <td colspan="3">
              	<table id="t-staff" width="80%" align="center">
                	<thead>
                  	<tr>
                    	<th width="3%">No.</th>
                      <th>Keahlian</th>
                    </tr>
                  </thead>
                  <tbody id="staff-skill">
                  	<tr>
                    	<td>1</td>
                      <td align="center">Java</td>
                    </tr>
                    <tr>
                    	<td>2</td>
                      <td align="center">Python</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
        	</table>
    		</div>
			*/}




    	{/* <div class="logo"></div>
    		<div class="staff">
        	<center><h3>Tambah Data Karyawan</h3></center>        
            <table align="center" width="80%">
	            <Tr tdValign="top" tdWidth="30%" tdLabel="Username" tdValign2="top" tdWidth2="1%" tdLabel2=":" type="text" inputClass="form-control"/>
	            <Tr tdValign="top" tdWidth="30%" tdLabel="Password" tdValign2="top" tdWidth2="1%" tdLabel2=":" type="password" inputClass="form-control"/>
	            <Tr tdValign="top" tdWidth="30%" tdLabel="Nama Lengkap" tdValign2="top" tdWidth2="1%" tdLabel2=":" type="text" inputClass="form-control"/>
	            <Tr tdValign="top" tdWidth="30%" tdLabel="Alamat" tdValign2="top" tdWidth2="1%" tdLabel2=":" type="text" inputClass="form-control"/>
	            <tr>
	              <td>Role</td>
	              <td>:</td>
	              <td><select><option>-- Input Role --</option><option>HRD</option><option>Staff</option></select></td>
	            </tr>
	            <Tr tdValign="top" tdWidth="30%" tdLabel="Pengalaman Kerja" tdValign2="top" tdWidth2="1%" tdLabel2=":" type="text" inputClass="form-control"/>
	            <tr>
	              <td>Skill</td>
	              <td>:</td>
	              <td>
	                <select><option>-- Choose Skill --</option><option>Java</option><option>NodeJs</option><option>Python</option></select>
	              </td>
	            </tr>
	            <Tr tdColspan="3" type="submit"/>
          	</table>
    		div>
    	*/}




      {/* <div class="logo"></div>
        <div class="staff">
        	<table id="t-staff" width="80%" align="center">
          	<thead>
            	<Tr5 tdLabel="No." tdLabel2="Username" tdLabel3="Nama" tdLabel4="Alamat" tdLabel5="Role" />
            </thead>
            <tbody>
            	<Tr5 tdLabel="1" tdLabel2="dendi" tdLabel3="Dendi" tdLabel4="Jalan jalan" tdLabel5="HRD" />
              <Tr5 tdLabel="2" tdLabel2="pradika" tdLabel3="Pradika" tdLabel4="Jalan jalan" tdLabel5="Staff" />
            </tbody>
            <tr>
            	<td colspan="7" align="center">
            		<input type="submit" value="First" class="btn btn-default btn-sm" />
                <input type="submit" value="Previous" class="btn btn-primary btn-sm" />
                <input type="submit" value="Next" class="btn btn-primary btn-sm" />
                <input type="submit" value="Last" class="btn btn-default btn-sm" />
              </td>
            </tr>
          </table>
       	</div> */}
      </>
     );
  }
}

export default App;
