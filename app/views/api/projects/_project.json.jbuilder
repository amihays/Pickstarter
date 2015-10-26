json.extract! project, :id, :title, :description, :user_id, :genre_id, :deadline, :artist_name,
  :funding_goal, :image_url, :sound_clip_url


json.contributions do
  json.array! project.contributions do |contribution|
    json.partial! "api/contributions/contribution", contribution: contribution
  end
end

json.comments do
  json.array! project.comments do |comment|
    json.partial! "api/comments/comment", comment: comment
  end
end
