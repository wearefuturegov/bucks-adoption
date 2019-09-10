class LifestyleContentPage < Fae::StaticPage

  @slug = 'lifestyle_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      headline: { type: Fae::TextField },
      introduction: { type: Fae::TextArea },
      kicker: {type: Fae::TextArea},
      body: { type: Fae::TextArea }
    }
  end

end
