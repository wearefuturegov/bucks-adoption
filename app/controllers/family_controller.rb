class FamilyController < ApplicationController
  def index
    @familyTopicContent = FamilyTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
    @rootSettings = RootSettingsPage.instance
  end
end
