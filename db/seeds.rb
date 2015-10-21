# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'demo', password_digest: BCrypt::Password.create('password'))
Genre.create(name: 'folk', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_370,w_370,x_53/v1445382726/genres/folk.jpg')
Genre.create(name: 'rap', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_383,w_383,x_80/v1445382734/genres/rap.jpg')
Genre.create(name: 'classical', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_1272,w_1272/v1445382736/genres/classical.jpg')
Genre.create(name: 'pop', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_536,w_536/v1445388511/genres/pop.jpg')
Genre.create(name: 'rock', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_324,w_324/v1445387073/genres/rock.jpg')
Genre.create(name: 'indie rock', image_url: 'http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_380,w_380/v1445385720/genres/indie_rock.jpg')

Project.create(title: 'raise funding for surprise', description: "can't say!", user_id: 1, genre_id: 1, deadline: Date.new(2015,4,21), artist_name: 'Beyonce', funding_goal: 200000.00)
