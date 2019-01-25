export const HOME = "/";
export const MOVIES = "/films"; // exact = true
export const MOVIE = "/films/:id"; // exact = false

/**
 * !IMPORTANT
 * Quando for só /films será retornado um componente com todos os filmes, caso
 * seja selecionado um filme especifico, vai renderizar o componente de filmes só que
 * restringindo no volume referente o :id na URl.
 *
 * / -> landing page :: links<[]>
 * /films -> movies :: all movies
 *  --/carousel, banner, componente de searchText, content, item
 * /films/1 -> movie :: one movie
 * --/banner, content, indications, item
 */
