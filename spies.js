/* 
spyOn ==>  where there is an object with its function
createSpy ==> creates a spy function 
createSpyObj ==> creates a manuel spyObject



*/

describe('A Spy', ()=> {
    let foo
    let bar

    beforeEach(() => {
        foo = {
            setBar: (value) => bar = value,
            getBar: () => bar 
        
        }

        spyOn(foo, 'setBar')// SPIES
        foo.setBar('RM')
       

    })

    it('tacks the  spy is called once ', () => {
        expect(foo.setBar).toHaveBeenCalled()
    })
    
    it('tracks the spy is called once', () => {
        expect(foo.setBar).toHaveBeenCalledTimes(1)
        
    })
    
    it('tracks the spy is called with RM argument', () => {
        expect(foo.setBar).toHaveBeenCalledWith('RM')
        
    })

    it('tacks if setBar has been called at all', () => {
        foo.setBar()
        expect(foo.setBar.calls.any()).toEqual(true)
    })
    

})



describe('A createSpy', () => {
    let whatAmI

    beforeEach(() => {
        whatAmI = jasmine.createSpy('whatami')
        whatAmI("I", "am", "a", "spy");
    })

    it('shoud check whatAmI is called once', () => {
        expect(whatAmI).toHaveBeenCalled()
    })

    it('should call whatAmI once', () => {
        expect(whatAmI).toHaveBeenCalledTimes(1)
    })

    it('should check what am has been called with I am a spy arguments', () => {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy")
    })

})

describe('A manuel createSpyObj ', () => {
    let whatAmI

    beforeEach(() => {
        whatAmI =   jasmine.createSpyObj('HeroService', ['getHeroes'])
        whatAmI.getHeroes()
    })

    it('should show getHeroes is defined', () => {
        expect(whatAmI).toBeDefined()
    })

    it('should show getHeroes has been called once', () => {

        expect(whatAmI.getHeroes).toHaveBeenCalled()
    })
})




