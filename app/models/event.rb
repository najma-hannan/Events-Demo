class Event < ApplicationRecord
  belongs_to :organizer, class_name: 'User'
  has_many :tickets
<<<<<<< HEAD
  has_many :event_registrations
  has_many :event_feedbacks
=======

  validates :title, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :location, presence: true
>>>>>>> e9a31bf9e6848f91873b07a4cb543dce1328888d
end
