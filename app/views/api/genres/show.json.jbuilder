json.partial! "genre", genre: @genre

json.projects do
  json.array! @genre.projects do |project|
    json.partial! "api/projects/project", project: project
  end
end
