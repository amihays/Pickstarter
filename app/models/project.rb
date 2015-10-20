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

  def self.unfinished_projects_by(order)
    case order
    when 'alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).
                     where('deadline > ?', Date.today).
                     order(:title) # ordering by ord instead of char?!
    when 'reverse_alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).
                     where('deadline > ?', Date.today).
                     order(title: :desc) # ordering by ord instead of char?!
    when 'popularity'
      Project.includes(:contributors, :contributions, :genre, :user).
              joins('LEFT OUTER JOIN contributions ON contributions.project_id = projects.id').
              where('projects.deadline > ?', Date.today).
              group('projects.id').
              order('COUNT(DISTINCT contributions.user_id) DESC')
    when 'end_date'
      Project.includes(:contributors, :contributions, :genre, :user).
              where('deadline > ?', Date.today).
              order(:deadline)
    when 'newest'
      Project.includes(:contributors, :contributions, :genre, :user).
              where('deadline > ?', Date.today).
              order(:created_at)
    end
  end

  def self.projects_by(order)
    case order
    when 'alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).
                     order(:title) # ordering by ord instead of char?!
    when 'reverse_alpha'
      return Project.includes(:contributors, :contributions, :genre, :user).
                     order(title: :desc) # ordering by ord instead of char?!
    when 'popularity'
      Project.includes(:contributors, :contributions, :genre, :user).
              joins('LEFT OUTER JOIN contributions ON contributions.project_id = projects.id').
              group('projects.id').
              order('COUNT(DISTINCT contributions.user_id) DESC')
    when 'end_date'
      Project.includes(:contributors, :contributions, :genre, :user).
              order(:deadline)
    when 'newest'
      Project.includes(:contributors, :contributions, :genre, :user).
              order(:created_at)
    end
  end

end
