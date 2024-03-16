import Table from "./components/Table";

export default async function Home() {

  return (
    <section className="flex flex-col items-center justify-start">
      <h2 className="flex text-2xl mb-5">Lista de libros</h2>
      <Table />
    </section>
  );
};
