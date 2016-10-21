// Helper functions that supports the functionalities
// about shorten the urls
// --------------------------------------------------

let chars: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let shuffleChars: string = "wjGJRzNH90ua78gbvB6sICXYpeAWc3ZlryhxOE1kTdtSoP4LMDKQUqF5nVifm2";

let base62 = (character: string) => {
    return shuffleChars.indexOf(character);
};

export const idToShortenUrl = (id: number) => {
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

export const shortUrlToID = (shortUrl: string) => {
    let id = 0;
    for (let c of shortUrl) {
        id = id * 62 + base62(c);
    }
    return id;
};
