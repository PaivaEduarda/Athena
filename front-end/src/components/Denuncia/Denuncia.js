import React, { Component } from 'react';
import Mapa from '../Mapa/Mapa';
import { MapPinLine, X } from "phosphor-react";
import Sidebar from '../Sidebar/Sidebar';
import './Denuncia.css';
import AuthService from '../../services/AuthService';

const initialMapa = { showMap: false };

export default class Denuncia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false,
      currentUser: null
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      this.setCurrentUser(user);
    }
  }

  setCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  showMap = () => {
    this.setState(prevState => ({
      mapa: { showMap: !prevState.mapa.showMap }
    }));
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  render() {
    const { showMapa, currentUser } = this.state;

    return (
      <>
        <Sidebar>
          <div className={showMapa ? "show-map" : "show-map hidden"}>
            <div className='cancel'>
              <button className='btnCancel' onClick={this.showMap}>
                <X size={20} color='#333333' />
              </button>
            </div>
            <div className='mapa'>
              <Mapa />
            </div>
          </div>
          <div className={showMapa ? "borda hidden" : "borda"}>
            <div className="card-denuncia">
              <div className='localizacao'>
                <label className='onde'>Sua localização:</label>
                <input
                  type="text"
                  id="loc"
                  name="loc"
                  className="loc"
                  placeholder="localização"
                />
                <button className='btnMostrarMapa' onClick={this.showMap}>
                  <MapPinLine size={30} color="#000000" />
                </button>
              </div>
              <div className='contatoSeguranca'>
                <label className='nomeSeguranca'>{currentUser?.user?.nomeSeguranca}</label>
                <input
                  type="text"
                  id="telSeguranca"
                  name="telSeguranca"
                  className="telSeguranca"
                  placeholder="Telefone de Segurança"
                  value={currentUser?.user?.nomeSeguranca}
                />
              </div>
              <button
                type="submit"
                disabled={this.state.submitting}
                className='btnDenunciar'
                onClick={this.onSubmit}
              >
                DENUNCIAR!
              </button>
            </div>
          </div>
        </Sidebar>
      </>
    );
  }
}
