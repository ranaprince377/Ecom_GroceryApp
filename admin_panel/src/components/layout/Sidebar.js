import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="menu-inner-shadow"></div>
            <ul className="menu-inner py-1">

                {/* <!-- Dashboard --> */}
                <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
                    <Link to="/" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>


                <li className={`menu-item ${isActive('/products') || isActive('/add-product') ? 'active' : ''}`}>
                    <a className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Products</div>
                    </a>

                    <ul className="menu-sub">
                        <li className={`menu-item ${isActive('/products') ? 'active' : ''}`}>
                            <Link to='/products' className="menu-link">
                                <div data-i18n="Without menu">Products List</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${isActive('/add-product') ? 'active' : ''}`}>
                            <Link to='add-product' className="menu-link">
                                <div data-i18n="Without navbar">Add Product</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={`menu-item ${isActive('/categories') || isActive('/add-category') || isActive('/sub-categories') || isActive('/add-subcategory') ? 'active' : ''}`}>
                    <a className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Category</div>
                    </a>

                    <ul className="menu-sub">
                        <li className={`menu-item ${isActive('/categories') ? 'active' : ''}`}>
                            <Link to='categories' className="menu-link">
                                <div data-i18n="Without menu">All Categories</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${isActive('/add-category') ? 'active' : ''}`}>
                            <Link to='add-category' className="menu-link">
                                <div data-i18n="Without navbar">Add Category</div>
                            </Link>
                        </li>
                        <hr style={{ width: '70%', margin: '2px', alignSelf: 'center'}}/>
                        <li className={`menu-item ${isActive('/sub-categories') ? 'active' : ''}`}>
                            <Link to='sub-categories' className="menu-link">
                                <div data-i18n="Without menu">All Sub-categories</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${isActive('/add-subcategory') ? 'active' : ''}`}>
                            <Link to='add-subcategory' className="menu-link">
                                <div data-i18n="Without navbar">Add Sub-category</div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

        </aside>
    );
}

export default Sidebar;