json.extract! @user, :id, :username

json.projects do
  json.array! @user.projects do |project|
    json.partial! "api/projects/project", project: project
  end
end
