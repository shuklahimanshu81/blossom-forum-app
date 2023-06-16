// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Nav = () => {
  return (
    <div className="forum-nav flex">
      <h1>
        <span>Blossom</span> Forum
      </h1>
      {/* <ExitToAppIcon /> */}
      <button className="forum-btn-primary link-btn">SignIn / SignUp</button>
    </div>
  );
};

export default Nav;
