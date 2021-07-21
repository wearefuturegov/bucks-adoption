module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [AdoptionHomePage, BookAdoptionEvePage, LifestyleContentPage, TimeContentPage, FamilyContentPage, ChildrenContentPage, SkillsContentPage, HomeContentPage, ResultContentPage]
    end
  end
end
