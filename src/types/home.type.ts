export type TSectoinHeaderProps = {
    title:string;
    path:string;
}
interface BaseCardProps {
  image: string;
  title: string;
  rating: number;
  location: string;
}
export interface RecommendationCardProps extends BaseCardProps {
  variant: 'recommendation';
  isFavorite?: boolean; // جعلها اختيارية
}
export interface TourCardProps extends BaseCardProps {
  variant: 'tour';
  price: number;
  tourType?: string; // جعلها اختيارية
  isFavorite?: boolean; // جعلها اختيارية
}