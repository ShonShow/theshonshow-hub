import "./(site)/styles/globals.css";

export const metadata = {
  title: "The Shon Show — HUB",
  description: "HQ: videos, press, events, shop links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className="selection:bg-white/20">{children}</body>
    </html>
  );
}
