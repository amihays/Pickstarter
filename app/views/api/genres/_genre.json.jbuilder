json.extract! genre, :id, :name

json.projects do
  json.array! genre.projects do |project|
    json.partial! "projects/project", project: project
  end
end
