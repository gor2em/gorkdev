import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="py-4 border-b border-slate-900 last:border-none">
      <Link href={`/posts/${props.slug}`} className="text-2xl font-bold">
        <h2>{props.title}</h2>
      </Link>
      <p className="text-sm text-zinc-400">{props.subtitle}</p>
      <p className="text-xs text-slate-600">{props.date}</p>
    </div>
  );
};

export default PostPreview;
