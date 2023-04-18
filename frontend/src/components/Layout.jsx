import Footer from "./Footer";
import Navbar from "./Nav";

const Layout = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <div style={{ flex: 1 }}>
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
