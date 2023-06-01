export default function handler (req, res) {
    try{
        if(req.method === "GET"){
           return res.status(200).json( /* DADOS DO CAMPO */ )
        } 
    } catch(err){
        console.log(err)
    }
    
}

