const Contact = require("../models/Contact");

class contactController {
  static create(req, res) {
    // data
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true,
    };

    Contact.create(newData)
      .then((response) => {
        res.status(200).json({
          message: "new contact has been added",
          response,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  static findAll(req, res) {
    Contact.find()
      .then((response) => {
        res.status(200).json({
          message: "Data has been fetched successfully",
          data: response,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  static findById(req, res) {
    const contactid = req.params.id;

    Contact.findById(contactid)
      .then((response) => {
        res.status(200).json({
          message: "Data has been fetched successfully",
          data: response,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  static update(req, res) {
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true,
    };

    const contactid = req.params.id;
    Contact.findByIdAndUpdate(contactid, newData)
      .then((response) => {
        res.status(200).json({
          message: `data with id:${contactid} successfully updated`,
          data: response,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  static delete(req, res) {
    const contactid = req.params.id;

    Contact.findByIdAndDelete(contactid)
      .then((response) => {
        res.status(200).json({
          message: `Data with id:${contactid} has been deleted`,
          data: response,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }
}

module.exports = contactController;
