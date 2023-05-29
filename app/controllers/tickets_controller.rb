class TicketsController < ApplicationController
  before_action :set_event, only: [:create, :index]
  before_action :set_ticket, only: [:update, :destroy]

  def create
    ticket = @event.tickets.create!(ticket_params)
    render json: ticket, status: :created
  end

  def index
    @tickets = @event.tickets

    render json: @tickets
  end

  def update
    @ticket.update(ticket_params)
    render json: @ticket
  end

  def destroy
    @ticket.destroy
    head :no_content
  end

  private

  def set_event
    @event = Event.find_by_id!(params[:event_id])
  end

  def set_ticket
    @ticket = Ticket.find_by_id!(params[:id])
  end

  def ticket_params
    params.permit(:name, :quantity, :price, :available_until)
  end
end
