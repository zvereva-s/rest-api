const express = require("express");
const contacts = require("../../models/contacts");
const joi = require("joi");

const router = express.Router();
const template = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string().required(),
});
router.get("/", async (_, res) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);

    if (!result) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;

      /*
      return res.status(404).json({
        message: "Not found",
      });
      */
    }
    res.json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
    /*
    res.status(500).json({
      message: "Server error",
    });
    */
  }
});

router.post("/", async (req, res) => {
  try {
    const { error } = template.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "missing required name field" });
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { error } = template.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "missing fields" });
    }
    const result = await contacts.updateContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

module.exports = router;
