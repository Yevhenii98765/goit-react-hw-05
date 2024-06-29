import clsx from 'clsx';
import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'

export const Navigation = () => {

    
    const buildLinkClass = ({ isActive }) => {
        return clsx(isActive && 'activeNavLink');
      };

  return <div>
            <header className={s.header}>
                <NavLink className={buildLinkClass} to='/'>Home</NavLink>
                <NavLink className={buildLinkClass} to='movies'>Movies</NavLink>
            </header>
        </div>
}
export default Navigation