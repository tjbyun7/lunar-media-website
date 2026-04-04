import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { faviconUrl } from "@/lib/lunarmedia-assets";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: faviconUrl }],
  },
  title: "Lunar Media | Representing the next generation of creators.",
  description:
    "Lunar Media is a full-service influencer management and marketing agency dedicated to empowering the next generation of media. Our founders are Stanford dropouts and creator managers with years of music & brand marketing experience. We leverage AI to create a remarkably smooth, data-driven, and operationally efficient experience for our creators & brand partners. Founded by Gen-Z for Gen-Z, we provide a personalized approach to campaign execution, marketing strategy ideation, and management.",
  openGraph: {
    title: "Lunar Media | Representing the next generation of creators.",
    description:
      "Lunar Media is a full-service influencer management and marketing agency dedicated to empowering the next generation of media.",
    url: "https://www.lunarmedia.io/",
    siteName: "Lunar Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunar Media | Representing the next generation of creators.",
    description:
      "Representing the next generation of creators shaping the future of media.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
