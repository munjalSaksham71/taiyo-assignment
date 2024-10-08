import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addContact, editContact } from "../store/contactSlice";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";
import { v4 as uuidv4 } from "uuid";

const form_initial_state = {
  first_name: "",
  last_name: "",
  is_active: true, //Default true
};

const ContactPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [form, setForm] = useState(form_initial_state);
  const [errors, setErrors] = useState({ first_name: "", last_name: "" });

  const handleFormSubmit = () => {
    // Validations
    const newErrors = {
      first_name: form.first_name ? "" : "First Name is required.",
      last_name: form.last_name ? "" : "Last Name is required.",
    };
    setErrors(newErrors);
    // If any error throws error and not let it save
    if (!form.first_name || !form.last_name) return;

    if (selectedContact) {
      dispatch(editContact({ ...selectedContact, ...form }));
    } else {
      dispatch(addContact({ id: uuidv4(), ...form }));
    }
    setIsModalOpen(false);
    setForm({ first_name: "", last_name: "", is_active: true });
  };

  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    setForm(contact);
    setIsModalOpen(true);
    setIsEdit(true);
  };

  const handleView = (contact: any) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
    setIsEdit(false);
  };

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
    setForm(form_initial_state);
    setIsEdit(false);
    setErrors({ first_name: "", last_name: "" });
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Contacts</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setSelectedContact(null);
          setIsModalOpen(true);
        }}
      >
        Add Contact
      </button>
      <div className="grid grid-cols-1 gap-4">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onView={handleView}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-48 bg-gray-100 border border-gray-300 rounded-lg text-gray-600">
            <p className="text-center">
              No contacts found. Click "Add Contact" to get started.
            </p>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        {selectedContact && !isEdit ? (
          <div className="space-y-4">
            <h2 className="text-xl text-gray-800 mb-4">View Contact</h2>
            <div className="flex items-center space-x-2 text-gray-700">
              <strong className="w-32">First Name:</strong>
              <span>{selectedContact.first_name}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <strong className="w-32">Last Name:</strong>
              <span>{selectedContact.last_name}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <strong className="w-32">Status:</strong>
              <span
                className={`inline-block px-3 py-1 rounded-full text-white ${
                  selectedContact.is_active ? "bg-green-400" : "bg-gray-400"
                }`}
              >
                {selectedContact.is_active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl text-gray-800 mb-4">
              {selectedContact ? "Edit" : "Add"} Contact
            </h2>
            <input
              className="border p-2 mb-2 w-full bg-gray-100 text-gray-800"
              placeholder="First name"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mb-2">{errors.first_name}</p>
            )}
            <input
              className="border p-2 mb-2 w-full bg-gray-100 text-gray-800"
              placeholder="Last name"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mb-2">{errors.last_name}</p>
            )}
            <div className="flex items-center mb-4">
              <label className="text-gray-800 mr-4">Status:</label>
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  className="mr-1"
                  checked={form.is_active === true}
                  onChange={() => setForm({ ...form, is_active: true })}
                />
                <span className="text-gray-800">Active</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  className="mr-1"
                  checked={form.is_active === false}
                  onChange={() => setForm({ ...form, is_active: false })}
                />
                <span className="text-gray-800">Inactive</span>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-5"
                onClick={handleFormSubmit}
              >
                {selectedContact ? "Save Changes" : "Add Contact"}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContactPage;
