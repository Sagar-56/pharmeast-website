import React, { Component } from 'react';
import './loginMain.css';


class loginMain extends Component{

        render(){
            return(
        <>
            <div className="modal-dialog modal-col-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Sign In</h4>
                </div>
                <div className="modal-body">
                    <form className="form2sign">
                        <div className="row">
                        <div className="colom1 colom9">
                            <ion-icon className="signicon1 signicon" name="text"></ion-icon><input type="text" className="formcontro1" placeholder="Enter Name"/>
                        </div>
                        <div className="colom4 colom9">
                            <ion-icon className="signicon2 signicon" name="phone-portrait"></ion-icon><input type="number" className="formcontro2" placeholder="Phone Number"/>
                        </div>
                        <div className="colom5 colom9">
                            <ion-icon className="signicon3 signicon" name="search"></ion-icon><input type="text" className="formcontro3" placeholder="State"/>
                        </div>
                        <div className="colom2 colom9">
                            <ion-icon className="signicon4 signicon" name="mail"></ion-icon><input type="email" className="formcontro4" placeholder="Email"/>
                        </div>
                        <div className="colom3 colom9">
                            <ion-icon className="signicon5 signicon" name="eye"></ion-icon><input type="password" className="formcontro5" placeholder="Password"/>
                        </div>
                        </div>
                    </form>
                        <input className="formcheckinput" type="checkbox" id="blankCheckbox"/>
                        <span className="termcondition">I agree to Zomato's <a href="#">Terms of Service,</a> <a href="#">Privacy Policy</a> and <a href="#"> Content Policies</a></span>
                </div>
                <div className="cbtndiv">
                <button type="submit" className="cbtn">Create Account</button>
                </div>
                <span className="firstline1"><hr/></span><span><h4 className="middleline1">OR</h4></span><span className="secondline1"><hr/></span>
                <div className="google"> 
                    <div className="emailDivc1"><a href="https://accounts.google.com/signin/v2/identifier?hl=en-GB&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession"><ion-icon name="logo-google"className="iconc2"></ion-icon>Continue With Google</a></div>
                </div>
                <div class="create2"><span class="newa2">Already have an account?</span><span><a href="#">Log in</a></span></div>
              </div>
            </div>
          {/* </div> */}

    </>
             )
        }

}

export default loginMain;
