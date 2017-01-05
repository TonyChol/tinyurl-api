// Helper functions that supports the functionalities
// about shorten the urls
// --------------------------------------------------

let shuffleChars: string = "wjGJRzNH90ua78gbvB6sICXYpeAWc3ZlryhxOE1kTdtSoP4LMDKQUqF5nVifm2";

/**
 * Generate base 62 encoding format
 * 
 * @param {string} character
 * @returns {Number} the index of the char
 */
let base62 = (character: string) => {
    return shuffleChars.indexOf(character);
};

/**
 * Converts the original url in the database
 * to the shorten one, using incremental id
 * in the database.
 * 
 * @param {number} id
 * @returns
 */
const idToShortenUrl = (id: number) => {
    let shortUrl = "";
    while (id > 0) {
        shortUrl = shuffleChars.charAt(id % 62) + shortUrl;
        id = Math.floor(id / 62);
    }
    while (shortUrl.length < 6) {
        shortUrl = shuffleChars[0] + shortUrl;
    }
    return shortUrl;
};

/**
 * Converts the shorten url into the incremental id.
 * 
 * @param {string} shortUrl
 * @returns
 */
const shortUrlToID = (shortUrl: string) => {
    let id = 0;
    for (let c of shortUrl) {
        id = id * 62 + base62(c);
    }
    return id;
};

export {
    idToShortenUrl,
    shortUrlToID
}
