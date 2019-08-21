class SkillsController < ApplicationController
  def index
    @skillsTopicContent = SkillsTopicQuestion.all
    @skillsContent = SkillsContentPage.instance
  end
end
