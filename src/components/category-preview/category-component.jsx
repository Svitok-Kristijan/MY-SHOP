import {
  TitleLink,
  CategoryPreviewContainer,
  Preview,
} from "./category-preview.styles";
import {Link} from "react-router-dom";
import Spinner from "../spinner/spinner.components";
import {selectCategoriesIsLoading} from "../../store/category/categories.selector";

import ProductCard from "../product-card/product-card.component";
import {useSelector} from "react-redux";
import {Fragment} from "react";

const CategoryPreview = ({title, products}) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <TitleLink to={title}>{title.toUpperCase()}</TitleLink>

          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </CategoryPreviewContainer>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
