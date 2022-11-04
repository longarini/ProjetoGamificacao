const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

module.exports = app => {
  const User = require('../models/user');

  const controller = {};

  controller.createUser = (req, res) => {

    if (!req.body) {
      res.status(400).send({ message: "Necessário o envio dos dados de cadastro." });
      return;
    }

    var adminVar = req.body.admin !== undefined ? req.body.admin : false;
    var ativoVar = req.body.ativo !== undefined ? req.body.ativo : true;

    const user = new User({

      user: req.body.user,
      pwd: req.body.pwd,
      email: req.body.email,
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      admin: adminVar,
      ativo: ativoVar,

    });

    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Não foi possivel criar o usuário."
        });
      });
  };

  controller.updateUser = async (req, res) => {
  }

  controller.updateUserPartial = async (req, res) => {

    await jwtValidate.verifyJWT(req, res);

    if (res.statusCode != 200) {
      return;
    }

    if (!req.body) {
      res.status(400).send({ message: "Necessário o envio dos dados de Atualização." });
      return;
    }
  };

  controller.deleteUser = async (req, res) => {
    await jwtValidate.verifyJWT(req, res);

    if (res.statusCode != 200) {
      return;
    }

    if (!req.body) {
      res.status(400).send({ message: "Necessário o envio dos dados de Atualização." });
      return;
    }
  };

  controller.login = (req, res) => {

    User.findOne({ user: req.body.user }, function (err, user) {
      if (err) throw err;

      if (user != undefined) {
        // test a matching password
        user.comparePassword(req.body.pwd, function (err, isMatch) {
          if (err) throw err;

          if (isMatch) {
            const id = user.id;
            const token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 300 // expires in 5min
            });
            return res.status(200).json({ auth: true, token: token });
          }
          else {
            return res.status(401).send({ message: 'Senha Errada.' });
          }
        });
      }
      else {
        return res.status(401).send({ message: 'Usuário nãom encontrado.' });
      }
    });
  };

  return controller;
}