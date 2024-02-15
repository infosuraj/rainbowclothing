import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import images from '../../assets'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>
                        <images.Logo className='logo' />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/home'>
                        Shop
                    </Link><Link className='nav-link' to='/sign-in'>
                        SignIn
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
