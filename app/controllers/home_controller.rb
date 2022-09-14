class HomeController < ApplicationController
  def index
    @homeTopicContent = HomeTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
    @rootSettings = RootSettingsPage.instance
  end
end
