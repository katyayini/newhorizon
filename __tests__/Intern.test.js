const Intern=require('../lib/Intern')

describe("Intern", () => {
    describe("Creates Object", () => {
      
      it("should create Intern object", () => {
       
        const i1 = new Intern('Riya', 21, 'riya@email.com', 'UofT');
        expect(i1.name).toBe('Riya'); 
        expect(i1.id).toEqual(21);
        expect(i1.email).toBe('riya@email.com'); 
        expect(i1.school).toEqual('UofT');
        expect(i1.getSchool()).toEqual('UofT');
        expect(i1.getRole()).toBe('Intern');

      });
    });
});