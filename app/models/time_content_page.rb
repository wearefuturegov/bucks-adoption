class TimeContentPage < Fae::StaticPage

  @slug = 'time_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      introduction: { type: Fae::TextArea },
      body: { type: Fae::TextArea }
    }
  end

end
