import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup} from "../helpers/auth";
import { db, auth } from "../services/firebase";
export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
      type: false,
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password)
    } catch (error) {
      this.setState({ error: error.message });
    }

    db.ref('users/' + auth().currentUser.uid).set({
      mentor: this.state.type,
      name: this.state.name,
    });
  }

  cambiarEstado = (e) => {
    if (e.target.id === "basic") {
      console.log(e.target.value)
      this.setState({ type: e.target.value.toLowerCase() == 'true' ? true : false });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Registro a
          <Link className="title ml-2" to="/">Chatprueba</Link>
          </h1>
          <p className="lead">Complete el siguiente formulario para registrarse.</p>
          <p>Elige tu rol</p>
          <select id="basic" className="selectpicker show-tick form-control" onChange={this.cambiarEstado} >
                  <option value = {false} >Estudiante</option>
                  <option value = {true} >Tutor</option>
          </select>
          <br></br>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Nombre" name="name" type="text" onChange={this.handleChange} value={this.state.name}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Registrarse</button>
          </div>

          <hr></hr>
          <p>Ya tienes cuenta? <Link to="/login">Ingresa</Link></p>
        </form>
      </div>
    )
  }
}
