import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import {selectCurrentUser} from "../../store/user/user.selector";

import {UserContext} from "../../context/user.context";
import {selectCardOpen} from "../../store/card/card.selector";
import {signOutStart} from "../../store/user/user.action";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCardOpen = useSelector(selectCardOpen);

  const signOutUser = dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/login">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCardOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
