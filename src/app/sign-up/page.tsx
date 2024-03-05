import { SignUp } from '@clerk/nextjs';
import styles from './sign-up.module.css';

function SignUpPage() {
  return (
    <div className={styles.signUp}>
      <div>
        <SignUp afterSignUpUrl="/dashboard" signInUrl="/sign-in" />
      </div>
    </div>
  );
}

export default SignUpPage;
