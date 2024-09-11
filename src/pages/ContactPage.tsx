import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addContact, editContact } from "../store/contactSlice";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";
import { v4 as uuidv4 } from "uuid";

const ContactPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState({ first_name: "", last_name: "", is_active: true });

  const handleFormSubmit = () => {
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
    setIsEdit(false)
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
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onView={handleView}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div 
          className="flex items-center justify-center h-48 bg-gray-100 border border-gray-300 rounded-lg text-gray-600">
            <p className="text-center">
              No contacts found. Click "Add Contact" to get started.
            </p>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); setSelectedContact(null); setForm({ first_name: "", last_name: "", is_active: true }) }}>
        {(selectedContact && !isEdit) ? (
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
                selectedContact.is_active ? 'bg-green-400' : 'bg-gray-400'
              }`}
            >
              {selectedContact.is_active ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
        
        ) : (
          <div>
            <h2 className="text-xl text-gray-800 mb-4">{selectedContact ? "Edit" : "Add"} Contact</h2>
            <input
              className="border p-2 mb-2 w-full bg-gray-100 text-gray-800"
              placeholder="First Name"
              value={form.first_name}
              onChange={e => setForm({ ...form, first_name: e.target.value })}
            />
            <input
              className="border p-2 mb-2 w-full bg-gray-100 text-gray-800"
              placeholder="Email"
              value={form.last_name}
              onChange={e => setForm({ ...form, last_name: e.target.value })}
            />
             <div className="flex items-center mb-4">
              <input
                id="active-checkbox"
                className="border p-2 mr-2 bg-gray-100 text-gray-800"
                type="checkbox"
                checked={form.is_active}
                onChange={e => setForm({ ...form, is_active: e.target.checked })}
              />
              <label htmlFor="active-checkbox" className="text-gray-800">
                Active
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
