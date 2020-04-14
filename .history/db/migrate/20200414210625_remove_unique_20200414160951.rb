class RemoveUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index "index_waypoints_on_walk_id", ["walk_id"], name => "index_completions_on_survey_id_and_user_id"
  end
end
