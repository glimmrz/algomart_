import RegisterForm from "@/components/forms/register-form";
import AuthWrapper from "@/components/wrappers/auth-wrapper";

export default function Page() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}
