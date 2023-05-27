class TicketsController < ApplicationController
  before_action :set_event, only: [:create, :index]
  before_action :set_ticket, only: [:update, :destroy]

  def create
    ticket = @event.tickets.new(ticket_params)
    if ticket.save
      render json: ticket, status: :created
    else
      render json: {errors: ticket.errors.to_hash(true)}, status: :unprocessable_entity
    end
  end

  def index
    @event = Event.find_by_id!(params[:event_id])
    @tickets = @event.tickets

    render json: {
      event: EventSerializer.new(@event),
      tickets: ActiveModelSerializers::SerializableResource.new(@tickets, each_serializer: TicketSerializer)
    }
  end

  def update
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: {errors: @ticket.errors.to_hash(true)}, status: :unprocessable_entity
    end
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
