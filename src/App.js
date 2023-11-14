import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // by default the FormAddFriend should be hiedden
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    // we use call back function, because the new state depends on the current state
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FirendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

//we use button multiple time therefore we create a button component.
// we can not add to <Button/> the property onClick, because it is not native HTML
function Button({ children, onClick, onShowAddFriend }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FirendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((firend) => (
        <Friend firend={firend} key={firend.id} />
      ))}
    </ul>
  );
}
// {Math.abs(firend.balance)}€
// The Math.abs() static method returns the absolute value of a number.
// The value of Balance, which are negative, becomes positive through Math.abs
function Friend({ firend }) {
  return (
    <li>
      <img src={firend.image} alt={firend.name} />
      <h3>{firend.name}</h3>
      {/* {firend.balance < 0 ? (
        <p className="red">
          You owe {firend.name} {Math.abs(firend.balance)}€
        </p>
      ) : firend.balance > 0 ? (
        <p className="green">
          {firend.name} owes you {firend.balance}€
        </p>
      ) : (
        <p>You and your firend are even</p>
      )} */}
      {firend.balance < 0 && (
        <p className="red">
          You owe {firend.name} {Math.abs(firend.balance)}€
        </p>
      )}
      {firend.balance > 0 && (
        <p className="green">
          {firend.name} owes you {firend.balance}€
        </p>
      )}
      {firend.balance === 0 && <p>You and your firend are even</p>}
      <Button>select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯FriendName</label>
      <input type="text" />
      <label>📁Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>🤑 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️Your expense</label>
      <input type="text" />

      <label>👯 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
