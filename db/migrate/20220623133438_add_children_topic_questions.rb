class AddChildrenTopicQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :children_topic_questions do |t|
      t.string :title
      t.string :answer_1
      t.text :answer_1_explanation
      t.string :action_1_title
      t.text :action_1_text
      t.string :answer_2
      t.text :answer_2_explanation
      t.string :action_2_title
      t.text :action_2_text
      t.string :answer_3
      t.text :answer_3_explanation
      t.string :action_3_title
      t.text :action_3_text
      t.integer :position

      t.timestamps
    end
  end
end
