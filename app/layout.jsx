import "./globals.css";

export const metadata = {
  title: {
    default: "Bookmark Heist Detective Board",
    template: "%s | Bookmark Heist Detective Board",
  },
  description:
    "A local-first detective board for suspect bookmark cards, nightly heists, bait traps, and clue-puzzle recovery.",
  applicationName: "Bookmark Heist Detective Board",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101418",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="detective-board-body">
        <div className="detective-board-shell">{children}</div>
      </body>
    </html>
  );
}