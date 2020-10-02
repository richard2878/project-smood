import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from '../components/Login';
import './Account.css'

const spotifyApi = new SpotifyWebApi();

class Account extends React.Component {
  state = {
    loggedIn: false,
    user_name: "",
    profile_image: "",
    device: [{
      name: "",
      type: "",
      is_active: false
    }]
  }

  componentDidMount() {
    this.handleToken();
    this.getUserInfo();
    this.getDevices();
  }

  handleToken = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ loggedIn: true })
    }
  }

  getUserInfo = () => {
    spotifyApi.getMe()
      .then(res => {
        this.setState({
          user_name: res.display_name,
          profile_image: res.images[0].url
        })
      })
      .catch(err => console.log(err))
  }

  getDevices = () => {
    spotifyApi.getMyDevices()
      .then(res => {
        const devices = res.devices.map(item => (
          {
            name: item.name,
            type: item.type,
            is_active: item.is_active
          }
        ))

        this.setState({
          device: devices
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {!this.state.loggedIn &&
          <Login></Login>
        }
        {this.state.loggedIn &&
          <div className="contain">
            <h1>Account</h1>
            <br/>
            <img src={this.state.profile_image} className="img" />
            <br/>
            <br/>
            <p className="username">Username: {this.state.user_name}</p>
            <p className="device">Device name: {this.state.device[0].name}</p>
            <p className="device">Device type: {this.state.device[0].type}</p>
            <div>
              </div>
          </div>
        }
      </div>
    );
  }
}

export default Account;