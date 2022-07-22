import './item-shop.scss';

const ItemShop = ({img, subtitle, price, onNavChange}) => {
    const navChange = (e) => {
        const name = "header__shop-block"
        onNavChange(name)
    }
    return(
        <div  className="item" onClick={navChange}>
            <div  className="item_img"><img src={img} alt=""/></div>
            <div className="item__subtitle">{subtitle}</div>                
            <div className="item__price">{price}</div>
        </div>
    )
}

export default ItemShop;