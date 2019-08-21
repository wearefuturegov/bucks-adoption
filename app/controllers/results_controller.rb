class ResultsController < ApplicationController
  def index
    @homeTopicContent = HomeTopicQuestion.all
    @homeContent = HomeContentPage.instance

    @skillsTopicContent = SkillsTopicQuestion.all
    @skillsContent = SkillsContentPage.instance

    @healthTopicContent = HealthTopicQuestion.all
    @healthContent = LifestyleContentPage.instance

    @timeTopicContent = TimeTopicQuestion.all
    @timeContent = TimeContentPage.instance

    @familyTopicContent = FamilyTopicQuestion.all
    @familyContent = FamilyContentPage.instance
  end
end
