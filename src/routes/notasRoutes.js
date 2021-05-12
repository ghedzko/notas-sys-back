const{ Router} =require("express");
const router = Router();

//Busco todas las notas
router.get('/api/notas', (req,res)=>{
    res.send("NOTAS GET");
});
//Busco Nota por Id
router.get('/api/notas/:notaId', (req,res)=>{
    res.send("NOTAS GET ID");
});

router.post('/api/notas', (req,res)=>{
    res.send("NOTAS POST");
});
router.put('/api/notas/:notaId', (req,res)=>{
    res.send("NOTAS PUT");
});
router.delete('/api/notas/:notaId', (req,res)=>{
    res.send("NOTAS DELETE");
});

module.exports = router;