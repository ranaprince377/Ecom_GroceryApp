import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
    return (<>
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <Navbar />

                    <Outlet />
                </div>
                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </div>
    </>);
}

export default Layout;
