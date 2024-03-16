import { PlusIcon, PencilSquareIcon, TrashIcon, StarIcon } from '@heroicons/react/24/outline';

export default function ListBook({ id, title, author, date, genre, favorite }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{title}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{author}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{date}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{genre}</td>
      <td className="whitespace-nowrap px-2 py-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all bg-gray-50 hover:bg-sky-100">
          <PlusIcon className="w-6 text-[#08745c]" />
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all bg-gray-50 hover:bg-sky-100">
          <PencilSquareIcon className="w-6 text-[#08745c]" />
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all bg-gray-50 hover:bg-sky-100">
          <TrashIcon className="w-6 text-[#08745c] hover:fill-[#6dceb4]" />
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all bg-gray-50 hover:bg-sky-100">
          <StarIcon className={`w-6 ${favorite ? "fill-yellow-400 text-yellow-500" : "text-[#08745c]" }`} />
        </div>
      </td>
    </tr>
  );
};