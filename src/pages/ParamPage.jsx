import { useParams } from "react-router-dom";

const facts = [
  { factId: 1, fact: "He Is Targareyn"},
  { factId: 2, fact: "He Died But Came Back To Life"},
  { factId: 3, fact: "He Managed To Reunite All Men in North"},
  { factId: 4, fact: "He Owns Valyryian Steel Sword"},
  { factId: 5, fact: "He Loved Wildling Girl"},
  { factId: 6, fact: "He Can Ride Dragon"},
];

const ParamPage = () => {
  const param = useParams();

  const fact = facts.find((user) => user.factId == param.factId);
  if (!fact) {
    return <div>fact not found!</div>;
  }

  return (
    <div>
      <h1>{fact.fact}</h1>
    </div>
  );
};

export default ParamPage;
