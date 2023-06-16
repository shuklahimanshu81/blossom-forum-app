import {
  profileVector,
  commentVector,
  postBookmark,
  shareVector,
  threeDots,
} from "../../Assets";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { IconButton } from "@material-ui/core";
const Post = () => {
  return (
    <div className="post flex">
      <div className="vote-btn">
        <p className="upvote-btn">^</p>
        <p className="vote-count">3</p>
        <p className="downvote-btn">^</p>
      </div>
      <div className="post-details">
        <div className="post-header">
          <div className="flex">
            <img src={profileVector} alt="" className="sm-rounded-avatar" />
            <p> Posted by @tanaypratap </p>
          </div>
          <h1>Join InavctHQ for MBA</h1>
        </div>
        <div className="tags flex">
          <p>MBA</p>
          <p>BUSINESS</p>
          <p>BOOTCAMP</p>
        </div>
        <div>
          <p className="post-text">
            Non programmers on my timeline. Attention! After placing 100+
            programmers i in top Indian startups, I am thinking of coming up
            with a program for business roles as well. Interested in helping me
            build this course? Join the telegram group
          </p>
        </div>
        <div className="post-footer flex">
          <img src={commentVector} />
          {/* <CommentIcon /> */}
          <img src={shareVector} />
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>

          <img src={threeDots} />
        </div>
      </div>
    </div>
  );
};

export default Post;
