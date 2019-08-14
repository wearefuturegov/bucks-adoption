class LifestyleSectionsController < ApplicationController
  def index
    @lifestylesectionscontent = LifestyleSection.all
    @lifestylecontent = LifestyleContentPage.instance
  end
end
