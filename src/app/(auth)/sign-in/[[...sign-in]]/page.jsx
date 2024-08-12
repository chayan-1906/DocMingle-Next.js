import {SignIn} from "@clerk/nextjs";

function SignInPage() {
    return (
        <main className={'auth-page'}>
            <SignIn/>
        </main>
    );
}

export default SignInPage;
