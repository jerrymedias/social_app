import React from "react";
import "./CreatePost.css";
import PostsWrapper from "../../Wrappers/Posts/Posts";
import InputField from "../../Components/InputField/InputField";
import PrimaryCta from "../../Components/PrimaryCta/PrimaryCta";
import ImageLoader from "../../Components/ImageLoader/ImageLoader";

function CreatePost(props) {
  return (
    <PostsWrapper>
      <div className="cp-header">{props.header}</div>
      <div className="relative">
        <div className="absolute w-12 h-12 post-icon">
          <ImageLoader
            imageUrl={props.imageUrl}
            height="18"
            width="18"
            altText="post img"
          />
        </div>
        <InputField
          type="text"
          placeholder={props.postPlaceHolder}
          bgColor="#191920"
          fieldType="sm"
          className="pl-16"
        />
      </div>
      <div className="flex justify-end">
        <div className="w-28">
          <PrimaryCta label="Post" onClick={props.createPostHandler} />
        </div>
      </div>
    </PostsWrapper>
  );
}

export default CreatePost;
