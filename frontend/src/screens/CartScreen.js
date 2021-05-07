import './CartScreen.css';

// Components
import Advantages from '../components/Advantages';
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="container">
                <Advantages />
                <div className="cartscreen__inner">
                    <h3 className="title title__size_m">В вашей корзине:</h3>
                    <div className="order">
                        <CartItem />

                        <div className="order__right">
                            <p className="title">Стоимость заказа</p>
                            <p className="title__text">Цена за 1 товар:<span>3890 Р</span></p>
                            <p className="title__text">Скидка общая:<span>-990 Р</span></p>
                            <strong className="title__text">
                                Итого <span>2 890 Р</span>
                            </strong>
                            <button className="btn order__btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartScreen