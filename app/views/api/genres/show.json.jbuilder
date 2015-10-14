json.partial! "genres/genre", genre: genre

json.projects do
  json.array! genre.projects do |project|
    json.partial! "projects/project", project: project
  end
end
