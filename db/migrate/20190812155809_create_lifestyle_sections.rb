class CreateLifestyleSections < ActiveRecord::Migration[5.2]
  def change
    create_table :lifestyle_sections do |t|
      t.string :title
      t.text :body
      t.string :action
      t.integer :position

      t.timestamps
    end
  end
end
