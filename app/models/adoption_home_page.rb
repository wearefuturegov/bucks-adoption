class AdoptionHomePage < Fae::StaticPage

  @slug = 'adoption_home'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      headline: { type: Fae::TextArea },
      strapline: { type: Fae::TextArea },
      hero_image: { type: Fae::Image },
      banner: { type: Fae::TextField },
      body: { type: Fae::TextArea },
      cta_title: { type: Fae::TextField },
      cta_text: { type: Fae::TextField },
      cta_button: { type: Fae::TextField },
      about: { type: Fae::TextArea },
      cookies: { type: Fae::TextArea },
      accessibility: { type: Fae::TextArea }
    }
  end

end
