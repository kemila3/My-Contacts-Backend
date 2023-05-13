const asyncHandler =  require("express-async-handler")

//description Get all contacts
// route GET/api/contacts
// access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//description Create contacts
// route POST/api/contacts
// access Public
const createContacts = asyncHandler(async (req, res) => {
    console.log("The request body is: " , req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
  res.status(201).json({ message: "Create contacts" });
});

//description GET contacts for id
// route GET/api/contacts
// access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `Get contacts for ${req.params.id}` });
});

//description Update contacts for id
// route PUT /api/contacts
// access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `Update contacts for ${req.params.id}` });
});

//description delete contacts for id
// route DELETE /api/contacts
// access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
