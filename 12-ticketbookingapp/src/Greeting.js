function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <h2>You can now book tickets.</h2>
      <ul>
        <li>Flight: Chennai to Hyderabad</li>
        <li>Time: 10:30 AM</li>
        <li>Price: Rs. 4500</li>
      </ul>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight: Chennai to Hyderabad</li>
        <li>Time: 10:30 AM</li>
        <li>Price: Rs. 4500</li>
      </ul>
      <p>Login to book tickets.</p>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

export default Greeting;