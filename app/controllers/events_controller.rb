class EventsController < ApplicationController
  skip_before_action :authenticate_user, only: [:index, :show]
  before_action :set_event, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    events = Event.all
    render json: events
  end

  def show
    render json: @event
  end

  def create
    event = Event.new(event_params)
    event.organizer = @current_user
    event.save!

    render json: event, status: :created
  end

  def update
    @event.update(event_params)
    render json: @event
  end

  def destroy
    @event.destroy
    head :no_content
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date, :location, :tickets)
  end

  def authorize_user
    if !@current_user.is_admin || @current_user != @event.organizer
      render json: {message: "Unauthorized" }, status: :unauthorized
    end
  end

end
