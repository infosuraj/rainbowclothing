import React, {useState} from 'react';
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
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
        const {user} = await signInWithGooglePopup();

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
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
        <div className='sign-up-container'>
            <h2>Already have an account</h2>
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
                <div className='buttons-container'>
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        <images.Google className='google-logo'/>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;