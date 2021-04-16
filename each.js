
/* 
xit show the result as pending as well

it without any callback show the resul pending

pending() adding this function inside a spec the result will also show as pending

xdescribe is a function which disables the describe function and the suites inside it The result for these shows as pending
xdescribe('disable spec', () => {
    let foo = 0;
    beforeEach(() => {
        foo +=1
    })

    afterEach(()=> {
        foo = 0
    })

    it('should show foo to be 1', () => {
        expect(foo).toEqual(1)
   
    })

}) */

describe('each for eaches', () => {
    let foo = 0;
    beforeEach(() => {
        foo +=1
    })

    afterEach(()=> {
        foo = 0
    })

    it('should show foo to be 1', () => {
        expect(foo).toEqual(1)
   
    })

    xit('should show a pending spec', () => {
        expect(true).toEqual(true)
    })

    it('should show also pending') // It without a callback will show the result as pending

    it('should show the result as pending', () => {
        expect(true).toEqual(false)
        pending('This is why it is pending')
    })
   
})


