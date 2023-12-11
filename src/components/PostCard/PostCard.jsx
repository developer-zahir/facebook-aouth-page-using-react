import { Link } from "react-router-dom";
import { RiEarthLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import "./PostCard.scss"
const PostCard = () => {
  return (
    <>
      <article className="post-card">
        <div className="post-header">
          <div className="header-left">
            <div className="header-left-group">
              <div className="avater">
                <Link to="#">
                  <img src="https://mir-s3-cdn-cf.behance.net/user/276/1802d71164076659.63f3b60af2e0c.jpg" alt="" />
                </Link>
              </div>
              <div className="user-name">
                <Link to="#">Md Zahiruli Islam</Link>
                <div className="time-and-status">
                  <span className="time">2 hours ago</span>
                  <span className="post-status">
                    <RiEarthLine />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="header-right">
            <div className="header-right-group">
              <span className="more-option">
                <BsThreeDots />
              </span>
              <span className="hide-post">
                <LiaTimesSolid />
              </span>
            </div>
          </div>
        </div>
        <div className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vero. Animi aperiam maxime consectetur nobis, ab voluptate ad itaque dolore.
        </div>

        <div className="post-image">
            <img src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" alt="" />
        </div>


        <div className="post-footer">
            <div className="post-footer-top">
                
            </div>
        </div>
      </article>
    </>
  );
};

export default PostCard;
