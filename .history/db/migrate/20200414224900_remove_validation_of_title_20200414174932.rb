class RemoveValidationOfTitle < ActiveRecord::Migration[5.2]

  def change
    remove_index :walks, :title
  end

end
