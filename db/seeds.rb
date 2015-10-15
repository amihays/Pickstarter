# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'demo', password_digest: BCrypt::Password.create('password'))
Genre.create(name: 'folk', image_url: 'assets/folk.jpg')
Genre.create(name: 'rap', image_url: 'assets/rap.jpg')
Genre.create(name: 'classical', image_url: 'assets/classical.jpg')
Genre.create(name: 'pop', image_url: 'assets/pop.jpg')

Project.create(title: 'raise funding for surprise', description: "can't say!", user_id: 1, genre_id: 1, deadline: DateTime.new(2015,4,21,4,5,6), artist_name: 'Beyonce', funding_goal: 200000.00)
