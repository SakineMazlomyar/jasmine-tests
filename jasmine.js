
describe('jasmine.objectContaining', () => {
    var foo;

    beforeEach(function() {
      foo = {
        a: 1,
        b: 2,
        bar: "baz"
      };
    });

    it('expect propery a in foo object', () => {
        expect(foo).toEqual(jasmine.objectContaining({
            a: 1
        }))

        expect(foo).not.toEqual(jasmine.objectContaining({
            a: 5
        }))
    })
})

describe('jasmine.objectContaining with a spy', () => {
    let foo 

    beforeEach(() => {
        foo = jasmine.createSpy('callback')

        foo({name: "sakine", lastname: "mazlomyar",})
    })

    it('should call the foo spy and check its argumetns', () => {
        expect(foo).toHaveBeenCalledOnceWith(jasmine.objectContaining({ name:"sakine"}) )
    })  
})


describe('jasmine.arrayContaining', () => {
    let foo

    beforeEach(() => {
        foo = [1,2,3,4,5]
    })

    it('should show foo contain 1 and 3', () => {
        expect(foo).toEqual(jasmine.arrayContaining([1,3]))
        expect(foo).not.toEqual(jasmine.arrayContaining([11,33]))
    })

})



describe('jasmine.arrayContaining with a spy', () => {
    let foo

    beforeEach(() => {

        foo = jasmine.createSpy('callback')
        foo([1,2,3,4,5])
    })

    it('should show the spy is called and containing these values', () => {
        expect(foo).toHaveBeenCalledOnceWith(jasmine.arrayContaining([4, 5]))
    })

    it('should show the spy is called and not containing these values', () => {
        expect(foo).not.toHaveBeenCalledOnceWith(jasmine.arrayContaining([40, 50]))
    })

})

describe('jasmine.stringMatching and with a createSpy', () => {
    let foo

    beforeEach(()=>{
        foo = jasmine.createSpy('callback')
        foo("sakine mazlomyar")
    })

    it('should show foo contains sakine', ()=>{
        expect(foo).toHaveBeenCalledOnceWith(jasmine.stringMatching(/sakine/i))
    })
})


describe('jasmine.clock', () => {
    let timerCallBack
    beforeEach(() => {
        timerCallBack = jasmine.createSpy('callback')
        jasmine.clock().install()
    })

    afterEach(()=>{
        jasmine.clock().uninstall()
    })


    it('casue timerCallBack to be call after 3s', () => {
        setTimeout(() => {
            timerCallBack()
        }, 3000);

        expect(timerCallBack).not.toHaveBeenCalled();
        jasmine.clock().tick(4000)
        expect(timerCallBack).toHaveBeenCalled()
    })
})