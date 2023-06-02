# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Assuming you have ActiveRecord and the appropriate models set up
# You can place this code in a file called seeds.rb and run `rails db:seed` to execute it

# Creating Users
admin = User.create(name: 'admin', password: 'admin123', email: 'admin@example.com', is_admin: true)
user1 = User.create(name: 'user1', password: 'user123', email: 'user1@example.com')
user2 = User.create(name: 'user2', password: 'user123', email: 'user2@example.com')
<<<<<<< HEAD

# Creating Events
event1 = Event.create(title: 'Event 1', description: 'safari trip launch', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Location 1', organizer: admin)
event2 = Event.create(title: 'Event 2', description: 'sol fest concert', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Location 2', organizer: admin)
event3 = Event.create(title: 'Event 3', description: 'blankets and wines', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Location 2', organizer: admin)


# Assigning Tickets to Users
ticket1 = Ticket.create(event_name: 'Ticket 1', user: user1)
ticket2 = Ticket.create(event_name: 'Ticket 2', user: user2)

=======

# Delete existing events
Event.delete_all

# Creating Events
event_attributes = [
  { title: 'Safari', description: 'safari trip launch', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Nairobi', organizer: admin },
  { title: 'Sol Fest', description: 'sol fest concert', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Kisumu', organizer: admin },
  { title: 'Blankets and wines', description: 'blankets and wine', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Mombasa', organizer: admin },
  { title: 'National Museums', description: 'art show', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Nakuru', organizer: admin },
  { title: 'Tea Farms Tour', description: 'outdoors', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Nairobi', organizer: admin },
  { title: 'Food Fest', description: 'food fest', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Kisumu', organizer: admin },
  { title: 'White Party', description: 'all white party', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Mombasa', organizer: admin },
  { title: 'Music Competition', description: 'Music', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Nakuru', organizer: admin },
  { title: 'Black Party', description: 'all black party', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Mombasa', organizer: admin },
  { title: 'Trivia Night', description: 'Music', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Nakuru', organizer: admin }
]
>>>>>>> bd336383ee53fcc85a929df26905abdff4f5495f

event_attributes.each do |attributes|
  Event.find_or_create_by(attributes.slice(:title)) do |event|
    event.assign_attributes(attributes)
  end
end
