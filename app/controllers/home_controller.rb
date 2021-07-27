class HomeController < ApplicationController
  def index
    @homeTopicContent = HomeTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
  end
end
