import { NavLink } from 'react-router-dom'; 
// similar to { Link } but this has an added feature of showing which "tab" is active
import { links } from '../assets/constants';

const NavLinks = () => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
    < br/>
  </div>
)

const Sidebar = () => {

  return (
    <div>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] text-white text-center font-bold text-lg'>
        Tunestory-Shazam
        <NavLinks />
      </div>

    </div>
  );
};


export default Sidebar;
