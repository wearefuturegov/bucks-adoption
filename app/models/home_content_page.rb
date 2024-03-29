class HomeContentPage < Fae::StaticPage

  @slug = 'home_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      introduction: { type: Fae::TextArea },
      kicker: {type: Fae::TextArea},
      body: { type: Fae::TextArea },
      start_topic_link_text: {type: Fae::TextField},
      completed_topic_link_text: {type: Fae::TextField},
      success_text: {type: Fae::TextField},
      save_button: {type: Fae::TextField},
      final_result_title: {type: Fae::TextField},
      results: {type: Fae::TextField},
      results_link_text: {type: Fae::TextField}
    }
  end

end
