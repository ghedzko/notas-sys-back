
import{ Router } from "express";
const router = Router();
router.get('/', (req,res)=>{
    res.json({
        message: "bienvenidos al sistema de notas",
        name: "Notas-Sys",
        version: "1.0",
        description: "App para centros educativos",
        author: "Palmiciano - Hedzko"
    });
});
export default router;