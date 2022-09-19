import { Link } from "react-router-dom";
import landingSvg from "../../Assets/landing-img.svg";

const Landing = () => {
  return (
    <main className="landing-screen flex">
      <section className="ls-details flex">
        <h1 className="ls-heading">
          <span>Blossom</span> Forum
        </h1>
        <div className="ls-details-I flex">
          <h3 className="ls-subheading">
            Meet your modern <span>discussion board</span>
          </h3>
          <p className="ls-about">
            Build a truly branded community, connect with like-minded people and
            grow without any efforts.
          </p>
        </div>
        <div className="ls-details-btns">
          <button className="forum-btn-primary link-btn">Join Now</button>
          <Link className="ls-btn-secondary" to="#">
            Already have an account ?
          </Link>
        </div>
      </section>
      <section>
        <img className="ls-svg" src={landingSvg} />
      </section>
    </main>
  );
};

export default Landing;
