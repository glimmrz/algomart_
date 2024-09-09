import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const DynamicIcon = ({ name, size = 16, ...props }) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} size={size} />;
};

export default DynamicIcon;
