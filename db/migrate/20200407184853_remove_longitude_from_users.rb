class RemoveLongitudeFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :longitude, :decimal
  end
end
