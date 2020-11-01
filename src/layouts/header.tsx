import Link from 'next/link';

export const Header: React.FC = () => (
  <header className="border-b w-full h-12 lg:h-16 lg:px-4">
    <nav className="flex pl-2 lg:px-0 h-full max-w-screen-xl mx-auto items-center justify-between">
      <Link href="/">
        <h1 className="font-extrabold text-2xl lg:text-3xl">next template tailwind</h1>
      </Link>
      <ul className="flex items-center">
        <li className="mx-1">item</li>
        <li className="mx-1">item</li>
        <li className="mx-2">item</li>
      </ul>
    </nav>
  </header>
);
