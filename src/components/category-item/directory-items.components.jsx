import {
  DirectoryItemContainerComponent,
  BackgroundImage,
  Body,
} from "./directory-items-style";

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <DirectoryItemContainerComponent to={`shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainerComponent>
  );
};

export default DirectoryItem;
