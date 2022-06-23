const Engineer=require('../lib/Engineer')

describe("Engineer", () => {
    describe("Creates Object", () => {
      
      it("should create Engineer object", () => {
       
        const e1 = new Engineer('Riya', 21, 'riya@email.com', 'riyagithub44');
        expect(e1.name).toBe('Riya'); 
        expect(e1.id).toEqual(21);
        expect(e1.email).toBe('riya@email.com'); 
        expect(e1.github).toBe('riyagithub44');
        expect(e1.getGithub()).toEqual('riyagithub44');
        expect(e1.getRole()).toBe('Engineer');

      });
    });
});