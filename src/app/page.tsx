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
          <div className="w-12 h-12 relative">
            <img
              src="https://pbs.twimg.com/profile_images/1763034678691328000/tS8RK05W_400x400.jpg"
              className="w-full h-full rounded-full absolute"
              alt="Profile"
            />
            <div className=" mix-blend-multiply absolute bg-gradient-to-r from-green-400 to-emerald-950 w-full h-full rounded-full"></div>
          </div>
          <div className="flex flex-col text-sm space-y-2">
            <div className="text-main100 font-bold ">görkem acar</div>
            <div className="text-main600 text-xs italic tracking-widest">
              developer, dreamer.
            </div>
          </div>
        </div>

        <div className="sm:flex items-center space-x-2 text-xl text-main600 hidden">
          <RiGithubLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiYoutubeLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiSpotifyLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
          <RiTwitterXLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
        </div>
      </div>
      {/* header end */}

      {/* about */}
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-main200 tracking-widest stroke-red-500">
          hakkımda
        </div>
        <p className="text-[10px] text-main400 text-justify">
          ben görkem; bildiklerimi, öğrendiklerimi ve araştırdıklarımı burada
          paylaşıyorum. hatta yazı uzun olsun diye Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sit alias corrupti vero voluptatem
          molestiae facere ratione ab vel reprehenderit, perferendis ut quae.
          Incidunt laudantium, cum illum sed velit ipsa assumenda! metnini
          gönderiyorum.
        </p>
      </div>
      {/* about end */}

      {/* techs */}
      <div className="flex flex-col space-y-2 ">
        <div className="font-bold text-main200 tracking-widest blur-sm">
          teknolojiler
        </div>
        <div className="text-xs text-main700 animate-pulse tracking-widest">
          yakında.
        </div>
      </div>
      {/* techs end */}

      {/* projects */}
      <div className="flex flex-col space-y-2 ">
        <div className="font-bold text-main200 tracking-widest blur-sm">
          projeler
        </div>
        <div className="text-xs text-main700 animate-pulse tracking-widest">
          yakında.
        </div>
      </div>
      {/* projects end */}

      {/* posts */}
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-main200 tracking-widest">gönderiler</div>
        {postPreviews}
      </div>
      {/* posts end */}
    </>
  );
};

export default HomePage;
