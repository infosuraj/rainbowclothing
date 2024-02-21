import React, {useState} from 'react';
import {

    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import {SignInContainer, Header2, ButtonsContainer, GoogleLogo} from './sign-in-form.styles'
import Button , { BUTTON_TYPE_CLASSES } from "../button/button.component";
import images from "../../assets"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/invalid-credential") {
                alert("Invalid Credential! Either Email or Password is Invalid")
            } else {
                console.log("Error Logging In: " + err.message)
            }
        }
    }

    return (
        <SignInContainer>
            <Header2>Already have an account</Header2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>

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
                <ButtonsContainer>
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        <GoogleLogo>
                            <images.Google/>
                        </GoogleLogo>
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
