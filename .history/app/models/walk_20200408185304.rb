class Walk < ApplicationRecord
    has_many :waypoints, dependent: :destroy

    belongs_to :user
end
