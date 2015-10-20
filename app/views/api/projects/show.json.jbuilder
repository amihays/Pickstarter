json.partial! "project", project: @project

json.contributors do
  json.array! @project.contributors do |contributor|
    json.partial! "api/contributors/contributor", contributor: contributor
  end
end

json.contributions do
  json.array! @project.contributions do |contribution|
    json.partial! "api/contributions/contribution", contribution: contribution
  end
end

json.genre do
  json.partial! "api/genres/genre", genre: @project.genre
end

json.user do
  json.id @project.user.id
  json.username @project.user.username
end
