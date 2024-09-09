import Icon from "@/components/icon";

export default function Loading() {
  return (
    <div className="bg-background min-h-[calc(100vh-theme(height.navbar))] w-full flex justify-center items-center">
      <Icon icon="spinner" size={90} />
    </div>
  );
}
