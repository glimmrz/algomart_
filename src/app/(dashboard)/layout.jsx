import DashboardSidebar from "@/components/(dashboard)/dashboard-sidebar/dashboardSidebar";
import Container from "@/components/wrappers/container";

export default function Layout({ children }) {
  return (
    <div className="bg-accent min-h-screen">
      <Container>
        <div className="flex gap-4">
          <DashboardSidebar />
          <div className="w-full overflow-hidden">{children}</div>
        </div>
      </Container>
    </div>
  );
}
