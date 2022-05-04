import React, { useState, useEffect } from "react";
import { ImQuotesRight } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
const Loader = () => {
  const [posts, setPosts] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setQuote(posts.quotes[randomQuote(posts)]);
      });
  }, []);
  const randomQuote = (posts) => {
    const result = Math.floor(Math.random() * posts.quotes.length);
    return result;
  };

  const handleSubmit = () => {
    setQuote(posts.quotes[randomQuote(posts)]);
  };

  const Button = () => {
    return (
      <button
        id="new-quote"
        onClick={handleSubmit}
        className="border-2 p-2.5 rounded-2xl w-[120px] hover:bg-[#4bbad65e] transition ease-in delay-100 hover:duration-300 hover:scale-110 font-[600] text-[16px]"
      >
        New quote
      </button>
    );
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div
        id="quote-box"
        className="w-[720px] bg-gradient-to-r from-[#479fe7] to-[#8301fd] min-h-[12px] rounded-[16px] p-9 text-white relative drop-shadow-lg"
      >
        <ImQuotesRight className="absolute top-[-24px] left-[-16px] text-[#47c7e7] text-[56px]" />
        <div className="wrap rounded-t-lg flex flex-col">
          <div id="text" className="text-[32px] font-[400]">
            {quote.quote}
          </div>
          <div id="author" className="flex justify-end p-4 italic text-[20px]">
            --- {quote.author} ---
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              <FaTwitter className="rounded-full border-2 text-[42px] p-1 hover:bg-[#4bbad65e] hover:animate-spin" />
            </a>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Loader;
