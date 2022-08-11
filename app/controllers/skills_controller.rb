class SkillsController < ApplicationController
  def index
    @skillsTopicContent = SkillsTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
    @rootSettings = RootSettingsPage.instance
  end
end
