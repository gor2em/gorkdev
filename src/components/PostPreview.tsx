import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-col pl-2 my-4 border-l-4 rounded-l-sm border-l-main500 first:mt-0">
      <Link
        href={`/posts/${props.slug}`}
        className="font-semibold text-main200"
      >
        <h2>{props.title}</h2>
      </Link>
      {props.category && (
        <div className="text-primary400 text-[9px] mt-1">{props.category}</div>
      )}
    </div>
  );
};

export default PostPreview;
