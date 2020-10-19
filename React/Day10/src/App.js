import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, useParams, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import Header from "./parts/Header"
import Footer from "./parts/Footer"
import HeaderLogin from "./parts/HeaderLogin"
import HeaderStaff from "./parts/HeaderStaff"
import LandingPages from "./pages/LandingPages"
import Home from "./pages/HomePages"
import Staff from "./pages/HomePagesStaff"
import Register from "./pages/RegisterPages"
import UpdatePassword from "./pages/UpdatePasswordPages"
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
      userNewPassword: [],
      user: null,
      isLogin: false
    }
  }

  newPassword = data => {
    let newData = this.state.userNewPassword
    newData.push(data)
    this.setState({
      userNewPassword: newData
    })
  }

  signOut() {
    return (
    this.setState({user: null}), <Redirect to="/"/>)
  }

  changeStatusLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  
  render() {
    return (
      <div>
        { 
          (this.props.userLogin) ? 
          <>
          <Router>
          {console.log(this.state.isLogin)}
              <div>
                <Header 
                  goToPage={this.goToPage} 
                  isLogin={this.state.isLogin}
                  changeStatusLogin={this.changeStatusLogin}
                  onSignOut={this.signOut.bind(this)}
                />
                  <div className="Ap">
                    <Switch>
                      <Route exact path="/">
                        <Home contacts={this.state.contacts} user={this.state.user} isLogin={this.state.isLogin} />
                      </Route>
                      <Route exact path="/home">
                        <Home contacts={this.state.contacts} user={this.state.user} isLogin={this.state.isLogin} />
                      </Route>
                      <Route exact path="/albums">
                        <Albums 
                          contacts={this.state.contacts}
                          user={this.state.user}
                        />
                      </Route>
                      <Route exact path="/albums-detail/:idAlbum">
                        <AlbumsDetailFunc
                          albumsDetail={this.state.albumsDetail}
                          albums={this.state.albums}
                          contacts={this.state.contacts}
                          user={this.state.user}
                        />
                      </Route>
                      <Route
                        path="/login"
                        children={
                          (props) => <LandingPages onSignIn={this.signIn.bind(this)} />
                        }
                      />
                      <Route exact path="/update-password">
                        <UpdatePassword
                          userNewPassword={this.state.userNewPassword}
                          newPassword={this.newPassword}
                          user={this.state.user}
                        />
                      </Route>
                    </Switch>
                  </div>
              </div>
            </Router>
      <Footer></Footer></>
          :<>
          <Router>
            <div>
              <HeaderLogin
                  goToPage={this.goToPage} 
                  isLogin={this.state.isLogin}
                  changeStatusLogin={this.changeStatusLogin}
                  onSignOut={this.signOut.bind(this)}
                />
                <div className="Ap">
                  <Switch>
                    <Route
                      path="/"
                      children={
                        (props) => <LandingPages />
                      }
                    />
                    <Route path="/register" component={Register} />
                  </Switch>
                </div>
            </div>
          </Router>
      <Footer></Footer></>
        }
      </div>
    )
    
  }
}

function AlbumsDetailFunc({ albumsDetail, albums, contacts, user }) {
  const { idAlbum } = useParams()
  return <AlbumsDetail
    idAlbum={idAlbum}
    albumsDetail={albumsDetail}
    albums={albums}
    contacts={contacts}
    user={user}
  />
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  userLogin: state.auth.user
})

export default connect(mapStateToProps)(App);