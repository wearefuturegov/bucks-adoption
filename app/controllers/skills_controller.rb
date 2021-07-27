class SkillsController < ApplicationController
  def index
    @skillsTopicContent = SkillsTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
  end
end
