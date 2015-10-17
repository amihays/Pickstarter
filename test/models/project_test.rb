# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text             not null
#  user_id      :integer          not null
#  genre_id     :integer          not null
#  deadline     :date             not null
#  artist_name  :string           not null
#  funding_goal :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  image_url    :string
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
