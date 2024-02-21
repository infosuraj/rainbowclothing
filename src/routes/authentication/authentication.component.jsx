import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer, HorizontalRow}  from './authentication.styles'


const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <HorizontalRow/>
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
