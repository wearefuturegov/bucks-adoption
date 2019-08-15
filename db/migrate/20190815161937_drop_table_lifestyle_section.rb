class DropTableLifestyleSection < ActiveRecord::Migration[5.2]
  def change
    drop_table :lifestyle_sections
  end
end
