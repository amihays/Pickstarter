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

Project.create(title: 'New Secret Project', description: "Can’t say - it’s a secret! Coming in December, 2013!", user_id: 1, genre_id: 4, deadline: Date.new(2013,11,3), artist_name: 'Beyonce', funding_goal: 678000.00, image_url: "http://res.cloudinary.com/daqcetxc6/image/upload/v1445402103/genres/Project%20Images/Beyonc%C3%A9.jpg", sound_clip_url: "http://res.cloudinary.com/daqcetxc6/video/upload/v1445402213/Project%20Music%20Clips/03_Drunk_in_Love_feat._Jay_Z.mp3")
Project.create(title: 'Because the Internet Screenplay at Fox Theater', description: "'Critics love to throw around words like “original” and “innovative” all the time. In fact, I’ve heard movie reviewers use both of those words to describe Peter Jackson’s new Hobbit film, The Desolation of Smaug. The strange part is that the movie is actually based on a book, AND is the fifth film in a hugely successful movie franchise, so I don’t really see why “original” is the best word to describe the fantasy epic. We should leave those words to describe something that is truly something different, something unlike everything else out there. The reason I’m saying all this is to heighten the impact of the following statement: Childish Gambino’s Because The Internet is an original work unlike anything I’ve ever experienced.' - JASPER PIKE", user_id: 1, genre_id: 2, deadline: Date.new(2016,9,18), artist_name: 'Childish Gambino', funding_goal: 54036.00, image_url: "http://res.cloudinary.com/daqcetxc6/image/upload/v1445403341/childish_gambino_haj1wq.png", sound_clip_url: "http://res.cloudinary.com/daqcetxc6/video/upload/v1445403092/Project%20Music%20Clips/07_III._Telegraph_Ave.__Oakland__By_Lloyd.m4a")
