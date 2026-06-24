import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: '',
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const rupees = parseFloat(this.state.amount);
    const euro = rupees / 90;

    this.setState({
      result: euro.toFixed(2)
    });
  }

  render() {
    return (
      <div>
        <h1>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Currency:
            <textarea value="Euro" readOnly />
          </label>

          <br />
          <br />

          <button type="submit">Convert</button>
        </form>

        {this.state.result && (
          <h3>Converted Amount in Euro: {this.state.result}</h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;