import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{

    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    };

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign Up With Your Email</span>
                <form className='sign-up-form' onSubmit={this.handleSumit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />  

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    /> 

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    /> 

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    /> 
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    };

    handleSumit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("Passwords don't match");
            return
        }else{
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);

                await createUserProfileDocument(user,{displayName});

                this.setState(
                    {
                        displayName:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                    }
                )
            }
            catch(error){
                console.log(error);
            }
        }
    };

    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
}

export default SignUp;