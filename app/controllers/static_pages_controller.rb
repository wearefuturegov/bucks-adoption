class StaticPagesController < ApplicationController
  def show
    page_name = (params[:page] + "_page").classify

    @item = page_name.constantize.instance rescue nil
    # static pages
    @sitehome = AdoptionHomePage.instance
    @adopteve = BookAdoptionEvePage.instance

    # tool content sections
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance

    render "static_pages/#{params[:page]}"
  end
end
