const utils = require("./utils")
// @ponicode
describe("utils.isObject", () => {
    test("0", () => {
        let callFunction = () => {
            utils.isObject({ constructor: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.isObject({ constructor: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.isObject(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.getRandomColor", () => {
    test("0", () => {
        let callFunction = () => {
            utils.getRandomColor()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.getSize", () => {
    test("0", () => {
        let callFunction = () => {
            utils.getSize()
        }
    
        expect(callFunction).not.toThrow()
    })
})
