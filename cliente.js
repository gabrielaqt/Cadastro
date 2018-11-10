
var express = require('express');
var router = express.Router();


router.post('/insere', function (req, res, next) {
    var input = req.body;
    req.getConnection(function (err, connection) {
        var query = connection.query("INSERT INTO Cliente SET ? ", input, function (err, rows) {
            if (err)
                res.json({ status: 'ERRO', data: + err });
            else
                res.json({ status: 'OK', data: 'Incluído com sucesso!' });
        });
    });
});
module.exports = router;