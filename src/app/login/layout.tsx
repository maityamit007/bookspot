import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:min-h-screen md:grid md:grid-rows-[64px_auto]">
    <Header />
    <div className="grid md:grid-cols-2">
      <div></div>
        <div>{children}</div>
      </div>
    </div>
  );
}
