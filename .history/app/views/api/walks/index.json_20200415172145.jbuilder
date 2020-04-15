json.array @walks do |walk|
    json.extract! walk, :title, :author_id 
end