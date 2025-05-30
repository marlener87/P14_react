import reactLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './nav.scss';

function Navigation() {
    return (
        <nav className='navBlock'>
            <div className='logoBlock'>
                <img src={reactLogo} className="logo" alt="React logo" />
                <h1 className='titleLogo'>HRnet</h1>
            </div>
            
            <div className='lienBlock'>
                <Link to={'/'} className='lien'>Create Employee</Link>
                <Link to={'/employeeList'} className='lien'>Employee List</Link>
            </div>
        </nav>
    );  
};

export default Navigation;