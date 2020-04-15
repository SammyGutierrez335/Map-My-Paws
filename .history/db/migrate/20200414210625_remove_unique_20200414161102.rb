class RemoveUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :waypoints, :walk_id
  end
end
