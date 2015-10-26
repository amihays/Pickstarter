class Comment < ActiveRecord::Base
  validates :user_id, :project_id, :body, presence: true

  belongs_to :user
  belongs_to :project
end
