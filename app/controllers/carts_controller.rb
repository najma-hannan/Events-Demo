class CartsController < ApplicationController
  before_action :authenticate_user, only: [:index, :show]
  before_action :set_cart, only: [:show, :update, :destroy, :add_item, :remove_item, :checkout]
#   before_action :authorize_user, only: [:update, :destroy]

def index
    cartItems = Cart.all
    render json:cartItems
end

def show
    render json: @cart , serializer: :CartSerializer
end

def create
    @cart = Cart.new(cart_params)
    puts @cart.inspect
    if @cart.save
      render json: @cart, status: :created
    else
      render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
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
    item = Item.find(params[:id])
    @cart.items << item

    render json: {message: 'Item added to cart successfully'}
end

def remove_item
    item = Item.find(params[:id])
    @cart.items.destroy(item)

    render json:{message: 'Item removed from cart successfully'}
end

def checkout
 @cart.update(cart_params)
    # @cart.update(quantity: params[:quantity], total_price: params[:total_price] ,status: 'completed')
    render json: {message: 'Cart checkout successfully'}  
end


private

def set_cart
    @cart = Cart.find(params[:id])
end

def cart_params
    params.require(:cart).permit(:url, :name,:date,:id,:description,:created_at,:location,:rating, :total, :quantity, :price)
end

  def authorize_user
   if !current_user.is_admin || current_user != @cart.user
      render json: {message: "Unauthorized" }, status: :unauthorized
    end
  end

end
