module Fae
  module NavigationConcern
    extend ActiveSupport::Concern

    def structure
      [
        item('Pages', path: fae.pages_path, subitems: [
          item('Adoption Home', path: fae.edit_content_block_path('adoption_home')),
          item('Book Adoption Evening', path: fae.edit_content_block_path('book_adoption_eve')),
          item('Results page', path: fae.edit_content_block_path('result_content')),

          item('Home Topic - Top section content', path: fae.edit_content_block_path('home_content')),
          item('Family - Top section content', path: fae.edit_content_block_path('family_content')),
          item('Skills - Top section content', path: fae.edit_content_block_path('skills_content')),
          item('Health - Top section content', path: fae.edit_content_block_path('lifestyle_content')),
          item('Children - Top section content', path: fae.edit_content_block_path('children_content')),
          item('Time - Top section content', path: fae.edit_content_block_path('time_content'))
          
        ]),
        item('Tool questions', subitems: [
          item('Home questions', path: admin_home_topic_questions_path),
          item('Family questions', path: admin_family_topic_questions_path),
          item('Skills questions', path: admin_skills_topic_questions_path),
          item('Health questions', path: admin_health_topic_questions_path),
          item('Children questions', path: admin_children_topic_questions_path),
          item('Time questions', path: admin_time_topic_questions_path)
        ])
      ]
    end

  end
end