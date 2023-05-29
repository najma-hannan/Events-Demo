class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_date, :end_date, :location, :created_at

  belongs_to :organizer
  has_many :tickets
end
