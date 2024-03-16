import {
  RiTwitterXLine,
  RiGithubLine,
  RiYoutubeLine,
  RiSpotifyLine,
} from "react-icons/ri";

import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      {/* header start */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary400 border-8 border-dashed border-primary900 animate-spin" />
          <div className="flex flex-col text-sm space-y-2">
            <div className="text-main100 font-bold ">görkem acar</div>
            <div className="text-main600 text-xs italic tracking-widest">
              developer, dreamer.
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xl text-main600">
          <RiGithubLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiYoutubeLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiSpotifyLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiTwitterXLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
        </div>
      </div>
      {/* header end */}

      {/* about */}
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-main200 tracking-widest italic">kimim</div>
        <p className="text-[10px] text-main400 text-justify">
          ben görkem; bildiklerimi, öğrendiklerimi ve araştırdıklarımı burada paylaşıyorum.
        </p>
      </div>
      {/* about end */}

      {/* techs */}

      {/* techs end */}

      {/* projects */}
      {/* projects end */}

      {/* posts */}
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-main200 tracking-widest italic">yazılarım</div>
        {postPreviews}
      </div>
      {/* posts end */}
    </>
  );
};

export default HomePage;
