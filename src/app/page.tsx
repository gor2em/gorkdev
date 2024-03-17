import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import Header from "./header";
import About from "./about";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Header />

      <About />

      {/* techs */}
      <div className="flex flex-col space-y-2 ">
        <div className="font-bold tracking-widest text-main200 blur-sm">
          teknolojiler
        </div>
        <div className="text-xs tracking-widest text-main700 animate-pulse">
          yakında.
        </div>
      </div>
      {/* techs end */}

      {/* projects */}
      <div className="flex flex-col space-y-2 ">
        <div className="font-bold tracking-widest text-main200 blur-sm">
          projeler
        </div>
        <div className="text-xs tracking-widest text-main700 animate-pulse">
          yakında.
        </div>
      </div>
      {/* projects end */}

      {/* posts */}
      <div className="flex flex-col space-y-2">
        <div className="font-bold tracking-widest text-main200">gönderiler</div>
        {postPreviews}
      </div>
      {/* posts end */}
    </>
  );
};

export default HomePage;
