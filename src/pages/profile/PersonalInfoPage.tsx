import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalInformation } from '@/components/profile';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Toaster } from 'react-hot-toast';
import BackButton from '@/components/backButton';

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    user,
    loading,
    uploadingImage,
    updateProfile,
    uploadImage,
  } = useUserProfile(navigate);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-4">
          <BackButton />
        </div>
        <PersonalInformation
          profile={user}
          loading={loading}
          uploadingImage={uploadingImage}
          onUpdate={updateProfile}
          onImageUpload={uploadImage}
        />
      </div>
    </div>
  );
};

export default PersonalInfoPage;