export default function Navbar({
  user,
  onNavClick,
  setUser,
}) {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    onNavClick('home');
  };

  const isAdmin =
    user?.email === 'rohit@rentease.com';

  return (
    <nav className="navbar">
      <h1
        className="navbar-logo"
        onClick={() => onNavClick('home')}
      >
        RentEase
      </h1>

      <div className="navbar-links">
        <button
          className="navbar-btn"
          onClick={() => onNavClick('items')}
        >
          Rentals
        </button>

        {isAdmin && (
          <button
            className="navbar-btn"
            onClick={() => onNavClick('admin')}
          >
            Admin
          </button>
        )}

        {user ? (
          <>
            <button
              className="navbar-btn"
              onClick={() => onNavClick('orders')}
            >
              My Orders
            </button>

            <span>
              Hi, {user.name}
            </span>

            <button
              className="navbar-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="navbar-btn"
            onClick={() => onNavClick('login')}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}