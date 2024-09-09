import LoginForm from "@/components/forms/login-form";
import AuthWrapper from "@/components/wrappers/auth-wrapper";

export default function Login() {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
