import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Bienvenido a Chatprueba</h1>
              <p className="lead">Entra a la sala virtual y disfruta tu clase</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Crear nueva cuenta</Link>
                <Link className="btn px-5" to="/login">Ingresar con tu cuenta</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
