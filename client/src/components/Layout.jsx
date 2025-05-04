import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}

// const Layout = ({ children }) => {
//     return (<>
//         <Header />
//         {children}
//         <Footer />
//     </>);
// }

export default Layout;
