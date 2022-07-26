import Button from "./Button";
const Header = () => {
  const onClick = () => {};
  return (
    <header className="header">
      <h1>Book Store</h1>
      <Button onClick={onClick} />
    </header>
  );
};

export default Header;
