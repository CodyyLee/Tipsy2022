import "./header.scss";

export default function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg)`
      }}
    >
      <div className="imageOverlay"></div>
      <div className="section">
        <h2 className="headerTitle">let's</h2>
        <h2 className="headerTitle">get</h2>
      </div>
      <h2 className="brand">Tipsy</h2>
    </header>
  );
}
