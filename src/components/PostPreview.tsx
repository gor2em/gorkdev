import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-col my-4 first:mt-0">
      <Link
        href={`/posts/${props.slug}`}
        className="text-sm text-main400"
      >
        <h2>{props.title}</h2>
      </Link>
      {props.category && (
        <div className="text-primary400 text-[7px]">{props.category}</div>
      )}
    </div>
  );
};

export default PostPreview;
