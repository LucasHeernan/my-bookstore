import { PlusIcon, PencilIcon, TrashIcon, StarIcon } from '@heroicons/react/24/outline';

export default function ListBook({ id, title, author, date, genre }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{title}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{author}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{date}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{genre}</td>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Ver más
        </a>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Modificar
        </a>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Eliminar
        </a>
      </td>
      <td className="whitespace-nowrap px-2 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Favorito
        </a>
      </td>
    </tr>
  );
};