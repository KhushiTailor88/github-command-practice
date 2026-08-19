export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>
        <h2>Dashboard Sidebar</h2>

        <p>Home</p>
        <p>Users</p>
        <p>Settings</p>
      </aside>

      <main>
        {children}
      </main>
    </div>
  );
}