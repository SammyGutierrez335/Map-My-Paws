class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :waypoints, :route_id, :walk_id
  end
end
