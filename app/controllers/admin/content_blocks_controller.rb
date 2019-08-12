module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [AdoptionHomePage, BookAdoptionEvePage, LifestyleContentPage]
    end
  end
end
