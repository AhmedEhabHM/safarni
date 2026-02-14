import api from "@/api/axios";
import type { CategoriesResponse } from "@/types/category.types";

// بيانات وهمية للفئات
const mockCategories: CategoriesResponse = {
  status: "success",
  message: "Categories fetched successfully",
  data: [
    {
      id: 1,
      key: "flights",
      title: "Flights",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      key: "cars",
      title: "Cars",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      key: "tours",
      title: "Tours",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      key: "hotels",
      title: "Hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop"
    }
  ]
};

// دالة واحدة فقط لجلب الفئات
export const getCategories = async (): Promise<CategoriesResponse> => {
  // حاول الاتصال بالـ API الحقيقي أولاً
  try {
    const response = await api.get<CategoriesResponse>("categories");
    return response.data;
  } catch (error) {
    console.warn("API failed, using mock data", error);
    return mockCategories;
  }
};