class AddIndextoWaypoints < ActiveRecord::Migration[5.2]
  def change
    add_index :waypoints, :walk_id
  end
end
