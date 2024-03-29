import Image from 'next/image';
import NavLinks from './NavLinks';
import { PowerIcon } from '@heroicons/react/24/outline';
import middas from "../../public/middas.png";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#f0f1f3]">
      <div className="my-2 h-20 rounded-md overflow-hidden md:h-40">
        <Image
          src={middas}
          alt='Middas logo'
          className="w-full"
        />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 bg-transparent">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block bg-transparent" />
        <button className="hidden h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-[#16b187] md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6 text-[#08745c]" />
          <div className="hidden md:block">Sign Out</div>
        </button>
        
      </div>
    </div>
  );
};