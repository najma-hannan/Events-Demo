class CartsController < ApplicationController
 before_action :set_cart, only: [:show, :update, :destroy, :add_item, :remove_item, :checkout]

def index
    cartItems = Cart.all
    render json:cartItems
end

def show
    render json: @cart , serializer: :CartSerializer
end

def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render json: @cart, status: :created
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
end
def update
    if @cart.update(cart_params)
        render json: @cart
    else 
        render json: @cart.errors , status: :unprocessable_entity
    end
end

def destroy 
    @cart.destroy
    render json: {message: 'Cart deleted successfully'}
end

def add_item
    item = Item.find(params[:item_id])
    @cart.items << item

    render json: {message: 'Item added to cart successfully'}
end

def remove_item
    item = Item.find(params[:item_id])
    @cart.items.destroy(item)

    render json:{message: 'Item removed from cart successfully'}
end

def checkout
#  @cart.update(cart_params)
    @cart.update(quantity: params[:quantity], total_price: params[:total_price] ,status: 'completed')
    render json: {message: 'Cart checkout successfully'}  
end


private

def set_cart
    @cart = Cart.find(params[:id])
end

def cart_params
    params.require(:cart).permit(:url, :name,:date, :location, :quantity, :price)
end

end
