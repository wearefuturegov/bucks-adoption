class AdoptionHomePage < Fae::StaticPage

  @slug = 'adoption_home'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      headline: { type: Fae::TextArea },
      strapline: { type: Fae::TextArea },
      hero_image: { type: Fae::Image },
      body: { type: Fae::TextArea },
      profile_link: { type: Fae::TextField },
      profile_image: { type: Fae::Image }
    }
  end

end
