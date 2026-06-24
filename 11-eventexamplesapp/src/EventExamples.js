import React from 'react';

class EventExamples extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  sayHello() {
    alert('Hello Member!');
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick() {
    alert('I was clicked');
  }

  incrementAndSayHello() {
    this.increment();
    this.sayHello();
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>

        <button onClick={() => this.incrementAndSayHello()}>
          Increment
        </button>

        <br />
        <br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />
        <br />

        <button onClick={() => this.sayWelcome('welcome')}>
          Say Welcome
        </button>

        <br />
        <br />

        <button onClick={this.handleClick}>
          Click on me
        </button>
      </div>
    );
  }
}

export default EventExamples;