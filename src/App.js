import Home from "./routes/home/home.components";
import Autentication from "./routes/autentication/autentication";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-meni";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout";
import Payment from "./routes/payment/payment";
import {useDispatch} from "react-redux";

import {useEffect} from "react";
import {checkUserSession} from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    /*const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserElementFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;*/
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login" element={<Autentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default App;
