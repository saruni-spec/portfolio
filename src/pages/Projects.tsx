import * as images from "../images";


const Projects = () => {
  const imageKeys = Object.keys(images);

  return (
    <div>
      {imageKeys.map((key, i) => (
        <div key={i} className="imageDiv">
          <img src={images[key]} alt={`Project ${i}`} />
        </div>
      ))}
    </div>
  );
};

export default Projects;