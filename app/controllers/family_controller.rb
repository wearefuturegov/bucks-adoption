class FamilyController < ApplicationController
  def index
    @familyTopicContent = FamilyTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
    @rootSettings = RootSettingsPage.instance
    @sitehome = AdoptionHomePage.instance
  end
end
