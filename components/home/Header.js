import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-4/5 m-0-auto p-4">
      <Link href='/'>
      <a href='/'>
        <Image src="/logo.png" width="75px" height="75px" />
      </a>
      </Link>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
