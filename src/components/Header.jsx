

export default function Header({name, userName, mail, age, status}) {
    return (
      <header>
        <ul style={{listStyleType: "none", marginLeft: "0px"}}>
        <li>Hej {name}!</li>
        <li>Dit username er: {userName}</li>
        <li>Mail: {mail}</li>
        <li>Alder: {age}</li>
        <li>Status: {status}</li>
        </ul>
      </header>
    );
    }

