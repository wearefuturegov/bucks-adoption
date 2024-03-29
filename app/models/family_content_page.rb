class FamilyContentPage < Fae::StaticPage

  @slug = 'family_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      introduction: { type: Fae::TextArea },
      kicker: {type: Fae::TextArea},
      body: { type: Fae::TextArea },
      final_result_title: {type: Fae::TextField},
    }
  end

end
