import Sidenav from "./sidenav";
import Nav from "./nav";
import Post from "../Posts/post";

const Home = () => {
  return (
    <main>
      <Nav />
      <section className="forum-home">
        <Sidenav />
        <Post />
      </section>
    </main>
  );
};

export default Home;
