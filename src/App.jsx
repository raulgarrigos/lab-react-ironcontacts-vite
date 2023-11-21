import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const [contactsDisplay, setContactsDisplay] = useState(
    allContacts.slice(0, 5)
  );

  console.log(allContacts);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {contactsDisplay.map((eachContact, index) => {
        return (
          <table key={index}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
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
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
