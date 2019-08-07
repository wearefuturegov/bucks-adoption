module Fae
  module NavigationConcern
    extend ActiveSupport::Concern

    def structure
      [
        item('Pages', subitems: [
          item('Adoption Home', path: fae.edit_content_block_path('adoption_home')),
          item('Book Adoption Evening', path: fae.edit_content_block_path('book_adoption_eve'))
        ])
      ]
    end

  end
end
