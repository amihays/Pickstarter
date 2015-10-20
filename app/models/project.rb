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

class Project < ActiveRecord::Base
  validates :title, :description, :user_id, :genre_id, :deadline, :artist_name,
    :funding_goal, presence: true

  belongs_to :genre
  belongs_to :user

  has_many :contributions
  has_many :contributors,
    through: :contributions,
    source: :user

  def self.projects_by(order)
    # Project.all
    case order
    when 'alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).order(:title) # ordering by ord instead of char?!
    when 'reverse_alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).order(title: :desc) # ordering by ord instead of char?!
    when 'popularity'
      return Project.includes(:contributors, :contributions, :genre, :user).order(:funding_goal)
    #   Project.joins('LEFT OUTER JOIN contributions ON contributions.project_id = projects.id').group('projects.id').reverse_order('COUNT(*)')
    # when 'end_date'
    #   "You gave me #{a} -- I have no idea what to do with that."
    # when 'newest'
    #
    else
      return Project.all
    end
  end
end
