class TimeController < ApplicationController
  def index
    @timeTopicContent = TimeTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
    @timeContent = TimeContentPage.instance
    @familyContent = FamilyContentPage.instance
    @childrenContent = ChildrenContentPage.instance
    @skillsContent = SkillsContentPage.instance
    @homeContent = HomeContentPage.instance
    @rootSettings = RootSettingsPage.instance
  end
end
