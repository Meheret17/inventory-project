const Navbar = () => (
  <header className="has-background-white">
    <nav className="container level is-mobile p-4">
      <div className="level-left">
        <a href="/" className="level-item is-size-3">
          Inventory
        </a>
      </div>
      <div className="level-right">
        <button className="button">Create Account</button>
      </div>
    </nav>
  </header>
);

export default Navbar;
