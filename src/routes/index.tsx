import ForgotPasswordPage from "@/pages/auth/forget-password/ForgotPasswordPage"
import LoginPage from "@/pages/auth/login/LoginPage"
import VerifyOTPPage from "@/pages/auth/otp/VerifyOTPPage"
import ResetPasswordPage from "@/pages/auth/reset-password/ResetPasswordPage"
import SignUpPage from "@/pages/auth/signup/SignUpPage"
import WelcomePage from "@/pages/auth/welcome/WelcomePage"
import { Route, Routes } from "react-router-dom"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOTPPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  )
}
