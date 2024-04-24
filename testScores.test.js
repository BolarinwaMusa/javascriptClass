let scores = require("./score.js")

test("test for score",()=>{
      let first =[35,60,70,77,80,90,88]
      let result = scores(first)
      expect(result).toEqual([70,77,80,90,88])
})