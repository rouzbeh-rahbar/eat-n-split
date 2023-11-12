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
  return (
    <div className="app">
      <div className="sidebar">
        <FirendsList />
      </div>
    </div>
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
      <button className="button">select</button>
    </li>
  );
}
