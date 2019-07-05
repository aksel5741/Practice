// import React from 'react';
// import './Login.css';
// import {NavLink} from "react-router-dom";
// import * as axios from 'axios';
//
//
//
// function Login() {
//   return (
//       <div className="conteiner">
//           <div className="info">
//               <h2>
//                   LOGIN TO YOUR ACCOUNT
//
//               </h2>
//               <div className="login_form">
//                   <div className="form_wrapper">
//                       <div className="field-email">
//                           <input id="inputEmail" className="example" name="email_address" placeholder="Email Address"
//                                  type="text" />
//                       </div>
//                       <div className="field_password">
//                           <input id="inputPassword" className="example" name="password" placeholder="Password"
//                                  type="password" />
//                       </div>
//                       <div className="field-conteiner">
//                           <input id="remember_me" className="example" name="remember_me" type="checkbox" />
//                               <label htmlFor="remember_me">Remember Me</label>
//
//                       </div>
//                       <div className="field_login">
//                           <NavLink className="enter-to-acc" to='/'><button className="enter-to-acc">LOGIN</button></NavLink>
//                       </div>
//                   </div>
//
//               </div>
//           </div>
//       </div>
//   );
// }
//
// export default Login;
import './Login.css';
import {NavLink} from "react-router-dom";
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        data: [],
        id: 0,
        name: null,
        lastName: null,
        email: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };


    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({intervalIsSet: interval});
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({intervalIsSet: null});
        }
    }

    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({data: res.data}));
    };


    findInDB = (idTodelete) => {
        // axios.find('http://localhost:3001/api/deleteData', {
        //     data: {
        //         id: idTodelete,
        //     },
        // });
    };


    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: {message: updateToApply},
        });
    };


    render() {
        const {data} = this.state;
        return (
            <div className='container'>
                <div className="info">
                    <p className='ufo'>
                        LOGIN TO YOUR ACCOUNT
                   </p>
                    <div className="login_form">
                        <div className="form_wrapper">
                            <div className="field-email">
                                <input className="example"
                                       placeholder="Email Address"
                                       type="text"
                                       onChange={(e) => this.setState({email: e.target.value})}
                                />
                            </div>
                            <div className="field_password">
                                <input className="example"
                                       placeholder="Password"
                                       type="password"
                                       onChange={(e) => this.setState({password: e.target.value})}
                                />
                            </div>
                            <div className="field-conteiner">
                                <input id="remember_me" className="example" type="checkbox"/>
                                <label htmlFor="remember_me">Remember Me</label>
                            </div>
                            <div className="field_login">
                                <NavLink className="enter-to-acc" to='/'>
                                    <button className="enter-to-acc"
                                            onClick={() => this.findInDB(this.state.id)}>
                                        LOGIN
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;