import React from 'react';

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(Math.random() * 100000)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const msg =
      'Thanks ' +
      this.state.ename +
      '\nYour Complaint was Submitted.' +
      '\nTransaction ID is: ' +
      this.state.NumberHolder;

    alert(msg);
  }

  render() {
    return (
      <div className="complaint-container">
        <h1>Register your complaints here!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="ename"
                    value={this.state.ename}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Complaint:</td>
                <td>
                  <textarea
                    name="complaint"
                    value={this.state.complaint}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;