import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {startGoogleSignIn,startEmailSignIn} from '../../redux/user/user.actions';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styled';

const SignIn =({startEmailSignIn,startGoogleSignIn})=>{

    const [userCredentials,setCredentials] = useState({email:'',password:''});

    const {email,password} = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();
        startEmailSignIn(email,password);   
    };

    const handleChange = event =>{
        const {value,name} = event.target;
        setCredentials({...userCredentials,[name]:value});
    };

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name='email'
                type='email' 
                value={email} 
                handleChange={handleChange}
                label='Email'
                required/>

                <FormInput 
                name='password' 
                type='password' 
                value={password} 
                handleChange={handleChange}
                label='Password'
                required/>
                <ButtonsBarContainer className='buttons'> 
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={startGoogleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsBarContainer>
                
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => (
    {
        startGoogleSignIn:()=>dispatch(startGoogleSignIn()),
        startEmailSignIn:(email,password)=>dispatch(startEmailSignIn({email,password}))
    }
)

export default connect(null,mapDispatchToProps)(SignIn);