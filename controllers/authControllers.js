
const RegisterUsuario= (req,res)=>{
  const {email,password,username}=req.body
  console.log(req.body)
res.json({ok:true,email,username,password})}

const loginUsuario= (req,res)=>{
res.send("Auth controllers")}

module.exports={loginUsuario,RegisterUsuario}