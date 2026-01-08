// src/services/hotelApi.ts
const BASE_URL = 'https://round8-safarni-team-three.huma-volve.com/api';

export const hotelApi = {
  // 1. جلب كل الفنادق
  getAllHotels: async (page: number = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/hotel?page=${page}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("Error fetching hotels:", error);
      throw error;
    }
  },

  // 2. جلب فندق محدد بواسطة ID
  getHotelById: async (id: string | number) => {
    try {
      const response = await fetch(`${BASE_URL}/hotel/${id}`);
      if (!response.ok) throw new Error('Hotel not found');
      return await response.json();
    } catch (error) {
      console.error("Error fetching hotel details:", error);
      throw error;
    }
  },

  // 3. البحث عن الفنادق
  searchHotels: async (query: string) => {
    try {
      const response = await fetch(`${BASE_URL}/hotel?search=${query}`);
      if (!response.ok) throw new Error('Search failed');
      return await response.json();
    } catch (error) {
      console.error("Error searching hotels:", error);
      throw error;
    }
  },

  // 4. إضافة تقييم جديد
  addHotelReview: async (hotelId: string | number, reviewData: any) => {
    try {
      const response = await fetch(`${BASE_URL}/hotel/${hotelId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      if (!response.ok) throw new Error('Failed to add review');
      return await response.json();
    } catch (error) {
      console.error("Error adding review:", error);
      throw error;
    }
  },

  // 5. تمييز التقييم كمفيد
  markHelpful: async (reviewId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/reviews/${reviewId}/helpful`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to mark helpful');
      return await response.json();
    } catch (error) {
      console.error("Error marking review as helpful:", error);
      throw error;
    }
  },

  // 6. إنشاء حجز جديد - محاولة جميع الـ APIs المحتملة
  createBooking: async (bookingData: {
    room_id: number;
    check_in: string;
    check_out: string;
    adults: number;
    children: number;
    infants: number;
    comment?: string;
  }) => {
    // قائمة بجميع الـ APIs المحتملة
    const possibleEndpoints = [
      '/hotel-bookings',  // من السجلات
      '/hotel/bookings',
      '/bookings',
      '/booking',
      '/reservations',
      '/hotel/reservations'
    ];

    let lastError: any = null;

    // محاولة جميع الـ endpoints
    for (const endpoint of possibleEndpoints) {
      try {
        console.log(`Trying booking endpoint: ${BASE_URL}${endpoint}`);
        
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });

        const responseText = await response.text();
        console.log(`Response from ${endpoint}:`, responseText.substring(0, 200));

        // تخطي إذا كان رد HTML (خطأ)
        if (responseText.trim().startsWith('<!DOCTYPE') || 
            responseText.trim().startsWith('<html')) {
          console.warn(`Endpoint ${endpoint} returned HTML, skipping...`);
          continue;
        }

        let parsedResponse;
        try {
          parsedResponse = JSON.parse(responseText);
        } catch (parseError) {
          console.error(`Failed to parse JSON from ${endpoint}:`, parseError);
          continue;
        }

        if (!response.ok) {
          lastError = new Error(parsedResponse.message || `Request failed with status ${response.status}`);
          continue;
        }

        console.log(`✅ Booking successful with endpoint: ${endpoint}`);
        return parsedResponse;
      } catch (error) {
        console.warn(`Endpoint ${endpoint} failed:`, error);
        lastError = error;
      }
    }

    // إذا فشلت جميع المحاولات
    throw lastError || new Error('All booking endpoints failed. Please check the API documentation.');
  },

  // 7. التحقق من توفر الـ APIs
  checkBookingAPIs: async () => {
    const endpoints = [
      '/hotel-bookings',
      '/hotel/bookings', 
      '/bookings',
      '/booking',
      '/reservations'
    ];

    const results = [];
    
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'OPTIONS',
        });
        
        results.push({
          endpoint,
          exists: response.ok,
          status: response.status,
          statusText: response.statusText
        });
      } catch (error) {
        results.push({
          endpoint,
          exists: false,
        });
      }
    }
    
    return results;
  }
};