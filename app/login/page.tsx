import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}