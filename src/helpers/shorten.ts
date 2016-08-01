// Helper functions that supports the functionalities
// about shorten the urls
// --------------------------------------------------
// id: The id of the actual url in the database

let chars: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let base62 = (character: string) => {
    return chars.indexOf(character);
}

export const idToShortenUrl = (id: number) => {    
    let shortUrl = "";
    while (id > 0) {
        shortUrl = chars.charAt(id % 62) + shortUrl;
        id = Math.floor(id / 62);
    }
    while (shortUrl.length < 6) {
        shortUrl = "0" + shortUrl;
    }
    return shortUrl;
}

export const shortUrlToID = (shortUrl: string) => {
    let id = 0;
    for (let c of shortUrl) {
        id = id * 62 + base62(c);
    }
    return id;
}