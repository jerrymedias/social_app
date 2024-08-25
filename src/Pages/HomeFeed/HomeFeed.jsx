import React, { useState } from "react";
import "./HomeFeed.css";
import CreatePost from "../../Widgets/CreatePost/CreatePost";
import Post from "../../Widgets/Post/Post";
import Modal from "../../Wrappers/Modal/Modal";
import Auth from "../Auth/Auth";
import ViewTransition from "../../Wrappers/ViewTransition/ViewTransition";

function HomeFeed() {
  const [showAuthModal, toggleAuthModal] = useState(false);
  const posts = [
    {
      picUrl: "src/assets/profilePic.png",
      header: "Theresa Webb",
      time: "5mins ago",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comment: "24 comments",
      postIcon: "👋",
    },
    {
      picUrl: "src/assets/profilePic.png",
      header: "Theresa Webb",
      time: "5mins ago",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comment: "24 comments",
      postIcon: "👋",
    },
    {
      picUrl: "src/assets/profilePic.png",
      header: "Theresa Webb",
      time: "5mins ago",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comment: "24 comments",
      postIcon: "👋",
    },
    {
      picUrl: "src/assets/profilePic.png",
      header: "Theresa Webb",
      time: "5mins ago",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comment: "24 comments",
      postIcon: "👋",
    },
  ];
  return (
    <React.Fragment>
      <ViewTransition transitionName="fade-in-out">
        {showAuthModal && (
          <Modal>
            <Auth
              showCloseCta={true}
              crossIconHandler={() => toggleAuthModal(false)}
            />
          </Modal>
        )}
      </ViewTransition>
      <div className="HomeFeed flex flex-col items-center justify-center p-8">
        <div className="w-3/5">
          <div className="font-medium text-2xl header-cl">Hello Jane</div>
          <div className="font-normal text-base subheader-cl">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
          <div className="mt-8">
            <CreatePost
              header="Create post"
              postPlaceHolder="How are you feeling today?"
              imageUrl="src/assets/post.png"
              createPostHandler={() => {
                toggleAuthModal(true);
              }}
            />
          </div>
          {posts.map((item) => {
            return (
              <div className="mt-2">
                <Post
                  header={item.header}
                  time={item.time}
                  picUrl={item.picUrl}
                  comment={item.comment}
                  description={item.description}
                  postIcon={item.postIcon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeFeed;
