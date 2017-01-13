// Vendor
import { expect } from 'chai';
import 'mocha';


// Targets
import { idToShortenUrl, shortUrlToID } from '../../helpers/shorten';

describe('Short Url', () => {
    it('should convert the id and shorten url alternatively', () => {
        const MAX_INTEGER = 9007199254740991;
        const ids = [1, 2, 3, 100, 1000, 99999, MAX_INTEGER];
        for (const id of ids) {
            const shorten: string = idToShortenUrl(id);
            const resultID = shortUrlToID(shorten);
            expect(resultID).to.eql(id);
        }
    });
});