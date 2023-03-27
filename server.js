const express = require ('express');
const app = express();
let PORT = procces.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view  engine', 'ejs');

app.get('/student', function (req, res) {
    let t=req.params.id;
    res.render('student');
})

//app.post('/addStudent', function (req, res) {
//    res.post(`Nombre: ${req.body.nombre}
//                Apellido: ${req.body.apellido}
//                NSS: ${req.body.nss}
//                Tipo de Sangre: ${req.body.tipoSangre}`);
//});

app.post('/addStudent', function (req, res) {
    res.render({nombre: req.body.nombre,
                edad: req.body.edad,
                nss: req.body.nss,
                tipoSangre: req.body.tipoSangre});
});

app.listen(PORT);