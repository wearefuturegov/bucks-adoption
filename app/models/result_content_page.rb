class ResultContentPage < Fae::StaticPage

  @slug = 'result_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      headline: { type: Fae::TextField }
    }
  end

end
