
interface NewsPost {
    title: string;
    date: string;
    excerpt: string;
    content?: string;
    imageUrl: string;
    slug: string;
}
interface NewsPostCardProps {
    post: NewsPost;
}
declare const NewsPostCard: React.FC<NewsPostCardProps>;
export default NewsPostCard;
