import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/posts/${props.slug}`}
        className="text-sm text-main200 tracking-wide font-medium"
      >
        <h2>{props.title}</h2>
      </Link>
      {props.category && (
        <div className="text-main600 text-[10px]">{props.category} - {props.date}</div>
      )}
    </div>
  );
};

export default PostPreview;
