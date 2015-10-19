json.extract! @user, :id, :username

json.projects do
  json.array! @user.projects do |project|
    json.partial! "api/projects/project", project: project
  end
end

json.backed_projects do
  json.array! @user.backed_projects do |project|
    json.partial! "api/projects/project", project: project
  end
end

json.contributions do
  json.array! @user.contributions do |contribution|
    json.partial! "api/contributions/contribution", contribution: contribution
  end
end
