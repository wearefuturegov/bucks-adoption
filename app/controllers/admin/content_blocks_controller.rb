module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [AdoptionHomePage, BookAdoptionEvePage, LifestyleContentPage, TimeContentPage, FamilyContentPage, SkillsContentPage, HomeContentPage]
    end
  end
end
