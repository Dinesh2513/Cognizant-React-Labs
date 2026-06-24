export function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => {
        return (
          <div key={index}>
            <li>
              Mr. {item.name} <span>{item.score}</span>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export function Scorebelow70({ players }) {
  const players70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      {players70.map((item, index) => {
        return (
          <div key={index}>
            <li>
              Mr. {item.name} <span>{item.score}</span>
            </li>
          </div>
        );
      })}
    </div>
  );
}