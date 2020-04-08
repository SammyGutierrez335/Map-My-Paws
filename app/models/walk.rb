class Walk < ApplicationRecord
    has_many :waypoints
    belongs_to :user

end
