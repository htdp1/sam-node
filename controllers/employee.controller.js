//TODO: re-design namespace of debugger
let debug = require("debug")("app:employee:controller");

exports.get = async(req,res,next) =>{
  res.json({
    employee: 100
  })
}