import {SignIn} from "@clerk/nextjs";

function SignUpPage() {
    return (
        <main className={'auth-page'}>
            <SignIn/>
        </main>
    );
}

export default SignUpPage;
