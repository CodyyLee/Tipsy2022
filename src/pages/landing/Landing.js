import Header from "../../components/header/Header";
import AlcoholCard from "../../components/alcoholCard/AlcoholCard";

export default function Landing() {
  const types = [
    "Non-Alcoholic",
    "vodka",
    "rum",
    "tequila",
    "gin",
    "whiskey",
    "bourbon",
    "scotch"
  ];

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        {types.map((el, i) => {
          return <AlcoholCard key={`${el}-card`} type={el} />;
        })}
      </div>
    </>
  );
}
