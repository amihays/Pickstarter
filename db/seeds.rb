# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'demo', password_digest: BCrypt::Password.create('password'))
Genre.create(name: 'folk')
Genre.create(name: 'rap')
Genre.create(name: 'classical', image_url: 'assets/classical.jpg')
Genre.create(name: 'pop', image_url: 'assets/pop.jpg')
