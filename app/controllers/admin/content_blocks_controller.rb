module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [AdoptionHomePage, BookAdoptionEvePage, LifestyleContentPage, TimeContentPage, FamilyContentPage, SkillsContentPage, ChildrenContentPage,HomeContentPage, ResultContentPage]
    end
  end
end
