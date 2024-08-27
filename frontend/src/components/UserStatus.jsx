const UserStatus = ({ username, onLogout }) => {

  return (
    <div data-testid="logged-in-user">
      {username} logged in<button onClick={onLogout}>log out</button>
    </div>
  )
}

export default UserStatus