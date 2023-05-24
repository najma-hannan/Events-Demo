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
admin = User.create(username: 'admin', password: 'admin123', email: 'admin@example.com', role: 'admin')
user1 = User.create(username: 'user1', password: 'user123', email: 'user1@example.com', role: 'normal')
user2 = User.create(username: 'user2', password: 'user123', email: 'user2@example.com', role: 'normal')
ada = User.create(username: 'ada', password: 'ada123', email: 'ada@example.com', role: 'normal')
user1 = User.create(username: 'user1', password: 'user123', email: 'user1@example.com', role: 'normal')
user2 = User.create(username: 'user2', password: 'user123', email: 'user2@example.com', role: 'normal')


# Creating Events
event1 = Event.create(title: 'Event 1', description: 'Lorem ipsum dolor sit amet', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Location 1', organizer: admin)
event2 = Event.create(title: 'Event 2', description: 'Consectetur adipiscing elit', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Location 2', organizer: admin)

# Creating Tickets
ticket1 = Ticket.create(event: event1, type: 'General', price: 10.0, quantity: 100)
ticket2 = Ticket.create(event: event1, type: 'VIP', price: 50.0, quantity: 50)
ticket3 = Ticket.create(event: event2, type: 'Regular', price: 15.0, quantity: 200)

# Creating Registrations
registration1 = Registration.create(user: user1, event: event1, ticket: ticket1, registration_date: '2023-05-20')
registration2 = Registration.create(user: user2, event: event2, ticket: ticket3, registration_date: '2023-05-22')

# Creating Feedback
feedback1 = Feedback.create(user: user1, event: event1, rating: 4, comment: 'Great event! Enjoyed it.')
feedback2 = Feedback.create(user: user2, event: event2, rating: 5, comment: 'Excellent organization.')

# Creating Vendors
vendor1 = Vendor.create(name: 'Vendor 1', contact_person: 'John Doe', email: 'vendor1@example.com', phone: '123456789')
vendor2 = Vendor.create(name: 'Vendor 2', contact_person: 'Jane Smith', email: 'vendor2@example.com', phone: '987654321')

# Assigning Vendors to Events
event1.vendors << vendor1
event2.vendors << vendor2
