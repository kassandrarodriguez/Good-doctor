import React from 'react';
// import 'css';

class Form extends React.Component {
  // getWeather(event) {
  //   event.preventDefault();
  //   const weatherId = this.weatherFormInput.value;
  //   let path = `/weather/${ weatherId }`;
  //   this.props.history.push(path);
  // }
  render() {
    return (
      <form action="" className="form" onSubmit={ (e) => this.getWeather(e) }>
        <h1 className="form-title">Find your local Doctor!</h1>
        <div>
          <label htmlFor="city">Enter Insurance:</label>
          <input type="text" id="city" name="city" placeholder="ex: 33024" ref={ (input) => this.weatherFormInput = input } />
        </div>
        <footer>
          <input type="submit" value="Find my Doctor!" />
        </footer>
      </form>
    )
  }
}

export default Form;
