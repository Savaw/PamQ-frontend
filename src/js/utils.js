export function isLoggedIn() {
  return (
    localStorage.getItem("status") !== null &&
    localStorage.getItem("status") === "loggedIn"
  );
}
