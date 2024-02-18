export const cart=[];
//cart is an array that will store the products added to the shopping cart.
export function addtoCart(productId){
    let itemMatch ;
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            itemMatch = cartItem;

        }

    });

    if (itemMatch){
        itemMatch.quantity +=1;

    }else{
        cart.push({
            productId:productId,
            quantity:1
        });
    }

  }
