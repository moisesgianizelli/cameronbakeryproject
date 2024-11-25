import { FC } from "react";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
    category?: string; // Optional
    price?: string; // Optional
  }[];
  onClick: (index: number) => void;
}

const ImagesGallery: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image"
        >
          <img src={slide.src} alt={slide.description} />
          <div className="image-info">
            <h5>{slide.title}</h5>
            <p>{slide.category}</p>
            <p>{slide.price}</p> {/* Display the price */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesGallery;
