import {
  bookmarksVector,
  exploreVector,
  homeVector,
  notificationVector,
  profileVector,
} from "../../Assets";

const Sidenav = () => {
  return (
    <aside className="forum-sidenav">
      <ul>
        <li className="flex">
          <img src={homeVector} />
          <p> Home </p>
        </li>
        <li className="flex">
          <img src={exploreVector} />
          <p>Explore</p>
        </li>
        <li className="flex">
          <img src={bookmarksVector} />
          <p>Bookmarks</p>
        </li>
        <li className="flex">
          <img src={notificationVector} />
          <p>Notification</p>
        </li>
        <li className="flex">
          <img src={profileVector} />
          <p>Profile</p>
        </li>
        <li>
          <button className="forum-btn-primary create-post-btn link-btn">
            Create New Post
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
