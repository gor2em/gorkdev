import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="py-4 border-b border-main950 last:border-none">
      <Link href={`/posts/${props.slug}`} className="text-3xl font-bold">
        <h2>{props.title}</h2>
      </Link>
      <p className="text-xs text-main600">{props.subtitle}</p>
      <p className="text-[10px] text-main800">{props.date}</p>
    </div>
  );
};

export default PostPreview;
