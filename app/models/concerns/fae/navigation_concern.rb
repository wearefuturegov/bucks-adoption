module Fae
  module NavigationConcern
    extend ActiveSupport::Concern

    def structure
      [
        item('Pages', path: fae.pages_path, subitems: [
          item('Adoption Home', path: fae.edit_content_block_path('adoption_home')),
          item('Book Adoption Evening', path: fae.edit_content_block_path('book_adoption_eve')),
          item('Health Page Content', path: fae.edit_content_block_path('lifestyle_content'))
        ]),
        item('Adoption Tool content', subitems: [
          item('Health & Wellbeing', path: admin_health_topic_questions_path)
        ])
      ]
    end

  end
end
