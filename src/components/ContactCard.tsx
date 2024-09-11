import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/contactSlice";
import { Contact } from "../store/contactSlice";

interface ContactCardProps {
  contact: Contact;
  onView: (contact: Contact) => void;
  onEdit: (contact: Contact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onView, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
       {/* Contact Info */ }
      <div>
        <h2 className="text-lg font-semibold">{contact.first_name} {contact.last_name}</h2>
        <p className="mt-2">
          <strong className="w-32">Status:</strong>
          <span
            className={`inline-block px-3 py-1 rounded-full text-white ml-3 ${
              contact.is_active ? 'bg-green-400' : 'bg-gray-400'
            }`}
          >
            {contact.is_active ? 'Active' : 'Inactive'}
          </span>
        </p>
        
      </div>
      {/* Actions */ }
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onView(contact)}
        >
          View
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => onEdit(contact)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
