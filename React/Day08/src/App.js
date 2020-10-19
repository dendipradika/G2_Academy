import React, { Component } from "react"
import Header from "./parts/Header"
import HeaderLogin from "./parts/HeaderLogin"
import HeaderStaff from "./parts/HeaderStaff"
import LandingPages from "./pages/LandingPages"
import Home from "./pages/HomePages"
import Staff from "./pages/HomePagesStaff"
import Register from "./pages/RegisterPages"
import DataPegawai from "./pages/DataPegawaiPages"
import Albums from "./pages/ListAlbumPages"
import AlbumsDetail from "./pages/DetailAlbumPages"

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      page: "LOGIN",
      contacts: [],
      userNewPassword: [],
      albums: [],
      albumsDetail: [],
      user: null,
      albumsDetailId: null,
      username: "",
      password: ""
    }
  }

  newPassword = data => {
    let newData = this.state.userNewPassword
    newData.push(data)
    this.setState({
      userNewPassword: newData
    })
  }

  setValue = e => {
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  goToPage = page => {
    this.setState({
      page
    })
  }

  showPage = () => {
    if (this.state.page === "LOGIN" || this.state.page === "LOGOUT")
    return <LandingPages goToPage={this.goToPage} goToHome={() => this.goToPage("HOME")} goToHomeStaff={() => this.goToPage("STAFF")} contacts={this.state.contacts} userNewPassword={this.state.userNewPassword} username={this.state.username} password={this.state.password} setValue={this.setValue} doLogin={this.doLogin}></LandingPages>

    if (this.state.page === "DATA")
      return <DataPegawai contacts={this.state.contacts} deleteRow={this.deleteRow} />

    if (this.state.page === "ALBUMS")
      return <Albums albums={this.state.albums} contacts={this.state.contacts} user={this.state.user} onGetIdAlbum={this.getIdAlbum.bind(this)} />

    if (this.state.page === "ALBUMS-DETAIL")
      return <AlbumsDetail albumsDetailId={this.state.albumsDetailId} albumsDetail={this.state.albumsDetail} albums={this.state.albums} contacts={this.state.contacts} user={this.state.user} />

    if (this.state.page === "UPDATE-PASSWORD")
      return <Register userNewPassword={this.state.userNewPassword} newPassword={this.newPassword}  user={this.state.user} />
      
    if (this.state.page === "STAFF")
    return <Staff contacts={this.state.contacts} />

    return <Home contacts={this.state.contacts} user={this.state.user} />
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ contacts: json}))
    .catch(err => alert(err))

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => this.setState({ albums: json}))

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => this.setState({ albumsDetail: json}))
  }

  signIn(username, password) {
    if (this.state.userNewPassword.length > 0) {
      this.state.userNewPassword.map((newPass) => {
        if (username === newPass.username && password === newPass.newPassword) {
          return (
            this.setState({
              user: {
                username,
                password,
              }
            }), this.goToPage("HOME"))
        } else {
              return console.log("Username or Password is missmatch")
        }
      })
    } else {
      this.state.contacts.map((contact) => {
        if (username === contact.username && password === "123") {
        return (
          this.setState({
            user: {
              username,
              password,
            }
          }), this.goToPage("HOME"))
        } else {
          return console.log("User Default Password")
        }
      })
    }
  }

  getIdAlbum(idAlbumForDetail) {
    return (this.setState({
      albumsDetailId: {idAlbumForDetail}
    }), this.goToPage("ALBUMS-DETAIL"))
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        { 
          (this.state.user) ? 
                  <div>
                    <Header goToPage={this.goToPage} onSignOut={this.signOut.bind(this)} />
                    <div className="Ap">
                        {
                          this.showPage()
                        }
                    </div>
                  </div>
          :
          <>
            <HeaderLogin goToPage={this.goToPage} />
            <LandingPages 
             onSignIn={this.signIn.bind(this)} 
            />
          </>
        }
      </div>
    )
    
  }
}

export default App;