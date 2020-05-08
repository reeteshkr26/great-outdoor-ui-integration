export class CartItem {
    public cartId:number;
    public userName:string;
    public productId:string;
    public productPrice:number;
    public productName:string;
    public quantity:number;


    constructor(cartId:number,userName:string,productId:string,productPrice:number,productName:string,quantity:number){
        this.cartId=cartId;
        this.userName=userName;
        this.productId=productId;
        this.productPrice=productPrice;
        this.productName=productName;
        this.quantity=quantity

    }
}
