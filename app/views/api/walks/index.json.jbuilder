json.array @walks do |walk|
    json.extract! walk, :id, :title, :author_id 
end