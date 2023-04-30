import styled from "styled-components";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

export const ShopingBag = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const CardIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  margin-top: -5px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
