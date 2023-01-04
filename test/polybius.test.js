// Write your tests here!
const { expect }= require("chai");
const { polybius }= require("../src/polybius")

describe("polybius", () => {
    it("encodes i and j to 42", () => {
        const expected = "42423335";
        const actual = polybius("jinx");
        expect(actual).to.eql(expected);
    });

    it("decodes 42 to (i/j)", () => {
        const expected = "(i/j)(i/j)nx";
        const actual = polybius("42423335", encode = false);
        expect(actual).to.eql(expected);
    });

    /*it("correctly encodes a given phrase", () => {
        const expected = "222451514442332234 45111313";
        const actual = polybius("greetings yall");
        expect(actual).to.eql(expected);
    });
    it("correctly decodes a given phrase", () => {
        const expected = "baggage";
        const actual = polybius("21112222112251", encode = false);
        expect(actual).to.eql(expected);
    });*/

    it("ignores capital letters", () => {
        const expected = "423341515141";
        const actual = polybius("InDeed");
        expect(actual).to.eql(expected);
    });

    it("maintains spaces after encoding", () => {
        const encoded = "325145 45111313";
        const actualEncoded = polybius("hey yall");
        expect(encoded).to.eql(actualEncoded);
    });

    it("maintains spaces after decoding", () => {
        const decoded = "whats up yall";
        const actualDecoded = polybius("2532114434 5453 45111313", encode = false);
        expect(decoded).to.equal(actualDecoded);
    })  
})