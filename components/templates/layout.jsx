import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, pages }) => (
  <>
    <Nav pages={pages}  />
    {children}
    <Footer />
  </>
);

export default Layout;