import { sayHello } from "./sayHello";

describe("sayHello", () => {
    it("should return a string with the name", () => {
        expect(sayHello("John")).toBe("Hello, John!");
    })

    it("should return a string with the name when called with an empty string", () => {
        expect(sayHello("a")).toBe("Hello, !");
    });
});