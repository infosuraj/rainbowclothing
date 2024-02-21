import React, {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import {SignUpContainer, Header2} from './sign-up-form.styles'
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value})
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password does not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }catch(err) {
            if(err.code === 'auth/email-already-in-use'){
                alert("User already exists");
            }else {
                console.log("User Creation encountered and error", err);
            }
        }
    }

    return (
        <SignUpContainer>
            <Header2>Don't have an account</Header2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Full Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    autoComplete="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    autoComplete="new-password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                />

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
