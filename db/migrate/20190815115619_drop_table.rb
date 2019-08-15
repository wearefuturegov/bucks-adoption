class DropTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :lifestyle_topic_questions
  end
end
