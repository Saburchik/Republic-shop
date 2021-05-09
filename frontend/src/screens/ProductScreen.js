import Advantages from '../components/Advantages';
import './ProductScreen.css';

const ProductScreen = () => {
    return <div className="productscreen">
        <Advantages />
        <div className="product__about">
            <div className="container">
                <div className="description__inner">
                    <img className="product__img_size-b" src="https://i.imgur.com/HnuqR0w.jpg" alt="Product image" />
                    <div className="product__information">
                        <p className="product__article">артикул: <strong>848473</strong></p>
                        <p className="title title__size_c">Скейтборд RIDEX Octopus</p>
                        <p className="sale">-20%</p>
                        <p className="price price__size_m">3 890 ₽
                                <strike className="old-price">4 890 ₽</strike>
                        </p>
                        <p className="description description__product">
                            <strong>Описание</strong> <br />
                                Tracer Classic в цвете Black / Bar - классический круизер GLOBE с мягкими коническими колесами. Он доступен в размере 31,125 "x 8,25" x 16,5 "WB. Изготовлен из твердого клена Resin-7.
                            </p>
                        <div className="product__count">
                            <button className="btn btn__size_g">Размераня сетка</button>
                            <div className="count__inner">
                                <button className="btn btn__count">-</button>
                                <span className="count__value">1</span>
                                <button className="btn btn__count">+</button>
                            </div>
                        </div>
                        <button className="btn btn__in-cart">В корзину</button>
                        {/* <div className="unavailable">
                                <strong>Товара нет в наличии</strong>
                                <button className="btn">Уведомить</button>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="container">
                <h3 className="title title__size_m">Отзывы</h3>
                <div className="review__client">
                    <strong className="title client__name">Saburchik:</strong>
                    <p className="description client__text">Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                    <strong className="client__data">02.03.2021 | 19:42</strong>
                </div>
                <p className="review__alert">
                    Отзывы могут оставлять только <a className="registration__link">зарегистрированные</a> пользователи. <br />
                    <a className="registration__link" >Авторизоваться и оставить отзыв</a>
                </p>
            </div>
        </div>
    </div>
};

export default ProductScreen