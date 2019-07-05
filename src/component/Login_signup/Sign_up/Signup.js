// import React from 'react';
// import {NavLink} from "react-router-dom";
// import './Signup.css';
//
// function Signup() {
//     return (
//         <div class="conteiner">
//             <div class="sign-up">
//                 <div class="sign-up_btn">
//                     <NavLink to='/Login'>Login</NavLink>
//                 </div>
//                 <div class="sign-up_conteiner">
//                     <div class="info">
//                         <h2>
//                             CREATE AN ACCOUNT
//                         </h2>
//                     </div>
//
//                     <div class="field-conteiner">
//                         <input class="example" name="first_name" placeholder="First name" type="text" required/>
//                     </div>
//                     <div class="field-conteiner">
//                         <input class="example" name="last_name" placeholder="Last name" type="text" required/>
//                     </div>
//                     <div class="field-conteiner">
//                         <input class="example" name="email_address" placeholder="Email address" required
//                                type="text"/>
//                     </div>
//                     <div class="field-conteiner">
//                         <input class="example" name="password" placeholder="Password" required type="password"/>
//                     </div>
//                     <div class="field-conteiner">
//                         <input class="example" name="password_confirmation" placeholder="Password Confirmation"
//                                required type="password"/>
//                     </div>
//                     <div class="field-conteiner join-as">
//                         <input id="join-as-client" class="example join-as" name="user-is" value="Buyer" required
//                                type="radio"/>
//                         <label for="join-as-client" class="join-label">Join As a Buyer</label>
//                     </div>
//                     <div class="field-conteiner join-as">
//                         <input id="join-as-creative" class="example join-as" name="user-is" required
//                                value="Creative" type="radio"/>
//                         <label for="join-as-client" class="join-label">Join As a Creative</label>
//                     </div>
//                     <div class="field-conteiner">
//                         <NavLink  className='op' to='/'>Create account</NavLink>
//                     </div>
//                 </div>
//
//
//             </div>
//
//         </div>
//     )
//         ;
// }
//
// export default Signup;
import {NavLink} from "react-router-dom";
import './Signup.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        data: [],
        id: 0,
        name: null,
        lastName: null,
        email: null,
        displayName:null,
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

    putDataToDB = (name, ln, email,password,displayName) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            name: name,
            lastName: ln,
            email: email,
            password:password,
            displayName:displayName
        });
    };


    render() {
        const {data} = this.state;
        return (
            <div className="conteiner">
                <div className="sign-up">
                    <div className="sign-up_btn">
                        <NavLink to='/Login'>Login</NavLink>
                    </div>
                    <div className="sign-up_conteiner">
                        <div className="info">
                            <h2>
                                CREATE AN ACCOUNT
                            </h2>
                        </div>

                        <div className="field-conteiner">
                            <input className="example"
                                   placeholder="First name"
                                   type="text" required
                                   onChange={(e) => this.setState({name: e.target.value })}
                            />
                        </div>
                        <div className="field-conteiner">
                            <input className="example"
                                   placeholder="Last name"
                                   type="text" required
                                   onChange={(e) => this.setState({lastName: e.target.value })}
                            />
                        </div>
                        <div className="field-conteiner">
                            <input className="example"
                                   placeholder="Display Name"

                                   onChange={(e) => this.setState({displayName: e.target.value })}
                            />
                        </div>
                        <div className="field-conteiner">
                            <input className="example"
                                   placeholder="Email address"
                                   required type="text"
                                   onChange={(e) => this.setState({email: e.target.value })}
                            />
                        </div>
                        <div className="field-conteiner">
                            <input className="example"
                                   placeholder="Password"
                                   required type="password"
                                   onChange={(e) => this.setState({password: e.target.value })}
                            />
                        </div>

                        <div className="field-conteiner">
                            <input className="example" placeholder="Password Confirmation"
                                   required type="password"/>
                        </div>

                        <div className="field-conteiner join-as">
                            <input className="example join-as" name="user-is" value="Buyer" required
                                   type="radio"/>
                            <label className="join-label">Join As a Buyer</label>
                        </div>
                        <div className="field-conteiner join-as">
                            <input className="example join-as" name="user-is" required
                                   value="Creative" type="radio"/>
                            <label className="join-label">Join As a Creative</label>
                        </div>
                        <div className="field-conteiner">
                            <NavLink className='op'

                                     to='/'
                                     onClick={() => this.putDataToDB(this.state.name,
                                         this.state.lastName,
                                         this.state.email,
                                         this.state.password,
                                         this.state.displayName)}>

                                Create account
                                </NavLink>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default App;