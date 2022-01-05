import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts } = props;
  console.log(contacts);

  // define a function to map contact list and create a card component
  const renderContactList = contacts.map((contact,i) => {
    return (
      <ContactCard contact={contact} key={contact.id}/>
    );
  });
  return (
    <div className="ui celled list">
      <h2>Contact list </h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
