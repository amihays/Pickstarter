# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class Genre < ActiveRecord::Base
  validates :name, presence: true

  has_many :projects
end
