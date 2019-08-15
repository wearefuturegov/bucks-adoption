class CreateLifestyleTopicQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :lifestyle_topic_questions do |t|
      t.string :title
      t.string :answer_1
      t.text :answer_1_explanation
      t.string :answer_2
      t.text :answer_2_explanation
      t.string :answer_3
      t.text :answer_3_explanation
      t.string :action_title
      t.text :action_text
      t.integer :action_number
      t.integer :position

      t.timestamps
    end
  end
end
