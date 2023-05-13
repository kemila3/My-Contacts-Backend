//description Get all contacts
// route GET/api/contacts
// access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//description Create contacts
// route POST/api/contacts
// access Public
const createContacts = (req, res) => {
    console.log("The request body is: " , req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
  res.status(201).json({ message: "Create contacts" });
};

//description GET contacts for id
// route GET/api/contacts
// access Public
const getContact = (req, res) => {
  res.status(202).json({ message: `Get contacts for ${req.params.id}` });
};

//description Update contacts for id
// route PUT /api/contacts
// access Public
const updateContact = (req, res) => {
  res.status(203).json({ message: `Update contacts for ${req.params.id}` });
};

//description delete contacts for id
// route DELETE /api/contacts
// access Public
const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
