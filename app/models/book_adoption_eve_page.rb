class BookAdoptionEvePage < Fae::StaticPage

  @slug = 'book_adoption_eve'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      hero_image: { type: Fae::Image },
      headline: { type: Fae::TextField },
      body: { type: Fae::TextArea },
      pre_text: { type: Fae::TextArea }
    }
  end

end
