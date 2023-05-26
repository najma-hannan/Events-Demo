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

# Creating Events
event1 = Event.create(title: 'Event 1', description: 'safari trip launch', start_date: '2023-06-01', end_date: '2023-06-02', location: 'Location 1', organizer: admin)
event2 = Event.create(title: 'Event 2', description: 'sol fest concert', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Location 2', organizer: admin)
event3 = Event.create(title: 'Event 3', description: 'blankets and wines', start_date: '2023-06-05', end_date: '2023-06-06', location: 'Location 2', organizer: admin)


