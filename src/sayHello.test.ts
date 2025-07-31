import { sayHello } from "./sayHello";

describe("sayHello", () => {
    it("should return a string with the name", () => {
        expect(sayHello("John")).toBe("Hello, John!");
    })
});