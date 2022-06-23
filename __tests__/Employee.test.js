const Employee=require('../lib/Employee')

describe("Employee", () => {
    describe("Creates Object", () => {
      
      it("should create Employee object", () => {
       
        const e1 = new Employee('Riya', 21, 'riya@email.com');
        expect(e1.name).toBe('Riya'); 
        expect(e1.id).toEqual(21);
        expect(e1.email).toBe('riya@email.com') 
        expect(e1.getName()).toBe('Riya');
        expect(e1.getId()).toEqual(21);
        expect(e1.getEmail()).toBe('riya@email.com');
        expect(e1.getRole()).toBe('Employee');
      });
    });
});