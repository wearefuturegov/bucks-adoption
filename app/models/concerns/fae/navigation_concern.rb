module Fae
  module NavigationConcern
    extend ActiveSupport::Concern

    def structure
      [
        item('Pages', path: fae.pages_path, subitems: [
          item('Adoption Home', path: fae.edit_content_block_path('adoption_home')),
          item('Book Adoption Evening', path: fae.edit_content_block_path('book_adoption_eve')),
          item('Results page', path: fae.edit_content_block_path('result_content')),

          item('Health - Top topic content', path: fae.edit_content_block_path('lifestyle_content')),
          item('Time - Top topic content', path: fae.edit_content_block_path('time_content')),
          item('Family - Top topic content', path: fae.edit_content_block_path('family_content')),
          item('Skills - Top topic content', path: fae.edit_content_block_path('skills_content')),
          item('Children - Top topic content', path: fae.edit_content_block_path('children_content')),
          item('Home Topic - Top topic content', path: fae.edit_content_block_path('home_content'))
        ]),
        item('Tool topic questions', subitems: [
          item('Health & Wellbeing', path: admin_health_topic_questions_path),
          item('Time & Money', path: admin_time_topic_questions_path),
          item('Family & Background', path: admin_family_topic_questions_path),
          item('Skills & Support', path: admin_skills_topic_questions_path),
          item('Children & Care', path: admin_children_topic_questions_path),
          item('Home & Location', path: admin_home_topic_questions_path)
        ])
      ]
    end

  end
end
