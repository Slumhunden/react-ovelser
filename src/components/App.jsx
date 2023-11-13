import Header from "./Header";
import Greeting from "./Greeting";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <Header
        name="Hans"
        userName="Hans123"
        mail="hans@hans.dk"
        age="69"
        status="single"
      />
      <Button />
      <Greeting />
    </div>
  );
}
