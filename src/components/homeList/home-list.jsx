import './home-list.scss';

import ItemShop from '../itemShop/item-shop';

const HomeList = ({clazz, onNavChange}) => {
    const data = [
        { id:1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtScm_JZbbeIY4sH8KJ6C7z_sF23q59IGARw&usqp=CAU', subtitle: 'Solimo Coffee Beans 2 kg', price: '10.73$' },
        { id:2, img: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Granola-coffee.jpg', subtitle: 'Presto Coffee Beans 1 kg', price: '15.99$$' },
        { id:3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdBr6jleF2DdVxu7DiCHAmbRJVv8r8mAHuA&usqp=CAU', subtitle: 'AROMISTICO Coffee 1 kg', price: '6.99$$' },
    ]
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ItemShop
                key={id}
                {...itemProps}
                onNavChange={onNavChange}
            />
        );
    }); 
    return(
        <div className={clazz}>
            <div className="main__title">Our best</div>
            <div className='main__block'>
                {elements}
            </div>
        </div>
    )
}

export default HomeList;