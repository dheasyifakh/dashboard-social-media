import {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { useStateContext } from '../../hooks/useStateContext';
const NavButton = ({customFunc,icon }) =>(
 
    <div>
    <button
            type="button"
            onClick={() => customFunc()}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </div>
      
  )
  
const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick,  setScreenSize, screenSize } = useStateContext();
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
        <NavButton title="Menu" customFunc={handleActiveMenu()} color='black' icon={<AiOutlineMenu />} />
        <div className="flex">
        <NavButton title="Notification"  customFunc={() => handleClick('notification')} color='black' icon={<RiNotification3Line />} />
        
        <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
         
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Admin
              </span>
            </p>
          </div>
      
        </div>
    </div>
  )
}

export default Navbar