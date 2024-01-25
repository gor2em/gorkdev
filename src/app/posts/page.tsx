
import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

const PostsPage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default PostsPage;
