class ResultContentPage < Fae::StaticPage

  @slug = 'result_content'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      strapline: { type: Fae::TextArea },
      hero_image: { type: Fae::Image },
    }
  end

end
