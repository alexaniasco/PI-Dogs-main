const e = require("express");
const { Router } = require("express");
const { Raza, Temperamentos } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const total = [];
router.get("/dogs", async (req, res) => {
  if (req.query.name)
    try {
      fetch("https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}")
        .then((r) => r.json())
        .then((r) => r.filter((e) => e.name == req.query.name))
        .then((r) =>
          r.map(function (e) {
            const obj = {};
            obj.id = e.id;
            obj.name = e.name;
            obj.height = e.height.metric;
            obj.image = e.image.url;

            return obj;
          })
        )
        .then((r) => res.json({ r }));
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  else
    try {
      const dogsDb = await Raza.findAll();
      fetch("https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}")
        .then((r) => r.json())
        .then((r) =>
          r.map(function (e) {
            let slicer = e.temperament;
            const peso = e.weight.metric?.split(' - ');
            const altura = e.height.metric?.split(' - ');
            const obj = {};
            obj.id = e.id;
            obj.name = e.name;
            obj.height = Math.floor(altura[0]) ;
            obj.maxheight = Math.floor(altura[1]) ;
            obj.weight = Math.floor(peso[0]) ;
            obj.maxweight = Math.floor(peso[1]) ;
            obj.image = e.image.url;
            obj.temperament = slicer?.split(', ');
            obj.life_span = e.life_span;
            
            return obj;
          })
        )
        .then((r)=> total.push(r.concat(dogsDb)))
        .finally( ()=> res.json(total[0]))
        // .then((r) => res.json({ r ,dogsDb }));
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
});

router.get("/dogs/:id", async(req, res) => {
  try {
    const dogsDb = await Raza.findAll();
    fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((r) => r.filter((e) => e.id == req.params.id))
      .then((r) =>
      r.map(function (e) {
        let slicer = e.temperament;
        const peso = e.weight.metric?.split(' - ');
        const altura = e.height.metric?.split(' - ');
        const id = e.id
        const stringid = id.toString()
        const obj = {};
        obj.id = stringid;
        obj.name = e.name;
        obj.height = e.height ;
        obj.maxheight = e.maxheight ;
        obj.weight = e.weight ;
        obj.maxweight = e.maxheight ;
        obj.image = e.image;
        obj.temperament = e.temperament;
        obj.life_span = e.life_span;
        
        return obj;
      })
      )
      .then( (r)=> res.json(r))
        
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/dogs", async (req, res) => {
  try {
    const { name,  height, maxheight ,weight,maxweight,life_span , image } = req.body;
    const newDog = await Raza.create({
      name,

      height,
      maxheight,
      weight,
      maxweight,
      life_span,
      image

    });
    res.json(newDog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const eliminaDuplicados = (arr) => {
  const unicos = [];
  for (var i = 0; i < arr.length; i++) {
    const elemento = arr[i];

    if (!unicos.includes(arr[i])) {
      unicos.push(elemento);
    }
  }
  
  return unicos;
};

router.get("/temperaments", async (req, res) => {
  const dogsDb = await Temperamentos.findAll();
 
   const fet = await fetch("https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}")
   .then(r => r.json())
   
 
  const filtrado = fet.map(t => t.temperament)
  const temper = filtrado.toString().split(',');
  const temparr = new Set(temper)
  let result = [...temparr]
  result.filter(t => t !== "").forEach(el => {
    let i = el.trim()
    Temperamentos.findOrCreate({
      where : {name :i}
    })
  })
 
  const alltemp = await Temperamentos.findAll();
  res.send(alltemp)
 
 
 
  ;
});

module.exports = router;
