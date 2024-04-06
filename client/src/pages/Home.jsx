import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col p-8 gap-6 max-w-6xl mx-auto md:flex-row">
        <div>
          <img
            src="https://trtblogbucket.s3.us-west-2.amazonaws.com/Introphotologo.png"
          
            width='500' className="float-left m-5 self-center rounded-lg dark:shadow-gray-800"
          />
          <h1 className="text-4xl font-bold lg:text-6xl text-center pb-4">
            Welcome to <br />
            TOTALLY RANDOM THOUGHTS
          </h1>
          <div className="flex-auto space-y-4">
            <p className="text-gray-400 text-xs indent-10 sm:text-xl">
              The digital alcove where curiosity reigns and the extraordinary is
              the norm. Here, we traverse the corridors of time, weaving through
              the past, dancing in the present, and peeking into the future. Our
              articles are the threads that bind the tapestry of the
              extraordinary—from the enigmas of science to the whispers of the
              supernatural.
            </p>
            <p className="text-gray-400 text-xs indent-10 sm:text-xl">
              In this haven, we don't just read about conspiracies; we unravel
              them. We don't just hear about paranormal events; we investigate
              them. And the bizarre? We don't shy away; we celebrate it. Each
              piece is a voyage that commences with a solitary, seemingly random
              thought, beckoning you to embark on an odyssey where reality and
              the arcane converge.
            </p>
            <p className="text-gray-400 text-xs indent-10 sm:text-xl">
              So, if your spirit yearns for adventure at the fringes of reality,
              if your mind thirsts for knowledge that defies the ordinary,
              **Totally Random Thoughts** is your guide through the labyrinth of
              the unknown. Unleash your imagination and let it soar into the
              realms of possibility and beyond. Here, every question is a map,
              and every answer is a new destination. Join us, and let's explore
              the compass of the curious together.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-6 py-7 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-center pb-8">Recent Posts</h2>
            <div className="flex flex-wrap gap-5 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <div className="p-3 bg-black dark:bg-slate-700 mb-5">
        <CallToAction />
      </div>
    </div>
  );
}
