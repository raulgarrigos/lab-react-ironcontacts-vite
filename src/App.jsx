import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

const firstFiveContacts = allContacts.splice(0, 5);

function App() {
  // Creo el estado
  const [contactsDisplay, setContactsDisplay] = useState(firstFiveContacts);

  // Handle para añadir contactos
  const handleAddContact = () => {
    console.log("Probando añadir contacto");

    // Selecciono al azar un elemento del array
    const randomContact =
      allContacts[Math.floor(Math.random() * (allContacts.length - 5) + 5)];

    // Lo elimino del array del JSON
    const contactToAdd = allContacts.shift(randomContact);

    // Lo añado al array que se visualiza
    const clone = JSON.parse(JSON.stringify(contactsDisplay));
    clone.push(contactToAdd);
    setContactsDisplay(clone);
  };

  //Handle para ordenar por nombre
  const handleSortName = () => {
    const clone = JSON.parse(JSON.stringify(contactsDisplay));

    clone.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    setContactsDisplay(clone);
  };

  //Handle para ordenar por popularidad
  const handleSortPopularity = () => {
    const clone = JSON.parse(JSON.stringify(contactsDisplay));

    clone.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });

    setContactsDisplay(clone);
  };

  // Handle para eliminar
  const handleDeleteContact = (indexToDelete) => {
    const clone = JSON.parse(JSON.stringify(contactsDisplay));
    clone.splice(indexToDelete, 1);

    setContactsDisplay(clone);
  };

  console.log(allContacts);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddContact}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by name</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      {contactsDisplay.map((eachContact, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <img
                    src={eachContact.pictureUrl}
                    alt={eachContact.name}
                    width={75}
                  />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
                <td>{eachContact.wonOscar === true && <p>🏆</p>}</td>
                <td>{eachContact.wonEmmy === true && <p>🌟</p>}</td>
                <td>
                  <button onClick={() => handleDeleteContact(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
