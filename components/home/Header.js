import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-4/5 m-0-auto p-4">
      <div>
        <Image src="/logo.png" width="75px" height="75px" />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
