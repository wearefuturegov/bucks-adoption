class FamilyController < ApplicationController
  def index
    @familyTopicContent = FamilyTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
  end
end
