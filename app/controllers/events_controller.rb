class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
      events = Event.all
      render json: events, each_serializer: EventSerializer
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
        render json: event.errors, status: :unprocessable_entity
      end
    end

    def update_title
      event = Event.find(params[:id])
      event.title = params[:title]
      if event.save
        render json: event
      else
        render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
      end
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
      params.require(:event).permit(:title, :description, :start_date, :end_date, :location)
    end
end
