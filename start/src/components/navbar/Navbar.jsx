import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import Home from '../home/Home';
import About from '../about/About';
import Separate from '../moreseperate/Moreseparate';
import Crud from '../crud/Crud';
import Add from '../crud/add/Add';
import Todo from '../todo/Todo';
import Paginate from '../paginate/Paginate';
import Paginationmodel from '../paginationmodel/Paginationmodel';

/**
 * Use exact in react js
 * exact="true": 
 * activeClassName to lowercase is activeclassname: 
 */

function Navbar() {
    return (
        <Router>
            {/* Active on navbar which I am stand on. But  */}
            <ul className='nav'>
                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/'>Home</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/about'>About</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/separate'>Separate</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/crud'>Crud</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/todo'>Todo</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/paginate'>Paginate</NavLink>
                </li>

                <li>
                    <NavLink activeclassname='active' className='link' exact="true" to='/paginationmodel'>Paginatemodel</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/separate' element={<Separate />}></Route>
                <Route path='/crud' element={<Crud />}></Route>
                <Route path='/todo' element={<Todo />}></Route>
                <Route path='/paginate' element={<Paginate />}></Route>
                <Route path='/paginationmodel' element={<Paginationmodel />}></Route>
                <Route path='/add' element={<Add />}></Route>
            </Routes>
        </Router>
    )
}

export default Navbar;