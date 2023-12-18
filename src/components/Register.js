import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone_number: '',
      university: '',
      study_fields: '',
      email: '',
    };
  }

  handleRegister = () => {
    // Add your authentication logic here
    console.log(`Logging in with ${this.state.username} and ${this.state.password}`);
  };
// green 81b29a
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#83c5be] p-8 rounded-lg border-4 border-black w-6/12"
          style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)', }}>
          <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Username *
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password *
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="university">
            University *
          </label>
          <select
            id="university"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            value={this.state.university}
            onChange={(e) => this.setState({ university: e.target.value })}
          >
            <option value="" disabled>Select a university</option>
            <option value="GIU">GIU</option>
            <option value="FIU">FIU</option>
            <option value="CSU">CSU</option>
          </select>
        </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="study_fields">
              Fields of study *
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="study_fields"
              id="study_fields"
              value={this.state.study_fields}
              onChange={(e) => this.setState({ study_fields: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email *
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="phone_number">
              Telephone number
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="tel"
              id="phone_num"
              value={this.state.phone_number}
              onChange={(e) => this.setState({ phone_number: e.target.value })}
            />
          </div>
          <button
            className=" bg-[#8e7dbe] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black transform transition duration-300 hover:scale-105 "
            onClick={this.handleRegister}
            onMouseEnter={(e) => (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')}
            onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
          >
          Register
        </button>
      </div>
      </div >
    );
  }
}

export default Register;
