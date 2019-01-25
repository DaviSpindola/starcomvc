const posters = require("./ep.json");

/**
 * TODO: move this logic into a cloud function
 * @description Created the function
 * @author davispindola
 * @version 1.0
 *
 * @param {String} episodeId
 */
const posterFinder = episodeId => {
  const poster = posters[episodeId.toString()];

  if (poster === undefined || poster === null)
    throw new Error("poster not found");

  return poster;
};

export default posterFinder;
