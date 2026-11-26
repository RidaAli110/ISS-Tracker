import { Satellite } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { NavLink } from 'react-router';

export default function NavBar() {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        <NavLink to='/' className='flex items-center gap-2 md:gap-3'>
          <Satellite size={34} color='var(--icon-active)' />
          <span className='text-(--text) text-xl font-semibold hover:text-(--icon-hover) md:text-2xl lg:text-3xl'>
            ISS Tracker
          </span>
        </NavLink>
        <div className='flex gap-4 md:gap-5 lg:gap-7'>
          <NavLink
            to='/'
            aria-label='Home'
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? 'active' : ''}`
            }
          >
            <Satellite size={23} />
            <p className=' hidden md:block font-semibold'>Home</p>
          </NavLink>
          <NavLink
            to='/about'
            aria-label='About the ISS'
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? 'active' : ''}`
            }
          >
            <Rocket size={20} />
            <p className=' hidden md:block font-semibold'>About</p>
          </NavLink>
          <NavLink
            to='/news'
            aria-label='Space news'
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? 'active' : ''}`
            }
          >
            <Newspaper size={20} />
            <p className=' hidden md:block font-semibold'>Space News</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
