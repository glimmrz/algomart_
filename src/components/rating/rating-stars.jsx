import Icon from "@/components/icon";

export default function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1 mt-1 mb-1">
      <Icon icon="star" iconColor="var(--theme-color)" />
      <Icon icon="star" iconColor="var(--theme-color)" />
      <Icon icon="star" iconColor="var(--theme-color)" />
      <Icon icon="star" iconColor="var(--theme-color)" />
      <Icon icon="star" iconColor="var(--theme-color)" />
    </div>
  );
}
