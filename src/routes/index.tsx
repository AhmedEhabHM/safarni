import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import AuthLayout from '@/components/layout/AuthLayout';
import ProtectedRoutes from './ProtectedRoutes';

// Pages
import { Home } from '@/pages/home/Home';
import WelcomePage from '@/pages/auth/welcome/WelcomePage';
import LoginPage from '@/pages/auth/login/LoginPage';
import SignUpPage from '@/pages/auth/signup/SignUpPage';
import ForgotPassword from '@/pages/auth/passwordManagementPages/ForgotPassword';
import OTPVerification from '@/pages/auth/passwordManagementPages/OTPVerification';
import NewPassword from '@/pages/auth/passwordManagementPages/NewPassword';
import Success from '@/pages/auth/passwordManagementPages/Success';
import FlightBooking from '@/pages/flight-booking/FlightBooking';
import SeatBookingPage from '@/pages/flight-booking/SeatBookingPage';
import BoardingPassPage from '@/pages/flight-booking/BoardingPassPage';
import FilterPanelPage from '@/pages/flight-booking/FilterPanelPage';
import { FlightBookingForm } from '@/pages/flight-booking/FlightBookingForm';
import HotelPage from '@/pages/hotel/HotelPage';
import HotelAboutPage from '@/pages/hotel/HotelAboutPage';
import CarsPage from '@/pages/cars';
import CarDetailsPage from '@/pages/cars/details';
import PickUpPage from '@/pages/cars/pickup';
import { Favorites } from '@/pages/favourite/Favorites';
import CompareToursPage from '@/pages/compare/CompareToursPage';
import Search from '@/pages/Search/Search';
import Destination from '@/pages/destination/Destination';
import ProfileSettings from '@/components/profile/ProfileSettings';
import { PersonalInformation } from '@/components/profile';
import { AccountSecurity } from '@/components/profile/AccountSecurity';
import PaymentPage from '@/components/checkout/PaymentPage';
import SuccessPage from '@/components/checkout/pages/SuccessPage';
import ErrorPage from '@/components/checkout/pages/ErrorPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes with MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="favorite" element={<Favorites />} />
        <Route path="compare" element={<CompareToursPage />} />
        <Route path="search" element={<div className="pt-27.5 p-8"><Search /></div>} />
        <Route path="maps" element={<div className="pt-27.5 p-8"><h1>Maps Page</h1></div>} />
        <Route path="destination" element={<Destination />} />
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route path="payment/success" element={<SuccessPage />} />
        <Route path="payment/error/:paymentId" element={<ErrorPage />} />
      </Route>

      {/* Auth routes (no MainLayout) */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="/auth/welcome" replace />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verify" element={<OTPVerification />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="success" element={<Success />} />
      </Route>

      {/* Standalone auth pages (backward compatibility) */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verify" element={<OTPVerification />} />

      {/* Flight routes */}
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/seat-booking" element={<SeatBookingPage />} />
      <Route path="/boarding-pass" element={<BoardingPassPage />} />
      <Route path="/filter-panel" element={<FilterPanelPage />} />
      <Route path="/flight-form" element={<FlightBookingForm />} />

      {/* Hotel routes */}
      <Route path="/hotel" element={<HotelPage />} />
      <Route path="/hotel/:hotelId" element={<HotelAboutPage />} />
      <Route path="/hotel/:hotelId/:tab" element={<HotelAboutPage />} />

      {/* Car routes */}
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/cars/:id" element={<CarDetailsPage />} />
      <Route path="/cars/:id/pick-up" element={<PickUpPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/security" element={<AccountSecurity />} />
      </Route>
    </Routes>
  );
}