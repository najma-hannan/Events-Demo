class OrdersController < ApplicationController
  def create
    event = Event.find(params[:id])
    user_id = order_params[:user_id]
    tickets = order_params[:tickets]

    order = Order.new(event: event, user_id: user_id)
    order_items = []

    tickets.each do |ticket|
      ticket_id = ticket[:ticket_id]
      quantity = ticket[:quantity]

      order_items << OrderItem.new(ticket_id: ticket_id, quantity: quantity)
    end

    order.order_items = order_items

    if order.save
      render json: order, status: :created
    else
      render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.permit(:user_id, tickets: [:ticket_id, :quantity])
  end

end
