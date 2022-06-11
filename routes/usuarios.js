const { Router } = require('express');
const { getUsuario,
        postUsuario,
        putUsuario,
        delUsuario } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuario);
router.put('/:id', putUsuario);
router.post('/', postUsuario);
router.delete('/', delUsuario);


module.exports = router;