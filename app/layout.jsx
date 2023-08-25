import "@styles/globals.css";

export const metadata = {
  title: "Smart Prompt",
  description: "Discover and Share AI Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
