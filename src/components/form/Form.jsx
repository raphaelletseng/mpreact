import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {EMAIL_REGEX} from './Regex.jsx';
import Subtitle from '../Subtitle.jsx';
import './form.css'
import emailjs from "@emailjs/browser";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Form = props => {
  const [state, setState] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const form = useRef();

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value});
  };

  const isFormValid = () => {
    if (!state.email){
      setErrorMessage('Please add your email address :)');
      return false;
    }
    if (!EMAIL_REGEX.test(state.email)){
      setErrorMessage('Are you sure that email is valid?');
      return false;
    }
    if (!state.message){
      setErrorMessage('Add the message you want to send!');
      return false;
    }
    if (!state.name){
      setErrorMessage('Please add your name so I can reply to you!');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!isFormValid()){
      return;
    }
    emailjs.sendForm(
      'service_0e12or8',
      'template_ix5ezse',
      form.current,
      'user_DWyROBMas1zXGCdsffqV2'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
        setState({});
        setSuccessMessage('Thanks for sending me a message! I will get back to you soon!');
      })
      .catch(() =>{
        setErrorMessage('Uh oh, something went wrong upon submission, please try again!');
      });

  };

  return (
    <section id = "form">
    <ScrollAnimation animateIn="pulse">
    <div className = "form-container">
      <Subtitle subtitleColor = "#032B4A">drop me an email!</Subtitle>
        <form
        ref = {form}
        onSubmit= {handleSubmit}

      >
      <p>
        <label>
          Name <br/>
          <input
            className = "input-field"
            type = "name"
            name = "name"
            value = {state.name ?? ''}
            onChange = {handleChange}
            placeholder = "Valentin"
          />
        </label>
      </p>
        <p>
          <label>
            Email <br/>
            <input
              className = "input-field"
              type = "email"
              name = "email"
              value = {state.email ?? ''}
              onChange = {handleChange}
              placeholder = "valentin@kitty-central.com"
            />
          </label>
        </p>

        <p>
          <label>
            Message <br/>
            <textarea
              className = "message"
              name = "message"
              value = {state.message ?? ''}
              onChange = {handleChange}
              placeholder = "Say hello!"
            />
          </label>
        </p>

        <p style={{ textAlign: 'center' }}>
          <button className = "form-button" type="submit">
            Send{' '}
          </button>
        </p>
      </form>
      <p>
        {successMessage ? <div id="success-response">{successMessage}</div> : null}
        {errorMessage ? <div id="error-response">{errorMessage}</div> : null}
      </p>


    </div>
    </ScrollAnimation>
    </section>
  );
};

Form.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default Form;
