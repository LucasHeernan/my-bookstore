import ListBook from "./ListBook";
import { getBooks } from "../utils/actions";
import { Suspense } from "react";

export default async function Table() {

  const books = await getBooks();

  return (
    <section className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Autor</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Género</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <Suspense fallback={<div>CARGANDO SUSPENSE ...</div>}>
            {
              books.map(book => (
                <ListBook
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  date={book.date}
                  genre={book.genre}
                  description={book.description}
                  favorite={book.favorite}
                />
              ))
            }
          </Suspense>

        </tbody>
      </table>
    </section>
  );
};
