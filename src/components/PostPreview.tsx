import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="py-4 border-b border-main950 last:border-none">
      <Link href={`/posts/${props.slug}`} className="text-3xl font-bold">
        <h2>{props.title}</h2>
      </Link>
      <p className="text-xs text-main600">{props.subtitle}</p>
      <div className="flex items-center space-x-2 text-[10px]">


        {props.category && <div className="text-primary400">{props.category}</div>}

        <p className="text-main800">{props.date}</p>
      </div>
    </div>
  );
};

export default PostPreview;
