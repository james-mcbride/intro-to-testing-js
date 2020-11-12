// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when Jane is called", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when ALex is called", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when Pat is called", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when sayHello() is called", function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when sayHello(true) is called", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when sayHello(false) is called", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when sayHello(null) is called", function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when sayHello(true) is called", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return boolean when isFive() is called", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when isFive(5) is called", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return true when isFive('5') is called", function(){
        expect(isFive("5")).toBe(true);
    });
});
describe("isEven", function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return boolean when isEven() is called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when isEven(2) is called", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return true when isEven(-4) is called", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when isEven(3) is called", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return false when isEven('banana') is called", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when isEven('8') is called", function(){
        expect(isEven('8')).toBe(true);
    });
    it("should return false when isEven(Infinity) is called", function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when isEven(true) is called", function(){
        expect(isEven(true)).toBe(false);
    });
    it("should return false when isEven(false) is called", function(){
        expect(isEven(false)).toBe(false);
    });
    it("should return false when isEven() is called", function(){
        expect(isEven()).toBe(false);
    });
});

describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return boolean when isVowel() is called", function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when isVowel('a') is called", function(){
        expect(isVowel('a')).toBe(true);
    });
    it("should return true when isVowel('A') is called", function(){
        expect(isVowel('A')).toBe(true);
    });
    it("should return false when isVowel('y') is called", function(){
        expect(isVowel('y')).toBe(false);
    });
    it("should return false when isVowel(4) is called", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when isVowel(true) is called", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when isVowel(false) is called", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when isVowel('banana') is called", function(){
        expect(isVowel('banana')).toBe(false);
    });
    it("should return false when isVowel() is called", function(){
        expect(isVowel()).toBe(false);
    });
});

describe("add", function() {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("should return NaN when two numbers aren't called", function(){
        expect(add("string", 1)).toBe("NaN");
    });
    it("should return 5 when add(2,3) is called", function(){
        expect(add(2,3)).toBe(5);
    });
    it("should return -12 when add(-3,-9) is called", function(){
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return 11 when add('5',6) is called", function(){
        expect(add("5",6)).toBe(11);
    });
    it("should return 6 when add('-4','10') is called", function(){
        expect(add('-4','10')).toBe(6);
    });
    it("should return NaN when add('banana', 'split') is called", function(){
        expect(add('banana','split')).toBe('NaN');
    });
    it("should return NaN when add(2,'apples') is called", function(){
        expect(add(2,'apples')).toBe("NaN");
    });
    it("should return NaN when add() is called", function(){
        expect(add()).toBe("NaN");
    });
});