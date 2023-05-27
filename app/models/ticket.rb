class Ticket < ApplicationRecord
  belongs_to :event

  validates :name, presence: true
  validates :name, uniqueness: { scope: :event_id, message: "must be unique within the event" }, on: :create
  validates :price, presence: true, numericality: true
  validates :quantity, presence: true, numericality: true
  validates :available_until, presence: true
  validates :event, presence: true
end
