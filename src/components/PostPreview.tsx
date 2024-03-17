import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flexf flex-col">
      <Link
        href={`/posts/${props.slug}`}
        className="text-sm font-semibold text-main200"
      >
        <h2>{props.title}</h2>
      </Link>
      {props.category && (
        <div className="text-primary400 text-[9px]">
          {props.category}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
