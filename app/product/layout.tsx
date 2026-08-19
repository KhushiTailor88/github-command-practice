export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Products Section</h1>
        <hr />
      </header>

      {children}
    </div>
  );
}