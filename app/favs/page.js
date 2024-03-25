import Favorites from "../components/Favorites";
import FavoritesEmpty from "../components/FavoritesEmpty";
import { getFavorites } from "../utils/actions";

export default async function Favs() {

  const favs = await getFavorites();

  return (
    <>
      <h2 className="text-xl">Lista de libros Favoritos</h2>
      { favs.length ? <Favorites /> : <FavoritesEmpty /> }
    </>
  );
};