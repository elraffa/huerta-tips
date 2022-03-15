import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Calendario</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contacto</Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          li {
            color: #8da9c1;
            transition: all 0.2s ease-in-out;
            border-bottom: 1px solid transparent;
          }

          li:hover {
            color: #55626c;
            border-bottom: 1px solid #55626c;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
