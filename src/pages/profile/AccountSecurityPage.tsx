import React from 'react';
import { AccountSecurity } from '@/components/profile';
import { Toaster } from 'react-hot-toast';
import BackButton from '@/components/backButton';

const AccountSecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-4">
          <BackButton />
        </div>
        <AccountSecurity />
      </div>
    </div>
  );
};

export default AccountSecurityPage;