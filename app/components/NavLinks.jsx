'use client';
import { HomeIcon, StarIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Favoritos', href: '/favs', icon: StarIcon },
  { name: 'Crear libro', href: '/create', icon: PlusCircleIcon }
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-[#16b187] md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? "bg-sky-100 text-[#08745c]" : ""}`}
            >
              <LinkIcon className="w-6 text-[#08745c]" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })
      }
    </>
  );
};