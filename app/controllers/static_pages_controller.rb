class StaticPagesController < ApplicationController

  def show
    page_name = (params[:page] + "_page").classify

    @item = page_name.constantize.instance rescue nil
    # static pages
    @sitehome = AdoptionHomePage.instance
    @adopteve = BookAdoptionEvePage.instance
    @rootSettings = RootSettingsPage.instance

    # tool content sections
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @homeContent = HomeContentPage.instance

    render "static_pages/#{params[:page]}"
  end

  def informationevent
    @sitehome = AdoptionHomePage.instance
    @adopteve = BookAdoptionEvePage.instance
    @rootSettings = RootSettingsPage.instance

    response = HTTParty.get("https://www.eventbriteapi.com/v3/organizations/" + ENV['EVENTBRITE_ORGANIZATION_ID'] + "/events/?status=live&expand=venue&token=" + ENV['EVENTBRITE_SECRET'])
    @events = JSON.parse response.body
  end

end
