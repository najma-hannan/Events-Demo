class OrdersController < ApplicationController
  before_action :set_event

  def index
    render json: Order.where(event_id: @event.id).all
  end

  def create
    @event.transaction do
      order = @event.orders.create!(user_id: @current_user.id)

      order_params[:tickets].each do |ticket|
        ticket_instance = Ticket.find(ticket[:ticket_id])
        order.order_items.create!(ticket_id: ticket[:ticket_id], quantity: ticket[:quantity], price: ticket_instance.price)
      end

      render json: order, status: :created
    end
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def order_params
    params.permit(tickets: [:ticket_id, :quantity])
  end

end
