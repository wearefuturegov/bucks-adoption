module Fae
  module NavigationConcern
    extend ActiveSupport::Concern

    def structure
      [
        item('Pages', path: fae.pages_path, subitems: [
          item('Adoption Home', path: fae.edit_content_block_path('adoption_home')),
          item('Book Adoption Evening', path: fae.edit_content_block_path('book_adoption_eve')),
          item('Health - Top Section Content', path: fae.edit_content_block_path('lifestyle_content')),
          item('Time - Top Section Content', path: fae.edit_content_block_path('time_content')),
          item('Family - Top Section Content', path: fae.edit_content_block_path('family_content')),
          item('Skills - Top Section Content', path: fae.edit_content_block_path('skills_content')),
          item('Home Topic - Top Section Content', path: fae.edit_content_block_path('home_content'))
        ]),
        item('Adoption Tool content', subitems: [
          item('Health & Wellbeing', path: admin_health_topic_questions_path)
        ])
      ]
    end

  end
end
