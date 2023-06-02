class Event < ApplicationRecord
    belongs_to :organizer, class_name: 'User'
    has_many :tickets
    has_many :orders
  
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :location, presence: true
  
    def booked_tickets
      tickets.joins(:orders).where(orders: { status: 'booked' })
    end
  
    def available_tickets
      tickets.where.not(id: booked_tickets.pluck(:id))
    end
  
    def total_booked_tickets
      booked_tickets.count
    end
  end
  