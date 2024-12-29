
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";



export const metadata = {
  title: "FeedMeFood",
  description: "Be a reason for someone's smile",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/love.png" sizes="any" />
      </head>
      <body>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <SessionWrapper>
          <Navbar />

          <div className=" text-blue-900 min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#ffffff_1px)] bg-[size:20px_20px]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}