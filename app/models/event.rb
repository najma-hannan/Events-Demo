class Event < ApplicationRecord
  belongs_to :organizer, class_name: 'User'
  has_many :tickets

  validates :title, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :location, presence: true
end
