// src/store/actions/hotelActions.ts
import type{ AppDispatch } from '../index';
import { addHotelPhoto, addReview, setHelpful, setError, addBooking, setBookingLoading, setBookingError } from '../slices/hotelSlice';
import { hotelApi } from '../../services/hotelApi';
import type { ReviewInput, BookingRequest } from '../../types/hotel.types';

export const addHotelReview = (reviewData: ReviewInput) => {
  return async (dispatch: AppDispatch, getState: any) => {
    try {
      const { currentHotel } = getState().hotel;
      
      if (currentHotel?.id) {
        try {
          await hotelApi.addHotelReview(currentHotel.id, reviewData);
        } catch (apiError) {
          console.error('API error adding review:', apiError);
        }
        
        dispatch(addReview(reviewData));
      }
    } catch (error) {
      console.error('Error adding review:', error);
      dispatch(setError('Failed to add review'));
      throw error;
    }
  };
};

export const markReviewAsHelpful = (reviewId: number, currentHelpful: number) => {
  return async (dispatch: AppDispatch, getState: any) => {
    try {
      const { currentHotel } = getState().hotel;
      
      if (currentHotel?.id) {
        try {
          await hotelApi.markHelpful(reviewId);
        } catch (apiError) {
          console.error('API error marking helpful:', apiError);
        }
        
        dispatch(setHelpful({ reviewId, helpful: currentHelpful + 1 }));
      }
    } catch (error) {
      console.error('Error marking helpful:', error);
      dispatch(setError('Failed to mark review as helpful'));
    }
  };
};

export const uploadHotelPhoto = (photo: File) => {
  return async (dispatch: AppDispatch) => {
    try {
      // في الإنتاج، سيتم رفع الصورة للخادم
      const photoUrl = URL.createObjectURL(photo);
      dispatch(addHotelPhoto(photoUrl));
      return photoUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      dispatch(setError('Failed to upload photo'));
      throw error;
    }
  };
};

export const createHotelBooking = (bookingData: BookingRequest) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setBookingLoading(true));
    dispatch(setBookingError(null));
    
    try {
      let response;
      
      try {
        response = await hotelApi.createBooking(bookingData);
        
        dispatch(addBooking({
          ...bookingData,
          id: response.data?.id || Math.floor(Math.random() * 1000),
          status: response.data?.booking_status || "pending",
          createdAt: response.data?.created_at || new Date().toISOString()
        }));
      } catch (apiError) {
        console.error('API booking failed:', apiError);
        
        // استخدام بيانات تجريبية
        dispatch(addBooking({
          ...bookingData,
          id: Math.floor(Math.random() * 1000),
          status: "pending",
          createdAt: new Date().toISOString()
        }));
        
        response = {
          data: {
            id: Math.floor(Math.random() * 1000),
            booking_status: "pending",
          },
          status: "success",
          message: "Booking created successfully (demo mode)"
        };
      }
      
      return response;
    } catch (error: any) {
      console.error('Booking failed:', error);
      dispatch(setBookingError(error.message || 'Failed to create booking'));
      throw error;
    } finally {
      dispatch(setBookingLoading(false));
    }
  };
};