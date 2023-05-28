class OrdersController < ApplicationController
  def create
    event = Event.find(params[:id])
    user_id = order_params[:user_id]
    tickets = order_params[:tickets]

    def create
      event = Event.find(params[:id])
      user_id = order_params[:user_id]
      tickets = order_params[:tickets]

      order = Order.new(event: event, user_id: user_id)

      Order.transaction do
        order.save!
        tickets.each do |ticket|
          ticket_id = ticket[:ticket_id]
          quantity = ticket[:quantity]
          order.order_items.create!(ticket_id: ticket_id, quantity: quantity)
        end
      end

      render json: order, status: :created
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

  private

  def order_params
    params.permit(:user_id, tickets: [:ticket_id, :quantity])
  end

end
