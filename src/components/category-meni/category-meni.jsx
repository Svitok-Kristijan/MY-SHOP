import {DirectoryContainer} from "./directory";
import DirectoryItem from "../category-item/directory-items.components";

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
