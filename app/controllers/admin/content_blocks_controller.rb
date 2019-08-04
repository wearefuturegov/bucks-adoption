module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [AdoptionHomePage]
    end
  end
end
