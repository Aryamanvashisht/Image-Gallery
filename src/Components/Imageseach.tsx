import { useState } from "react";

type Tsearch = {
    searchText: (text: string) => void;
};

const Imageseach = ({ searchText }: Tsearch) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchText(text);
    setText("");
  };

  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden"
      >
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Search images..."
          className="flex-grow px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-6 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Imageseach;
