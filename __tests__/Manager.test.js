const Manager=require('../lib/Manager')

describe("Manager", () => {
    describe("Creates Object", () => {
      
      it("should create Manager object", () => {
       
        const m1 = new Manager('Riya', 21, 'riya@email.com', 301);
        expect(m1.name).toBe('Riya'); 
        expect(m1.id).toEqual(21);
        expect(m1.email).toBe('riya@email.com'); 
        expect(m1.officeNumber).toEqual(301);
        expect(m1.getRole()).toBe('Manager');

      });
    });
});