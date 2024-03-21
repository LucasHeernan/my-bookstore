import { getBookById } from "@/app/utils/actions";

export default async function SingleBook({ params }) {

  const book = await getBookById(params.id);

  return (
    <>
      <div>Página para ver más del libro</div>
      <br />
      <h2>{book.title}</h2>
      <br />
      <span>{book.author}</span>
      <br />
      <span>{book.date}</span>
      <br />
      <span>{book.genre}</span>
      <br />
      <span>{book.description}</span>
    </>
  );
};
