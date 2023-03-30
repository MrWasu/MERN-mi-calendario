const { response } = require('express')
const { validationResult } = require('express-validator')

/* router.post('/register', (req, res) => {
    
    res.json( {
     ok: true,
     msg: 'registro'
    })
 })   */


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    /* if (name.length < 5)
        return res.status(400).json({ // apuntes obligatorio usar return para que no se envien los dos
            ok: false,
            msg: 'nombre incorrecto'
        }) */

    res.json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password,
    })

}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;

   /*  const errors = validationResult ( req ) repetido, por eso se crea un custom middleware
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() 
        })
    }
 */
    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'revalidad token'
    })
}



module.exports = { // apunte exports en plural
    crearUsuario,
    loginUsuario,
    revalidarToken,
}