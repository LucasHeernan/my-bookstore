import { getBookById } from "@/app/utils/actions";
import BookData from "@/app/components/BookData";

export default async function SingleBook({ params }) {

  const book = await getBookById(params.id);

  return (
    <>
      <div>Página para editar libro</div>
      <br />
      <BookData id={params.id} book={book} />
    </>
  );
};
