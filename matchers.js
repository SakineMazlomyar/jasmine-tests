
// custom matchers in order to create your own matchers
/* 
not ==> make a negative result

toBe ==>  expect the actual value to be === to the expected value.

toBeCloseTo ==> expect the actual value to be within a specified precision of the expected value.

toBeCloseTo(value, number of decimals?)

toBeDefined ==> expect the value to not be undefined  !! toBeUndefined()

toBe ==> expect the value to be false ===      toBe

toBeFalse ==> expect the value to be false value  ===  toBeTrue

toBeFalsy ==> expect the value not to be true    toBeFalsy

toBeGreaterThan  A > B    !! toBeLessThan A < B

toBeGreaterThanOrEqual A >= B  !! toBeLessThanOrEqual

toBeInstanceOf ==> the actual to be an instance of the expected class

toBeNaN() ==> expect the value to be not a number  NaN to be NaN

toBeNegativeInfinity -Infinity

toBeNull == expect a null value

toBePositiveInfinity ==> Infinity

toContain ==> it should contain part of a string or an array

toEqual ==> deep equel comparision in two objects ex { name: "sakine" } with { name: "sakine"}

toHaveBeenCalled should have been call once

toHaveBeenCalledBefore spy2 should be called before spy2

toHaveBeenCalledWith should have been called once with this specefic argument

toHaveBeenCalledTimes amount of times this function should be called

toHaveClass("foo") checking for the class name

toMatch for matching a regular expression

toThrow something 
toThrowError
toThrowMatching
*/

/* 
var customMathcers = {
    isFirstIndex: ( origin ) =>{
        return {
            compare: ( ac, exp) => {
                if()
            }
        }
    }
}
 */


// Describe function 
describe(" A suit", () => {
    let a // VariableA in the describe function is availble globally in the entire describe function 
    let b 
    let heroes = [ {name:"M", id: 1}, {name: 'sakine', id: 2}]
    const heroService = { 
        getHeroes: () => heroes, 
        updateHero: ( hero ) => {
            return hero
        }
    }
    const authoService = {  getAuth: () => true }
  

    // It the global function
    it('should be a with true value', () => {
        a = true
        // Expect function takes a value and later is chained later with a matcher function to be true or false
        expect(a).toBe(true) // Boolean comparison which takes the actuall value and expected value
        // Expect the actual value to be === to the expected value.
    })
    
    it('should be b with false value', () => {
        b = false
        expect(b).not.toBe(true) // we can chain a matcher function with not.
    })
    
    it('should expect nothing', () => {
        
        expect().nothing() // nothing matcher
    })
    
    it('should be close to 12.5', () => {
        let number = 12.555
        expect(number).toBeCloseTo(12.555, 3)
    })  
    
    it('should name to be defined', () => {
        let name = 'sakine'
        expect(name).toBeDefined()
    })

    it('should expect a undfined value', () => {
        expect(undefined).toBeUndefined()
    })

    it('should expect the isAlive to be false', () => {
        let isAlive = false
        expect(isAlive).toBe(false)
    })


    it('should expect a falsy value', () => {
        let player1 = 1
        let player2 = '1'
        let isSamePlayer = player1 === player2
    
        expect(isSamePlayer).toBeFalse()
    })

    it('should expect a falthy value', () => {
        let bera = []
        let qoute = ""
        // [] == true
        // "" == false
        // it checks the variable whether it is true or false

        expect(qoute).toBeFalsy()
    })

    it('should expect result be greather than 20', () => {
        let pointsA = 12
        let pointsB = 10
        let result = pointsA + pointsB
        expect(result).toBeGreaterThan(20)
    })


    it('should expect result be greather than or equel 20', () => {
        let result =  50
        let expectation = 20

        expect(result).toBeGreaterThanOrEqual(expectation)
    })


    it('should expect the actual to be an instance of the expected class', () => {
        class Human {}

        class Animal {}
        const me = new Human()
        const sushi = new Animal()
        expect(me).toBeInstanceOf(Human)
        expect('foo').toBeInstanceOf(String);
        expect(3).toBeInstanceOf(Number);
        expect(new Error()).toBeInstanceOf(Error);
    })

    it('should expect the value to be not a number', () => {
        let pointA = 1
        let pointB = "sakine"
        console.log(pointA/pointB)
        // Check a NaN value to be NaN
        expect(pointA/pointB).toBeNaN()

    })

    it('should expect a negative infinity value', () => {
        // Slutas inte
        console.log(-1/0) // ............-Infinity
        
        expect(-1/0).toBeNegativeInfinity()
    })

    it('should expect a positive infinity value', () => {
        console.log(1/0) // ............Infinity
        expect(1/0).toBePositiveInfinity()
    })

    it('should expect a null value', () => {
        expect(null).toBeNull()
    })
 
    it('should containe only part of array or a string', () => {
        let languages = ['javascript', 'php', 'python']
        let fullname =  "sakine mazlomyar"
        expect(languages).toContain('javascript')
        expect(fullname).toContain("sakine")

    })

    it('should make a deep comparision', () => {
        let object1 = {
            name: "sakine"
        }

        let object2 = {
            name: "sakine"
        }
        expect(object1).toEqual(object2)
    })

    it('should expect the function to be called', () => {
        let spy = spyOn(heroService, 'getHeroes').and.returnValue(heroes)
        heroService.getHeroes()
        expect(spy).toHaveBeenCalled()
    })

    it('should have been called before spy2', () => {

        let spy2 = spyOn(authoService, 'getAuth').and.returnValue(true)
        authoService.getAuth()

        let spy1 = spyOn(heroService, 'getHeroes').and.returnValue(heroes)
        heroService.getHeroes()
        expect(spy2).toHaveBeenCalledBefore(spy1)
    })

    it('should have been called and with this arguments', () => {
        let spy = spyOn(heroService, 'updateHero').withArgs({name: "Sahar", id: 2}).and.returnValue({name: "Sahar", id: 2})
        heroService.updateHero({name: "Sahar", id: 2})

        expect(spy).toHaveBeenCalledWith({name: "Sahar", id: 2})
    })


    it('should have call getHeros 4 times', () => {
        let spy = spyOn(heroService, 'getHeroes').and.returnValue(heroes)
        heroService.getHeroes()
        heroService.getHeroes()
        heroService.getHeroes()
        heroService.getHeroes()

        expect(spy).toHaveBeenCalledTimes(4)
    })


   /*  it('should have foo class', () => {
        // When this code is runned in the browser
        let element = document.createElement('div')
        element.className = "foo"

        expect(element).toHaveClass("foo")


    }) */


    it('should have a specefic size/length in this case 4', () => {
        let names = [1, 2, 3, 4]
        let animal = { name: "sakine", age: 25}
        expect(animal).toHaveSize(2)
        expect(names).toHaveSize(4)
    })


    it('should match this string "sakine mazlomyar"', () => {

        expect("sakine mazlomyar").toMatch(/Sakine/i)
    })


    it('should throw an error', () => {
        expect(()=>{
            try{
                if( name  === 1) {
                    return true
                }
            } catch(error) {
                
                throw new Error('this should be a string')
            }
        }).toThrowError('this should be a string')
    })


    
})