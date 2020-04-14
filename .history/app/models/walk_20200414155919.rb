class Walk < ApplicationRecord
    has_many :waypoints, dependent: :destroy

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
end
