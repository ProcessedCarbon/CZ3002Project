import React from 'react'
import './ShopPage.css'


// React Components
import ShopItem from '../shop_page/ShopPageComponents/ShopItem';

const ShopPage = () => {

    // ------- Test Data ------- //

    const ShopItemList = [
        { title: 'Shop Item 1', cost: 100 },
        { title: 'Shop Item 2', cost: 200 }
    ];

    // ---------- RENDER ---------- //    

    return (
        <shoppage>
            <div className='shoppage_container'>
                <div className='background'>

                    {/* Character Profile in top left corner */}
                    <div className='character_gold_profile'>
                        <h1> Gold:100 </h1>
                    </div>

                    <div className='items'>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                        ></ShopItem>

                    </div>
                </div>
            </div>
        </shoppage>
    )
}

export default ShopPage