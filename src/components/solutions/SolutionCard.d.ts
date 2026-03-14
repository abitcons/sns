import type { Solution } from '../../types';
interface SolutionCardProps extends Solution {
    index: number;
}
export default function SolutionCard({ title, description, logo, features, link, }: SolutionCardProps): import("react").JSX.Element;
export {};
