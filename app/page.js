import Table from "./components/Table";

export default async function Home() {

  return (
    <main className="flex flex-col items-center justify-start bg-slate-400">
      <h2 className="text-xl">Lista de libros</h2>
      <Table />
    </main>
  );
};
