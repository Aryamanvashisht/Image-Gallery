type Tobject = {
  image: {
    id: number;
    likes?: number;
    downloads?: number;
    webformatURL: string;
    user: string;
    views: number;
    tags: string;
  };
};

const Card = ({ image }: Tobject) => {
  const arr_tags: string[] = image.tags.split(",");

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt="Random-Image"
        className="w-full h-72"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-purple-500 mb-2">
          Photo By {image?.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {arr_tags.map((tag,index) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
