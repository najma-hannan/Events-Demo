class EventsController < ApplicationController
  before_action :authorize_admin, except: [:index, :show]

  def index
    events = Event.all
    render json: events
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def create
    event = Event.new(event_params)

    if event.save
      render json: event, status: :created
    else
      render json: { error: event.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def update
    event = Event.find(params[:id])

    if event.update(event_params)
      render json: event
    else
      render json: { error: event.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :date, :location, :user_id)
  end

  def authorize_admin
    unless current_user && current_user.role == 'admin'
      render json: { error: 'Unauthorized access' }, status: :unauthorized
    end
  end
end

