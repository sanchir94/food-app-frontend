import SideBar from "./_components/admin-sidebar";

export default function AdminRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted h-screen flex gap-6  ">
      <SideBar />
      {children}
    </div>
  );
}
