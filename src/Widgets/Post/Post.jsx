import React from "react";
import PostsWrapper from "../../Wrappers/Posts/Posts";
import ImageLoader from "../../Components/ImageLoader/ImageLoader";

function Post(props) {
  return (
    <PostsWrapper>
      <div className="flex justify-between">
        <div className="flex">
          <div className="rounded-full h-11 w-11">
            <ImageLoader imageUrl={props.picUrl} height="44" width="44" />
          </div>
          <div className="ml-2">
            <div className="font-medium text-base textColorPrimary">
              {props.header}
            </div>
            <div className="font-medium text-sm textColorSecondary">
              {props.time}
            </div>
          </div>
        </div>
        <span>...</span>
      </div>
      <div
        className="flex p-4 mt-2 rounded-lg"
        style={{ background: "#191920" }}>
        <div
          className="flex items-center justify-center"
          style={{
            background: "#27292d",
            width: "100px",
            height: "50px",
            borderRadius: "50%",
          }}>
          <div>{props.postIcon}</div>
        </div>
        <div
          className="font-normal text-base ml-2"
          style={{ color: "#7F8084" }}>
          {props.description}
        </div>
      </div>
      <div className="flex">
        <div className="textColorSecondary font-medium text-sm mt-2">
          {props.comment}
        </div>
      </div>
    </PostsWrapper>
  );
}

export default Post;
