import userModel from '../models/userModel.js'


//add items to user cart
const addToCart = async (req, res) => {
    //find userData
    //find cartData from userData
    //if cartData does not have item => add itemId = 1
    //else itemId +=1
    //find the userId from the userModel and update the cartData

    try {
        let userData = await userModel.findOne({_id: req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Added to cart"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error: while items are added to cart"})
        
    }
}

//remove items from user cart
const removeFromCart = async (req, res) => {

}

//fetch user cart data
const getCart = async (req, res) => {

}


export {addToCart, removeFromCart, getCart}
