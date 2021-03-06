import React from 'react';

const Register = ({onRouteChange}) => {
    return (
           <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"> 
               <main className="pa4 black-80">
                    <form className="measure center">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                      <legend className="f1 fw6 ph0 tc mh0">Register</legend>
                           <div className="tc mt3">
                              <label className="db fw6 lh-copy f6" htmlfor="email-address">Name</label>
                              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name"  id="name"/>
                          </div>
                          <div className="tc mt3">
                              <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                          </div>
                           <div className="tc mv3">
                               <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                               <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                           </div>
                       </fieldset>
                         <div className="tc">
                               <input className="b ph3 pv2 tc input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                onClick={()=>onRouteChange("home")} type="submit"value="Register"/>
                         </div>
                      </form>
                </main>
          </article>
    )}
export default Register;
